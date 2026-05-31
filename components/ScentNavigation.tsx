"use client";

import { BagSimple, Drop, Leaf, Sparkle } from "@phosphor-icons/react";

const items = [
  { href: "#sequence", label: "Sequence", icon: Sparkle },
  { href: "#notes", label: "Notes", icon: Leaf },
  { href: "#ritual", label: "Ritual", icon: Drop },
  { href: "#reserve", label: "Reserve", icon: BagSimple }
];

export default function ScentNavigation() {
  return (
    <nav
      aria-label="SILVANUS sections"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-bone/10 bg-void/54 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.08)] backdrop-blur-xl sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:flex-col"
    >
      {items.map(({ href, label, icon: Icon }) => (
        <a
          key={label}
          href={href}
          aria-label={label}
          title={label}
          className="group grid size-10 place-items-center rounded-full text-bone/48 transition duration-300 hover:bg-bone/8 hover:text-gold active:translate-y-px sm:size-11"
        >
          <Icon size={18} weight="regular" className="transition duration-300 group-hover:scale-110" />
        </a>
      ))}
    </nav>
  );
}
