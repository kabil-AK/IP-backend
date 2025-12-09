const mongoose = require('mongoose');

const connectDB = async () => {
  try {
    const uri = process.env.MONGO_URL || 'mongodb+srv://kabilan:P6QM9Q92B1P8C4IG@cluster0.jkzudct.mongodb.net/?appName=Cluster0';
    await mongoose.connect(uri);
    console.log('MongoDB connected');
  } catch (err) {
    console.error('MongoDB connection error:', err.message);

    
    setTimeout(connectDB, 5000);
  }
};

module.exports = connectDB;
