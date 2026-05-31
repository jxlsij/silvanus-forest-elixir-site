"use client";

import { useMemo } from "react";

type HeroOverlayProps = {
  progress: number;
};

function rangeOpacity(progress: number, points: [number, number, number, number]) {
  const [fadeInStart, fullStart, fullEnd, fadeOutEnd] = points;
  if (progress < fadeInStart || progress >= fadeOutEnd) return 0;
  if (progress >= fullStart && progress <= fullEnd) return 1;
  if (progress < fullStart) return (progress - fadeInStart) / (fullStart - fadeInStart);
  return 1 - (progress - fullEnd) / (fadeOutEnd - fullEnd);
}

export default function HeroOverlay({ progress }: HeroOverlayProps) {
  const notes = useMemo(() => ["PINE TAR", "OUD SMOKE", "BLACK MUSK", "WILD BERGAMOT"], []);

  return (
    <div className="pointer-events-none absolute inset-0 px-4 sm:px-8 lg:px-12">
      <div
        style={{ opacity: rangeOpacity(progress, [0, 0, 0.15, 0.24]) }}
        className="absolute left-[6vw] top-[8dvh] w-[min(76rem,88vw)] transition-opacity duration-200 sm:left-[7vw] sm:top-[13dvh]"
      >
        <p className="micro-label shadowed-type mb-5 max-w-[26rem] text-bone/62">
          SILVANUS Forest Elixir Eau de Parfum
        </p>
        <h1 className="shadowed-type text-balance font-display text-[clamp(3rem,10vw,9rem)] font-medium uppercase leading-[0.78] tracking-[0.02em] text-bone/[0.94] sm:leading-[0.76] sm:tracking-[0.055em]">
          <span className="block">Forest</span>
          <span className="ml-[12vw] hidden italic tracking-[0.02em] text-gold/82 sm:block">Afterimage</span>
          <span className="ml-[10vw] block italic tracking-[0.01em] text-gold/82 sm:hidden">After</span>
          <span className="ml-[18vw] block italic tracking-[0.01em] text-gold/82 sm:hidden">image</span>
        </h1>
      </div>

      <div
        style={{ opacity: rangeOpacity(progress, [0.36, 0.45, 0.61, 0.7]) }}
        className="absolute left-[6vw] top-[28dvh] max-w-[42rem] pr-4 transition-opacity duration-200 sm:left-[7vw] sm:top-[34dvh]"
      >
        <div className="shadowed-type font-display uppercase text-bone mix-blend-screen">
          {["Green glass", "under pressure."].map((line) => (
            <span key={line} className="block text-[clamp(2.2rem,11vw,7.8rem)] font-semibold italic leading-[0.9] tracking-[0.025em] sm:leading-[0.78] sm:tracking-[0.07em]">
              {line}
            </span>
          ))}
        </div>
        <p className="micro-label mt-5 max-w-[24rem] text-gold/72 sm:mt-7">
          A volatile accord captured at the moment it refuses containment.
        </p>
      </div>

      <div
        style={{ opacity: rangeOpacity(progress, [0.66, 0.74, 0.92, 0.98]) }}
        className="absolute bottom-8 right-4 max-w-[26rem] text-right transition-opacity duration-200 sm:bottom-12 sm:right-10"
      >
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-2">
          {notes.map((note) => (
            <span
              key={note}
              className="micro-label glass-edge px-3 py-2 text-bone/66"
            >
              {note}
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
