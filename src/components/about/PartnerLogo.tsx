import { motion } from "framer-motion";
import Image from "next/image";

interface PartnerLogoProps {
  src: string;
  alt: string;
  href?: string;
  index: number;
}

/* ✅ ARRAY OF LOGOS HERE */
const logos: Omit<PartnerLogoProps, "index">[] = [
  {
    src: "/logos/google.png",
    alt: "Google",
    href: "https://google.com",
  },
  {
    src: "/logos/facebook.png",
    alt: "Facebook",
    href: "https://facebook.com",
  },
  {
    src: "/logos/amazon.png",
    alt: "Amazon",
    href: "https://amazon.com",
  },
  {
    src: "/logos/local.png",
    alt: "Local Partner",
    href: "https://example.com",
  },
];

export function PartnerLogo({ src, alt, href = "#", index }: PartnerLogoProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-50px" }}
      transition={{
        duration: 0.5,
        delay: index * 0.05,
        ease: [0.16, 1, 0.3, 1],
      }}
      whileHover={{ y: -4, transition: { duration: 0.2 } }}
      className="flex items-center justify-center p-4 sm:p-6 bg-white rounded-xl border border-neutral-200 shadow-sm hover:shadow-md transition-all duration-300"
    >
      <a
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        className="relative w-full h-12 md:h-16"
      >
        <Image
          src={src}
          alt={alt}
          fill
          className="object-contain object-center"
          sizes="(max-width: 768px) 120px, 160px"
        />
      </a>
    </motion.div>
  );
}

/* ✅ MAP IS DONE HERE */
export default function PartnerLogosGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
      {logos.map((logo, index) => (
        <PartnerLogo key={index} {...logo} index={index} />
      ))}
    </div>
  );
}
