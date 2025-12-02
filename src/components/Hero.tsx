"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="flex min-h-screen items-center bg-gradient-to-b from-background via-background to-secondary/60">
      <div className="mx-auto flex w-full max-w-7xl px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.9, ease: "easeOut" }}
          className="max-w-3xl rounded-3xl border border-border bg-card/95 p-10 shadow-2xl backdrop-blur md:p-12"
        >
          {/* Top Subtitle */}
          <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            CEO • Al-Ashraf Group of Companies
          </p>

          {/* Name */}
          <h2 className="mb-4 text-4xl font-semibold text-foreground md:text-5xl lg:text-6xl">
            Dai Ali Daniyal
          </h2>

          {/* Description */}
          <p className="mb-8 max-w-xl text-base leading-relaxed text-muted-foreground">
            Leadership, architectural vision, and enduring value across regions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#journey"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-medium text-primary-foreground shadow-md transition hover:bg-primary/90"
            >
              <ArrowRight size={18} />
              Discover My Journey
            </motion.a>

            <div className="flex items-center gap-2 rounded-full bg-muted px-4 py-3 text-sm font-medium text-muted-foreground">
              <User size={16} />
              Since 2010
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
