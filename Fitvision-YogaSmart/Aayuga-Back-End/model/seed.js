import mongoose from "mongoose";
import User from "./user.js"; // Update with the correct path to your User model

// Replace with your MongoDB URI
const MONGO_URI = 'mongodb://localhost:27017/fitvision'; 

const testUsers = [
  {
    username: 'testuser1',
    email: 'testuser1@example.com',
    password: 'password123',
    height: 170,
    weight: 65,
    bloodGroup: 'O+'
  },
  {
    username: 'testuser2',
    email: 'testuser2@example.com',
    password: 'password456',
    height: 160,
    weight: 55,
    bloodGroup: 'A-'
  }
  // Add more test users as needed
];

const insertTestUsers = async () => {
  try {
    await mongoose.connect(MONGO_URI, { useNewUrlParser: true, useUnifiedTopology: true });
    console.log('Connected to MongoDB');

    // Delete existing users
    await User.deleteMany({});

    // Insert test users
    const result = await User.insertMany(testUsers);
    console.log('Test users inserted:', result);

    // Close the connection
    await mongoose.connection.close();
    console.log('Connection closed');
  } catch (error) {
    console.error('Error inserting test users:', error);
  }
};

insertTestUsers();
