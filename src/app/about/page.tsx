"use client";

// Core
import { motion } from "framer-motion";

// Components
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// About Page Components
import { FounderHero } from "@/components/about/FounderHero";
import { OriginsPanel } from "@/components/about/OriginsPanel";
import { MissionGrid } from "@/components/about/MissionGrid";
import { VisionPanel } from "@/components/about/VisionPanel";
import { BrandPartners } from "@/components/about/BrandPartners";
import { MetricsStrip } from "@/components/about/MetricsStrip";
import { CTASection } from "@/components/about/CTASection";

/**
 * About — Premium Brand Story Page
 * 
 * A cinematic, founder-driven brand narrative that communicates authority, vision,
 * and credibility through premium design and engaging storytelling.
 * 
 * Features:
 * - Cinematic founder hero section
 * - Premium split layouts
 * - Animated mission cards
 * - Interactive elements
 * - Responsive design
 * - Performance optimized
 */

export default function AboutLongFormPage() {
  return (
    <main className="overflow-hidden">
      <Navbar />
      
      {/* 1. Hero Section */}
      <FounderHero />
      
      {/* 2. Origins Section */}
      <OriginsPanel />
      
      {/* 3. Mission Section */}
      <MissionGrid />
      
      {/* 4. Metrics Strip */}
      <MetricsStrip />
      
      {/* 5. Vision Section */}
      <VisionPanel />
      
      {/* 6. Brand Partners */}
      <BrandPartners />
      
      {/* 7. CTA Section */}
      <CTASection />
      
      <Footer />
    </main>
  );
}
