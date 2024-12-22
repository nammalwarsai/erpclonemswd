const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const dotenv = require('dotenv');

// Load environment variables from .env file
dotenv.config();

// Initialize the express app
const app = express();

// Middleware
app.use(cors());  // Enable Cross-Origin Resource Sharing
app.use(bodyParser.json());  // Parse incoming JSON data

// MongoDB Connection
mongoose.connect(process.env.MONGO_URI, {
    useNewUrlParser: true,
    useUnifiedTopology: true,
})
.then(() => console.log('MongoDB connected successfully'))
.catch((err) => console.error('MongoDB connection error:', err));

// Define a simple schema and model for your data
const attendanceSchema = new mongoose.Schema({
  subject: String,
  attendance: Number,
});

const Attendance = mongoose.model('Attendance', attendanceSchema);

// Sample Data to Insert
const sampleAttendanceData = [
  { subject: 'Physics', attendance: 92 },
  { subject: 'Maths', attendance: 85 },
  { subject: 'Chemistry', attendance: 88 },
  { subject: 'Computer Science', attendance: 94 },
  { subject: 'Chess', attendance: 79 },
];

// Insert sample data into MongoDB
const insertData = async () => {
  try {
    await Attendance.insertMany(sampleAttendanceData);
    console.log('Sample attendance data inserted');
  } catch (err) {
    console.error('Error inserting data:', err);
  }
};

// Call insertData on server start
insertData();

// Define a route for the root URL
app.get('/', (req, res) => {
  res.send('Welcome to the Attendance API!');
});

// Start the server
const PORT = process.env.PORT || 5000;
app.listen(PORT, () => {
  console.log(`Server is running on http://localhost:${PORT}`);
});
