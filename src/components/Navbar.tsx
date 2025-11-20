"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

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
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Close menu if click outside
  useEffect(() => {
    function handleClickOutside(e: MouseEvent) {
      if (menuRef.current && !menuRef.current.contains(e.target as Node)) {
        setMenuOpen(false);
      }
    }
    document.addEventListener("mousedown", handleClickOutside);
    return () => document.removeEventListener("mousedown", handleClickOutside);
  }, []);

  return (
    <motion.nav
      initial={{ y: -40, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full z-50 bg-[#ede9e4]/90 backdrop-blur-md border-b border-gray-200"
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">

        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <div className="w-8 h-8 rounded-lg bg-[#6b4f3b] flex items-center justify-center text-white font-bold">
            D
          </div>
          <h1 className="font-semibold text-lg text-[#5a4634]">Dai Ali Daniyal</h1>
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-2">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={navLinks[item]}
                className="px-3 py-1.5 rounded-lg bg-[#6b4f3b] text-white text-sm 
                hover:bg-[#5a4738] transition shadow-sm"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Hamburger Button */}
        <button
          className="md:hidden text-[#5a4634]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -12 }}
            transition={{ duration: 0.25 }}
            className="md:hidden bg-[#ede9e4] border-t border-[#d6cfc5] shadow-lg"
          >
            <ul className="flex flex-col py-4 px-6 gap-3">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={navLinks[item]}
                    className="block w-full px-4 py-2 text-[#5a4634] bg-white/70 
                    backdrop-blur-sm rounded-lg shadow-sm hover:bg-[#6b4f3b] hover:text-white transition"
                    onClick={() => setMenuOpen(false)}
                  >
                    {item}
                  </Link>
                </li>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.nav>
  );
}
