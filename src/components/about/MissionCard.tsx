import { motion } from "framer-motion";
import { cn } from "@/lib/utils";

interface MissionCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

export function MissionCard({ title, description, icon, index }: MissionCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 30 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{ 
        duration: 0.6, 
        delay: index * 0.1,
        ease: [0.16, 1, 0.3, 1] 
      }}
      whileHover={{ y: -8, transition: { duration: 0.3 } }}
      className="relative h-full group"
    >
      <div className={cn(
        "h-full bg-white rounded-2xl p-8 border border-neutral-200 shadow-sm",
        "transition-all duration-300 group-hover:shadow-lg group-hover:border-transparent",
        "flex flex-col"
      )}>
        {/* Icon with gradient background */}
        <div className="mb-6">
          <div className="w-14 h-14 rounded-xl bg-gradient-to-br from-[#9b7753] to-[#ac8968] flex items-center justify-center text-white shadow-md">
            {icon}
          </div>
        </div>
        
        {/* Content */}
        <h3 className="text-xl font-bold text-neutral-900 mb-3">{title}</h3>
        <p className="text-neutral-600 leading-relaxed flex-grow">{description}</p>
        
        {/* Animated arrow */}
        <div className="mt-6">
          <div className="w-8 h-8 rounded-full bg-neutral-100 flex items-center justify-center group-hover:bg-[#9b7753]/10 transition-colors duration-300">
            <svg 
              className="w-4 h-4 text-neutral-400 group-hover:text-[#9b7753] transition-colors duration-300" 
              fill="none" 
              viewBox="0 0 24 24" 
              stroke="currentColor"
            >
              <path 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                strokeWidth={2} 
                d="M14 5l7 7m0 0l-7 7m7-7H3" 
              />
            </svg>
          </div>
        </div>
        
        {/* Decorative corner */}
        <div className="absolute top-0 right-0 w-0 h-0 border-t-[40px] border-r-[40px] border-t-[#9b7753] border-r-white rounded-tr-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
      </div>
      
      {/* Subtle glow on hover */}
      <div className="absolute inset-0 rounded-2xl bg-gradient-to-br from-[#9b7753]/5 to-transparent opacity-0 group-hover:opacity-100 -z-10 transition-opacity duration-300" />
    </motion.div>
  );
}
