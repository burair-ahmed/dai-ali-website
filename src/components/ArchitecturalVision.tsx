"use client";
import Image from "next/image";
import { FC } from "react";

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
  return (
    <section className="w-full py-20 px-6 md:px-14 lg:px-24 font-inter">
      <div className="flex justify-between items-start w-full mb-10">
        <h2 className="text-3xl font-semibold text-gray-900">
          Architectural Vision
        </h2>
        <p className="text-sm text-gray-600">
          Selected works and inspirations
        </p>
      </div>

      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {images.map((src, i) => (
          <div
            key={i}
            className="relative aspect-[4/3] rounded-xl overflow-hidden bg-gray-200"
          >
            <Image
              src={src}
              alt="architectural reference"
              fill
              className="object-cover"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default ArchitecturalVision;
