import { NextResponse } from "next/server";
import { profile } from "@/lib/data";

export const runtime = "nodejs";

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

// Receives { name, email, message } from the contact form and emails it to Shivani
// through Resend. Needs RESEND_API_KEY to be set in the Vercel project (see README).
export async function POST(request: Request) {
  let body: Record<string, unknown>;
  try {
    body = (await request.json()) as Record<string, unknown>;
  } catch {
    return NextResponse.json({ error: "Invalid request" }, { status: 400 });
  }

  // Hidden field that only bots fill in: pretend it worked and send nothing.
  if (body.botcheck) return NextResponse.json({ ok: true });

  const name = typeof body.name === "string" ? body.name.trim() : "";
  const email = typeof body.email === "string" ? body.email.trim() : "";
  const message = typeof body.message === "string" ? body.message.trim() : "";

  if (!name || !email || !message) {
    return NextResponse.json({ error: "Please fill in all fields" }, { status: 400 });
  }
  if (name.length > 100 || email.length > 200 || message.length > 3000 || !EMAIL_RE.test(email)) {
    return NextResponse.json({ error: "Invalid input" }, { status: 400 });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    console.error("Contact form: RESEND_API_KEY is not set");
    return NextResponse.json({ error: "Email service is not configured" }, { status: 503 });
  }

  const to = process.env.CONTACT_TO_EMAIL || profile.email;
  const from = process.env.CONTACT_FROM_EMAIL || "Portfolio <onboarding@resend.dev>";
  const subjectName = name.replace(/[\r\n]+/g, " ");

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: { Authorization: `Bearer ${apiKey}`, "Content-Type": "application/json" },
      body: JSON.stringify({
        from,
        to: [to],
        reply_to: email,
        subject: `Portfolio message from ${subjectName}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    });
    if (!res.ok) {
      console.error("Contact form: Resend error", res.status, await res.text());
      return NextResponse.json({ error: "Failed to send" }, { status: 502 });
    }
    return NextResponse.json({ ok: true });
  } catch (err) {
    console.error("Contact form: could not reach Resend", err);
    return NextResponse.json({ error: "Failed to send" }, { status: 502 });
  }
}
