"use client";

import { useState } from "react";
import { Mail, Link as LinkIcon, Instagram, Globe, Copy, ExternalLink, Send, Calendar } from "lucide-react";

export default function ContactConnect() {
  const [copied, setCopied] = useState(false);
  const email = "contact@daialidaniyal.com";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const links = [
    { label: "LinkedIn", icon: <LinkIcon size={18} />, href: "https://linkedin.com/in/dai-ali-daniyal-a50077183" },
    { label: "Instagram", icon: <Instagram size={18} />, href: "https://www.instagram.com/thedaialidaniyal/?hl=en" },
    { label: "Company Site", icon: <Globe size={18} />, href: "https://alashrafgoc.com" },
  ];

  return (
    <section className="w-full bg-background px-6 py-20 md:px-14 lg:px-24">
      <div className="mb-6 flex w-full items-start justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Contact
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">Contact & Connect</h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">For partnerships, speaking, and collaborations.</p>
      </div>

      <div className="flex w-full flex-col items-stretch gap-12 md:flex-row">

        {/* Left: Contact Form */}
        <div className="flex h-full flex-col space-y-4 rounded-2xl border border-border bg-card p-8 md:w-1/2">
          <input placeholder="Full Name" className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/40" />
          <input placeholder="Email Address" className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/40" />
          <input placeholder="Company / Organization" className="w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/40" />
          <textarea placeholder="Your Message" className="h-32 w-full rounded-xl border border-border bg-background/40 px-4 py-3 text-sm text-foreground outline-none focus-visible:ring-2 focus-visible:ring-primary/40" />

          <div className="mt-auto flex gap-4 pt-2">
            <button className="flex items-center gap-2 rounded-xl bg-primary px-5 py-3 text-sm text-primary-foreground transition hover:bg-primary/90" type="submit" onClick={(e) => e.preventDefault()}>
              <Send size={16} /> Send Message
            </button>
            <button className="flex items-center gap-2 rounded-xl border border-primary px-5 py-3 text-sm text-primary transition hover:bg-primary/5">
              <Calendar size={16} /> Request a Meeting
            </button>
          </div>
        </div>

        {/* RIGHT COLUMN — MATCH HEIGHT + EQUAL ITEM HEIGHT */}
        <div className="h-full md:w-1/2">
          <div className="flex h-full flex-col rounded-3xl bg-primary p-6 text-primary-foreground">

            <div className="grid grid-rows-4 gap-4 h-full">

              {/* EMAIL CARD */}
              <div className="flex items-center justify-between rounded-xl bg-card p-4 text-foreground">
                <div className="flex items-center gap-2 text-sm">
                  <Mail size={18} /> {email}
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 rounded-lg border border-primary px-3 py-1.5 text-sm text-primary"
                >
                  <Copy size={14} /> {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* SOCIAL / LINKS — EACH CARD SAME HEIGHT */}
              {links.map((item, i) => (
                <div
                  key={i}
                  className="flex items-center justify-between rounded-xl bg-card p-4 text-foreground"
                >
                  <div className="flex items-center gap-2 text-sm">
                    {item.icon} {item.label}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-1 rounded-lg border border-primary px-3 py-1.5 text-sm text-primary"
                  >
                    <ExternalLink size={14} /> Open
                  </a>
                </div>
              ))}

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}
