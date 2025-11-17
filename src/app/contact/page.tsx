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
        <Navbar/>
    <div className="w-full font-inter">
      {/* Hero Section */}
      <section className="min-h-[70vh] py-16 flex items-center bg-gradient-to-b from-gray-200 to-gray-400">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12 ">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#faf8f6]/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl p-10 md:p-12"
          >
            <p className="text-sm text-gray-500 mb-3 tracking-wide">
              Get in Touch
            </p>
            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              Contact Dai Ali Daniyal
            </h2>
            <p className="text-gray-600 mb-8 leading-relaxed">
              Have questions, collaboration ideas, or partnership opportunities? Fill the form below or reach out via our direct channels.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#contact-form"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6b4f3b] text-white rounded-full font-medium shadow-md hover:bg-[#5a4738] transition"
              >
                <Send size={18} />
                Send Message
              </motion.a>

              <div className="flex items-center gap-2 text-gray-600 bg-[#e3e3e3] px-4 py-3 rounded-full text-sm font-medium">
                <User size={16} />
                Since 2010
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Contact Form & Info */}
      <section className="w-full py-20 px-6 md:px-14 lg:px-24">
        <div className="flex flex-col md:flex-row gap-12 w-full items-stretch">

          {/* Left: Contact Form */}
          <motion.div
            id="contact-form"
            className="md:w-1/2 bg-white rounded-2xl border border-[#e1d9d1] p-8 space-y-4 h-[100%] flex flex-col"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8 }}
          >
            <input placeholder="Full Name" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
            <input placeholder="Email Address" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
            <input placeholder="Company / Organization" className="w-full rounded-xl border border-gray-300 px-4 py-3 text-sm" />
            <textarea placeholder="Your Message" className="w-full rounded-xl border border-gray-300 px-4 py-3 h-32 text-sm" />

            <div className="flex gap-4 pt-2 mt-auto">
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl bg-[#9b7753] text-white text-sm" type="submit" onClick={(e) => e.preventDefault()}>
                <Send size={16} /> Send Message
              </button>
              <button className="flex items-center gap-2 px-5 py-3 rounded-xl border border-[#9b7753] text-[#9b7753] text-sm">
                <Calendar size={16} /> Request a Meeting
              </button>
            </div>
          </motion.div>

          {/* Right: Contact Info Cards */}
          <motion.div
            className="md:w-1/2 h-full flex flex-col gap-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            {/* Email Card */}
            <div className="bg-[#9b7753] rounded-3xl p-6 flex flex-col gap-4 h-[100%] justify-between">
              <div className="flex justify-between items-center bg-white rounded-xl p-4">
                <div className="flex items-center gap-2 text-sm text-gray-700">
                  <Mail size={18} /> {email}
                </div>
                <button
                  onClick={handleCopy}
                  className="flex items-center gap-1 text-sm border border-[#9b7753] text-[#9b7753] rounded-lg px-3 py-1.5"
                >
                  <Copy size={14} /> {copied ? "Copied" : "Copy"}
                </button>
              </div>

              {/* Social / Links */}
              {links.map((item, i) => (
                <div
                  key={i}
                  className="bg-white rounded-xl p-4 flex justify-between items-center"
                >
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
          </motion.div>

        </div>
      </section>
    </div>
      <Footer/>
  </>
  );
}
