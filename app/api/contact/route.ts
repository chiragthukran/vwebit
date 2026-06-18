import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, businessType, message } = body;

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.AUDIT_EMAIL ?? "vwebit12@gmail.com";

    const { error } = await resend.emails.send({
      from: "Vwebit Contact Form <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Contact from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <table cellpadding="8" style="border-collapse:collapse;width:100%">
          <tr><td><strong>Name:</strong></td><td>${name}</td></tr>
          <tr><td><strong>Phone:</strong></td><td>${phone}</td></tr>
          <tr><td><strong>Business Type:</strong></td><td>${businessType || "Not specified"}</td></tr>
          <tr><td><strong>Message:</strong></td><td>${message || "—"}</td></tr>
        </table>
        <p style="margin-top:16px;color:#666">Sent via vwebit.com contact form</p>
      `,
    });

    if (error) {
      return NextResponse.json({ error: "Failed to send." }, { status: 500 });
    }

    return NextResponse.json({ success: true }, { status: 200 });
  } catch (err) {
    console.error("Contact request error:", err);
    return NextResponse.json({ error: "Unexpected error." }, { status: 500 });
  }
}
