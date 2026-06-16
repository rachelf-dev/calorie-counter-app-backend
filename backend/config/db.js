const mongoose = require('mongoose');

const connectDB = async () => {
    try {
        // התחברות למונגו באמצעות הכתובת מקובץ ה-env
        const conn = await mongoose.connect(process.env.MONGO_URI);
        
        console.log(`🚀 MongoDB Connected Successfully: ${conn.connection.host}`);
    } catch (error) {
        console.error(`❌ Error connecting to MongoDB: ${error.message}`);
        process.exit(1); // סגירת האפליקציה במקרה של כישלון
    }
};

module.exports = connectDB;