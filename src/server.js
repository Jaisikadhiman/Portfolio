require("dotenv").config();
const express = require("express");
const nodemailer = require("nodemailer");
const cors = require("cors");

const app = express();
app.use(express.json());
app.use(cors()); // Enable CORS

// Load environment variables
const SMTP_USER = process.env.SMTP_USER;
const SMTP_PASS = process.env.SMTP_PASS;

if (!SMTP_USER || !SMTP_PASS) {
  console.error("❌ Missing SMTP credentials. Check your .env file.");
  process.exit(1);
}

async function sendMail(formData) {
  try {
    // Configure the mail transporter
    const transport = nodemailer.createTransport({
      service: "gmail",
      auth: {
        user: SMTP_USER,
        pass: SMTP_PASS,
      },
    });

    // Email details
    const mailOptions = {
      from: `"${formData.name}" <${formData.email}>`,
      to: "jaisikadhiman446@gmail.com",
      subject: "Contact Form Submission",
      text: `Name: ${formData.name}\nEmail: ${formData.email}\nMessage: ${formData.message}`,
    };

    // Send email
    const result = await transport.sendMail(mailOptions);
    console.log("✅ Email sent successfully:", result);
    return result;
  } catch (error) {
    console.error("❌ Error sending email:", error.message);
    throw new Error(error.message);
  }
}

// API Route
app.post("/api/send", async (req, res) => {
  try {
    if (!req.body.name || !req.body.email || !req.body.message) {
      return res.status(400).json({ error: "All fields are required." });
    }

    await sendMail(req.body);
    res.status(200).json({ message: "Email sent successfully." });
  } catch (error) {
    res.status(500).json({ error: "Failed to send email." });
  }
});

// Start the server
const PORT = process.env.PORT || 3033;
app.listen(PORT, () => {
  console.log(` Server running at http://localhost:${PORT}`);
});
