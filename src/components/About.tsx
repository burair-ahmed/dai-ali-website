'use client';

import Image from 'next/image';
import { motion } from 'framer-motion';
import { Card, CardContent } from '@/components/ui/card';
import { BadgeCheck, Building2, Globe2 } from 'lucide-react';

export default function About() {
  return (
    <>
    <section className="w-full pt-10 px-6 lg:px-16 flex flex-col lg:flex-row items-start justify-center gap-10">
      {/* Left Section - Image */}
      <div className="w-full lg:w-1/2 flex flex-col items-start">
        <h2 className="text-2xl sm:text-3xl font-semibold text-neutral-900 mb-6">
          Meet Dai Ali Daniyal
        </h2>

      </div>

      {/* Right Section - Info */}
      <motion.div
        className="w-full lg:w-1/2 flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        <p className="text-sm text-neutral-500 text-right">
          Founder, strategist, and patron of timeless design
        </p>

      </motion.div>
    </section>

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
        className="w-full lg:w-1/2flex flex-col gap-4 bg-white/50 backdrop-blur-sm p-6 rounded-2xl border border-neutral-200"
        initial={{ opacity: 0, y: 10 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
    

        <p className="text-neutral-700 text-base leading-relaxed">
          Meet Dai Ali Daniyal, a stalwart in the world of business and architecture, serving as the dynamic Chief Executive Officer of Al-Ashraf Group of Companies. With an inspiring entrepreneurial lineage and a passion for innovative business practices, Dai Ali Daniyal is at the forefront of shaping the future of multiple industries. Inheriting a legacy of entrepreneurial excellence from his father, Ashraf Jabbar Qureshi, Dai Ali Daniyal, was steeped in the ethos of business from a young age.
        </p>

        {/* Info Cards */}
        <div className="mt-4 flex flex-col gap-4">
          {/* Strategic Leadership */}
          <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col gap-1 py-4 px-5">
              <div className="flex items-center gap-2">
                <BadgeCheck className="w-5 h-5" />
                <h3 className="font-semibold text-base">Strategic Leadership</h3>
              </div>
              <p className="text-sm opacity-90">
                Steering high-impact projects with disciplined execution and
                resilient governance.
              </p>
            </CardContent>
          </Card>

          {/* Architectural Patronage */}
          <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col gap-1 py-4 px-5">
              <div className="flex items-center gap-2">
                <Building2 className="w-5 h-5" />
                <h3 className="font-semibold text-base">
                  Architectural Patronage
                </h3>
              </div>
              <p className="text-sm opacity-90">
                Championing spaces that blend tradition with contemporary
                excellence.
              </p>
            </CardContent>
          </Card>

          {/* Regional Impact */}
          <Card className="bg-[#ac8968] text-white rounded-xl shadow-md hover:shadow-lg transition-shadow">
            <CardContent className="flex flex-col gap-1 py-4 px-5">
              <div className="flex items-center gap-2">
                <Globe2 className="w-5 h-5" />
                <h3 className="font-semibold text-base">Regional Impact</h3>
              </div>
              <p className="text-sm opacity-90">
                Building partnerships across MENA and South Asia, aligned with
                long-term value.
              </p>
            </CardContent>
          </Card>
        </div>
      </motion.div>
    </section>
  </>
);
}
