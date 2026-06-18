import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, websiteUrl, businessType, message, botField } = body;

    // Honeypot check for spam
    if (botField) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    // Basic validation
    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.AUDIT_EMAIL ?? "vwebit12@gmail.com";

    const { error } = await resend.emails.send({
      from: "Vwebit Audit Form <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Website Audit Request from ${name}`,
      html: `
        <h2>New Website Audit Request</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Website URL:</strong></td><td>${websiteUrl || "Not provided"}</td></tr>
          <tr><td><strong>Business Type:</strong></td><td>${businessType || "Not specified"}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message || "—"}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666">Sent via vwebit.xyz website audit form</p>
      `,
    });

    if (error) {
      console.error("Resend error:", error);
      return NextResponse.json(
        { error: "Failed to send email. Please try again." },
        { status: 500 }
      );
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Audit request error:", err);
    return NextResponse.json(
      { error: "An unexpected error occurred." },
      { status: 500 }
    );
  }
}
