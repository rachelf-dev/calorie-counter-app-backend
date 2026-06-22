const nodemailer = require('nodemailer');

const { generateWeeklyChart } = require('./chart.service');

/** Same UTC date key format as chart.service and log.controller. */
function getUtcDateKey(daysAgo) {
  const day = new Date();
  day.setUTCDate(day.getUTCDate() - daysAgo);
  return day.toISOString().slice(0, 10);
}

function formatDateHe(dateKey) {
  const day = new Date(`${dateKey}T12:00:00.000Z`);
  return day.toLocaleDateString('he-IL', {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    timeZone: 'UTC',
  });
}

function formatCalories(value) {
  return `${Math.round(value).toLocaleString('he-IL')} קק״ל`;
}

/**
 * @param {Array<{ date: string, totalCaloriesConsumed: number, targetCalories: number, goalMet?: boolean }>} weekLogs
 */
function computeWeekStats(weekLogs) {
  const logByDate = new Map((weekLogs ?? []).map((log) => [log.date, log]));
  const defaultTarget = weekLogs?.[0]?.targetCalories ?? 2000;
  const days = [];

  for (let daysAgo = 6; daysAgo >= 0; daysAgo -= 1) {
    const dateKey = getUtcDateKey(daysAgo);
    const log = logByDate.get(dateKey);
    const consumed = log?.totalCaloriesConsumed ?? 0;
    const target = log?.targetCalories ?? defaultTarget;

    days.push({
      date: dateKey,
      consumed,
      target,
      goalMet: consumed <= target,
    });
  }

  const totalCalories = days.reduce((sum, day) => sum + day.consumed, 0);
  const goalMetDays = days.filter((day) => day.goalMet).length;

  const bestDay = days.reduce((best, day) =>
    day.consumed < best.consumed ? day : best
  );
  const worstDay = days.reduce((worst, day) =>
    day.consumed > worst.consumed ? day : worst
  );

  return { totalCalories, goalMetDays, bestDay, worstDay, days };
}

function createTransporter() {
  const user = process.env.EMAIL_USER?.trim();
  const pass = process.env.EMAIL_PASS?.trim();

  if (!user || !pass) {
    throw new Error('EMAIL_USER and EMAIL_PASS must be set in .env');
  }

  return nodemailer.createTransport({
    service: 'gmail',
    auth: { user, pass },
  });
}

/**
 * @param {{ name: string, email: string }} user
 * @param {{ totalCalories: number, goalMetDays: number, bestDay: object, worstDay: object }} stats
 */
function buildWeeklyReportHtml(user, stats) {
  const { totalCalories, goalMetDays, bestDay, worstDay } = stats;

  return `<!DOCTYPE html>
<html lang="he" dir="rtl">
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>דוח קלוריות שבועי</title>
</head>
<body style="margin:0;padding:0;background:#f5f5f5;font-family:Arial,Helvetica,sans-serif;direction:rtl;">
  <table role="presentation" width="100%" cellspacing="0" cellpadding="0" style="background:#f5f5f5;padding:24px 0;">
    <tr>
      <td align="center">
        <table role="presentation" width="600" cellspacing="0" cellpadding="0" style="max-width:600px;background:#ffffff;border-radius:12px;overflow:hidden;box-shadow:0 2px 8px rgba(0,0,0,0.08);">
          <tr>
            <td style="background:#3f51b5;color:#ffffff;padding:24px 28px;">
              <h1 style="margin:0;font-size:22px;font-weight:600;">דוח קלוריות שבועי</h1>
              <p style="margin:8px 0 0;font-size:15px;opacity:0.95;">שלום ${user.name}, הנה הסיכום שלך ל-7 הימים האחרונים</p>
            </td>
          </tr>
          <tr>
            <td style="padding:24px 28px;">
              <table role="presentation" width="100%" cellspacing="0" cellpadding="0">
                <tr>
                  <td width="33%" style="padding:12px;background:#e8f5e9;border-radius:8px;text-align:center;">
                    <div style="font-size:13px;color:#555;">סה״כ קלוריות</div>
                    <div style="font-size:20px;font-weight:bold;color:#2e7d32;margin-top:4px;">${formatCalories(totalCalories)}</div>
                  </td>
                  <td width="4%"></td>
                  <td width="33%" style="padding:12px;background:#e3f2fd;border-radius:8px;text-align:center;">
                    <div style="font-size:13px;color:#555;">ימים ביעד</div>
                    <div style="font-size:20px;font-weight:bold;color:#1565c0;margin-top:4px;">${goalMetDays} / 7</div>
                  </td>
                  <td width="4%"></td>
                  <td width="33%" style="padding:12px;background:#fff3e0;border-radius:8px;text-align:center;">
                    <div style="font-size:13px;color:#555;">ממוצע יומי</div>
                    <div style="font-size:20px;font-weight:bold;color:#ef6c00;margin-top:4px;">${formatCalories(Math.round(totalCalories / 7))}</div>
                  </td>
                </tr>
              </table>

              <p style="margin:24px 0 8px;font-size:15px;color:#333;">
                <strong>יום הטוב:</strong> ${formatDateHe(bestDay.date)} — ${formatCalories(bestDay.consumed)}
              </p>
              <p style="margin:0 0 24px;font-size:15px;color:#333;">
                <strong>יום הגרוע:</strong> ${formatDateHe(worstDay.date)} — ${formatCalories(worstDay.consumed)}
              </p>

              <div style="text-align:center;margin:16px 0;">
                <img src="cid:weekly-chart" alt="גרף קלוריות שבועי" style="max-width:100%;height:auto;border-radius:8px;" />
              </div>

              <p style="margin:24px 0 0;font-size:13px;color:#777;text-align:center;">
                המשיכי לעקוב אחרי היעדים שלך באפליקציית ספירת הקלוריות 💪
              </p>
            </td>
          </tr>
        </table>
      </td>
    </tr>
  </table>
</body>
</html>`;
}

/**
 * Send a weekly calorie report email with an embedded PNG chart.
 * @param {{ name: string, email: string }} user
 * @param {Array<{ date: string, totalCaloriesConsumed: number, targetCalories: number }>} weekLogs
 */
async function sendWeeklyReport(user, weekLogs) {
  if (!user?.email) {
    throw new Error('User email is required to send weekly report');
  }

  const stats = computeWeekStats(weekLogs);
  const chartBuffer = await generateWeeklyChart(weekLogs);
  const transporter = createTransporter();
  const from = process.env.EMAIL_USER?.trim();

  const mailOptions = {
    from: `"ספירת קלוריות" <${from}>`,
    to: user.email,
    subject: 'דוח קלוריות שבועי — סיכום 7 הימים האחרונים',
    html: buildWeeklyReportHtml(user, stats),
    attachments: [
      {
        filename: 'weekly-calories.png',
        content: chartBuffer,
        contentType: 'image/png',
        cid: 'weekly-chart',
      },
    ],
  };

  return transporter.sendMail(mailOptions);
}

module.exports = {
  sendWeeklyReport,
  computeWeekStats,
  buildWeeklyReportHtml,
  createTransporter,
};
