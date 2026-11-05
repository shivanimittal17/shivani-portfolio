"use client";

import { useRef, useState } from "react";
import { profile } from "@/lib/data";

export default function CopyEmail() {
  const [label, setLabel] = useState("Copy");
  const emailRef = useRef<HTMLAnchorElement>(null);

  function selectEmail() {
    const el = emailRef.current;
    if (!el) return;
    const range = document.createRange();
    range.selectNodeContents(el);
    const sel = window.getSelection();
    sel?.removeAllRanges();
    sel?.addRange(range);
  }

  function flash(text: string) {
    setLabel(text);
    setTimeout(() => setLabel("Copy"), 1800);
  }

  async function copy() {
    try {
      await navigator.clipboard.writeText(profile.email);
      flash("Copied");
    } catch {
      selectEmail();
      flash("Selected");
    }
  }

  return (
    <>
      <div className="val">
        <small>Email</small>
        <a ref={emailRef} href={`mailto:${profile.email}`}>
          {profile.email}
        </a>
      </div>
      <button className="btn btn-ghost copy" type="button" onClick={copy}>
        {label}
      </button>
    </>
  );
}
