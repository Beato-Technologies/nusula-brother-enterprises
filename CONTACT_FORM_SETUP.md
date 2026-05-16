# Contact Form SMTP Configuration

## Overview

The contact form has been refactored to use a Next.js API route with SMTP email delivery via Nodemailer. Messages are sent to the configured recipient email and optional confirmation emails can be sent to form submitters.

## Setup Instructions

### 1. Configure Environment Variables

Create or update your `.env.local` file (or `.env.production` for production):

```env
# SMTP Server Configuration
SMTP_HOST=smtp.gmail.com
SMTP_PORT=587
SMTP_SECURE=false

# SMTP Authentication
SMTP_USER=your-email@gmail.com
SMTP_PASSWORD=your-app-password

# Email Settings
SMTP_FROM_EMAIL=noreply@nusulabrotherenterprises.com
CONTACT_FORM_EMAIL=info@nusulabrotherenterprises.com

# Optional: Send confirmation emails to form submitters
SEND_CONFIRMATION_EMAIL=true
```

### 2. SMTP Provider Setup Examples

#### Gmail

- **SMTP_HOST**: `smtp.gmail.com`
- **SMTP_PORT**: `587`
- **SMTP_SECURE**: `false`
- **SMTP_USER**: Your Gmail address (e.g., `your-email@gmail.com`)
- **SMTP_PASSWORD**: [Generate an App Password](https://support.google.com/accounts/answer/185833?hl=en)
  - Enable 2-factor authentication
  - Go to Security settings and create an App Password for "Mail" and "Windows Computer"
  - Use this generated password (16 characters)

#### Other Providers

- **SendGrid**: SMTP_HOST=`smtp.sendgrid.net`, Port `587`, User: `apikey`, Password: Your API key
- **AWS SES**: SMTP_HOST=`email-smtp.[region].amazonaws.com`, Port `587`
- **MailGun**: SMTP_HOST=`smtp.mailgun.org`, Port `587`, User: `postmaster@[domain]`

### 3. Features

- **Input Validation**: Ensures name, email, and message are provided
- **Email Validation**: Validates email format before sending
- **XSS Prevention**: Escapes HTML special characters in user input
- **Error Handling**: Returns meaningful error messages to the frontend
- **Optional Confirmation Emails**: Set `SEND_CONFIRMATION_EMAIL=true` to send receipts
- **Development vs Production**: Shows detailed errors in development mode

### 4. API Route

**Endpoint**: `POST /api/contact`

**Request Body**:

```json
{
  "name": "John Doe",
  "email": "john@example.com",
  "message": "Your message here"
}
```

**Success Response** (200):

```json
{
  "success": true,
  "message": "Your message has been sent successfully. We will contact you soon."
}
```

**Error Responses** (400/500):

```json
{
  "success": false,
  "error": "Error description"
}
```

### 5. Frontend Form Component

The contact form is now a client component (`'use client'`) with:

- Real-time form state management
- Loading indicator during submission
- Success/error message display
- Form clearing on successful submission

### 6. Email Templates

**Company Email**:

- Recipient: `CONTACT_FORM_EMAIL`
- ReplyTo: Sender's email (allows direct response)
- Includes formatted message with sender details

**Confirmation Email** (optional):

- Sent to form submitter
- Acknowledges receipt
- Sets expectation for response time (24-48 hours)

## Troubleshooting

### "Missing SMTP configuration" Error

Ensure all required environment variables are set:

- `SMTP_HOST`
- `SMTP_USER`
- `SMTP_PASSWORD`

### Authentication Failed

- Verify credentials are correct
- For Gmail, ensure you're using an App Password (not your regular password)
- Check that the SMTP account has permission to send emails

### Emails Not Received

- Check spam/junk folders
- Verify recipient email in `CONTACT_FORM_EMAIL`
- Check server logs for detailed error messages
- Ensure SMTP_SECURE matches your provider's requirements (Gmail uses `false` for port 587)

### Testing

Use a test email address and verify delivery to ensure configuration is working:

```bash
# In development, check the terminal output for any errors
# Logs appear in the format: "Contact form error: [error details]"
```

## Security Considerations

- **Never commit `.env.local`** to version control
- Keep SMTP credentials secure
- Use environment-specific credentials
- Consider using a transactional email service for production
- Implement rate limiting if needed to prevent abuse
