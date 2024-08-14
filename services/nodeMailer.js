const nodemailer = require("nodemailer");

module.exports.OTPSend = async (email, otp) => {
  // Configure the SMTP transporter
  const transporter = nodemailer.createTransport({
    host: "smtp.gmail.com",
    port: 587,
    secure: false, // Use `true` for port 465, `false` for all other ports
    auth: {
      user: process.env.EMAIL, // Ethereal email user
      pass: process.env.PASS // Ethereal email password
    },
  });

  try {
    // Send mail with the defined transport object
    const info = await transporter.sendMail({
      from: process.env.EMAIL, // Sender address
      to: email, // Receiver's email address
      subject: "Your OTP Code", // Subject line
      text: `Your OTP code is ${otp}. It is valid for the next 10 minutes.`, // Plain text body
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: auto; padding: 20px; border: 1px solid #ddd; border-radius: 5px;">
          <h2 style="text-align: center; color: #333;">OTP Verification</h2>
          <p style="font-size: 16px; color: #555;">Hello,</p>
          <p style="font-size: 16px; color: #555;">You have requested to verify your identity. Please use the following One-Time Password (OTP) to proceed:</p>
          <div style="text-align: center; margin: 20px 0;">
            <span style="font-size: 24px; font-weight: bold; color: #007bff;">${otp}</span>
          </div>
          <p style="font-size: 16px; color: #555;">This OTP is valid for the next 10 minutes. Do not share this code with anyone.</p>
          <div style="text-align: center; margin-top: 30px;">
            <a href="#" style="display: inline-block; padding: 10px 20px; background-color: #007bff; color: #fff; text-decoration: none; border-radius: 5px;">Verify Now</a>
          </div>
          <p style="font-size: 14px; color: #aaa; text-align: center; margin-top: 40px;">If you did not request this OTP, please ignore this email.</p>
        </div>
      `,
    });

    console.log("Message sent: %s", info.messageId);
  } catch (error) {
    console.error("Error sending OTP email:", error);
    throw error;
  }
};