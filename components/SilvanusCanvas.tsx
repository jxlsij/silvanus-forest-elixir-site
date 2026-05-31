"use client";

import { useScrollProgress } from "@/hooks/useScrollProgress";
import { useCallback, useEffect, useMemo, useRef, useState } from "react";
import HeroOverlay from "./HeroOverlay";

const FRAME_COUNT = 120;
const FRAME_ASPECT = 1920 / 1040;

type CanvasSize = {
  width: number;
  height: number;
};

export default function SilvanusCanvas() {
  const wrapperRef = useRef<HTMLDivElement>(null);
  const stickyRef = useRef<HTMLDivElement>(null);
  const canvasRef = useRef<HTMLCanvasElement>(null);
  const frameRef = useRef<HTMLImageElement[]>([]);
  const drawFrameRef = useRef(0);
  const progress = useScrollProgress(wrapperRef);
  const [loaded, setLoaded] = useState(false);
  const [loadProgress, setLoadProgress] = useState(0);
  const [canvasSize, setCanvasSize] = useState<CanvasSize>({ width: 1, height: 1 });

  const sources = useMemo(() => Array.from({ length: FRAME_COUNT }, (_, index) => `/sequence/frame_${index}.jpg`), []);

  const resizeCanvas = useCallback(() => {
    const canvas = canvasRef.current;
    const container = stickyRef.current;
    if (!canvas || !container) return;

    const rect = container.getBoundingClientRect();
    const ratio = window.devicePixelRatio || 1;
    const width = Math.floor(rect.width);
    const height = Math.floor(rect.height);

    canvas.width = Math.floor(width * ratio);
    canvas.height = Math.floor(height * ratio);
    canvas.style.width = `${width}px`;
    canvas.style.height = `${height}px`;
    setCanvasSize({ width: canvas.width, height: canvas.height });
  }, []);

  const draw = useCallback(
    (image: HTMLImageElement) => {
      const canvas = canvasRef.current;
      const context = canvas?.getContext("2d");
      if (!canvas || !context || !image) return;

      context.clearRect(0, 0, canvas.width, canvas.height);
      context.fillStyle = "#060708";
      context.fillRect(0, 0, canvas.width, canvas.height);

      const canvasAspect = canvas.width / canvas.height;
      let drawWidth = canvas.width;
      let drawHeight = canvas.height;

      if (canvasAspect > FRAME_ASPECT) {
        drawHeight = canvas.height;
        drawWidth = drawHeight * FRAME_ASPECT;
      } else {
        drawWidth = canvas.width;
        drawHeight = drawWidth / FRAME_ASPECT;
      }

      const x = (canvas.width - drawWidth) / 2;
      const y = (canvas.height - drawHeight) / 2;
      context.drawImage(image, x, y, drawWidth, drawHeight);
    },
    []
  );

  useEffect(() => {
    let cancelled = false;
    let completed = 0;

    const preload = async () => {
      const frames = await Promise.all(
        sources.map(
          (src) =>
            new Promise<HTMLImageElement>((resolve, reject) => {
              const img = new Image();
              img.decoding = "async";
              img.onload = () => {
                completed += 1;
                if (!cancelled) setLoadProgress(completed / FRAME_COUNT);
                resolve(img);
              };
              img.onerror = () => reject(new Error(`Unable to load ${src}`));
              img.src = src;
            })
        )
      );

      if (cancelled) return;
      frameRef.current = frames;
      setLoaded(true);
      draw(frames[0]);
    };

    preload().catch(() => {
      if (!cancelled) setLoaded(false);
    });

    return () => {
      cancelled = true;
    };
  }, [draw, sources]);

  useEffect(() => {
    resizeCanvas();
    const container = stickyRef.current;
    if (!container) return;

    const observer = new ResizeObserver(resizeCanvas);
    observer.observe(container);
    window.addEventListener("resize", resizeCanvas);

    return () => {
      observer.disconnect();
      window.removeEventListener("resize", resizeCanvas);
    };
  }, [resizeCanvas]);

  useEffect(() => {
    if (!loaded || !frameRef.current.length) return;
    const index = Math.min(FRAME_COUNT - 1, Math.max(0, Math.round(progress * (FRAME_COUNT - 1))));

    if (drawFrameRef.current) window.cancelAnimationFrame(drawFrameRef.current);
    drawFrameRef.current = window.requestAnimationFrame(() => draw(frameRef.current[index]));

    return () => {
      if (drawFrameRef.current) window.cancelAnimationFrame(drawFrameRef.current);
    };
  }, [canvasSize, draw, loaded, progress]);

  return (
    <section ref={wrapperRef} className="relative h-[400dvh] bg-void" aria-label="SILVANUS Forest Elixir bottle sequence">
      <div ref={stickyRef} className="sticky top-0 h-[100dvh] w-full overflow-hidden bg-void">
        <canvas
          ref={canvasRef}
          className="absolute inset-0 h-full w-full will-change-transform"
          aria-label="Scroll-linked image sequence of the SILVANUS bottle shattering"
        />

        <div className="pointer-events-none absolute inset-x-0 bottom-[18%] mx-auto h-40 w-[min(64rem,70vw)] opacity-80 blur-3xl">
          <div className="absolute left-1/2 top-8 h-20 w-full -translate-x-1/2 rounded-full bg-[rgba(201,168,76,0.08)] animate-mist-rise" />
          <div className="absolute left-1/2 top-16 h-24 w-[72%] -translate-x-1/2 rounded-full bg-[rgba(26,74,46,0.18)] blur-2xl" />
        </div>

        <HeroOverlay progress={progress} />

        {!loaded && (
          <div className="absolute inset-0 flex items-end bg-void">
            <div className="relative h-[2px] w-full overflow-hidden bg-white/5">
              <div className="h-full bg-gold transition-[width] duration-300" style={{ width: `${Math.round(loadProgress * 100)}%` }} />
              <div className="absolute inset-y-0 left-0 w-1/3 animate-shimmer bg-gradient-to-r from-transparent via-white/30 to-transparent" />
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
