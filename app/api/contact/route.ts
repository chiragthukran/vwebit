import { NextRequest, NextResponse } from "next/server";
import { Resend } from "resend";

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: NextRequest) {
  try {
    const body = await req.json();
    const { name, phone, plan, businessType, otherBusiness, timeline, message, botField } = body;

    // Honeypot check for spam
    if (botField) {
      return NextResponse.json({ success: true }, { status: 200 });
    }

    if (!name || !phone) {
      return NextResponse.json(
        { error: "Name and phone are required." },
        { status: 400 }
      );
    }

    const toEmail = process.env.AUDIT_EMAIL ?? "vwebit12@gmail.com";
    
    // Resolve final business type string
    const finalBusiness = businessType === "other" && otherBusiness ? otherBusiness : (businessType || "Not specified");

    const { error } = await resend.emails.send({
      from: "Vwebit Contact Form <onboarding@resend.dev>",
      to: toEmail,
      subject: `New Lead: ${name} (${plan || finalBusiness})`,
      html: `
        <div style="font-family: sans-serif; color: #333; max-width: 600px;">
          <h2 style="color: #000; border-bottom: 1px solid #eee; padding-bottom: 10px;">New Contact Form Submission</h2>
          <table cellpadding="10" style="border-collapse:collapse; width:100%; text-align: left;">
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td style="width: 150px;"><strong>Name:</strong></td>
              <td>${name}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td><strong>Phone:</strong></td>
              <td>${phone}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td><strong>Interested In:</strong></td>
              <td><span style="background:#f0f7ff; color:#0055cc; padding: 4px 8px; border-radius: 4px; font-weight: bold;">${plan || "Not specified"}</span></td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td><strong>Business Type:</strong></td>
              <td>${finalBusiness}</td>
            </tr>
            <tr style="border-bottom: 1px solid #f5f5f5;">
              <td><strong>Timeline:</strong></td>
              <td>${timeline || "Not specified"}</td>
            </tr>
            <tr>
              <td colspan="2" style="padding-top: 20px;">
                <strong>Message:</strong>
                <p style="background: #f9fafb; padding: 15px; border-radius: 8px; border: 1px solid #eee; white-space: pre-wrap;">${message || "—"}</p>
              </td>
            </tr>
          </table>
          <p style="margin-top:24px; color:#666; font-size: 12px; text-align: center;">Sent securely via vwebit.xyz contact form</p>
        </div>
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
