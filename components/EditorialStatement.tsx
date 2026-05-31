"use client";

import { motion, useScroll, useTransform } from "framer-motion";
import { useRef } from "react";

export default function EditorialStatement() {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["48px", "-48px"]);
  const opacity = useTransform(scrollYProgress, [0.15, 0.35, 0.7, 0.9], [0, 1, 1, 0]);

  return (
    <section ref={ref} className="flex min-h-[100dvh] items-center justify-center bg-void px-4 py-24 sm:px-8">
      <motion.div style={{ y, opacity }} className="mx-auto max-w-5xl text-center">
        <p className="font-display text-[clamp(3.6rem,8vw,7.6rem)] italic leading-[0.9] tracking-[0.04em] text-white/80">
          NOT A SCENT.
          <br />
          A MEMORY OF FORESTS
          <br />
          THAT NEVER EXISTED.
        </p>
        <p className="mt-12 text-xs font-medium uppercase tracking-[0.34em] text-gold/70">SILVANUS PARFUMS, PARIS</p>
      </motion.div>
    </section>
  );
}
