"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";

type Service = {
  name: string;
  description: string;
  image: string;
};

const services: Service[] = [
  {
    name: "General Dentistry",
    description: "Routine checkups and cleanings to keep your smile healthy year-round.",
    image: "/images/service-general.jpg",
  },
  {
    name: "Restorative Care",
    description: "Treatment for tooth decay, including fillings and restorations using modern techniques.",
    image: "/images/service-restorative.jpg",
  },
  {
    name: "Gum Disease Treatment",
    description: "Diagnosis and treatment for gum disease at every stage, from mild to advanced.",
    image: "/images/service-gum.jpg",
  },
  {
    name: "Cosmetic Dentistry & Whitening",
    description: "Teeth whitening and smile-focused treatments to help you feel confident.",
    image: "/images/service-cosmetic.jpg",
  },
];

// Duplicated so the visible window always has enough cards ahead,
// no matter where the (unbounded, mod-wrapped) offset currently sits.
const track = [...services, ...services];

const CARD_WIDTH = 340;
const CARD_GAP = 32;
const STEP = CARD_WIDTH + CARD_GAP;
const SPEED_PX_PER_SEC = 32;
const SINGLE_SET_WIDTH = STEP * services.length;

function wrap(n: number) {
  return ((n % SINGLE_SET_WIDTH) + SINGLE_SET_WIDTH) % SINGLE_SET_WIDTH;
}

export default function ServicesCarousel() {
  const trackRef = useRef<HTMLDivElement>(null);
  const offsetRef = useRef(0);
  const pausedRef = useRef(false);
  const rafRef = useRef<number | null>(null);
  const lastTsRef = useRef<number | null>(null);

  useEffect(() => {
    const reduceMotion = window.matchMedia(
      "(prefers-reduced-motion: reduce)"
    ).matches;

    function paint() {
      if (trackRef.current) {
        trackRef.current.style.transform = `translate3d(-${wrap(offsetRef.current)}px,0,0)`;
      }
    }

    function tick(ts: number) {
      if (lastTsRef.current == null) lastTsRef.current = ts;
      const dt = (ts - lastTsRef.current) / 1000;
      lastTsRef.current = ts;
      if (!pausedRef.current && !reduceMotion) {
        offsetRef.current += SPEED_PX_PER_SEC * dt;
        paint();
      }
      rafRef.current = requestAnimationFrame(tick);
    }

    rafRef.current = requestAnimationFrame(tick);
    return () => {
      if (rafRef.current) cancelAnimationFrame(rafRef.current);
    };
  }, []);

  const nudge = (direction: 1 | -1) => {
    offsetRef.current += direction * STEP;
    const el = trackRef.current;
    if (el) {
      el.style.transition = "transform 0.5s ease";
      el.style.transform = `translate3d(-${wrap(offsetRef.current)}px,0,0)`;
      window.setTimeout(() => {
        if (el) el.style.transition = "";
      }, 500);
    }
  };

  return (
    <div
      className="relative overflow-hidden"
      onMouseEnter={() => (pausedRef.current = true)}
      onMouseLeave={() => (pausedRef.current = false)}
    >
      <div ref={trackRef} className="flex gap-8 px-6 will-change-transform">
        {track.map((service, i) => (
          <div
            key={`${service.name}-${i}`}
            className={`shrink-0 ${i % 2 === 1 ? "sm:mt-12" : ""}`}
            style={{ width: CARD_WIDTH }}
          >
            <div className="relative aspect-[4/5] overflow-hidden rounded-2xl">
              <Image
                src={service.image}
                alt={service.name}
                fill
                sizes="340px"
                className="object-cover"
              />
            </div>
            <h3 className="mt-5 font-serif text-xl font-medium text-white">
              {service.name}
            </h3>
            <p className="mt-2 text-sm leading-relaxed text-slate-400">
              {service.description}
            </p>
          </div>
        ))}
      </div>

      {/* Edge fade masks */}
      <div className="pointer-events-none absolute inset-y-0 left-0 w-16 bg-gradient-to-r from-[#0b1b33] to-transparent sm:w-32" />
      <div className="pointer-events-none absolute inset-y-0 right-0 w-16 bg-gradient-to-l from-[#0b1b33] to-transparent sm:w-32" />

      {/* Nav arrows */}
      <button
        type="button"
        aria-label="Previous service"
        onClick={() => nudge(-1)}
        className="absolute left-2 top-1/3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:left-4"
      >
        ←
      </button>
      <button
        type="button"
        aria-label="Next service"
        onClick={() => nudge(1)}
        className="absolute right-2 top-1/3 z-10 flex h-11 w-11 -translate-y-1/2 items-center justify-center rounded-full bg-black/60 text-white transition-colors hover:bg-black/80 sm:right-4"
      >
        →
      </button>
    </div>
  );
}
