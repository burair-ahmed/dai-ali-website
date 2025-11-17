"use client";

import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Mic, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

export default function PodcastsPage() {
  const episodes = [
    {
      id: 1,
      title: "Mindset of Modern Leadership",
      description:
        "Powerful lessons on discipline, personal growth, and leading with conviction.",
      thumbnail: "/podcasts/p1.jpg",
      duration: "32:18",
      category: "Leadership",
      url: "#"
    },
    {
      id: 2,
      title: "Business Architecture in the Digital Age",
      description:
        "How modern empires are built with structure, clarity, and sustainable frameworks.",
      thumbnail: "/podcasts/p2.jpg",
      duration: "27:40",
      category: "Business",
      url: "#"
    },
    {
      id: 3,
      title: "The Journey of Building Legacy",
      description:
        "What it takes to create something that outlives you — mentally, financially, and spiritually.",
      thumbnail: "/podcasts/p3.jpg",
      duration: "44:12",
      category: "Vision",
    url: "#"
    },
  ];

  const categories = [
    "Leadership",
    "Business",
    "Mindset",
    "Vision",
    "Success",
    "Entrepreneurship",
  ];

  return (
    <div className="flex flex-col min-h-screen bg-[#faf8f6] text-[#5a4634]">
<Navbar/>
      {/* ------------------------------------------------------ */}
      {/* HERO SECTION – Matching Homepage Aesthetic */}
      {/* ------------------------------------------------------ */}
      <section className="min-h-[80vh] flex items-center bg-gradient-to-b from-gray-200 to-gray-400">
        <div className="w-full max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 1 }}
            className="bg-[#faf8f6]/90 backdrop-blur-sm rounded-3xl shadow-2xl max-w-3xl p-10 md:p-12"
          >
            <p className="text-sm text-gray-500 mb-3 tracking-wide flex items-center gap-2">
              <Mic size={14} /> A Podcast Hosted by Dai Ali Daniyal
            </p>

            <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-3">
              The Viral Podcast
            </h2>

            <p className="text-gray-600 mb-8 leading-relaxed">
              Conversations on leadership, mindset, business evolution,
              entrepreneurial clarity, and building lasting influence in a modern world.
            </p>

            <div className="flex flex-wrap items-center gap-4">
              <motion.a
                href="#episodes"
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.97 }}
                className="inline-flex items-center gap-2 px-6 py-3 bg-[#6b4f3b] text-white rounded-full font-medium shadow-md hover:bg-[#5a4738] transition"
              >
                <ArrowRight size={18} />
                Listen to Episodes
              </motion.a>

              <div className="flex items-center gap-2 text-gray-600 bg-[#e3e3e3] px-4 py-3 rounded-full text-sm font-medium">
                <Mic size={16} />
                Inspiring Voices Weekly
              </div>
            </div>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CATEGORIES – Recolored Only */}
      {/* ------------------------------------------------------ */}
      <section className="py-12 bg-[#faf8f6]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-2xl font-semibold mb-4 text-[#7b6044]">
            Categories
          </h2>

          <div className="flex flex-wrap gap-3">
            {categories.map((c, index) => (
              <motion.span
                key={index}
                whileHover={{ scale: 1.05 }}
                className="px-4 py-2 bg-[#ede9e4] text-[#7b6044] rounded-full text-sm font-medium border border-[#d6c8ba]"
              >
                {c}
              </motion.span>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* FEATURED EPISODE – Rethemed */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-[#ede9e4]">
        <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-10 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <Image
              src="/podcasts/featured.jpg"
              alt="Featured Episode"
              width={600}
              height={400}
              className="rounded-2xl shadow-xl object-cover border border-[#d6c8ba]"
            />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
          >
            <h2 className="text-4xl font-bold mb-4 text-[#7b6044]">
              Featured Episode: Building a Modern Legacy
            </h2>

            <p className="text-lg text-[#6b5847] mb-6 leading-relaxed">
              Dai Ali Daniyal explores the mindset, discipline, and architectural
              clarity required to build ventures, relationships, and systems that
              create a meaningful impact on future generations.
            </p>

            <button className="flex items-center gap-2 px-6 py-3 bg-[#9b7753] text-white font-semibold rounded-full border border-[#7b6044] shadow-md hover:shadow-lg transition">
              <Play size={18} /> Listen Now
            </button>
          </motion.div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* EPISODES GRID – Card Design Kept, Colors Adjusted */}
      {/* ------------------------------------------------------ */}
      <section id="episodes" className="py-20 bg-[#faf8f6]">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-3xl font-bold mb-8 text-[#7b6044]">
            Latest Episodes
          </h2>

          <div className="grid md:grid-cols-3 gap-10">
            {episodes.map((ep) => (
              <motion.div
                key={ep.id}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                className="bg-[#ffffff] border border-[#e0d7cd] rounded-xl overflow-hidden shadow-sm hover:shadow-xl transition"
              >
                <Image
                  src={ep.thumbnail}
                  alt={ep.title}
                  width={400}
                  height={250}
                  className="object-cover h-48 w-full"
                />

                <div className="p-6">
                  <span className="text-xs font-bold text-[#7b6044] bg-[#ede9e4] border border-[#d6c8ba] px-3 py-1 rounded-full">
                    {ep.category}
                  </span>

                  <h3 className="text-xl font-bold mt-4 mb-2 text-[#7b6044]">
                    {ep.title}
                  </h3>

                  <p className="text-[#6b5847] mb-4">{ep.description}</p>

                  <div className="flex items-center justify-between pt-2">
                    <span className="text-sm text-[#7b6044] opacity-75">
                      {ep.duration}
                    </span>

      <motion.a
  href={ep.url}
  whileHover={{ scale: 1.05 }}
  whileTap={{ scale: 0.97 }}
  className="flex items-center gap-2 px-4 py-2 bg-[#9b7753] text-white text-sm rounded-full shadow-sm border border-[#7b6044] hover:bg-[#886445] transition"
>
  <Play size={14} />
  Play
</motion.a>

                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* ------------------------------------------------------ */}
      {/* CTA – Redesigned For The Viral Podcast */}
      {/* ------------------------------------------------------ */}
      <section className="py-20 bg-[#ac8968] text-white text-center">
        <h2 className="text-4xl font-bold mb-4">
          Want to Feature Your Story on The Viral Podcast?
        </h2>

        <p className="text-lg opacity-90 mb-8 max-w-2xl mx-auto">
          Whether you’re a leader, builder, visionary, or someone with a powerful
          life journey, join Dai Ali Daniyal in conversations that influence,
          inspire, and go viral.
        </p>

        <a
          href="mailto:your-email@domain.com"
          className="px-8 py-3 bg-white text-[#7b6044] font-semibold rounded-full shadow-sm hover:opacity-80 transition"
        >
          Request an Interview
        </a>
      </section>
      <Footer/>
    </div>
  );
}
