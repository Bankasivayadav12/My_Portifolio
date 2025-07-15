import nodemailer from "nodemailer";

export default async function handler(req, res) {
  if (req.method !== "POST") {
    return res.status(405).json({ message: "Method Not Allowed" });
  }

  const formData = req.body;

  // Configure email transporter
  const transporter = nodemailer.createTransport({
    service: "Gmail", // Or use another provider
    auth: {
      user: process.env.EMAIL_USER, // Your email
      pass: process.env.EMAIL_PASS, // Your app password or SMTP password
    },
  });

  // Format email content
  const emailBody = `
    <h2>New Employment Application</h2>
    <p><strong>Name:</strong> ${formData.name}</p>
    <p><strong>Email:</strong> ${formData.email}</p>
    <p><strong>Message:</strong> ${formData.jobPosition}</p>
    <h3>Additional Details</h3>
    <pre>${JSON.stringify(formData, null, 2)}</pre>
  `;

  try {
    await transporter.sendMail({
      from: process.env.EMAIL_USER,
      to: "bankasiva2000@gmail.com", // Replace with the recipient's email
      subject: "New Employment Application",
      html: emailBody,
    });

    return res.status(200).json({ message: "Email sent successfully!" });
  } catch (error) {
    console.error("Error sending email:", error);
    return res.status(500).json({ message: "Failed to send email" });
  }
}
