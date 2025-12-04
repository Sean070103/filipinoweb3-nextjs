import { NextRequest, NextResponse } from 'next/server';
import nodemailer from 'nodemailer';

// Helper function to escape HTML
function escapeHtml(text: string): string {
  return text
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&#039;');
}

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();
    const { firstName, lastName, email, message } = body;
    
    // Escape HTML for security
    const safeFirstName = escapeHtml(firstName);
    const safeLastName = escapeHtml(lastName);
    const safeEmail = escapeHtml(email);
    const safeMessage = escapeHtml(message);

    // Validate required fields
    if (!firstName || !lastName || !email || !message) {
      return NextResponse.json(
        { error: 'All fields are required' },
        { status: 400 }
      );
    }

    // Validate email format
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    if (!emailRegex.test(email)) {
      return NextResponse.json(
        { error: 'Invalid email format' },
        { status: 400 }
      );
    }

    // Create transporter
    const transporter = nodemailer.createTransport({
      host: process.env.EMAIL_HOST || 'smtp.gmail.com',
      port: parseInt(process.env.EMAIL_PORT || '587'),
      secure: false, // true for 465, false for other ports
      auth: {
        user: process.env.EMAIL_USER,
        pass: process.env.EMAIL_APP_PASSWORD?.replace(/\s/g, ''), // Remove spaces from app password
      },
    });

    // Email content
    const mailOptions = {
      from: `"${safeFirstName} ${safeLastName}" <${process.env.EMAIL_USER}>`,
      to: process.env.EMAIL_TO || process.env.EMAIL_USER,
      replyTo: safeEmail,
      subject: `🎮 New Contact Form Submission - ${safeFirstName} ${safeLastName}`,
      html: `
        <!DOCTYPE html>
        <html>
        <head>
          <meta charset="utf-8">
          <meta name="viewport" content="width=device-width, initial-scale=1.0">
        </head>
        <body style="margin: 0; padding: 0; background-color: #0a0a0a; font-family: 'Courier New', monospace;">
          <div style="max-width: 600px; margin: 20px auto; background-color: #0a0a0a; border: 3px solid #06b6d4; padding: 20px;">
            <!-- Header -->
            <div style="text-align: center; margin-bottom: 30px; border-bottom: 2px solid #22c55e; padding-bottom: 15px;">
              <h1 style="color: #06b6d4; font-size: 24px; margin: 0; text-transform: uppercase; letter-spacing: 2px; text-shadow: 2px 2px 0px #000000;">
                🎮 NEW CONTACT FORM SUBMISSION
              </h1>
              <div style="width: 100px; height: 3px; background: linear-gradient(90deg, #06b6d4 0%, #22c55e 100%); margin: 10px auto;"></div>
            </div>
            
            <!-- Contact Info -->
            <div style="background-color: #000000; border: 2px solid #06b6d4; padding: 20px; margin-bottom: 20px;">
              <div style="margin-bottom: 15px;">
                <span style="color: #06b6d4; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 5px;">NAME:</span>
                <span style="color: #06b6d4; font-size: 16px;">${safeFirstName} ${safeLastName}</span>
              </div>
              <div style="margin-bottom: 15px;">
                <span style="color: #22c55e; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 5px;">EMAIL:</span>
                <a href="mailto:${safeEmail}" style="color: #22c55e; font-size: 16px; text-decoration: none;">${safeEmail}</a>
              </div>
            </div>
            
            <!-- Message -->
            <div style="background-color: #000000; border: 2px solid #22c55e; padding: 20px; margin-bottom: 20px;">
              <span style="color: #22c55e; font-weight: bold; text-transform: uppercase; display: block; margin-bottom: 10px;">MESSAGE:</span>
              <div style="background-color: #0a0a0a; border: 1px solid #22c55e; padding: 15px; color: #22c55e; white-space: pre-wrap; font-size: 14px; line-height: 1.6;">
                ${safeMessage.replace(/\n/g, '<br>')}
              </div>
            </div>
            
            <!-- Footer -->
            <div style="text-align: center; border-top: 2px solid #06b6d4; padding-top: 15px; margin-top: 20px;">
              <p style="color: #06b6d4; font-size: 12px; margin: 0; text-transform: uppercase;">
                ⚡ FILIPINO WEB3 CONTACT FORM ⚡
              </p>
              <p style="color: #22c55e; font-size: 10px; margin: 5px 0 0 0;">
                This email was sent from the Filipino Web3 community contact form.
              </p>
            </div>
          </div>
        </body>
        </html>
      `,
      text: `
🎮 NEW CONTACT FORM SUBMISSION

        NAME: ${safeFirstName} ${safeLastName}
        EMAIL: ${safeEmail}
        
        MESSAGE:
        ${safeMessage}

---
⚡ FILIPINO WEB3 CONTACT FORM ⚡
This email was sent from the Filipino Web3 community contact form.
      `,
    };

    // Send email
    await transporter.sendMail(mailOptions);

    return NextResponse.json(
      { message: 'Email sent successfully!' },
      { status: 200 }
    );
  } catch (error) {
    console.error('Error sending email:', error);
    return NextResponse.json(
      { error: 'Failed to send email. Please try again later.' },
      { status: 500 }
    );
  }
}

