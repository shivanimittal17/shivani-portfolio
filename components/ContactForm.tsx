"use client";

import { FormEvent, useEffect, useState } from "react";
import { profile } from "@/lib/data";

type Toast = { kind: "success" | "error"; text: string } | null;

export default function ContactForm() {
  const [sending, setSending] = useState(false);
  const [toast, setToast] = useState<Toast>(null);

  // Hide the toast after a few seconds.
  useEffect(() => {
    if (!toast) return;
    const t = setTimeout(() => setToast(null), 5000);
    return () => clearTimeout(t);
  }, [toast]);

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const payload = {
      name: String(data.get("name") ?? "").trim(),
      email: String(data.get("email") ?? "").trim(),
      message: String(data.get("message") ?? "").trim(),
      botcheck: data.get("botcheck") ? "1" : "",
    };

    if (!payload.name || !payload.email || !payload.message) {
      setToast({ kind: "error", text: "Please fill in all fields" });
      return;
    }

    setSending(true);
    try {
      const res = await fetch("/api/contact", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(payload),
      });
      if (!res.ok) throw new Error("Failed to send");
      setToast({ kind: "success", text: "Message sent successfully! I'll get back to you soon." });
      form.reset();
    } catch {
      setToast({
        kind: "error",
        text: `Failed to send message. Please try again, or email ${profile.email}.`,
      });
    } finally {
      setSending(false);
    }
  }

  return (
    <>
      <form className="form" onSubmit={onSubmit}>
        <div className="field">
          <label htmlFor="cf-name">Name</label>
          <input
            id="cf-name"
            name="name"
            type="text"
            maxLength={100}
            autoComplete="name"
            placeholder="Your name"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-email">Email</label>
          <input
            id="cf-email"
            name="email"
            type="email"
            maxLength={200}
            autoComplete="email"
            placeholder="your.email@example.com"
          />
        </div>
        <div className="field">
          <label htmlFor="cf-message">Message</label>
          <textarea
            id="cf-message"
            name="message"
            maxLength={3000}
            rows={5}
            placeholder="Your message..."
          />
        </div>
        <input
          type="checkbox"
          name="botcheck"
          className="hp"
          tabIndex={-1}
          autoComplete="off"
          aria-hidden="true"
        />
        <button className="btn btn-primary" type="submit" disabled={sending}>
          {sending ? "Sending..." : "Send Message"}
        </button>
      </form>
      <div className="toast-region" role="status" aria-live="polite">
        {toast && <div className={`toast ${toast.kind}`}>{toast.text}</div>}
      </div>
    </>
  );
}
