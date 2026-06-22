require('dotenv').config();

const connectDB = require('../config/db');
const { runWeeklyEmailJob } = require('../jobs/weekly-email.job');

async function main() {
  await connectDB();
  const result = await runWeeklyEmailJob();
  console.log('Result:', result);
  process.exit(result.failed > 0 ? 1 : 0);
}

main().catch((error) => {
  console.error('Weekly email script failed:', error.message);
  process.exit(1);
});
