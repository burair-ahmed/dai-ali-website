'use client';
import { useState } from "react";
import { motion } from "framer-motion";
import { Mail, Link as LinkIcon, Instagram, Globe, Copy, ExternalLink, Send, Calendar, User } from "lucide-react";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";

export default function Contact() {
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
    <>
      <Navbar />

      <div className="w-full bg-background text-foreground">
        
        {/* HERO */}
        <section className="flex min-h-[70vh] items-center bg-gradient-to-b from-background via-background to-secondary/60 py-20">
          <div className="mx-auto w-full max-w-7xl px-6 lg:px-12 ">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="max-w-3xl rounded-3xl border border-border bg-card/95 p-10 shadow-2xl backdrop-blur md:p-12"
            >
              <p className="mb-3 text-sm font-medium tracking-wide text-muted-foreground">
                Get in Touch
              </p>
              <h2 className="mb-3 text-4xl font-semibold text-foreground md:text-5xl">
                Contact Dai Ali Daniyal
              </h2>
              <p className="mb-8 leading-relaxed text-muted-foreground">
                Have questions, collaboration ideas, or partnership opportunities? Fill the form below or reach out via our direct channels.
              </p>

              <div className="flex flex-wrap items-center gap-4">
                <motion.a
                  href="#contact-form"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.97 }}
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
                >
                  <Send size={18} />
                  Send Message
                </motion.a>

                <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
                  <User size={16} />
                  Since 2010
                </div>
              </div>
            </motion.div>
          </div>
        </section>

        {/* Contact Form & Info */}
        <section className="w-full px-6 py-20 md:px-14 lg:px-24">
          <div className="flex w-full flex-col items-stretch gap-12 md:flex-row">

            {/* Left: Contact Form */}
            <motion.div
              id="contact-form"
              className="flex h-[100%] flex-col space-y-4 rounded-3xl border border-border bg-card/90 p-8 shadow-xl backdrop-blur-xl md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8 }}
            >
              <input placeholder="Full Name" className="form-input" />
              <input placeholder="Email Address" className="form-input" />
              <input placeholder="Company / Organization" className="form-input" />
              <textarea placeholder="Your Message" className="form-input h-32" />

              <div className="flex gap-4 pt-2 mt-auto">
                <button className="btn-primary" onClick={(e) => e.preventDefault()}>
                  <Send size={16} /> Send Message
                </button>
                <button className="btn-outline">
                  <Calendar size={16} /> Request a Meeting
                </button>
              </div>
            </motion.div>

            {/* Right: Contact Info Cards */}
            <motion.div
              className="flex h-full flex-col gap-6 md:w-1/2"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.9 }}
            >
              {/* EMAIL CARD */}
              <div className="flex flex-col gap-4 rounded-3xl border border-border bg-primary p-6 text-primary-foreground shadow-2xl">
                
                <div className="flex items-center justify-between rounded-xl bg-card p-4 text-foreground shadow-md">
                  <div className="flex items-center gap-2 text-sm">
                    <Mail size={18} /> {email}
                  </div>
                  <button onClick={handleCopy} className="small-btn-outline">
                    <Copy size={14} /> {copied ? "Copied" : "Copy"}
                  </button>
                </div>

                {/* Social Cards */}
                {links.map((item, i) => (
                  <div key={i} className="flex items-center justify-between rounded-xl bg-card p-4 text-foreground shadow-md">
                    <div className="flex items-center gap-2 text-sm">{item.icon} {item.label}</div>
                    <a href={item.href} target="_blank" className="small-btn-outline">
                      <ExternalLink size={14} /> Open
                    </a>
                  </div>
                ))}
              </div>
            </motion.div>

          </div>
        </section>
      </div>

      <Footer />

      <style jsx>{`
        .form-input {
          width: 100%;
          padding: 12px 16px;
          font-size: 0.9rem;
          border-radius: 14px;
          border: 1px solid var(--border);
          background: rgba(255,255,255,0.85);
          color: var(--foreground);
        }

        .form-input:focus {
          outline: none;
          border-color: var(--primary);
          box-shadow: 0 0 0 3px rgba(155,119,83,0.25);
        }

        .btn-primary {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          background: var(--primary);
          color: var(--primary-foreground);
          border-radius: 14px;
          font-weight: 600;
          transition: all .25s ease;
        }

        .btn-primary:hover {
          transform: translateY(-3px);
          background: rgba(155,119,83,0.92);
          box-shadow: 0 10px 28px rgba(43,33,24,0.18);
        }

        .btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 8px;
          padding: 12px 20px;
          border: 2px solid var(--primary);
          color: var(--primary);
          border-radius: 14px;
          font-weight: 600;
          transition: all .25s ease;
        }

        .btn-outline:hover {
          background: var(--primary);
          color: var(--primary-foreground);
          transform: translateY(-3px);
        }

        .small-btn-outline {
          display: inline-flex;
          align-items: center;
          gap: 6px;
          padding: 6px 14px;
          border: 2px solid var(--primary);
          color: var(--primary);
          border-radius: 12px;
          font-size: 0.75rem;
          font-weight: 600;
          transition: all .25s ease;
        }

        .small-btn-outline:hover {
          background: var(--primary);
          color: var(--primary-foreground);
        }
      `}</style>
    </>
  );
}
