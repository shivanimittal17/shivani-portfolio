"use client";

import { useEffect, useRef, useState } from "react";
import { navItems, profile } from "@/lib/data";
import { DownloadIcon, GitHubIcon, LinkedInIcon } from "./Icons";

export default function Nav() {
  const [current, setCurrent] = useState("home");
  const linksRef = useRef<HTMLDivElement>(null);

  // Highlight the link for the section in view.
  useEffect(() => {
    const sections = Array.from(document.querySelectorAll<HTMLElement>("main section"));
    const io = new IntersectionObserver(
      (entries) => {
        entries.forEach((e) => {
          if (e.isIntersecting) setCurrent(e.target.id);
        });
      },
      { rootMargin: "-35% 0px -55% 0px" }
    );
    sections.forEach((s) => io.observe(s));
    return () => io.disconnect();
  }, []);

  // Keep the active link visible in the scrollable nav on small screens.
  useEffect(() => {
    const box = linksRef.current;
    const a = box?.querySelector<HTMLElement>('[aria-current="true"]');
    if (!box || !a) return;
    const left = a.offsetLeft - box.offsetLeft;
    if (left < box.scrollLeft || left + a.offsetWidth > box.scrollLeft + box.clientWidth) {
      box.scrollTo({ left: Math.max(0, left - 24), behavior: "auto" });
    }
  }, [current]);

  return (
    <header className="nav">
      <div className="nav-inner">
        <a className="brand" href="#home" aria-label="Shivani Mittal, home">
          SM
        </a>
        <nav className="nav-links" aria-label="Sections" ref={linksRef}>
          {navItems.map((item) => (
            <a
              key={item.id}
              href={`#${item.id}`}
              aria-current={current === item.id ? "true" : undefined}
            >
              {item.label}
            </a>
          ))}
        </nav>
        <div className="nav-tools">
          <a
            className="icon-link"
            href={profile.github}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub profile"
          >
            <GitHubIcon />
          </a>
          <a
            className="icon-link"
            href={profile.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn profile"
          >
            <LinkedInIcon />
          </a>
          <a className="btn btn-primary" href={profile.resume} download>
            <DownloadIcon />
            Resume
          </a>
        </div>
      </div>
    </header>
  );
}
