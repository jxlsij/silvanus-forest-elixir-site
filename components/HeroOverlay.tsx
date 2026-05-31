"use client";

import { motion, useTransform, useSpring, MotionValue, useMotionValue } from "framer-motion";
import { useEffect, useMemo } from "react";

type HeroOverlayProps = {
  progress: number;
};

const wordVariants = {
  hidden: { opacity: 0, y: 18, filter: "blur(8px)" },
  show: (index: number) => ({
    opacity: 1,
    y: 0,
    filter: "blur(0px)",
    transition: { delay: index * 0.08, duration: 0.9, ease: [0.16, 1, 0.3, 1] }
  })
};

function useProgressMotion(progress: number) {
  const rawProgress = useMotionValue(progress);
  const springProgress = useSpring(rawProgress, { stiffness: 100, damping: 20, mass: 0.3 });

  useEffect(() => {
    rawProgress.set(progress);
  }, [progress, rawProgress]);

  return springProgress;
}

function OpacityBlock({
  progressValue,
  input,
  output,
  children,
  className
}: {
  progressValue: MotionValue<number>;
  input: number[];
  output: number[];
  children: React.ReactNode;
  className: string;
}) {
  const opacity = useTransform(progressValue, input, output);
  return (
    <motion.div style={{ opacity }} className={className}>
      {children}
    </motion.div>
  );
}

export default function HeroOverlay({ progress }: HeroOverlayProps) {
  const progressValue = useProgressMotion(progress);
  const notes = useMemo(() => ["PINE", "OUD", "MUSK", "BERGAMOT"], []);

  return (
    <div className="pointer-events-none absolute inset-0 px-4 sm:px-8 lg:px-12">
      <OpacityBlock
        progressValue={progressValue}
        input={[0, 0.16, 0.22]}
        output={[1, 1, 0]}
        className="absolute left-1/2 top-[12dvh] w-[min(76rem,92vw)] -translate-x-1/2 text-center"
      >
        <motion.p
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.1, ease: [0.16, 1, 0.3, 1] }}
          className="mb-5 text-[0.65rem] font-medium uppercase tracking-[0.42em] text-white/48"
        >
          SILVANUS · FOREST ELIXIR · EAU DE PARFUM
        </motion.p>
        <h1 className="font-display text-[clamp(2.75rem,7vw,6.9rem)] font-medium uppercase leading-[0.88] tracking-[0.16em] text-white/[0.92]">
          <span className="block">The Forest</span>
          <span className="block">Holds Its Breath</span>
        </h1>
      </OpacityBlock>

      <OpacityBlock
        progressValue={progressValue}
        input={[0.42, 0.48, 0.61, 0.68]}
        output={[0, 1, 1, 0]}
        className="absolute left-[6vw] top-[37dvh] max-w-[40rem] mix-blend-screen"
      >
        <motion.div initial="hidden" whileInView="show" viewport={{ once: true }} className="font-display uppercase text-white">
          {["Born from", "Chaos."].map((line, index) => (
            <motion.span
              key={line}
              custom={index}
              variants={wordVariants}
              className="block text-[clamp(3rem,7vw,7rem)] font-semibold italic leading-[0.82] tracking-[0.1em]"
            >
              {line}
            </motion.span>
          ))}
        </motion.div>
        <p className="mt-7 text-xs font-medium uppercase tracking-[0.36em] text-gold/80">Bottled for eternity.</p>
      </OpacityBlock>

      <OpacityBlock
        progressValue={progressValue}
        input={[0.68, 0.76, 0.9, 0.96]}
        output={[0, 1, 1, 0]}
        className="absolute bottom-8 right-4 max-w-[22rem] text-right sm:bottom-12 sm:right-10"
      >
        <div className="flex flex-wrap justify-end gap-x-3 gap-y-2">
          {notes.map((note, index) => (
            <motion.span
              key={note}
              initial={{ opacity: 0, y: 12 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.12, duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
              className="text-[0.62rem] font-medium uppercase tracking-[0.34em] text-white/58"
            >
              {note}
            </motion.span>
          ))}
        </div>
      </OpacityBlock>
    </div>
  );
}
