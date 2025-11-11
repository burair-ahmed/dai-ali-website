'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Building2, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <>
      {/* Header Section */}
      <section className="w-full pt-10 px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Left Section - Title */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6">
            Meet Dai Ali Daniyal
          </h2>
        </div>

        {/* Right Section - Intro */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-sm text-neutral-500 text-right">
            Visionary entrepreneur, global thinker, and advocate for sustainable innovation.
          </p>
        </motion.div>
      </section>

      {/* Main Section */}
      <section className="w-full pb-10 px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-center gap-10">
        {/* Left Section - Image */}
        <div className="w-full lg:w-1/2 flex flex-col items-start">
          <div className="rounded-2xl overflow-hidden shadow-sm">
            <Image
              src="/dai-ali-daniyal.webp" // replace with your actual image path
              alt="Dai Ali Daniyal"
              width={500}
              height={300}
              className="w-full h-auto object-cover"
            />
          </div>
        </div>

        {/* Right Section - Info */}
        <motion.div
          className="w-full lg:w-1/2 flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <p className="text-neutral-700 text-base leading-relaxed">
            Dai Ali Daniyal, a distinguished figure in business and architecture, leads as the Chief Executive Officer of <strong>Al-Ashraf Group of Companies</strong>. Guided by a legacy of entrepreneurial excellence from his father, <strong>Ashraf Jabbar Qureshi</strong>, he cultivated his business acumen from a young age and grew into a visionary leader known for his innovative approach and strategic foresight.
            <br /><br />
            A graduate of <strong>Middlesex University</strong> in Business Management (Marketing), Dai Ali Daniyal expanded his expertise through a <strong>Master’s in International Business</strong> from <strong>Hult International Business School</strong>, where he gained a global perspective on modern business dynamics. 
            <br /><br />
            Returning to Pakistan, he transformed <strong>Al-Ashraf Group</strong> through analytical precision and forward-thinking leadership, spearheading expansion across multiple sectors. His passion for design and sustainability also led him to helm <strong>ArmArch</strong>, where he champions environmentally responsible architecture and contemporary innovation—redefining the architectural vision of Pakistan.
          </p>

          {/* Info Cards */}
          <div className="mt-4 flex flex-col gap-4">
            {/* Entrepreneurial Vision */}
            <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col gap-1 py-4 px-5">
                <div className="flex items-center gap-2">
                  <BadgeCheck className="w-5 h-5" />
                  <h3 className="font-semibold text-base">Entrepreneurial Vision</h3>
                </div>
                <p className="text-sm opacity-90">
                  Leading Al-Ashraf Group with innovation, integrity, and forward-focused strategy.
                </p>
              </CardContent>
            </Card>

            {/* Design & Sustainability */}
            <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col gap-1 py-4 px-5">
                <div className="flex items-center gap-2">
                  <Building2 className="w-5 h-5" />
                  <h3 className="font-semibold text-base">Design & Sustainability</h3>
                </div>
                <p className="text-sm opacity-90">
                  Championing sustainable architecture and innovative urban development through ArmArch.
                </p>
              </CardContent>
            </Card>

            {/* Global Perspective */}
            <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex flex-col gap-1 py-4 px-5">
                <div className="flex items-center gap-2">
                  <Globe2 className="w-5 h-5" />
                  <h3 className="font-semibold text-base">Global Perspective</h3>
                </div>
                <p className="text-sm opacity-90">
                  Bridging international business insights with local excellence across industries.
                </p>
              </CardContent>
            </Card>
          </div>
        </motion.div>
      </section>
    </>
  );
}
