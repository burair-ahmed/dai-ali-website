"use client";
import Image from "next/image";
import { FC, useEffect, useRef } from "react";
import { gsap } from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

const images = [
  "/img1.jpg",
  "/img2.jpg",
  "/img3.jpg",
  "/img4.jpg",
  "/img5.jpg",
  "/img6.jpg",
  "/img7.jpg",
  "/img8.jpg",
];

const ArchitecturalVision: FC = () => {
  const sectionRef = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (typeof window === "undefined") return;

    gsap.registerPlugin(ScrollTrigger);

    if (!sectionRef.current) return;

    const ctx = gsap.context(() => {
      gsap.fromTo(
        ".arch-card",
        { opacity: 0, y: 30 },
        {
          opacity: 1,
          y: 0,
          duration: 0.6,
          stagger: 0.08,
          ease: "power2.out",
          scrollTrigger: {
            trigger: sectionRef.current,
            start: "top 80%",
          },
        }
      );
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, []);

  return (
    <section ref={sectionRef} className="w-full bg-secondary/40 px-6 py-20 md:px-14 lg:px-24">
      <div className="mb-10 flex w-full items-start justify-between">
        <div>
          <p className="mb-2 text-xs font-medium uppercase tracking-[0.18em] text-muted-foreground">
            Architecture
          </p>
          <h2 className="text-3xl font-semibold text-foreground md:text-4xl">
          Architectural Vision
          </h2>
        </div>
        <p className="max-w-xs text-sm text-muted-foreground">
          Selected works and inspirations that reflect a commitment to form, light, and enduring value.
        </p>
      </div>

      <div className="grid grid-cols-2 gap-6 md:grid-cols-4">
        {images.map((src, i) => (
          <div
            key={i}
            className="arch-card relative aspect-[4/3] overflow-hidden rounded-2xl bg-muted"
          >
            <Image
              src={src}
              alt="architectural reference"
              fill
              className="h-full w-full object-cover transition-transform duration-500 hover:scale-105"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalVision;
