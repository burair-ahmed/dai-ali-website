"use client";
import Footer from "@/components/Footer";
import Navbar from "@/components/Navbar";
import { motion } from "framer-motion";
import {
  ArrowRight,
  Building2,
  DraftingCompass,
  UtensilsCrossed,
  MonitorSmartphone,
  Mic,
  Home,
} from "lucide-react";

export default function OurCompanies() {
  const companies = [
    {
      name: "Al-Ashraf Group",
      description:
        "A constellation of ventures advancing design, development, and culture.",
      category: "Group",
      icon: <Building2 size={24} />,
      link: "https://alashrafgoc.com",
      color: "#9b7753",
      tags: ["CEO"],
    },
    {
      name: "Viral Marketing Solutions",
      description:
        "A digital marketing agency crafting high-impact brand strategies, content, and campaigns designed for modern audiences.",
      category: "Digital Marketing",
      icon: <MonitorSmartphone size={24} />,
      link: "https://viralmarketingsolution.com",
      color: "#04f9ed",
      tags: ["Founder"],
    },
    {
      name: "ArmArch Engineering",
      description:
        "A studio dedicated to elevated residential and civic architecture, blending craft with advanced engineering.",
      category: "Architecture",
      icon: <DraftingCompass size={24} />,
      link: "https://armarchengineering.com",
      color: "#e0ac38",
      tags: ["CEO"],
    },
    {
      name: "Cafe Little Karachi",
      description:
        "A vibrant Karachi café offering signature flavors, warm ambience, and a modern take on classic comfort food.",
      category: "Hospitality",
      icon: <UtensilsCrossed size={24} />,
      link: "https://littlekarachirestaurant.com",
      color: "#741052",
      tags: ["Founder"],
    },
    {
      name: "The Viral Podcast",
      description:
        "Hosted by Dai Ali Daniyal, exploring insights, stories, and entrepreneurship.",
      category: "Podcast",
      icon: <Mic size={24} />,
      link: "https://www.youtube.com/@TheViralPodcastPk",
      color: "#1610ea",
      tags: ["Founder"],
    },
    {
      name: "Indus Enclave",
      description:
        "A premium housing project delivering modern, sustainable living.",
      category: "Real Estate",
      icon: <Home size={24} />,
      link: "https://indusenclave.com",
      color: "#c39e76",
      tags: ["CEO"],
    },
  ];

  return (
    <>
      <Navbar />
      <div className="w-full font-inter">
        {/* Hero Section */}
        <section className="min-h-[70vh] flex items-center bg-gradient-to-b from-gray-200 to-gray-400">
          <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
              className="bg-[#faf8f6]/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl p-10 md:p-12"
            >
              <p className="text-sm text-gray-500 mb-3 tracking-wide">
                Explore Our Ventures
              </p>
              <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
                The Companies Led By Dai Ali Daniyal
              </h2>
              <p className="text-gray-600 mb-8 leading-relaxed">
                From architecture to marketing, hospitality, real estate, and
                podcasts — discover the diverse ventures under Dai Ali Daniyal’s
                leadership.
              </p>

              <motion.a
                href="#companies-grid"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6b4f3b] text-white rounded-full font-medium shadow-md hover:bg-[#5a4738] transition"
              >
                <ArrowRight size={18} />
                See All Companies
              </motion.a>
            </motion.div>
          </div>
        </section>

        {/* Companies Grid */}
        <section
          id="companies-grid"
          className="w-full py-20 px-6 md:px-14 lg:px-24"
        >
          <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {companies.map((company, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                className="border rounded-2xl p-6 flex flex-col gap-4 hover:shadow-lg transition-shadow bg-white"
              >
                <div
                  className={`inline-flex items-center gap-3 text-white px-3 py-2 rounded-lg`}
                  style={{ backgroundColor: company.color }}
                >
                  {company.icon}
                  <span className="font-medium">{company.category}</span>
                </div>

                <h3 className="text-xl font-semibold text-gray-900">
                  {company.name}
                </h3>

                {/* Tags */}
                <div className="flex flex-wrap gap-2 mt-1">
                  {company.tags.map((tag, i) => (
                    <span
                      key={i}
                      className={`bg-[#6b4f3b]/20 text-[${company.color}] px-3 py-1 rounded-full text-xs font-medium`}
                    >
                      {tag}
                    </span>
                  ))}
                </div>

                <p className="text-gray-600 text-sm leading-relaxed">
                  {company.description}
                </p>

                <a
                  href={company.link}
                  target="_blank"
                  className={`mt-auto inline-flex items-center gap-2 px-4 py-2 rounded-lg text-white text-sm font-medium`}
                  style={{ backgroundColor: company.color }}
                >
                  Visit →
                </a>
              </motion.div>
            ))}
          </div>
        </section>
      </div>
      <Footer />
    </>
  );
}
