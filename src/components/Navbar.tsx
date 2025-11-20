"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["About", "Vision", "Companies", "Podcasts", "Gallery", "Contact"];

const navLinks: Record<string, string> = {
  About: "/about",
  // Vision: "/vision",
  Companies: "/companies",
  Podcasts: "/podcasts",
  // Gallery: "/gallery",
  Contact: "/contact",
};

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

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
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="
        fixed top-0 left-0 w-full z-50 
        bg-[#f4ece6]/70 backdrop-blur-xl
        border-b border-[#c7b8a6]/50 
        shadow-[0_4px_20px_rgba(0,0,0,0.08)]
      "
    >
      <div className="max-w-7xl mx-auto flex items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="flex items-center gap-3 group">
          <div className="
            w-9 h-9 rounded-xl 
            bg-[#6b4f3b] shadow-md 
            flex items-center justify-center 
            text-white font-bold 
            transition group-hover:scale-[1.08]
          ">
            D
          </div>
          <h1 className="font-semibold text-lg text-[#4b3a2c]">
            Dai Ali Daniyal
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden md:flex gap-3">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={navLinks[item]}
                className="
                  px-3 py-2 rounded-xl text-sm font-medium
                  bg-[#7b6044]/20 text-[#4b3a2c]
                  backdrop-blur-md border border-[#7b6044]/20
                  hover:bg-[#7b6044] hover:text-white
                  transition-all duration-300 shadow-sm
                "
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          className="md:hidden text-[#4b3a2c]"
          onClick={() => setMenuOpen((prev) => !prev)}
        >
          {menuOpen ? <X size={30} /> : <Menu size={30} />}
        </button>
      </div>

      {/* Mobile Menu Drawer */}
      <AnimatePresence>
        {menuOpen && (
          <motion.div
            ref={menuRef}
            initial={{ opacity: 0, y: -10 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -10 }}
            transition={{ duration: 0.3 }}
            className="
              md:hidden bg-[#f4ece6]/90 
              backdrop-blur-xl border-t border-[#c7b8a6]/50 shadow-xl
            "
          >
            <ul className="flex flex-col py-4 px-6 gap-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={navLinks[item]}
                    className="
                      block px-4 py-2 rounded-lg text-[#4b3a2c] text-base
                      bg-white/70 shadow-sm border border-[#7b6044]/10
                      hover:bg-[#7b6044] hover:text-white 
                      transition-all duration-300
                    "
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
