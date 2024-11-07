import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

async function verifyToken(token: string) {
  const secretKey = process.env.RECAPTCHA_SECRET_KEY;

  if (!secretKey) {
    console.error("RECAPTCHA_SECRET_KEY is not set in environment variables.");

    return { success: false, error: "Server configuration error" };
  }

  const formData = `secret=${secretKey}&response=${token}`;

  try {
    const r = await fetch(
      "https://www.google.com/recaptcha/api/siteverify",
      {
        method: "POST",
        headers: {
          "Content-Type": "application/x-www-form-urlencoded",
        },
        body: formData,
      }
    ) as any;

    const response = await r.json();

    if (!response.success) {
      return { success: false, error: "ReCaptcha verification failed" };
    }
    
    return {
      success: true,
      error: undefined,
    };
  } catch (error) {
    return { success: false, error: "Internal server error" };
  }
}


export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method !== 'POST') {
    return res.status(405).json({ message: 'Method Not Allowed' });
  }

  const { name, phone, email, message, token } = req.body;

  const recaptchaResponse = await verifyToken(token);

  if (!recaptchaResponse.success) {
    return res.status(500).json({ message: recaptchaResponse.error });
  }


  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ message: 'Niepoprawny adres email' });
  }

  const phoneRegex = /^[0-9]{9,15}$/;
  if (!phoneRegex.test(phone)) {
    return res.status(400).json({ message: 'Niepoprawny numer telefonu' });
  }

  const transporter = nodemailer.createTransport({
    service: 'gmail',
    auth: {
      user: process.env.GMAIL_USER,
      pass: process.env.GMAIL_PASSWORD,
    },
  });

  const mailOptions = {
    from: email,
    to: process.env.GMAIL_USER,
    subject: `Wiadomość od ${name}`,
    text: `Imie i naziwsko: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\nWiadomość:\n${message}`,
  };

  try {
    await transporter.sendMail(mailOptions);
    return res.status(200).json({ message: 'Wiadomość została wysłana' });
  } catch (error) {
    console.error('Error sending email:', error);
    return res.status(500).json({ message: 'Nie udało się wysłać wiadomości' });
  }
}