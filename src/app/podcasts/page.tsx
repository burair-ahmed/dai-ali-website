/* eslint-disable @typescript-eslint/no-explicit-any, @typescript-eslint/no-unused-vars */

"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Play, Mic, ArrowRight } from "lucide-react";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";

// Ultra-Lux Neo-Glass Revamp — Style 3A (Rounded corners + subtle glow)
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

  const formatDate = (iso?: string) => {
    if (!iso) return "";
    try {
      return new Date(iso).toLocaleDateString();
    } catch {
      return iso;
    }
  };

  // Modern skeleton with soft glow and layered shimmer
  const SkeletonCard = ({ lines = 3 }: { lines?: number }) => (
    <div className="neo-card animate-skeleton p-4 rounded-2xl border border-white/10 bg-gradient-to-br from-white/8 to-white/4 shadow-glow">
      <div className="relative w-full rounded-xl overflow-hidden h-44 mb-4 bg-gradient-to-tr from-amber-100/12 to-amber-200/6" />
      <div className="space-y-2">
        <div className="h-4 w-2/3 rounded-full bg-gradient-to-r from-white/8 to-white/5" />
        {Array.from({ length: lines }).map((_, i) => (
          <div key={i} className={`h-3 rounded bg-gradient-to-r from-white/8 to-white/5 ${i === lines - 1 ? 'max-w-[60%]' : 'max-w-[90%]'}`} />
        ))}
      </div>
    </div>
  );

  return (
    <div className="min-h-screen bg-[radial-gradient(ellipse_at_top_left,_#fbf8f6,_#efe6db)] text-[#2b2118]">
      <Navbar />

      {/* HERO */}
      <header className="relative pt-16 pb-12">
        <div className="max-w-7xl mx-auto px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 md:grid-cols-12 gap-8 items-center"
          >
            <div className="md:col-span-7">
              <div className="neo-card p-8 md:p-12 rounded-3xl shadow-xl border border-white/8 flex flex-col gap-6">
                <div className="flex items-center gap-3 mb-2 text-sm text-amber-900/95">
                  <div className="neo-badge p-2 rounded-full">
                    <Mic size={16} />
                  </div>
                  <span className="font-medium">A Podcast Hosted by Dai Ali Daniyal</span>
                </div>

                <h1 className="text-4xl md:text-5xl font-extrabold tracking-tight leading-tight text-[#2b2118]">
                  The Viral Podcast
                </h1>

                <p className="text-base md:text-lg text-[#3a2c22] opacity-95 max-w-2xl leading-relaxed">
                  Conversations on leadership, mindset, business evolution, entrepreneurial clarity, and building lasting influence in a modern world.
                </p>

                <div className="flex flex-wrap items-center gap-4 mt-2">
                  <motion.a
                    href="#episodes"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 px-6 py-3 bg-gradient-to-b from-amber-700 to-amber-900 text-white rounded-full font-semibold shadow-2xl border border-amber-700/40"
                  >
                    <ArrowRight size={18} />
                    Listen to Episodes
                  </motion.a>

                  <div className="flex items-center gap-2 text-sm text-[#3a2c22] bg-white/40 border border-white/6 px-4 py-2 rounded-full">
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
                className="rounded-2xl overflow-hidden shadow-2xl border border-white/10 bg-gradient-to-br from-white/10 to-white/4 p-4"
              >
                <div className="relative rounded-xl overflow-hidden h-72 md:h-80 neon-thumb">
                  {featuredVideo ? (
                    <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <Image
                        src={featuredVideo.thumbnail}
                        alt={featuredVideo.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 50vw"
                        className="object-cover rounded-xl"
                      />
                    </a>
                  ) : (
                    <div className="w-full h-full bg-gradient-to-br from-amber-100 to-amber-200 flex items-center justify-center">
                      <div className="text-center p-6">
                        <h3 className="text-lg font-bold text-amber-900/95 mb-2">The Viral Podcast</h3>
                        <p className="text-sm text-amber-800/85">Stories of leadership & influence — new episodes weekly</p>
                      </div>
                    </div>
                  )}

                  {/* subtle play pill */}
                  {featuredVideo && (
                    <div className="absolute bottom-4 left-4 bg-black/45 backdrop-blur-sm rounded-full px-3 py-2 flex items-center gap-2">
                      <Play size={16} className="text-white" />
                      <span className="text-xs text-white">Play Episode</span>
                    </div>
                  )}
                </div>
              </motion.div>
            </div>
          </motion.div>
        </div>
      </header>

      {/* FEATURED EPISODE (expanded) */}
      {featuredVideo && (
        <section className="py-12">
          <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-2 gap-8 items-center">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="relative rounded-3xl overflow-hidden shadow-2xl border border-amber-800/8 neon-card">
                <a href={featuredVideo.url} target="_blank" rel="noreferrer">
                  <Image src={featuredVideo.thumbnail} alt={featuredVideo.title} width={1200} height={750} className="object-cover w-full h-full rounded-3xl" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="text-2xl font-bold mb-3 text-amber-900">Featured Episode</h3>
              <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="text-xl font-semibold text-[#2b2118] mb-4 inline-block">
                {featuredVideo.title}
              </a>

              <p className="text-[#3a2c22] opacity-95 mb-6 line-clamp-4">{featuredVideo.description}</p>

              <div className="flex items-center gap-4">
                <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-5 py-3 bg-amber-900 text-white rounded-full font-semibold shadow-lg focus:outline-none focus:ring-4 focus:ring-amber-300/30">
                  <Play size={16} /> Listen Now
                </a>
                <span className="text-sm text-amber-900/85">{formatDate(featuredVideo.publishedAt)} ● {featuredVideo.duration ? `${Math.ceil(isoToSeconds(featuredVideo.duration) / 60)} min` : "--"}</span>
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
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl p-6 bg-white/30 border border-white/8">
              <p className="text-amber-900 font-medium">Failed to load episodes: {error}</p>
            </div>
          ) : (
            <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
              {episodesGrid.map((video: any) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="rounded-2xl overflow-hidden bg-gradient-to-br from-white/8 to-white/4 border border-white/8 neo-episode shadow-sm hover:shadow-xl transition-shadow duration-300"
                >
                  <div className="relative h-48 w-full rounded-t-2xl overflow-hidden neon-thumb">
                    <a href={video.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                    </a>

                    <div className="absolute top-3 left-3 bg-black/45 px-3 py-1 rounded-full backdrop-blur-sm text-xs text-white flex items-center gap-2">
                      <Play size={12} />
                      <span>{video.duration ? `${Math.ceil(isoToSeconds(video.duration) / 60)}m` : "--"}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="flex items-center justify-between mb-2">
                      <span className="text-xs font-semibold bg-white/20 px-3 py-1 rounded-full border border-white/6 text-amber-900">YouTube</span>
                      <span className="text-xs text-amber-900/70">{formatDate(video.publishedAt)}</span>
                    </div>

                    <h4 className="font-semibold text-lg mb-2 text-[#2b2118] line-clamp-2">
                      <a href={video.url} target="_blank" rel="noreferrer" className="hover:underline">{video.title}</a>
                    </h4>

                    <p className="text-sm text-[#3a2c22] opacity-95 mb-4 line-clamp-2">{video.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-amber-900/80">{video.views ? `${video.views} views` : ""}</div>
                      <a href={video.url} target="_blank" rel="noreferrer" className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-amber-900 text-white font-medium transition-transform transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-amber-300/25">
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

      {/* Neo-glass styles */}
      <style jsx>{`
        .shadow-glow { box-shadow: 0 10px 30px rgba(123,96,68,0.08); }
        .neo-card { background: linear-gradient(135deg, rgba(255,255,255,0.06), rgba(255,255,255,0.03)); border-radius: 24px; }
        .neo-badge { background: linear-gradient(180deg, rgba(123,96,68,0.12), rgba(123,96,68,0.06)); border: 1px solid rgba(255,255,255,0.06); display: inline-flex; align-items: center; justify-content: center; }
        .neon-thumb::after { content: ""; position: absolute; inset: 0; pointer-events: none; box-shadow: inset 0 0 60px rgba(255,255,255,0.02), 0 8px 30px rgba(123,96,68,0.06); border-radius: 14px; }
        .neo-episode { transition: transform .28s cubic-bezier(.2,.9,.3,1), box-shadow .28s ease; }
        .neo-episode:hover { transform: translateY(-6px); }

        @keyframes skeletonShimmer {
          0% { background-position: -200px 0; }
          100% { background-position: calc(200px + 100%) 0; }
        }

        .animate-skeleton > div, .animate-skeleton .h-4, .animate-skeleton .h-3 {
          background: linear-gradient(90deg, rgba(255,255,255,0.05) 0%, rgba(255,255,255,0.12) 50%, rgba(255,255,255,0.05) 100%);
          background-size: 200px 100%;
          animation: skeletonShimmer 1.6s linear infinite;
        }

        .shadow-glow { box-shadow: 0 8px 40px rgba(123,96,68,0.08); }

        /* accessible focus ring */
        a:focus { outline: none; box-shadow: 0 0 0 4px rgba(255,197,102,0.12); border-radius: 9999px; }

        /* small utility to limit long text on older browsers */
        .line-clamp-2 { display: -webkit-box; -webkit-line-clamp: 2; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-3 { display: -webkit-box; -webkit-line-clamp: 3; -webkit-box-orient: vertical; overflow: hidden; }
        .line-clamp-4 { display: -webkit-box; -webkit-line-clamp: 4; -webkit-box-orient: vertical; overflow: hidden; }
      `}</style>
    </div>
  );
}
