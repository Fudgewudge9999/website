import { NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

export { POST };

async function POST(request: Request) {
  try {
    const body = await request.json();
    const { name, email, phone, message, subject, preferredDate, preferredTime } = body;

    const transporter = nodemailer.createTransport({
      host: 'smtp.gmail.com',
      port: 587,
      secure: false,
      auth: {
        user: process.env.GMAIL_USER,
        pass: process.env.GMAIL_APP_PASSWORD,
      },
    });

    await transporter.sendMail({
      from: process.env.GMAIL_USER,
      to: process.env.GMAIL_USER,
      subject: `New Contact Form Message from ${name} - ${subject}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>Name:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Phone:</strong> ${phone || 'Not provided'}</p>
        <p><strong>Subject:</strong> ${subject}</p>
        <p><strong>Preferred Date:</strong> ${preferredDate || 'Not selected'}</p>
        <p><strong>Preferred Time:</strong> ${preferredTime || 'Not selected'}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `,
      text: `
        New Contact Form Submission
        
        Name: ${name}
        Email: ${email}
        Phone: ${phone || 'Not provided'}
        Subject: ${subject}
        Preferred Date: ${preferredDate || 'Not selected'}
        Preferred Time: ${preferredTime || 'Not selected'}
        Message: ${message}
      `
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    console.error('Error:', error);
    return NextResponse.json({ success: false }, { status: 500 });
  }
}