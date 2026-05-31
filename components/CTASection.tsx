"use client";

import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import type { MouseEvent } from "react";

export default function CTASection() {
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);
  const springX = useSpring(mouseX, { stiffness: 140, damping: 18, mass: 0.25 });
  const springY = useSpring(mouseY, { stiffness: 140, damping: 18, mass: 0.25 });
  const x = useTransform(springX, [-1, 1], [-7, 7]);
  const y = useTransform(springY, [-1, 1], [-5, 5]);

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    mouseX.set(((event.clientX - rect.left) / rect.width - 0.5) * 2);
    mouseY.set(((event.clientY - rect.top) / rect.height - 0.5) * 2);
  };

  const reset = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <section className="relative overflow-hidden bg-void px-4 py-28 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-1/2 h-[36rem] w-[36rem] -translate-x-1/2 -translate-y-1/2 rounded-full bg-pine/30 blur-[120px]" />
      <div className="relative mx-auto grid max-w-7xl grid-cols-1 items-end gap-16 border-t border-gold/15 pt-16 lg:grid-cols-[1.35fr_0.65fr]">
        <div>
          <p className="mb-8 text-xs font-medium uppercase tracking-[0.38em] text-white/40">FOREST ELIXIR · 100ML 3.4 FL.OZ</p>
          <h2 className="font-display text-[clamp(4rem,10vw,11rem)] font-medium uppercase leading-[0.78] tracking-[0.14em] text-white/[0.92]">
            Wear the
            <br />
            Wilderness
          </h2>
        </div>

        <div className="lg:pb-4">
          <motion.a
            href="#"
            style={{ x, y }}
            onMouseMove={onMouseMove}
            onMouseLeave={reset}
            whileTap={{ scale: 0.98, y: 1 }}
            transition={{ type: "spring", stiffness: 100, damping: 20 }}
            className="group inline-flex w-full items-center justify-center border border-gold px-8 py-5 text-xs font-bold uppercase tracking-[0.28em] text-gold transition-colors duration-500 hover:bg-gold hover:text-void sm:w-auto"
          >
            Discover Silvanus
          </motion.a>
          <p className="mt-8 text-xs font-medium uppercase leading-relaxed tracking-[0.22em] text-white/42">
            LIMITED EDITION · 100ML · €280 · FREE SHIPPING
          </p>
          <p className="mt-20 text-[0.62rem] font-medium uppercase tracking-[0.32em] text-white/30">
            SILVANUS · PARIS · MAISON DE PARFUM FONDEE 2024
          </p>
        </div>
      </div>
    </section>
  );
}
