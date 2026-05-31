"use client";

import { ArrowUpRight, BagSimple, SealCheck } from "@phosphor-icons/react";
import gsap from "gsap";
import type { MouseEvent } from "react";

export default function CTASection() {
  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const rect = event.currentTarget.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;

    gsap.to(event.currentTarget, {
      x: x * 0.08,
      y: y * 0.08,
      duration: 0.45,
      ease: "power3.out",
      overwrite: "auto"
    });
  };

  const reset = (event: MouseEvent<HTMLAnchorElement>) => {
    gsap.to(event.currentTarget, { x: 0, y: 0, duration: 0.6, ease: "elastic.out(1, 0.42)", overwrite: "auto" });
  };

  return (
    <section id="reserve" className="relative overflow-hidden bg-[#07100b] px-4 py-24 sm:px-8 lg:px-12 lg:py-36">
      <div className="pointer-events-none absolute left-1/2 top-0 h-[1px] w-[86vw] -translate-x-1/2 bg-bone/12" />
      <div className="pointer-events-none absolute inset-x-0 top-0 h-72 bg-[radial-gradient(circle_at_50%_0%,rgba(201,168,76,0.18),transparent_52%)]" />

      <div className="relative mx-auto max-w-[1440px]">
        <div className="grid gap-14 lg:grid-cols-[1.15fr_0.85fr] lg:items-end">
          <div>
            <p className="gsap-reveal mb-8 text-[0.62rem] font-semibold uppercase tracking-[0.4em] text-gold/64">
              Forest Elixir / 100ml extrait
            </p>
            <h2 className="gsap-reveal text-balance font-display text-[clamp(3.25rem,15vw,12rem)] font-medium uppercase leading-[0.72] tracking-[0.035em] text-bone sm:tracking-[0.055em]">
              Wear the
              <span className="block italic text-gold/82">wilderness</span>
            </h2>
          </div>

          <div className="gsap-reveal lg:pb-5">
            <p className="max-w-[31rem] text-base leading-relaxed text-bone/58">
              A limited release for people who prefer their luxury with a little danger in the glass. Dense, green, smoky, and unapologetically nocturnal.
            </p>

            <div className="mt-8 grid grid-cols-2 border-y border-bone/12">
              <div className="border-r border-bone/12 py-5 pr-5">
                <p className="font-display text-5xl italic leading-none text-bone">280</p>
                <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-bone/42">EUR</p>
              </div>
              <div className="py-5 pl-5">
                <p className="font-display text-5xl italic leading-none text-bone">47</p>
                <p className="mt-3 text-[0.58rem] font-semibold uppercase tracking-[0.28em] text-bone/42">day maceration</p>
              </div>
            </div>

            <a
              href="https://huggingface.co/spaces/amiasayedau/silvanus"
              onMouseMove={onMouseMove}
              onMouseLeave={reset}
              className="group mt-8 inline-flex w-full items-center justify-between gap-8 border border-gold/70 bg-gold px-6 py-5 text-left text-[0.72rem] font-bold uppercase tracking-[0.28em] text-ink transition duration-300 hover:bg-bone active:translate-y-px sm:w-auto sm:min-w-[21rem]"
            >
              <span className="inline-flex items-center gap-3">
                <BagSimple size={18} weight="bold" />
                Reserve bottle
              </span>
              <ArrowUpRight size={18} weight="bold" className="transition duration-300 group-hover:translate-x-1 group-hover:-translate-y-1" />
            </a>
          </div>
        </div>

        <div data-cta-line className="mt-20 h-px w-full bg-gold/40" />

        <div className="mt-8 grid gap-5 text-[0.62rem] font-semibold uppercase leading-relaxed tracking-[0.26em] text-bone/38 md:grid-cols-[1fr_1.2fr_0.8fr]">
          <p className="gsap-reveal inline-flex items-center gap-3">
            <SealCheck size={16} weight="regular" className="text-gold/70" />
            SILVANUS Parfums, Paris
          </p>
          <p className="gsap-reveal">Cold-chain packed with cedar paper and black wax seal</p>
          <p className="gsap-reveal md:text-right">Free shipping / numbered edition</p>
        </div>
      </div>
    </section>
  );
}
