"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Menu, X } from "lucide-react";

const navItems = ["About" , "Companies", "Podcasts", "Contact"];
const navLinks: Record<string, string> = {
  About: "/about",
  Companies: "/companies",
  Podcasts: "/podcasts",
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
      className="fixed top-0 left-0 z-50 w-full border-b bg-background/80 backdrop-blur-xl shadow-[0_4px_20px_rgba(0,0,0,0.06)]"
    >
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        
        {/* Logo */}
        <Link href="/" className="group flex items-center gap-3">
          <div
            className="flex h-9 w-9 items-center justify-center rounded-xl bg-primary shadow-md text-sm font-semibold text-primary-foreground transition group-hover:scale-[1.05]"
          >
            D
          </div>
          <h1 className="text-base font-semibold text-foreground md:text-lg">
            Dai Ali Daniyal
          </h1>
        </Link>

        {/* Desktop Navigation */}
        <ul className="hidden items-center gap-3 md:flex">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                href={navLinks[item]}
                className="rounded-full px-3 py-2 text-sm font-medium text-muted-foreground transition-all duration-200 hover:bg-primary/10 hover:text-foreground"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Toggle Button */}
        <button
          className="text-foreground md:hidden"
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
            className="md:hidden border-t border-border bg-background/95 backdrop-blur-xl shadow-xl"
          >
            <ul className="flex flex-col gap-4 px-6 py-4">
              {navItems.map((item) => (
                <li key={item}>
                  <Link
                    href={navLinks[item]}
                    className="block rounded-xl border border-border bg-card px-4 py-2 text-base text-foreground shadow-sm transition-all duration-200 hover:bg-primary hover:text-primary-foreground"
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
