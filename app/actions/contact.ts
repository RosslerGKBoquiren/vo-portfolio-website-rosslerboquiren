"use server"

import { profile } from "@/lib/site-data"

/**
 * ============================================================================
 *  CONTACT FORM HANDLER (server action)
 * ============================================================================
 *  How email delivery works:
 *
 *  1. By default (no config), submissions are validated and logged on the
 *     server, and the user sees a success message. This keeps the form working
 *     out of the box without exposing any credentials in the browser.
 *
 *  2. To actually receive emails, add a Resend integration (recommended) and
 *     set these environment variables in your Vercel project settings:
 *
 *       RESEND_API_KEY   – your Resend API key (kept server-side, never exposed)
 *       CONTACT_TO       – (optional) destination address.
 *                          Defaults to `profile.email` in lib/site-data.ts.
 *       CONTACT_FROM     – (optional) a verified Resend sender address, e.g.
 *                          "Portfolio <contact@yourdomain.com>".
 *                          Defaults to Resend's onboarding sender for testing.
 *
 *  Prefer a different provider (SendGrid, Postmark, etc.)? Swap the fetch()
 *  call below — the validation and return shape can stay the same.
 * ============================================================================
 */

export type ContactState = {
  status: "idle" | "success" | "error"
  message: string
  errors?: Partial<Record<"name" | "email" | "message", string>>
}

const EMAIL_RE = /^[^\s@]+@[^\s@]+\.[^\s@]+$/

export async function submitContact(
  _prevState: ContactState,
  formData: FormData,
): Promise<ContactState> {
  const name = String(formData.get("name") ?? "").trim()
  const email = String(formData.get("email") ?? "").trim()
  const message = String(formData.get("message") ?? "").trim()
  // Honeypot field — real users leave this empty; bots often fill it.
  const honeypot = String(formData.get("company") ?? "").trim()

  // Server-side validation.
  const errors: ContactState["errors"] = {}
  if (name.length < 2) errors.name = "Please enter your name."
  if (!EMAIL_RE.test(email)) errors.email = "Please enter a valid email address."
  if (message.length < 10)
    errors.message = "Please share a little more (at least 10 characters)."

  if (Object.keys(errors).length > 0) {
    return {
      status: "error",
      message: "Please fix the highlighted fields and try again.",
      errors,
    }
  }

  // Silently succeed for honeypot hits (likely a bot).
  if (honeypot) {
    return { status: "success", message: "Thanks for reaching out!" }
  }

  const to = process.env.CONTACT_TO || profile.email
  const apiKey = process.env.RESEND_API_KEY
  const from = process.env.CONTACT_FROM || "Portfolio <onboarding@resend.dev>"

  // No email provider configured — log and confirm to the user.
  if (!apiKey) {
    console.log("[v0] Contact form submission (no email provider configured):", {
      name,
      email,
      to,
      message,
    })
    return {
      status: "success",
      message:
        "Thanks for your message! It was received. (Email delivery isn't configured yet, so this was logged server-side.)",
    }
  }

  try {
    const res = await fetch("https://api.resend.com/emails", {
      method: "POST",
      headers: {
        Authorization: `Bearer ${apiKey}`,
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        from,
        to,
        reply_to: email,
        subject: `New portfolio message from ${name}`,
        text: `Name: ${name}\nEmail: ${email}\n\n${message}`,
      }),
    })

    if (!res.ok) {
      const detail = await res.text()
      console.error("[v0] Resend error:", res.status, detail)
      return {
        status: "error",
        message:
          "Something went wrong sending your message. Please email me directly instead.",
      }
    }

    return {
      status: "success",
      message: "Thanks for your message! I'll get back to you soon.",
    }
  } catch (err) {
    console.error("[v0] Contact form error:", err)
    return {
      status: "error",
      message:
        "Something went wrong sending your message. Please email me directly instead.",
    }
  }
}
