import { motion } from "framer-motion";
import { MissionCard } from "./MissionCard";
import { Globe2, Award, Users } from "lucide-react";

const MISSION_ITEMS = [
  {
    title: "Design-led Thinking",
    description: "We place craft and context at the center of every architectural and business decision, ensuring thoughtful and intentional design solutions.",
    icon: <Globe2 className="w-5 h-5" />
  },
  {
    title: "Sustainable Outcomes",
    description: "Committed to lower-carbon, longer-life buildings and systems that enhance local value and environmental stewardship.",
    icon: <Award className="w-5 h-5" />
  },
  {
    title: "People First",
    description: "Empowering teams and partners through collaboration, trust, and shared growth opportunities.",
    icon: <Users className="w-5 h-5" />
  }
];

export function MissionGrid() {
  return (
    <section className="py-24 bg-gradient-to-b from-white to-[#f9f7f4] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-full h-1/2 bg-gradient-to-b from-white to-transparent z-10" />
        <div className="absolute bottom-0 left-0 w-full h-1/2 bg-gradient-to-t from-white to-transparent z-10" />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-3/4 h-3/4 bg-[#9b7753]/5 rounded-full mix-blend-multiply filter blur-3xl" />
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
            <span className="text-sm font-medium text-[#9b7753]">Our Guiding Principles</span>
          </div>
          <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 mb-6">
            Building With Purpose & Precision
          </h2>
          <div className="w-16 h-1 bg-gradient-to-r from-[#9b7753] to-[#ac8968] mx-auto rounded-full mb-8" />
          <p className="text-lg text-neutral-700">
            Our approach combines innovative design, sustainable practices, and a deep commitment to the communities we serve.
          </p>
        </motion.div>

        {/* Mission cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {MISSION_ITEMS.map((item, index) => (
            <MissionCard
              key={item.title}
              title={item.title}
              description={item.description}
              icon={item.icon}
              index={index}
            />
          ))}
        </div>

        {/* Testimonial at the bottom */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 0.6 }}
          className="mt-20 max-w-4xl mx-auto text-center"
        >
          <div className="relative inline-flex">
            <svg 
              className="absolute -left-4 -top-4 w-10 h-10 text-[#9b7753] opacity-20" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
            <blockquote className="text-xl italic text-neutral-700">
              "We don't just build structures; we create environments that inspire, function, and endure. Every project is an opportunity to push boundaries while respecting our shared future."
            </blockquote>
            <svg 
              className="absolute -right-4 -bottom-4 w-10 h-10 text-[#9b7753] opacity-20 transform rotate-180" 
              fill="currentColor" 
              viewBox="0 0 24 24"
            >
              <path d="M14.017 21v-7.391c0-5.704 3.731-9.57 8.983-10.609l.995 2.151c-2.432.917-3.995 3.638-3.995 5.849h4v10h-9.983zm-14.017 0v-7.391c0-5.704 3.748-9.57 9-10.609l.996 2.151c-2.433.917-3.996 3.638-3.996 5.849h3.983v10h-9.983z" />
            </svg>
          </div>
          <div className="mt-6">
            <p className="font-medium text-neutral-900">Dai Ali Daniyal</p>
            <p className="text-sm text-neutral-600">Founder & CEO</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
