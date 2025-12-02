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
    <div className="min-h-screen bg-background text-foreground">
      <Navbar />

      {/* HERO */}
      <header className="relative pb-12 pt-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-12">
          <motion.div
            initial={{ opacity: 0, y: 18 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.9 }}
            className="grid grid-cols-1 items-center gap-8 md:grid-cols-12"
          >
            <div className="md:col-span-7">
              <div className="neo-card flex flex-col gap-6 rounded-3xl border border-border bg-card/90 p-8 shadow-xl md:p-12">
                <div className="mb-2 flex items-center gap-3 text-sm text-muted-foreground">
                  <div className="neo-badge p-2 rounded-full">
                    <Mic size={16} />
                  </div>
                  <span className="font-medium">A Podcast Hosted by Dai Ali Daniyal</span>
                </div>

                <h1 className="text-4xl font-semibold leading-tight tracking-tight text-foreground md:text-5xl">
                  The Viral Podcast
                </h1>

                <p className="max-w-2xl text-base leading-relaxed text-muted-foreground md:text-lg">
                  Conversations on leadership, mindset, business evolution, entrepreneurial clarity, and building lasting influence in a modern world.
                </p>

                <div className="mt-2 flex flex-wrap items-center gap-4">
                  <motion.a
                    href="#episodes"
                    whileHover={{ scale: 1.03 }}
                    whileTap={{ scale: 0.98 }}
                    className="inline-flex items-center gap-3 rounded-full border border-primary/60 bg-primary px-6 py-3 font-semibold text-primary-foreground shadow-2xl"
                  >
                    <ArrowRight size={18} />
                    Listen to Episodes
                  </motion.a>

                  <div className="flex items-center gap-2 rounded-full border border-border bg-secondary/60 px-4 py-2 text-sm text-muted-foreground">
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
                className="overflow-hidden rounded-2xl border border-border bg-card/80 p-4 shadow-2xl"
              >
                <div className="neon-thumb relative h-72 overflow-hidden rounded-xl md:h-80">
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
                    <div className="flex h-full w-full items-center justify-center bg-gradient-to-br from-secondary/60 to-secondary">
                      <div className="p-6 text-center">
                        <h3 className="mb-2 text-lg font-bold text-foreground">The Viral Podcast</h3>
                        <p className="text-sm text-muted-foreground">Stories of leadership & influence — new episodes weekly</p>
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
          <div className="mx-auto grid max-w-6xl items-center gap-8 px-6 md:grid-cols-2">
            <motion.div initial={{ opacity: 0, x: -20 }} whileInView={{ opacity: 1, x: 0 }}>
              <div className="neon-card relative overflow-hidden rounded-3xl border border-border bg-card shadow-2xl">
                <a href={featuredVideo.url} target="_blank" rel="noreferrer">
                  <Image src={featuredVideo.thumbnail} alt={featuredVideo.title} width={1200} height={750} className="object-cover w-full h-full rounded-3xl" />
                </a>
              </div>
            </motion.div>

            <motion.div initial={{ opacity: 0, x: 20 }} whileInView={{ opacity: 1, x: 0 }}>
              <h3 className="mb-3 text-2xl font-bold text-foreground">Featured Episode</h3>
              <a href={featuredVideo.url} target="_blank" rel="noreferrer" className="mb-4 inline-block text-xl font-semibold text-foreground">
                {featuredVideo.title}
              </a>

              <p className="mb-6 line-clamp-4 text-sm text-muted-foreground md:text-base">
                {featuredVideo.description}
              </p>

              <div className="flex items-center gap-4">
                <a
                  href={featuredVideo.url}
                  target="_blank"
                  rel="noreferrer"
                  className="inline-flex items-center gap-2 rounded-full bg-primary px-5 py-3 font-semibold text-primary-foreground shadow-lg focus:outline-none focus:ring-4 focus:ring-primary/30"
                >
                  <Play size={16} /> Listen Now
                </a>
                <span className="text-sm text-muted-foreground">
                  {formatDate(featuredVideo.publishedAt)} ●{" "}
                  {featuredVideo.duration ? `${Math.ceil(isoToSeconds(featuredVideo.duration) / 60)} min` : "--"}
                </span>
              </div>
            </motion.div>
          </div>
        </section>
      )}

      {/* EPISODES GRID */}
      <main id="episodes" className="py-12">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 flex items-center justify-between">
            <h2 className="text-3xl font-semibold text-foreground">Latest Episodes</h2>
            <div className="text-sm text-muted-foreground">{filteredVideos.length} episodes</div>
          </div>

          {loading ? (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {Array.from({ length: 6 }).map((_, i) => (
                <SkeletonCard key={i} />
              ))}
            </div>
          ) : error ? (
            <div className="rounded-2xl border border-border bg-card/70 p-6">
              <p className="font-medium text-foreground">Failed to load episodes: {error}</p>
            </div>
          ) : (
            <div className="grid gap-6 sm:grid-cols-2 md:grid-cols-3">
              {episodesGrid.map((video: any) => (
                <motion.article
                  key={video.id}
                  initial={{ opacity: 0, y: 10 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  className="neo-episode rounded-2xl border border-border bg-card/80 shadow-sm transition-shadow duration-300 hover:shadow-xl overflow-hidden"
                >
                  <div className="neon-thumb relative h-48 w-full overflow-hidden rounded-t-2xl">
                    <a href={video.url} target="_blank" rel="noreferrer" className="block w-full h-full">
                      <Image src={video.thumbnail} alt={video.title} fill className="object-cover" />
                    </a>

                    <div className="absolute left-3 top-3 flex items-center gap-2 rounded-full bg-black/45 px-3 py-1 text-xs text-white backdrop-blur-sm">
                      <Play size={12} />
                      <span>{video.duration ? `${Math.ceil(isoToSeconds(video.duration) / 60)}m` : "--"}</span>
                    </div>
                  </div>

                  <div className="p-4">
                    <div className="mb-2 flex items-center justify-between">
                      <span className="rounded-full border border-border bg-secondary/80 px-3 py-1 text-xs font-semibold text-muted-foreground">
                        YouTube
                      </span>
                      <span className="text-xs text-muted-foreground">{formatDate(video.publishedAt)}</span>
                    </div>

                    <h4 className="mb-2 line-clamp-2 text-lg font-semibold text-foreground">
                      <a href={video.url} target="_blank" rel="noreferrer" className="hover:underline">{video.title}</a>
                    </h4>

                    <p className="mb-4 line-clamp-2 text-sm text-muted-foreground">{video.description}</p>

                    <div className="flex items-center justify-between">
                      <div className="text-sm text-muted-foreground">{video.views ? `${video.views} views` : ""}</div>
                      <a
                        href={video.url}
                        target="_blank"
                        rel="noreferrer"
                        className="inline-flex items-center gap-2 rounded-full bg-primary px-4 py-2 font-medium text-primary-foreground transition-transform hover:scale-105 focus:outline-none focus:ring-4 focus:ring-primary/25"
                      >
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
      <section className="bg-primary py-12 text-primary-foreground">
        <div className="mx-auto max-w-4xl px-6 text-center">
          <h2 className="mb-3 text-3xl font-semibold md:text-4xl">
            Want to Feature Your Story on The Viral Podcast?
          </h2>
          <p className="mb-6 opacity-90">
            Whether you’re a leader, builder, visionary, or someone with a powerful journey, join Dai Ali Daniyal in
            conversations that inspire and go viral.
          </p>
          <a
            href="mailto:your-email@domain.com"
            className="inline-block rounded-full bg-card px-8 py-3 font-semibold text-primary shadow-lg"
          >
            Request an Interview
          </a>
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
