"use client";

import Link from "next/link";
import { motion } from "framer-motion";

const navItems = ["About", "Vision", "Companies", "Podcasts", "Gallery", "Contact"];

const navLinks: Record<string, string> = {
  About: "/about",
  Vision: "/vision",
  Companies: "/companies",
  Podcasts: "/podcasts",
  Gallery: "/gallery",
  Contact: "/contact",
};

export default function Navbar() {
  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#ede9e4]/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#6b4f3b] flex items-center justify-center text-white font-bold">
            <span>D</span>
          </div>
          <h1 className="font-semibold text-lg text-black">Dai Ali Daniyal</h1>
        </div>

        <ul className="flex gap-4">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={navLinks[item]}
                className="px-3 py-1.5 rounded-md bg-[#3b2e23] text-white text-sm hover:bg-[#5a4738] transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      </div>
    </motion.nav>
  );
}
