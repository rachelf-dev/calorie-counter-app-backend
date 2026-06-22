const cron = require('node-cron');

const User = require('../models/User');
const DailyLog = require('../models/DailyLog');
const { sendWeeklyReport } = require('../services/email.service');

/** UTC date keys for the last 7 days (oldest → today). */
function getWeekDateRange() {
  const dates = [];

  for (let daysAgo = 6; daysAgo >= 0; daysAgo -= 1) {
    const day = new Date();
    day.setUTCDate(day.getUTCDate() - daysAgo);
    dates.push(day.toISOString().slice(0, 10));
  }

  return {
    startDate: dates[0],
    endDate: dates[dates.length - 1],
    dates,
  };
}

async function fetchWeekLogsForUser(userId) {
  const { startDate, endDate } = getWeekDateRange();

  const logs = await DailyLog.find({
    userId,
    date: { $gte: startDate, $lte: endDate },
  }).sort({ date: 1 });

  return logs.map((log) => ({
    date: log.date,
    totalCaloriesConsumed: log.totalCaloriesConsumed,
    targetCalories: log.targetCalories,
  }));
}

/**
 * Send weekly calorie reports to all registered users.
 * @returns {Promise<{ sent: number, failed: number, skipped: boolean }>}
 */
async function runWeeklyEmailJob() {
  console.log('[weekly-email] Starting weekly email job...');

  if (!process.env.EMAIL_USER?.trim() || !process.env.EMAIL_PASS?.trim()) {
    console.warn('[weekly-email] Skipped — EMAIL_USER / EMAIL_PASS not configured');
    return { sent: 0, failed: 0, skipped: true };
  }

  const users = await User.find({}).select('name email');
  let sent = 0;
  let failed = 0;

  for (const user of users) {
    try {
      const weekLogs = await fetchWeekLogsForUser(user._id);
      await sendWeeklyReport(
        { name: user.name, email: user.email },
        weekLogs
      );
      sent += 1;
      console.log(`[weekly-email] Sent to ${user.email}`);
    } catch (error) {
      failed += 1;
      console.error(`[weekly-email] Failed for ${user.email}:`, error.message);
    }
  }

  console.log(`[weekly-email] Done — sent: ${sent}, failed: ${failed}`);
  return { sent, failed, skipped: false };
}

/** Schedule job every Sunday at 08:00 (Israel time). */
function startWeeklyEmailJob() {
  cron.schedule(
    '0 8 * * 0',
    () => {
      runWeeklyEmailJob().catch((error) => {
        console.error('[weekly-email] Job error:', error.message);
      });
    },
    { timezone: 'Asia/Jerusalem' }
  );

  console.log('[weekly-email] Scheduled — every Sunday at 08:00 (Asia/Jerusalem)');
}

module.exports = {
  startWeeklyEmailJob,
  runWeeklyEmailJob,
  fetchWeekLogsForUser,
  getWeekDateRange,
};
