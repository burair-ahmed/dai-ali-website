import { motion } from "framer-motion";

const METRICS = [
  { value: "10+", label: "Years Experience", suffix: "" },
  { value: "50+", label: "Projects Completed", suffix: "" },
  { value: "98", label: "Client Satisfaction", suffix: "%" },
  { value: "15+", label: "Countries Served", suffix: "" },
];

export function MetricsStrip() {
  return (
    <section className="py-12 bg-gradient-to-r from-[#9b7753] to-[#ac8968] relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.03]" />
        <div className="absolute inset-0 bg-gradient-to-r from-[#9b7753]/90 to-[#ac8968]/90" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8 relative">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8">
          {METRICS.map((metric, index) => (
            <motion.div
              key={metric.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-50px" }}
              transition={{ 
                duration: 0.6, 
                delay: index * 0.1,
                ease: [0.16, 1, 0.3, 1] 
              }}
              className="text-center p-6 bg-white/10 backdrop-blur-sm rounded-2xl border border-white/10 hover:bg-white/15 transition-colors duration-300"
            >
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">
                {metric.value}<span className="text-white/80">{metric.suffix}</span>
              </div>
              <div className="text-sm font-medium text-white/80 tracking-wider">
                {metric.label}
              </div>
              
              {/* Animated underline on hover */}
              <div className="mt-4 flex justify-center">
                <div className="h-0.5 w-8 bg-white/30 group-hover:bg-white/60 transition-colors duration-300" />
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
