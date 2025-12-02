import { motion } from "framer-motion";
import Image from "next/image";
import { CheckCircle } from "lucide-react";

const VISION_POINTS = [
  "Innovative architectural solutions that push boundaries",
  "Sustainable development that respects our environment",
  "Communities that thrive through thoughtful design",
  "Legacy projects that stand the test of time",
  "Global impact with local sensitivity"
];

export function VisionPanel() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 left-0 w-1/2 h-full bg-gradient-to-r from-white to-transparent z-10" />
        <div className="absolute top-1/2 -right-40 w-80 h-80 bg-[#9b7753]/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Image - Left side */}
          <motion.div 
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-2 lg:order-1"
          >
            <div className="relative">
              {/* Main image with frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-16 aspect-h-9 w-full">
                  <Image
                    src="/vision-image.jpg" // Replace with your image
                    alt="Our vision for the future"
                    width={800}
                    height={600}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
              </div>
              
              {/* Floating element */}
              <motion.div 
                initial={{ opacity: 0, scale: 0.8 }}
                whileInView={{ opacity: 1, scale: 1 }}
                viewport={{ once: true }}
                transition={{ delay: 0.4, duration: 0.6 }}
                className="absolute -bottom-6 -left-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-100 z-20"
              >
                <div className="text-4xl font-bold text-[#9b7753] mb-1">50+</div>
                <div className="text-sm font-medium text-neutral-600">Projects Completed</div>
              </motion.div>
            </div>
          </motion.div>

          {/* Content - Right side */}
          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 order-1 lg:order-2"
          >
            <div className="space-y-8">
              <div className="space-y-4">
                <div className="flex items-center">
                  <div className="h-px w-12 bg-gradient-to-r from-[#9b7753] to-[#ac8968]" />
                  <span className="ml-4 text-sm font-medium text-[#9b7753] tracking-widest">OUR VISION</span>
                </div>
                <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                  Shaping the Future of <span className="text-[#9b7753]">Architectural Excellence</span>
                </h2>
                <div className="h-1 w-16 bg-gradient-to-r from-[#9b7753] to-[#ac8968] rounded-full" />
              </div>

              <p className="text-lg text-neutral-700 leading-relaxed">
                We envision a world where architecture serves as a bridge between human aspiration and environmental 
                responsibility. Our commitment is to create spaces that don't just stand the test of time, but 
                actively contribute to the well-being of people and the planet.
              </p>

              <div className="space-y-4 pt-4">
                {VISION_POINTS.map((point, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, x: 20 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: 0.1 * index, duration: 0.5 }}
                    className="flex items-start space-x-3"
                  >
                    <CheckCircle className="flex-shrink-0 w-5 h-5 text-[#9b7753] mt-0.5" />
                    <p className="text-neutral-700">{point}</p>
                  </motion.div>
                ))}
              </div>

              <div className="pt-4">
                <div className="flex flex-col sm:flex-row gap-4 pt-2">
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 bg-gradient-to-r from-[#9b7753] to-[#ac8968] text-white font-medium rounded-lg shadow-md hover:shadow-lg transition-all duration-300 text-center"
                  >
                    Explore Our Work
                  </motion.button>
                  <motion.button
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="px-6 py-3 border border-neutral-300 text-neutral-700 font-medium rounded-lg hover:bg-neutral-50 transition-all duration-300 text-center"
                  >
                    Contact Us
                  </motion.button>
                </div>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
