"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Mic, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Neo-Glass & Luxury revamp with Pulse Fade skeletons
export default function PodcastsPage() {
  const [videos, setVideos] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    let mounted = true;
    async function load() {
      setLoading(true);
      setError(null);
      try {
        const res = await fetch("/api/youtube");
        if (!res.ok) throw new Error(`HTTP ${res.status}`);
        const data = await res.json();
        if (!mounted) return;
        setVideos(Array.isArray(data.videos) ? data.videos : []);
      } catch (err: any) {
        if (!mounted) return;
        setError(err?.message || "Failed to load");
        setVideos([]);
      } finally {
        if (!mounted) return;
        setLoading(false);
      }
    }
    load();
    return () => {
      mounted = false;
    };
  }, []);

  const isoToSeconds = (iso?: string) => {
    if (!iso) return 0;
    const m = iso.match(/PT(?:(\d+)H)?(?:(\d+)M)?(?:(\d+)S)?/);
    if (!m) return 0;
    return (
      parseInt(m[1] || "0") * 3600 +
      parseInt(m[2] || "0") * 60 +
      parseInt(m[3] || "0")
    );
  };

  const isShortVideo = (v: any) => {
    const title = (v.title || "").toLowerCase();
    const desc = (v.description || "").toLowerCase();
    const duration = isoToSeconds(v.duration);
    const titleShort = title.includes("short") || title.includes("#shorts");
    const descShort = desc.includes("#shorts") || desc.includes("shorts");
    const isShortId = (v.id || "").toString().startsWith("Shorts");
    const shortDuration = duration > 0 && duration <= 181;
    const isVertical = v.width && v.height && Number(v.height) > Number(v.width);
    return titleShort || descShort || isShortId || shortDuration || isVertical;
  };

  const filteredVideos = videos.filter((v) => !isShortVideo(v));
  const featuredVideo = filteredVideos
    .slice()
    .sort((a, b) => new Date(b.publishedAt).getTime() - new Date(a.publishedAt).getTime())[0];
  const episodesGrid = filteredVideos.filter((v) => featuredVideo && v.id !== featuredVideo.id);

  const categories = [
    "Leadership",
    "Business",
    "Mindset",
    "Vision",
    "Success",
    "Entrepreneurship",
  ];

  // --- small presentational helpers ---
  const formatDate = (iso?: string) => {
    if (!iso) return "";
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return iso;
    }
  };

  // Pulse fade skeleton component (Style 3)
  const SkeletonCard = ({ lines = 3 }: { lines?: number }) => (
    <div className="animate-pulse-fade bg-gradient-to-br from-white/30 to-white/10 border border-white/10 rounded-2xl p-4 backdrop-blur-sm shadow-glass">
      <div className="relative w-full rounded-xl overflow-hidden bg-gray-200/20 h-44 mb-4" />
      <div className="space-y-2">
        <div className="h-4 w-3/5 rounded-full bg-gray-200/20" />
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className="h-3 rounded bg-gray-200/20 max-w-[90%]" />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#f9f7f6,_#efe6db)] text-[#2b2118]">
      <Navbar />

      {/* HERO */}
      <header className="relative pt-12 pb-20 mt-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7">
              <div className="bg-white/30 backdrop-blur-md border border-white/20 rounded-3xl p-8 md:p-12 shadow-lg shadow-amber-100/10">
                <div className="flex items-center gap-3 mb-4 text-sm text-amber-900/90">
                  <div className="bg-amber-900/10 p-2 rounded-full shadow-sm border border-amber-900/8">
                    <Mic size={16} />
                  </div>
                  <span className="font-medium">A Podcast Hosted by Dai Ali Daniyal</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight text-[#2b2118] mb-4">
                  The Viral Podcast
                </h1>

                <p className="text-base md:text-lg text-[#3a2c22] opacity-90 max-w-2xl leading-relaxed mb-6">
                  Conversations on leadership, mindset, business evolution, entrepreneurial clarity, and building lasting influence in a modern world.
                </p>

                <div className="flex flex-wrap items-center gap-4">
                  <motion.a
                    href="#episodes"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-b from-amber-700 to-amber-900 text-white rounded-full font-semibold shadow-2xl border border-amber-700/40"
                  >
                    <ArrowRight size={18} />
                    Listen to Episodes
                  </motion.a>

                  <div className="flex items-center gap-2 text-sm text-[#3a2c22] bg-white/40 border border-white/8 px-4 py-2 rounded-full">
                    <Mic size={16} />
                    Inspiring Voices Weekly
                  </div>
                </div>
              </div>
            </div>

            <div className="md:col-span-5">
              <motion.div
                initial={{ opacity: 0, scale: 0.98 }}
                animate={{ opacity: 1, scale: 1 }}
                transition={{ duration: 0.9 }}
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-white/20 backdrop-blur p-4"
              >
                <div className="relative rounded-xl overflow-hidden h-72 md:h-80">
                  {/* if featuredVideo exists show it else show decorative art */}
                  {featuredVideo ? (
                    <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <Image
                        src={featuredVideo.thumbnail}
                        alt={featuredVideo.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover"
                      />
                    </a>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-lg font-bold text-amber-900/90 mb-2">The Viral Podcast</h3>
                        <p className="text-sm text-amber-800/80">Stories of leadership & influence — new episodes weekly</p>
                      </div>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* CATEGORIES */}
      <section className="py-8">
        <div className="max-w-6xl mx-auto px-6">
          <h2 className="text-xl font-semibold mb-4 text-amber-900">Categories</h2>
          <div className="flex flex-wrap gap-3">
            {categories.map((c, i) => (
              <motion.button
                key={i}
                whileHover={{ scale: 1.04 }}
                className="px-4 py-2 rounded-full border border-white/8 bg-white/20 text-amber-900 font-medium shadow-sm"
              >
                {c}
              </motion.button>
            ))}
          </div>
        </div>
      </section>

      {/* FEATURED EPISODE (expanded) */}
      {featuredVideo && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="relative rounded-2xl overflow-hidden shadow-2xl border border-white/10">
                <a href={featuredVideo.url} target="_blank" rel="noreferrer">
                  <Image src={featuredVideo.thumbnail} alt={featuredVideo.title} width={1200} height={750} className="object-cover w-full h-full" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-bold mb-3 text-amber-900">Featured Episode</h3>
              <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="text-xl font-semibold text-[#2b2118] mb-4 inline-block">
                {featuredVideo.title}
              </a>

              <p className="text-[#3a2c22] opacity-90 mb-6 line-clamp-3">{featuredVideo.description}</p>

              <div className="flex items-center gap-4">
                <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-amber-900 text-white rounded-full font-semibold shadow-lg">
                  <Play size={16} /> Listen Now
                </a>
                <span className="text-sm text-amber-900/90">{formatDate(featuredVideo.publishedAt)}</span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* EPISODES GRID */}
      <main id="episodes" className="py-12">
        <div className="max-w-6xl mx-auto px-6">
          <div className="flex items-center justify-between mb-8">
            <h2 className="text-3xl font-bold text-amber-900">Latest Episodes</h2>
            <div className="text-sm text-amber-900/80">{filteredVideos.length} episodes</div>
          </div>

          {loading ? (
            <div className="grid md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <div key={i}>
                  <div className="animate-pulse-fade bg-white/20 border border-white/8 rounded-2xl p-4">
                    <div className="w-full h-44 rounded-xl bg-gray-200/20 mb-4" />
                    <div className="h-4 w-2/3 rounded-full bg-gray-200/20 mb-2" />
                    <div className="h-3 w-full rounded bg-gray-200/20 mb-2" />
                    <div className="h-3 w-5/6 rounded bg-gray-200/20" />
                  </div>
                </div>
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl p-6 bg-white/30 border border-white/8">
              <p className="text-amber-900 font-medium">Failed to load episodes: {error}</p>
            </div>
          ) : (
            <div className="grid md:grid-cols-3 gap-6">
              {episodesGrid.map((video: any) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-2xl overflow-hidden border border-white/8 bg-white/30 backdrop-blur p-0 shadow-md"
                >
                  <div className="relative h-48 w-full">
                    <a href={video.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                    </a>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full border border-white/6 text-amber-900">YouTube</span>
                      <span className="text-xs text-amber-900/80">{formatDate(video.publishedAt)}</span>
                    </div>

                    <h4 className="font-semibold text-lg mb-2 text-[#2b2118] line-clamp-2">
                      <a href={video.url} target="_blank" rel="noreferrer">{video.title}</a>
                    </h4>

                    <p className="text-sm text-[#3a2c22] opacity-90 mb-4 line-clamp-2">{video.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-amber-900/80">{video.duration ? `${Math.ceil(isoToSeconds(video.duration) / 60)} min` : "--"}</div>
                      <a href={video.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900 text-white font-medium">
                        <Play size={14} /> Watch
                      </a>
                    </div>
                  </div>
                </motion.article>
              ))}
            </div>
          )}
        </div>
      </main>

      {/* CTA */}
      <section className="py-12 bg-gradient-to-r from-amber-900 to-amber-700 text-white">
        <div className="max-w-4xl mx-auto px-6 text-center">
          <h2 className="text-3xl md:text-4xl font-bold mb-3">Want to Feature Your Story on The Viral Podcast?</h2>
          <p className="mb-6 opacity-90">Whether you’re a leader, builder, visionary, or someone with a powerful journey, join Dai Ali Daniyal in conversations that inspire and go viral.</p>
          <a href="mailto:your-email@domain.com" className="inline-block px-8 py-3 bg-white text-amber-900 rounded-full font-semibold shadow-lg">Request an Interview</a>
        </div>
      </section>

      <Footer />

      {/* Styles for glass + skeleton pulse fade */}
      <style jsx>{`
        .shadow-glass { box-shadow: 0 8px 30px rgba(43,33,24,0.08); }
        @keyframes pulseFade {
          0% { opacity: 1; transform: translateY(0); }
          50% { opacity: 0.55; transform: translateY(-2px); }
          100% { opacity: 1; transform: translateY(0); }
        }
        .animate-pulse-fade { animation: pulseFade 1.6s ease-in-out infinite; }
      `}</style>
    </div>
  );
}
