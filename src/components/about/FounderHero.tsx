import { motion } from "framer-motion";
import Image from "next/image";
import { cn } from "@/lib/utils";

const STAT_BADGES = [
  { label: "10+ Years", value: "2010 — Present" },
  { label: "Global Clients", value: "EMEA / APAC / PK" },
  { label: "Satisfaction", value: "98%+" },
];

export function FounderHero() {
  return (
    <section className="pt-32 pb-24 bg-gradient-to-br from-[#f9f7f4] to-[#f0e9e0] relative overflow-hidden">
      {/* Background elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
        <div className="absolute inset-0 bg-gradient-to-br from-transparent via-white/30 to-transparent" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
          className="relative"
        >
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
            {/* Content */}
            <div className="lg:col-span-7 space-y-8">
              <motion.div
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2, duration: 0.6 }}
                className="inline-flex items-center px-4 py-2 rounded-full bg-white/80 backdrop-blur-sm border border-neutral-200 shadow-sm"
              >
                <span className="h-2 w-2 rounded-full bg-[#9b7753] mr-2" />
                <span className="text-sm font-medium text-neutral-700">Founder & CEO</span>
              </motion.div>

              <motion.h1
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 0.6 }}
                className="text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-neutral-900 leading-tight"
              >
                Building Legacies Through <span className="text-[#9b7753]">Design</span> & <span className="text-[#9b7753]">Enterprise</span>
              </motion.h1>

              <motion.p
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="text-lg text-neutral-700 max-w-2xl leading-relaxed"
              >
                We combine architectural craft with strategic business thinking to deliver projects and ventures that last — economically, socially, and environmentally.
              </motion.p>

              {/* Stats Grid */}
              <motion.div 
                initial="hidden"
                animate="visible"
                variants={{
                  hidden: { opacity: 0 },
                  visible: {
                    opacity: 1,
                    transition: {
                      staggerChildren: 0.1,
                      delayChildren: 0.6,
                    },
                  },
                }}
                className="grid grid-cols-2 md:grid-cols-3 gap-4 mt-8"
              >
                {STAT_BADGES.map((badge, index) => (
                  <motion.div
                    key={badge.label}
                    variants={{
                      hidden: { opacity: 0, y: 20 },
                      visible: {
                        opacity: 1,
                        y: 0,
                        transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
                      },
                    }}
                    className={cn(
                      "bg-white/80 backdrop-blur-sm rounded-2xl p-5 border border-neutral-200 shadow-sm",
                      "hover:shadow-md transition-shadow duration-300"
                    )}
                  >
                    <p className="text-sm text-neutral-500 mb-1">{badge.label}</p>
                    <p className="text-lg font-semibold text-neutral-900">{badge.value}</p>
                  </motion.div>
                ))}
              </motion.div>
            </div>

            {/* Portrait */}
            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ delay: 0.5, duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
              className="lg:col-span-5 relative"
            >
              <div className="relative">
                <div className="absolute -inset-4 bg-gradient-to-br from-[#9b7753]/20 to-[#ac8968]/10 rounded-3xl -rotate-1" />
                <div className="relative rounded-2xl overflow-hidden border border-white/30 shadow-2xl">
                  <Image
                    src="/dai-ali-daniyal.webp"
                    alt="Dai Ali Daniyal"
                    width={500}
                    height={700}
                    className="w-full h-auto object-cover"
                    priority
                  />
                </div>
                {/* Decorative elements */}
                <div className="absolute -bottom-6 -left-6 w-24 h-24 bg-[#9b7753]/10 rounded-full mix-blend-multiply filter blur-xl" />
                <div className="absolute -top-6 -right-6 w-32 h-32 bg-[#ac8968]/10 rounded-full mix-blend-multiply filter blur-xl" />
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
