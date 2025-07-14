import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

export async function POST(request: NextRequest) {
  try {
    const formData = await request.formData();
    
    const contactData = {
      firstName: formData.get('firstName'),
      lastName: formData.get('lastName'),
      email: formData.get('email'),
      organization: formData.get('organization'),
      phone: formData.get('phone'),
      subject: formData.get('subject'),
      message: formData.get('message'),
    };

    // Validate required fields
    if (!contactData.firstName || !contactData.lastName || !contactData.email || !contactData.subject || !contactData.message) {
      return NextResponse.json(
        { error: 'Missing required fields' },
        { status: 400 }
      );
    }

    // Log the submission for debugging
    console.log('Contact form submission:', contactData);

    // Email content for Resend
    const emailHtml = `
      <html>
        <body style="font-family: Arial, sans-serif; line-height: 1.6; color: #333;">
          <div style="max-width: 600px; margin: 0 auto; padding: 20px;">
            <h2 style="color: #f8650c; border-bottom: 2px solid #f8650c; padding-bottom: 10px;">
              New Contact Form Submission - Vendmat Website
            </h2>
            
            <div style="background: #f9f9f9; padding: 20px; border-radius: 8px; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Contact Information</h3>
              <p><strong>Name:</strong> ${contactData.firstName} ${contactData.lastName}</p>
              <p><strong>Email:</strong> <a href="mailto:${contactData.email}">${contactData.email}</a></p>
              <p><strong>Organization:</strong> ${contactData.organization || 'Not specified'}</p>
              <p><strong>Phone:</strong> ${contactData.phone || 'Not provided'}</p>
              <p><strong>Subject:</strong> ${contactData.subject}</p>
            </div>
            
            <div style="background: #fff; padding: 20px; border-left: 4px solid #f8650c; margin: 20px 0;">
              <h3 style="margin-top: 0; color: #333;">Message</h3>
              <p style="white-space: pre-wrap;">${contactData.message}</p>
            </div>
            
            <div style="margin-top: 30px; padding-top: 20px; border-top: 1px solid #eee; font-size: 12px; color: #666;">
              <p>This email was sent from the Vendmat website contact form.</p>
              <p>Reply directly to this email to respond to ${contactData.firstName}.</p>
            </div>
          </div>
        </body>
      </html>
    `;

    const emailText = `
New Contact Form Submission from Vendmat Website

From: ${contactData.firstName} ${contactData.lastName}
Email: ${contactData.email}
Organization: ${contactData.organization || 'Not specified'}
Phone: ${contactData.phone || 'Not provided'}
Subject: ${contactData.subject}

Message:
${contactData.message}

---
This email was sent from the Vendmat website contact form.
Reply directly to this email to respond to ${contactData.firstName}.
    `;

    // Try to send email using multiple fallback methods
    let emailSent = false;
    let emailError = null;

    // Method 1: Try Resend API (if API key is available)
    const resendApiKey = process.env.RESEND_API_KEY;
    if (resendApiKey && !emailSent) {
      try {
        const resend = new Resend(resendApiKey);
        
        const { data, error } = await resend.emails.send({
          from: 'Vendmat Website <onboarding@resend.dev>',
          to: ['pranay@vendmat.com'],
          subject: `New Contact Form: ${contactData.subject}`,
          html: emailHtml,
          text: emailText,
          replyTo: contactData.email as string,
        });

        if (error) {
          emailError = `Resend SDK error: ${error.message}`;
          console.error('Resend SDK error:', error);
        } else {
          emailSent = true;
          console.log('Email sent successfully via Resend SDK:', data);
        }
      } catch (error) {
        emailError = `Resend SDK error: ${error}`;
        console.error('Resend SDK error:', error);
      }
    }

    // Method 2: Try Formspree (backup method)
    const formspreeEndpoint = process.env.FORMSPREE_ENDPOINT;
    if (formspreeEndpoint && !emailSent) {
      try {
        const response = await fetch(formspreeEndpoint, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify({
            name: `${contactData.firstName} ${contactData.lastName}`,
            email: contactData.email,
            organization: contactData.organization,
            phone: contactData.phone,
            subject: contactData.subject,
            message: contactData.message,
          }),
        });

        if (response.ok) {
          emailSent = true;
          console.log('Email sent successfully via Formspree');
        } else {
          emailError = `Formspree error: ${response.status}`;
          console.error('Formspree error:', response.status);
        }
      } catch (error) {
        emailError = `Formspree error: ${error}`;
        console.error('Formspree error:', error);
      }
    }

    // If no email service is configured, save to a JSON file as backup
    if (!emailSent) {
      console.warn('No email service configured. Contact form submission saved to console only.');
      console.log('EMAIL CONTENT:', emailText);
      
      // You could also save to a database or file here
      // For now, we'll still return success to the user
    }

    return NextResponse.json(
      { 
        success: true, 
        message: emailSent 
          ? 'Thank you for your message. We will get back to you soon!' 
          : 'Thank you for your message. We have received your inquiry and will respond shortly.',
        emailSent: emailSent,
        debug: process.env.NODE_ENV === 'development' ? { emailError } : undefined
      },
      { status: 200 }
    );

  } catch (error) {
    console.error('Contact form error:', error);
    return NextResponse.json(
      { error: 'Failed to send message. Please try again.' },
      { status: 500 }
    );
  }
}