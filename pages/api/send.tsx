import type { NextApiRequest, NextApiResponse } from 'next';
import nodemailer from 'nodemailer';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
  if (req.method === 'POST') {
    const { name, phone, email, message } = req.body;

    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      res.status(400).json({ message: 'Podałeś nieprawidłowy email' });
      return;
    }

    const phoneRegex = /^[0-9]{9,15}$/;
    if (!phoneRegex.test(phone)) {
      res.status(400).json({ message: 'Podałeś nieprawidłowy telefon' });
      return;
    }

    let transporter = nodemailer.createTransport({
      service: 'gmail',
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_PASSWORD,
      },
    });

    let mailOptions = {
      from: email,
      to: 'adamaszek404@gmail.com',
      subject: `Wiadomość od ${name}`,
      text: `Imię i nazwisko: ${name}\nTelefon: ${phone}\nEmail: ${email}\n\nWiadomość:\n${message}`,
    };

    try {
      await transporter.sendMail(mailOptions);
      res.status(200).json({ message: 'wysłano' });
    } catch (error) {
      res.status(500).json({ message: 'nie wysłano' });
    }
  } else {
    res.status(405).json({ message: 'Nie nie' });
  }
}