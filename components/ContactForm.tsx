"use client";

import { FormEvent, useState } from "react";
import { profile } from "@/lib/data";

type Status = "idle" | "sending" | "sent" | "error" | "mailto";

// Messages are delivered to Shivani's inbox through Web3Forms when this key is set
// (see README). Without a key the form opens the visitor's email app instead.
const ACCESS_KEY = process.env.NEXT_PUBLIC_WEB3FORMS_KEY;

export default function ContactForm() {
  const [status, setStatus] = useState<Status>("idle");

  async function onSubmit(e: FormEvent<HTMLFormElement>) {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    if (data.get("botcheck")) return; // hidden field that only bots fill in

    const name = String(data.get("name") ?? "").trim();
    const email = String(data.get("email") ?? "").trim();
    const message = String(data.get("message") ?? "").trim();
    const subject = `Portfolio message from ${name}`;

    if (!ACCESS_KEY) {
      const body = `${message}\n\n${name}\n${email}`;
      window.location.href = `mailto:${profile.email}?subject=${encodeURIComponent(
        subject
      )}&body=${encodeURIComponent(body)}`;
      setStatus("mailto");
      return;
    }

    setStatus("sending");
    try {
      const res = await fetch("https://api.web3forms.com/submit", {
        method: "POST",
        headers: { "Content-Type": "application/json", Accept: "application/json" },
        body: JSON.stringify({
          access_key: ACCESS_KEY,
          subject,
          from_name: "Portfolio website",
          name,
          email,
          message,
        }),
      });
      const json = await res.json();
      if (res.ok && json.success) {
        form.reset();
        setStatus("sent");
      } else {
        setStatus("error");
      }
    } catch {
      setStatus("error");
    }
  }

  return (
    <form className="form" onSubmit={onSubmit}>
      <div className="field">
        <label htmlFor="cf-name">Name</label>
        <input
          id="cf-name"
          name="name"
          type="text"
          required
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
          required
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
          required
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
      <button className="btn btn-primary" type="submit" disabled={status === "sending"}>
        {status === "sending" ? "Sending..." : "Send Message"}
      </button>
      <p className="form-note" role="status" aria-live="polite">
        {status === "sent" && "Thank you. Your message has been sent."}
        {status === "error" &&
          `Something went wrong and your message was not sent. Please email ${profile.email} instead.`}
        {status === "mailto" &&
          `Your email app should open with the message ready to send. If it does not, write to ${profile.email}.`}
      </p>
    </form>
  );
}
