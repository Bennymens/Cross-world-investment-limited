import nodemailer from "nodemailer";

// Helper to set CORS headers on every response
function setCorsHeaders(res) {
  res.setHeader("Access-Control-Allow-Origin", "*");
  res.setHeader("Access-Control-Allow-Methods", "POST, OPTIONS");
  res.setHeader("Access-Control-Allow-Headers", "Content-Type");
}

export default async function handler(req, res) {
  setCorsHeaders(res);

  // Handle preflight OPTIONS request
  if (req.method === "OPTIONS") {
    return res.status(200).end();
  }

  if (req.method !== "POST") {
    return res.status(405).json({ error: "Method not allowed" });
  }

  // ── Guard: check all required env vars are present ────────────────────────
  const { SMTP_HOST, SMTP_PORT, SMTP_USER, SMTP_PASS, SMTP_SECURE, CONTACT_TO } = process.env;
  if (!SMTP_HOST || !SMTP_PORT || !SMTP_USER || !SMTP_PASS) {
    console.error("Missing SMTP environment variables:", {
      SMTP_HOST: !!SMTP_HOST,
      SMTP_PORT: !!SMTP_PORT,
      SMTP_USER: !!SMTP_USER,
      SMTP_PASS: !!SMTP_PASS,
    });
    return res.status(500).json({
      error: "Server email configuration is incomplete. Please contact us at info@crossinvestgh.com.",
    });
  }

  // ── Parse and validate body ────────────────────────────────────────────────
  const { name, email, subject, message } = req.body || {};

  if (!name || !email || !message) {
    return res.status(400).json({ error: "Name, email, and message are required." });
  }

  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) {
    return res.status(400).json({ error: "Invalid email address." });
  }

  // ── Create SMTP transporter ────────────────────────────────────────────────
  const transporter = nodemailer.createTransport({
    host: SMTP_HOST,
    port: Number(SMTP_PORT),
    secure: SMTP_SECURE === "true", // true for port 465 (SSL)
    auth: {
      user: SMTP_USER,
      pass: SMTP_PASS,
    },
    tls: {
      // Prevent TLS errors if connecting directly via IP or alternate hostnames
      rejectUnauthorized: false
    },
    connectionTimeout: 10000,
    greetingTimeout: 10000,
    socketTimeout: 15000,
  });

  const recipientEmail = CONTACT_TO || SMTP_USER;
  const subjectLine = subject
    ? `Contact Form: ${subject}`
    : `New Contact Form Message from ${name}`;

  try {
    // ── 1. Notification email to Cross World ──────────────────────────────────
    await transporter.sendMail({
      from: `"Cross World Website" <${SMTP_USER}>`,
      to: recipientEmail,
      replyTo: email,
      subject: subjectLine,
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1a3a2a; margin-bottom: 4px;">New Contact Form Submission</h2>
          <p style="color: #666; font-size: 13px; margin-top: 0;">Received via crossworldinvestments.com</p>
          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />

          <table style="width: 100%; border-collapse: collapse;">
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold; width: 100px;">Name</td>
              <td style="padding: 8px 0; color: #111;">${name}</td>
            </tr>
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Email</td>
              <td style="padding: 8px 0; color: #111;"><a href="mailto:${email}" style="color: #2e7d32;">${email}</a></td>
            </tr>
            ${subject ? `
            <tr>
              <td style="padding: 8px 0; color: #555; font-weight: bold;">Subject</td>
              <td style="padding: 8px 0; color: #111;">${subject}</td>
            </tr>` : ""}
          </table>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 20px 0;" />

          <h3 style="color: #1a3a2a; margin-bottom: 8px;">Message</h3>
          <p style="color: #333; line-height: 1.7; background: #fff; padding: 16px; border-radius: 6px; border-left: 4px solid #2e7d32;">
            ${message.replace(/\n/g, "<br />")}
          </p>

          <p style="font-size: 12px; color: #999; margin-top: 24px;">
            Reply directly to this email to respond to ${name}.
          </p>
        </div>
      `,
    });

    // ── 2. Auto-reply confirmation to the sender ───────────────────────────
    await transporter.sendMail({
      from: `"Cross World Investment Limited" <${SMTP_USER}>`,
      to: email,
      subject: "We received your message — Cross World Investment Limited",
      html: `
        <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 24px; background: #f9f9f9; border-radius: 8px;">
          <h2 style="color: #1a3a2a;">Thank you, ${name}!</h2>
          <p style="color: #333; line-height: 1.7;">
            We've received your message and our team will get back to you within <strong>1–2 business days</strong>.
          </p>

          <div style="background: #fff; border-left: 4px solid #2e7d32; padding: 16px; border-radius: 6px; margin: 20px 0;">
            <p style="margin: 0; color: #555; font-size: 13px; font-weight: bold;">Your message</p>
            <p style="margin: 8px 0 0; color: #333; line-height: 1.7; font-size: 14px;">
              ${message.replace(/\n/g, "<br />")}
            </p>
          </div>

          <p style="color: #333; line-height: 1.7;">
            In the meantime, feel free to reach us directly at
            <a href="mailto:info@crossinvestgh.com" style="color: #2e7d32;">info@crossinvestgh.com</a>
            or call us at <a href="tel:+233202007160" style="color: #2e7d32;">+233 20 200 7160</a>.
          </p>

          <hr style="border: none; border-top: 1px solid #e0e0e0; margin: 24px 0;" />

          <p style="font-size: 12px; color: #999;">
            Cross World Investment Limited · No. 14 Liberation Road, Cantonments, Accra, Ghana
          </p>
        </div>
      `,
    });

    return res.status(200).json({ success: true });
  } catch (error) {
    // Full error logged server-side — visible in Vercel → Project → Functions → Logs
    console.error("SMTP Error:", {
      message: error.message,
      code: error.code,
      command: error.command,
      response: error.response,
    });

    return res.status(500).json({
      error: `Email delivery failed: ${error.message || "Unknown SMTP error"}`,
    });
  }
}
