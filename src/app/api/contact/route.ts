import nodemailer from 'nodemailer';
import { NextRequest, NextResponse } from 'next/server';

// Email validation
function isValidEmail(email: string): boolean {
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return emailRegex.test(email);
}

function getSmtpDebugConfig() {
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    return {
        host: process.env.SMTP_HOST,
        port: smtpPort,
        secure: smtpSecure,
        requireTLS: !smtpSecure,
        authMethod: 'LOGIN',
        user: process.env.SMTP_USER,
        from: process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@nusulabrotherenterprises.com',
        recipient: process.env.CONTACT_FORM_EMAIL || 'info@nusulabrotherenterprises.com',
    };
}

function toErrorDetails(error: unknown) {
    if (!(error instanceof Error)) {
        return { message: String(error) };
    }

    const smtpError = error as Error & {
        code?: string;
        response?: string;
        responseCode?: number;
        command?: string;
    };

    return {
        name: smtpError.name,
        message: smtpError.message,
        code: smtpError.code,
        response: smtpError.response,
        responseCode: smtpError.responseCode,
        command: smtpError.command,
    };
}

// Create transporter from environment variables
function createTransporter() {
    const smtpHost = process.env.SMTP_HOST;
    const smtpPort = process.env.SMTP_PORT ? parseInt(process.env.SMTP_PORT) : 587;
    const smtpUser = process.env.SMTP_USER;
    const smtpPassword = process.env.SMTP_PASSWORD;
    const smtpSecure = process.env.SMTP_SECURE === 'true';

    if (!smtpHost || !smtpUser || !smtpPassword) {
        throw new Error('Missing SMTP configuration in environment variables');
    }

    return nodemailer.createTransport({
        host: smtpHost,
        port: smtpPort,
        secure: smtpSecure,
        authMethod: 'LOGIN',
        auth: {
            user: smtpUser,
            pass: smtpPassword,
        },
        requireTLS: !smtpSecure,
        tls: {
            // Allow self-signed certificates common on shared/cPanel hosting
            rejectUnauthorized: false,
        },
    });
}

export async function POST(request: NextRequest) {
    try {
        const body = await request.json();
        const { name, email, message } = body;

        // Validate input
        if (!name || !name.trim()) {
            return NextResponse.json(
                { success: false, error: 'Name is required' },
                { status: 400 }
            );
        }

        if (!email || !isValidEmail(email)) {
            return NextResponse.json(
                { success: false, error: 'Valid email is required' },
                { status: 400 }
            );
        }

        if (!message || !message.trim()) {
            return NextResponse.json(
                { success: false, error: 'Message is required' },
                { status: 400 }
            );
        }

        const transporter = createTransporter();
        const recipientEmail = process.env.CONTACT_FORM_EMAIL || 'info@nusulabrotherenterprises.com';
        const fromEmail = process.env.SMTP_FROM_EMAIL || process.env.SMTP_USER || 'noreply@nusulabrotherenterprises.com';

        if (process.env.NODE_ENV === 'development') {
            console.info('SMTP debug config:', getSmtpDebugConfig());
            try {
                await transporter.verify();
                console.info('SMTP verify succeeded');
            } catch (verifyError) {
                console.error('SMTP verify failed:', {
                    config: getSmtpDebugConfig(),
                    error: toErrorDetails(verifyError),
                });
                throw verifyError;
            }
        }

        // Email to company
        const mailOptions = {
            from: fromEmail,
            to: recipientEmail,
            replyTo: email,
            subject: `New Contact Form Submission from ${name}`,
            html: `
        <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <h2 style="color: #0b7a46;">New Message from Contact Form</h2>
          <p><strong>Name:</strong> ${escapeHtml(name)}</p>
          <p><strong>Email:</strong> ${escapeHtml(email)}</p>
          <p><strong>Message:</strong></p>
          <div style="background-color: #f5f5f5; padding: 15px; border-left: 4px solid #0b7a46; margin: 20px 0;">
            ${escapeHtml(message).replace(/\n/g, '<br />')}
          </div>
          <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
          <p style="font-size: 12px; color: #999;">
            This email was sent from the Nusula & Brother Enterprises contact form.
          </p>
        </div>
      `,
        };

        // Send email to company
        await transporter.sendMail(mailOptions);

        // Optional: Send confirmation email to customer
        if (process.env.SEND_CONFIRMATION_EMAIL === 'true') {
            const confirmationEmail = {
                from: fromEmail,
                to: email,
                subject: 'We received your message - Nusula & Brother Enterprises',
                html: `
          <div style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
            <h2 style="color: #0b7a46;">Message Received</h2>
            <p>Hi ${escapeHtml(name)},</p>
            <p>Thank you for contacting Nusula & Brother Enterprises. We have received your message and will get back to you as soon as possible.</p>
            <p>Our commercial team will review your inquiry and reach out within 24-48 hours.</p>
            <p>Best regards,<br />Nusula & Brother Enterprises Team</p>
            <hr style="border: none; border-top: 1px solid #ddd; margin: 20px 0;">
            <p style="font-size: 12px; color: #999;">
              If you did not send this message, please ignore this email.
            </p>
          </div>
        `,
            };

            await transporter.sendMail(confirmationEmail);
        }

        return NextResponse.json(
            {
                success: true,
                message: 'Your message has been sent successfully. We will contact you soon.'
            },
            { status: 200 }
        );
    } catch (error) {
        console.error('Contact form error:', {
            config: getSmtpDebugConfig(),
            error: toErrorDetails(error),
        });
        return NextResponse.json(
            {
                success: false,
                error: process.env.NODE_ENV === 'development'
                    ? String(error)
                    : 'Failed to send message. Please try again later or contact us directly.'
            },
            { status: 500 }
        );
    }
}

// HTML escape utility to prevent XSS
function escapeHtml(text: string): string {
    const map: { [key: string]: string } = {
        '&': '&amp;',
        '<': '&lt;',
        '>': '&gt;',
        '"': '&quot;',
        "'": '&#039;',
    };
    return text.replace(/[&<>"']/g, (char) => map[char]);
}
