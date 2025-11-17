"use client";

import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import Image from "next/image";
import { motion } from "framer-motion";
import { Card, CardContent } from "@/components/ui/card";
import {
  Globe2,
  Award,
  Users,
  ArrowRight,
  CheckCircle,
} from "lucide-react";

/**
 * About — Story-Driven / Long-Form Page (Brand Trust)
 *
 * Notes:
 * - Uses BOTH real images (where provided) and placeholders.
 *   Replace placeholder paths ("/placeholder-*.jpg") with your production images.
 * - Logo list mixes actual company URLs you provided and placeholders.
 * - Matches homepage visual identity: earth tones (#9b7753 etc.), blurred panels, rounded cards.
 * - Requires: framer-motion, lucide-react, next/image, Tailwind CSS
 */

const STAT_BADGES = [
  { label: "10+ Years", value: "2010 — Present" },
  { label: "Global Clients", value: "EMEA / APAC / PK" },
  { label: "Satisfaction", value: "98%+" },
];

const MISSION_CARDS = [
  {
    title: "Design-led Thinking",
    desc: "We place craft and context at the center of every architectural and business decision.",
    icon: <Globe2 className="w-5 h-5" />,
  },
  {
    title: "Sustainable Outcomes",
    desc: "We pursue lower-carbon, longer-life buildings and systems that increase local value.",
    icon: <Award className="w-5 h-5" />,
  },
  {
    title: "People First",
    desc: "Empowering teams and partners—growth through collaboration and trust.",
    icon: <Users className="w-5 h-5" />,
  },
];

const LOGOS = [
  // Real/Provided (use actual logo images if you have them; these point to sites you listed)
  { src: "/logos/alashrafgoc.png", alt: "Al-Ashraf Group", href: "https://alashrafgoc.com" },
  { src: "/logos/armarch.png", alt: "ArmArch", href: "https://armarchengineering.com" },
  { src: "/logos/littlekarachi.png", alt: "Cafe Little Karachi", href: "https://littlekarachirestaurant.com" },
  { src: "/logos/viralmarketing.png", alt: "Viral Marketing", href: "https://viralmarketingsolution.com" },

  // Placeholders (replace later)
  { src: "/logos/placeholder-1.svg", alt: "Partner A (placeholder)", href: "#" },
  { src: "/logos/placeholder-2.svg", alt: "Partner B (placeholder)", href: "#" },
  { src: "/logos/placeholder-3.svg", alt: "Partner C (placeholder)", href: "#" },
  { src: "/logos/placeholder-4.svg", alt: "Partner D (placeholder)", href: "#" },
];

export default function AboutLongFormPage() {
  return (
    <>
      <Navbar />

      {/* Narrative Hero (compact, narrative first) */}
      <section className="pt-28 pb-16 bg-gradient-to-br from-[#f7f5f2] to-[#efe9e3]">
        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 8 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7 }}
            className="rounded-3xl bg-white/70 backdrop-blur-sm border border-neutral-200 p-8 md:p-12 shadow-lg"
          >
            <div className="flex flex-col lg:flex-row items-start gap-6">
              <div className="flex-1">
                <p className="text-sm text-neutral-500 mb-2">CEO • Al-Ashraf Group of Companies</p>
                <h1 className="text-3xl md:text-4xl font-semibold text-neutral-900 leading-tight">
                  Building legacies — design, enterprise, and sustainable impact
                </h1>
                <p className="mt-4 text-neutral-700 max-w-2xl">
                  We combine architectural craft and strategic business thinking to deliver projects and ventures
                  that last — economically, socially, and environmentally. Our approach is simple: listen to context,
                  design with care, and scale with purpose.
                </p>

                <div className="mt-6 flex flex-wrap gap-3">
                  {STAT_BADGES.map((b) => (
                    <div
                      key={b.label}
                      className="inline-flex items-start gap-3 bg-[#fff] border border-[#e8e0d8] rounded-lg px-4 py-3 shadow-sm"
                    >
                      <div className="text-sm text-neutral-500">{b.label}</div>
                      <div className="text-sm font-medium text-neutral-800">{b.value}</div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Small portrait or brand mark */}
              <div className="w-full lg:w-80 flex-shrink-0">
                <div className="rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
                  {/* Use a provided image if available; fallback to placeholder */}
                  <Image
                    src="/dai-ali-daniyal.webp" // replace with production higher-res if available
                    alt="Dai Ali Daniyal"
                    width={380}
                    height={380}
                    className="object-cover w-full h-full"
                  />
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* Origins — split text + image */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <motion.div
            initial={{ opacity: 0, x: -12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-2 lg:order-1"
          >
            <h2 className="text-2xl font-semibold text-neutral-900 mb-4">Our Origins</h2>
            <div className="w-24 h-1 bg-gradient-to-r from-[#9b7753] to-[#ac8968] rounded-full mb-4" />
            <p className="text-neutral-700 leading-relaxed">
              What began as a family-led enterprise grew into a group of ventures grounded in craft, community, and
              resilient business operations. Early trials taught rigorous discipline, and international study broadened
              the lens — together these shaped a model that balances ambition with stewardship.
            </p>

            <p className="mt-4 text-neutral-700 leading-relaxed">
              From local projects to partnerships across regions, the origin story informs how decisions are made today:
              long-term thinking, rooted in local context and informed by global best practices.
            </p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="order-1 lg:order-2"
          >
            <div className="rounded-2xl overflow-hidden shadow-md border border-neutral-200">
              {/* IMAGE: Use a provided project or origins photo; fallback placeholder */}
              <Image
                src="/origins-photo.jpg" // replace with real image or keep placeholder
                alt="Origins"
                width={900}
                height={600}
                className="w-full object-cover"
              />
            </div>
          </motion.div>
        </div>
      </section>

      {/* Mission — centered with cards and angled separator */}
      <section className="relative bg-[#faf7f3] py-16">
        {/* Angled top divider */}
        <div className="absolute -top-8 left-0 right-0 pointer-events-none">
          <svg className="w-full block" viewBox="0 0 1440 40" preserveAspectRatio="none">
            <path d="M0 40 L1440 0 L1440 40 Z" fill="#faf7f3" />
          </svg>
        </div>

        <div className="max-w-6xl mx-auto px-6 lg:px-12">
          <motion.div initial={{ opacity: 0, y: 6 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold text-neutral-900">Our Mission</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl">
              Deliver impactful architecture and sustainable ventures, while growing responsible businesses that serve
              communities and create long-term value.
            </p>
          </motion.div>

          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {MISSION_CARDS.map((m, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 8 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: i * 0.08, duration: 0.45 }}
              >
                <Card className="rounded-2xl border border-neutral-200 hover:shadow-md transition p-4">
                  <CardContent className="p-4">
                    <div className="inline-flex items-center gap-3 bg-neutral-100 rounded-lg px-3 py-2 mb-3">
                      <div className="text-neutral-700">{m.icon}</div>
                      <div className="text-sm font-medium text-neutral-800">{m.title}</div>
                    </div>
                    <p className="text-neutral-600 text-sm leading-relaxed">{m.desc}</p>
                  </CardContent>
                </Card>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Vision — inverted split + gradient top border */}
      <section className="py-16 px-6 lg:px-12">
        <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <div className="w-full h-full rounded-2xl overflow-hidden border border-neutral-200 shadow-sm">
              <Image
                src="/vision-photo.jpg" // replace with real project/vision imagery or leave placeholder
                alt="Vision"
                width={900}
                height={600}
                className="w-full h-full object-cover"
              />
            </div>
          </div>

          <motion.div
            initial={{ opacity: 0, x: 12 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="bg-white/60 backdrop-blur-sm border border-neutral-200 rounded-2xl p-8"
          >
            <div className="flex items-center gap-3">
              <div className="w-1 h-10 bg-gradient-to-b from-[#9b7753] to-[#ac8968] rounded" />
              <h2 className="text-2xl font-semibold text-neutral-900">Our Vision</h2>
            </div>

            <p className="text-neutral-700 mt-4 leading-relaxed">
              To be a regional leader in architecture and enterprise that pioneers sustainable design, resilient
              communities, and equitable economic outcomes. We invest in people and processes that can scale ideas with
              integrity and measurable impact.
            </p>

            <ul className="mt-6 grid grid-cols-1 sm:grid-cols-2 gap-3">
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9b7753] mt-1" />
                <div className="text-sm text-neutral-700">Invest in low-impact, high-value design</div>
              </li>
              <li className="flex items-start gap-3">
                <CheckCircle className="w-5 h-5 text-[#9b7753] mt-1" />
                <div className="text-sm text-neutral-700">Scale ventures that share community benefits</div>
              </li>
            </ul>
          </motion.div>
        </div>
      </section>

      {/* Brand Trust — logos grid + metrics strip + optional marquee */}
      <section className="py-16 bg-[#fff] px-6 lg:px-12">
        <div className="max-w-6xl mx-auto">
          <motion.div initial={{ opacity: 0, y: 8 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.6 }}>
            <h2 className="text-2xl font-semibold text-neutral-900">Trusted by leading brands</h2>
            <p className="text-neutral-600 mt-2 max-w-2xl">
              Our portfolio spans design, hospitality, marketing, and enterprise—clients and partners who trust our
              delivery and long-term stewardship.
            </p>
          </motion.div>

          {/* Logo grid */}
          <motion.div
            className="mt-8 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-6 items-center"
            initial="hidden"
            whileInView="show"
            viewport={{ once: true }}
            variants={{
              hidden: {},
              show: { transition: { staggerChildren: 0.06 } },
            }}
          >
            {LOGOS.map((logo, i) => (
              <motion.a
                key={i}
                href={logo.href}
                target="_blank"
                rel="noreferrer"
                className="flex items-center justify-center p-4 bg-white border border-[#f0ebe3] rounded-xl hover:shadow-md transition"
                variants={{
                  hidden: { opacity: 0, y: 8 },
                  show: { opacity: 1, y: 0 },
                }}
              >
                <div className="w-36 h-14 relative">
                  {/* logos should be simple monochrome/small svg or png for crispness */}
                  <Image
                    src={logo.src}
                    alt={logo.alt}
                    fill
                    sizes="(max-width: 768px) 100vw, 200px"
                    style={{ objectFit: "contain" }}
                  />
                </div>
              </motion.a>
            ))}
          </motion.div>

          {/* Metrics strip */}
          <div className="mt-10 grid grid-cols-1 sm:grid-cols-3 gap-4">
            <div className="bg-[#9b7753] text-white rounded-2xl p-6 flex flex-col items-start">
              <div className="text-2xl font-semibold">250+</div>
              <div className="text-sm opacity-90">Clients served</div>
            </div>
            <div className="bg-white border border-[#e9e0d7] rounded-2xl p-6 flex flex-col items-start">
              <div className="text-2xl font-semibold">98%</div>
              <div className="text-sm text-neutral-700">Client satisfaction</div>
            </div>
            <div className="bg-white border border-[#e9e0d7] rounded-2xl p-6 flex flex-col items-start">
              <div className="text-2xl font-semibold">12+</div>
              <div className="text-sm text-neutral-700">Countries served</div>
            </div>
          </div>

          {/* optional horizontal logo marquee (simple CSS animation) */}
          <div className="mt-8 overflow-hidden">
            <div className="whitespace-nowrap animate-marquee py-2">
              {LOGOS.concat(LOGOS).map((logo, idx) => (
                <a
                  key={idx}
                  href={logo.href}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center justify-center w-48 h-14 mr-6 bg-white border border-[#f0ebe3] rounded-lg p-2"
                >
                  <div className="relative w-full h-full">
                    <Image src={logo.src} alt={logo.alt} fill style={{ objectFit: "contain" }} />
                  </div>
                </a>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Separator (wave) */}
      <div className="bg-gradient-to-b from-[#faf7f3] to-[#f7f5f2]">
        <svg viewBox="0 0 1440 80" className="w-full block">
          <path d="M0 0 C 360 80 1080 0 1440 80 L1440 80 L0 80 Z" fill="#faf7f3" />
        </svg>
      </div>

      {/* CTA / Contact Module */}
      <section className="py-16 px-6 lg:px-12 bg-gradient-to-r from-[#9b7753] to-[#ac8968]">
        <div className="max-w-6xl mx-auto">
          <div className="rounded-3xl p-8 md:p-12 bg-white/6 border border-white/10 backdrop-blur-sm flex flex-col md:flex-row items-center justify-between gap-6">
            <div>
              <h3 className="text-2xl font-semibold text-white">Let’s build the future together</h3>
              <p className="text-white/90 mt-2 max-w-xl">
                For architectural projects, enterprise partnerships, or speaking engagements — reach out and let's
                explore how to create lasting value.
              </p>
            </div>

            <div className="flex gap-3">
              <a
                href="/contact"
                className="inline-flex items-center gap-2 px-6 py-3 bg-white text-[#6b4f3b] rounded-xl font-medium shadow-md hover:opacity-95 transition"
              >
                Contact & Connect <ArrowRight size={16} />
              </a>

              <a
                href="mailto:contact@daialidaniyal.com"
                className="inline-flex items-center gap-2 px-6 py-3 border border-white/30 text-white rounded-xl font-medium hover:bg-white/10 transition"
              >
                Email Us
              </a>
            </div>
          </div>
        </div>
      </section>

      <Footer />

      {/* Tailwind helper: marquee animation */}
      <style jsx>{`
        @keyframes marquee {
          0% { transform: translateX(0); }
          100% { transform: translateX(-50%); }
        }
        .animate-marquee {
          display: inline-flex;
          gap: 0.5rem;
          animation: marquee 18s linear infinite;
        }
      `}</style>
    </>
  );
}
