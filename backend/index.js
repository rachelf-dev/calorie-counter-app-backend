const path = require('path');
const express = require('express');
const cors = require('cors');
const dotenv = require('dotenv');

const connectDB = require('./config/db');
const createLogger = require('./middleware/logger.middleware');
const { startWeeklyEmailJob } = require('./jobs/weekly-email.job');
const authRoutes = require('./routes/auth.routes');

dotenv.config();

const app = express();
const PORT = process.env.PORT || 3000;

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));
app.use('/uploads', express.static(path.join(__dirname, 'uploads')));
app.use(createLogger({ env: process.env.NODE_ENV || 'development' }));

app.get('/api/health', (req, res) => {
  res.json({
    status: 'ok',
    service: 'calorie-counter-backend',
  });
});

app.use('/api/auth', authRoutes);
app.use('/api/products', require('./routes/product.routes'));
app.use('/api/logs', require('./routes/log.routes'));
app.use('/api/users', require('./routes/user.routes'));

app.use((req, res) => {
  res.status(404).json({ message: 'Route not found' });
});

app.use((err, req, res, next) => {
  if (err.name === 'MulterError') {
    const message =
      err.code === 'LIMIT_FILE_SIZE'
        ? 'Image must be 2MB or smaller'
        : err.message;

    return res.status(400).json({ message });
  }

  const statusCode = err.statusCode || 500;

  res.status(statusCode).json({
    message: err.message || 'Server error',
  });
});

async function startServer() {
  await connectDB();
  startWeeklyEmailJob();

  app.listen(PORT, () => {
    console.log(`Server is running on port ${PORT}`);
  });
}

if (require.main === module) {
  startServer().catch((error) => {
    console.error('Failed to start server:', error.message);
    process.exit(1);
  });
}

module.exports = app;
