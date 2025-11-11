"use client";

import { useState } from "react";
import { Mail, Link as LinkIcon, Instagram, Globe, Copy, ExternalLink, Send, Calendar } from "lucide-react";

export default function ContactConnect() {
  const [copied, setCopied] = useState(false);
  const email = "contact@alashrafgroup.co";

  const handleCopy = () => {
    navigator.clipboard.writeText(email);
    setCopied(true);
    setTimeout(() => setCopied(false), 1500);
  };

  const links = [
    { label: "LinkedIn", icon: <LinkIcon size={18} />, href: "#" },
    { label: "Instagram", icon: <Instagram size={18} />, href: "#" },
    { label: "Company Site", icon: <Globe size={18} />, href: "#" },
  ];

  return (
    <section className="w-full py-20 px-6 md:px-14 lg:px-24 font-inter">
        <div className="flex justify-between items-start w-full mb-4">
        <h2 className="text-3xl font-semibold text-gray-900">
          Contact & Connect

        </h2>
        <p className="text-sm text-gray-600">
          For partnerships, speaking, and collaborations
        </p>
      </div>
      <div className="flex flex-col md:flex-row gap-12 w-full">
        
        {/* Left: Contact Form */}
        <div className="md:w-1/2 bg-white rounded-2xl border border-[#e1d9d1] p-8 space-y-4">
          <input placeholder="Full Name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
          <input placeholder="Email Address" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
          <input placeholder="Company / Organization" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
          <textarea placeholder="Your Message" className="w-full rounded-xl border border-gray-300 px-4 py-3 h-32 text-sm" />

          <div className="flex gap-4 pt-2">
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#9b7753] text-white text-sm" type="submit" onClick={(e) => e.preventDefault()}>
              <Send size={16} /> Send Message
            </button>
            <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#9b7753] text-[#9b7753] text-sm">
              <Calendar size={16} /> Request a Meeting
            </button>
          </div>
        </div>

        {/* Right: Contact Cards */}
        <div className="md:w-1/2">
          <div className="rounded-3xl bg-[#9b7753] p-6">
            <div className="space-y-4">

              {/* Email */}
              <div className="bg-white rounded-xl p-4 flex justify-between items-center">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail size={18} /> {email}
                </div>
                <button onClick={handleCopy} className="flex items-center gap-1 text-sm border border-[#9b7753] text-[#9b7753] rounded-lg px-3 py-1.5">
                  <Copy size={14} /> {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Social / Links */}
              {links.map((item, i) => (
                <div key={i} className="bg-white rounded-xl p-4 flex justify-between items-center">
                  <div className="flex items-center gap-2 text-sm text-gray-700">
                    {item.icon} {item.label}
                  </div>
                  <a
                    href={item.href}
                    target="_blank"
                    className="flex items-center gap-1 text-sm border border-[#9b7753] text-[#9b7753] rounded-lg px-3 py-1.5"
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
