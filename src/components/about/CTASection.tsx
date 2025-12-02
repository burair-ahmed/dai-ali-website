import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

export function CTASection() {
  return (
    <section className="relative py-24 overflow-hidden">
      {/* Background gradient */}
      <div className="absolute inset-0 bg-gradient-to-br from-[#f9f7f4] to-[#f0e9e0] -z-10" />
      
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute -top-40 -right-40 w-80 h-80 bg-[#9b7753]/5 rounded-full mix-blend-multiply filter blur-3xl" />
        <div className="absolute -bottom-40 -left-40 w-96 h-96 bg-[#ac8968]/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.8 }}
          className="relative bg-gradient-to-r from-[#9b7753] to-[#ac8968] rounded-3xl overflow-hidden shadow-2xl"
        >
          {/* Decorative elements */}
          <div className="absolute inset-0 overflow-hidden">
            <div className="absolute inset-0 bg-[url('/grid-pattern.svg')] opacity-[0.02]" />
            <div className="absolute -top-20 -right-20 w-64 h-64 bg-white/5 rounded-full" />
            <div className="absolute -bottom-20 -left-20 w-64 h-64 bg-white/5 rounded-full" />
          </div>

          <div className="relative z-10 px-8 py-16 sm:p-16 lg:flex lg:items-center lg:justify-between">
            <div className="lg:w-2/3">
              <h2 className="text-3xl md:text-4xl font-bold text-white mb-4">
                Ready to bring your vision to life?
              </h2>
              <p className="text-lg text-white/90 max-w-2xl">
                Let's collaborate on creating something extraordinary. Our team is ready to discuss your project and explore how we can help you achieve your goals.
              </p>
              
              <div className="mt-8 flex flex-col sm:flex-row gap-4">
                <motion.a
                  href="/contact"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-8 py-4 bg-white text-[#9b7753] font-medium rounded-xl shadow-lg hover:shadow-xl transition-all duration-300 group"
                >
                  <span>Start a Project</span>
                  <ArrowRight className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" />
                </motion.a>
                
                <motion.a
                  href="/contact"
                  whileHover={{ 
                    scale: 1.03,
                    transition: { duration: 0.2 }
                  }}
                  whileTap={{ scale: 0.98 }}
                  className="flex items-center justify-center px-8 py-4 bg-transparent border-2 border-white/30 text-white font-medium rounded-xl hover:bg-white/10 transition-all duration-300 group"
                >
                  <span>Schedule a Call</span>
                  <svg 
                    className="ml-2 h-5 w-5 group-hover:translate-x-1 transition-transform duration-200" 
                    fill="none" 
                    viewBox="0 0 24 24" 
                    stroke="currentColor"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                  </svg>
                </motion.a>
              </div>
            </div>
            
            {/* Decorative element */}
            <div className="hidden lg:block absolute right-16 top-1/2 -translate-y-1/2 w-64 h-64 bg-white/5 rounded-full mix-blend-overlay" />
          </div>
        </motion.div>
        
        {/* Footer note */}
        <motion.div 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="mt-12 text-center"
        >
          <p className="text-sm text-neutral-500">
            © {new Date().getFullYear()} Al-Ashraf Group of Companies. All rights reserved.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
