import { motion } from "framer-motion";
import Image from "next/image";

export function OriginsPanel() {
  return (
    <section className="py-24 bg-white relative overflow-hidden">
      {/* Decorative elements */}
      <div className="absolute inset-0 overflow-hidden">
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-[#f9f7f4] to-transparent -z-10" />
        <div className="absolute -bottom-40 -right-40 w-80 h-80 bg-[#9b7753]/5 rounded-full mix-blend-multiply filter blur-3xl" />
      </div>

      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 space-y-6"
          >
            <div className="space-y-4">
              <div className="flex items-center">
                <div className="h-px w-12 bg-gradient-to-r from-[#9b7753] to-[#ac8968]" />
                <span className="ml-4 text-sm font-medium text-[#9b7753] tracking-widest">OUR STORY</span>
              </div>
              <h2 className="text-3xl md:text-4xl font-bold text-neutral-900 leading-tight">
                From Humble Beginnings to Global Vision
              </h2>
              <div className="h-1 w-16 bg-gradient-to-r from-[#9b7753] to-[#ac8968] rounded-full" />
            </div>

            <div className="space-y-6">
              <p className="text-lg text-neutral-700 leading-relaxed">
                What began as a family-led enterprise in Pakistan has evolved into an international group of ventures 
                grounded in craft, community, and resilient business operations. Our journey has been shaped by 
                both local roots and global perspectives.
              </p>
              
              <p className="text-lg text-neutral-700 leading-relaxed">
                Early challenges taught us the value of discipline and perseverance, while international experiences 
                broadened our vision. This unique combination informs our approach today: ambitious yet grounded, 
                innovative yet respectful of tradition.
              </p>

              <div className="pt-4">
                <div className="flex items-start space-x-4">
                  <div className="flex-shrink-0 mt-1">
                    <div className="h-1.5 w-6 bg-[#9b7753] rounded-full" />
                  </div>
                  <p className="text-sm text-neutral-600 italic">
                    "We believe in building not just structures, but lasting relationships and communities."
                  </p>
                </div>
              </div>
            </div>
          </motion.div>

          {/* Image */}
          <motion.div 
            initial={{ opacity: 0, x: 40, rotate: 1 }}
            whileInView={{ opacity: 1, x: 0, rotate: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.8, delay: 0.2, ease: [0.16, 1, 0.3, 1] }}
            className="lg:col-span-6 relative"
          >
            <div className="relative">
              {/* Image container with elegant frame */}
              <div className="relative z-10 rounded-2xl overflow-hidden shadow-2xl">
                <div className="aspect-w-3 aspect-h-4 w-full">
                  <Image
                    src="/MQP05921 copy_1.webp" // Replace with your image
                    alt="Our humble beginnings"
                    width={600}
                    height={800}
                    className="w-full h-full object-cover"
                  />
                </div>
                {/* Gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-neutral-900/40 to-transparent" />
              </div>
              
              {/* Decorative elements */}
              <div className="absolute -bottom-6 -left-6 w-32 h-32 bg-[#9b7753]/5 rounded-full -z-10" />
              <div className="absolute -top-6 -right-6 w-48 h-48 bg-[#ac8968]/5 rounded-full -z-10" />
              
              {/* Floating stat */}
              <motion.div 
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ delay: 0.6, duration: 0.6 }}
                className="absolute -bottom-6 -right-6 bg-white p-6 rounded-xl shadow-lg border border-neutral-100 z-10"
              >
                <div className="text-4xl font-bold text-[#9b7753] mb-1">2010</div>
                <div className="text-sm font-medium text-neutral-600">Founded</div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
