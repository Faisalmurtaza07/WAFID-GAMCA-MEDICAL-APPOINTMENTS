
const express = require('express');
const mongoose = require('mongoose');
const cors = require('cors');
const bodyParser = require('body-parser');
const nodemailer = require('nodemailer');
require('dotenv').config();

const app = express();
app.use(cors());
app.use(bodyParser.json());

mongoose.connect(process.env.MONGO_URI, {
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

const Appointment = mongoose.model('Appointment', new mongoose.Schema({
  country: String,
  city: String,
  fullName: String,
  passportNumber: String,
  issueDate: Date,
  expiryDate: Date,
  birthplace: String,
  issuePlace: String,
  testCity: String,
  destination: String,
  visaType: String,
  preferredDate: Date,
  mobile: String,
  email: String,
}));

app.post('/api/book', async (req, res) => {
  try {
    const data = req.body;
    const appointment = new Appointment(data);
    await appointment.save();

    const transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_PASS
      }
    });

    const mailOptions = {
      from: process.env.EMAIL_USER,
      to: data.email,
      subject: 'Wafid Medical Appointment Confirmation',
      text: `Dear ${data.fullName},\n\nYour appointment for ${data.destination} via ${data.testCity} has been successfully booked on ${data.preferredDate}.\n\nThank you!`
    };

    await transporter.sendMail(mailOptions);
    res.status(200).json({ message: 'Appointment booked and email sent.' });
  } catch (error) {
    res.status(500).json({ message: 'Error booking appointment', error });
  }
});

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
