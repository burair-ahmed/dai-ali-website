"use client";

import { motion } from "framer-motion";
import { ArrowRight, User } from "lucide-react";

export default function Hero() {
  return (
    <section className="min-h-screen flex items-center bg-gradient-to-b from-gray-200 to-gray-400">
      <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="bg-[#faf8f6]/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl p-10 md:p-12"
        >
          {/* Top Subtitle */}
          <p className="text-sm text-gray-500 mb-3 tracking-wide">
            CEO • Al-Ashraf Group of Companies
          </p>

          {/* Name */}
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
            Dai Ali Daniyal
          </h2>

          {/* Description */}
          <p className="text-gray-600 mb-8 leading-relaxed">
            Leadership, architectural vision, and enduring value across regions.
          </p>

          {/* Buttons */}
          <div className="flex flex-wrap items-center gap-4">
            <motion.a
              href="#journey"
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.97 }}
              className="inline-flex items-center gap-2 px-6 py-3 bg-[#6b4f3b] text-white rounded-full font-medium shadow-md hover:bg-[#5a4738] transition"
            >
              <ArrowRight size={18} />
              Discover My Journey
            </motion.a>

            <div className="flex items-center gap-2 text-gray-600 bg-[#e3e3e3] px-4 py-3 rounded-full text-sm font-medium">
              <User size={16} />
              Since 2010
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
