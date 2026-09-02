"use client";

import Image from "next/image";
import { useState } from "react";

type Item = {
  title: string;
  detail: string;
  image: string;
};

const items: Item[] = [
  {
    title: "Gentle, patient-first care",
    detail: "Dr. Vo takes the time to explain every treatment clearly.",
    image: "/images/service-general.jpg",
  },
  {
    title: "Advanced techniques",
    detail: "Modern methods applied to restorative and cosmetic treatments.",
    image: "/images/dental-chair.jpg",
  },
  {
    title: "Affordable pricing",
    detail: "High-quality dental care at accessible prices.",
    image: "/images/apart-pricing.jpg",
  },
  {
    title: "Convenient location",
    detail: "Easy to reach on Pipeline Ave in the heart of Chino Hills.",
    image: "/images/apart-location.jpg",
  },
];

export default function WhatSetsApartCarousel() {
  const [index, setIndex] = useState(0);
  const [fading, setFading] = useState(false);

  const go = (direction: 1 | -1) => {
    setFading(true);
    window.setTimeout(() => {
      setIndex((i) => (i + direction + items.length) % items.length);
      setFading(false);
    }, 180);
  };

  const active = items[index];

  return (
    <div className="relative mx-auto mt-14 max-w-3xl">
      <div className="relative aspect-[16/10] overflow-hidden rounded-3xl">
        <div
          className={`absolute inset-0 transition-opacity duration-200 ${
            fading ? "opacity-0" : "opacity-100"
          }`}
        >
          <Image
            src={active.image}
            alt={active.title}
            fill
            sizes="(max-width: 768px) 100vw, 768px"
            className="object-cover"
          />
          <div className="absolute inset-x-4 bottom-4 rounded-2xl bg-[#0f2140]/95 p-6 sm:inset-x-auto sm:bottom-6 sm:right-6 sm:max-w-sm sm:p-8">
            <h3 className="font-serif text-xl font-medium text-white sm:text-2xl">
              {active.title}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-300">
              {active.detail}
            </p>
          </div>
        </div>
      </div>

      <button
        type="button"
        aria-label="Previous"
        onClick={() => go(-1)}
        className="absolute left-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:left-4"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next"
        onClick={() => go(1)}
        className="absolute right-2 top-1/2 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:right-4"
      >
        →
      </button>
    </div>
  );
}
