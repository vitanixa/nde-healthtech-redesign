const RESEND_API_URL = "https://api.resend.com/emails";

type ContactPayload = {
  name?: string;
  email?: string;
  organization?: string;
  need?: string;
  preferredDate?: string;
  timeZone?: string;
  message?: string;
  source?: string;
};

function escapeHtml(value: unknown) {
  return String(value ?? "")
    .replace(/&/g, "&amp;")
    .replace(/</g, "&lt;")
    .replace(/>/g, "&gt;")
    .replace(/"/g, "&quot;")
    .replace(/'/g, "&#039;");
}

export default async function handler(req: any, res: any) {
  if (req.method !== "POST") {
    res.setHeader("Allow", "POST");
    return res.status(405).json({ error: "Method not allowed" });
  }

  const apiKey = process.env.RESEND_API_KEY;
  if (!apiKey) {
    return res.status(500).json({ error: "Missing RESEND_API_KEY environment variable" });
  }

  const body: ContactPayload = typeof req.body === "string" ? JSON.parse(req.body || "{}") : req.body || {};
  const name = String(body.name || "").trim();
  const email = String(body.email || "").trim();

  if (!name || !email || !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)) {
    return res.status(400).json({ error: "Name and valid email are required" });
  }

  const html = `
    <div style="font-family: Arial, sans-serif; color: #0f172a; line-height: 1.6;">
      <h2 style="margin: 0 0 16px; color: #0f172a;">New NDE HealthTech Consultation Request</h2>
      <p><strong>Name:</strong> ${escapeHtml(name)}</p>
      <p><strong>Email:</strong> ${escapeHtml(email)}</p>
      <p><strong>Organization Type:</strong> ${escapeHtml(body.organization)}</p>
      <p><strong>Primary Need:</strong> ${escapeHtml(body.need)}</p>
      <p><strong>Preferred Date:</strong> ${escapeHtml(body.preferredDate)}</p>
      <p><strong>Time Zone:</strong> ${escapeHtml(body.timeZone)}</p>
      <p><strong>Source:</strong> ${escapeHtml(body.source || "Website")}</p>
      <hr style="border: none; border-top: 1px solid #e2e8f0; margin: 18px 0;" />
      <p><strong>Message:</strong></p>
      <p>${escapeHtml(body.message).replace(/\n/g, "<br />")}</p>
    </div>
  `;

  const toEmail = process.env.CONTACT_TO_EMAIL || "contracts@ndehealthtech.com";
  const fromEmail = process.env.RESEND_FROM_EMAIL || "NDE HealthTech Website <onboarding@resend.dev>";

  const response = await fetch(RESEND_API_URL, {
    method: "POST",
    headers: {
      Authorization: `Bearer ${apiKey}`,
      "Content-Type": "application/json",
    },
    body: JSON.stringify({
      from: fromEmail,
      to: [toEmail],
      reply_to: email,
      subject: `New Consultation Request from ${name}`,
      html,
    }),
  });

  if (!response.ok) {
    const details = await response.text();
    console.error("Resend error:", details);
    return res.status(502).json({ error: "Unable to send email" });
  }

  return res.status(200).json({ ok: true });
}
