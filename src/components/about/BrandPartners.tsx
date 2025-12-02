import { motion } from "framer-motion";
import { PartnerLogo } from "./PartnerLogo";

// Sample partner logos - replace with actual partner logos
const PARTNERS = [
  { src: "/logos/partner-1.svg", alt: "Partner 1", href: "#" },
  { src: "/logos/partner-2.svg", alt: "Partner 2", href: "#" },
  { src: "/logos/partner-3.svg", alt: "Partner 3", href: "#" },
  { src: "/logos/partner-4.svg", alt: "Partner 4", href: "#" },
  { src: "/logos/partner-5.svg", alt: "Partner 5", href: "#" },
  { src: "/logos/partner-6.svg", alt: "Partner 6", href: "#" },
];

export function BrandPartners() {
  return (
    <section className="py-24 bg-neutral-50 relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-32 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-32 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-64 bg-[#9b7753]/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative z-20">
        {/* Section header */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto mb-16"
        >
          <div className="inline-flex items-center justify-center px-4 py-2 rounded-full bg-[#f0e9e0] mb-4">
            <span className="text-sm font-medium text-[#9b7753]">Trusted By Industry Leaders</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Our Valued <span className="text-[#9b7753]">Partners</span>
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9b7753] to-[#ac8968] mx-auto rounded-full mb-8" />
          <p className="text-lg text-neutral-700">
            We're proud to collaborate with forward-thinking organizations that share our commitment to excellence and innovation in architecture and design.
          </p>
        </motion.div>

        {/* Partners grid */}
        <motion.div
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, margin: "-50px" }}
          variants={{
            hidden: { opacity: 0 },
            visible: {
              opacity: 1,
              transition: {
                staggerChildren: 0.05,
                delayChildren: 0.2,
              },
            },
          }}
          className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-4 md:gap-6"
        >
          {PARTNERS.map((partner, index) => (
            <PartnerLogo
              key={index}
              src={partner.src}
              alt={partner.alt}
              href={partner.href}
              index={index}
            />
          ))}
        </motion.div>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-16 text-center"
        >
          <h3 className="text-xl font-semibold text-neutral-900 mb-4">Become a Partner</h3>
          <p className="text-neutral-600 max-w-2xl mx-auto mb-6">
            Interested in collaborating with us? Let's explore how we can create something remarkable together.
          </p>
          <motion.button
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="px-6 py-3 bg-gradient-to-r from-[#9b7753] to-[#ac8968] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300"
          >
            Get in Touch
          </motion.button>
        </motion.div>
      </div>
    </section>
  );
}
