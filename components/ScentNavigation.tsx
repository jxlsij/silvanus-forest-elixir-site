"use client";

import { BagSimple, Drop, Leaf, Sparkle } from "@phosphor-icons/react";
import { useEffect, useState } from "react";

const items = [
  { href: "#sequence", label: "Sequence", icon: Sparkle },
  { href: "#notes", label: "Notes", icon: Leaf },
  { href: "#ritual", label: "Ritual", icon: Drop },
  { href: "#reserve", label: "Reserve", icon: BagSimple }
];

function isHTMLElement(section: HTMLElement | null): section is HTMLElement {
  return section !== null;
}

export default function ScentNavigation() {
  const [activeId, setActiveId] = useState("sequence");

  useEffect(() => {
    const sections = items
      .map((item) => document.querySelector<HTMLElement>(item.href))
      .filter(isHTMLElement);

    const observer = new IntersectionObserver(
      (entries) => {
        const visible = entries
          .filter((entry) => entry.isIntersecting)
          .sort((a, b) => b.intersectionRatio - a.intersectionRatio)[0];

        if (visible?.target.id) setActiveId(visible.target.id);
      },
      { rootMargin: "-38% 0px -38% 0px", threshold: [0, 0.15, 0.4, 0.7] }
    );

    sections.forEach((section) => observer.observe(section));

    return () => observer.disconnect();
  }, []);

  return (
    <nav
      aria-label="SILVANUS sections"
      className="fixed bottom-4 left-1/2 z-40 flex -translate-x-1/2 items-center gap-1 rounded-full border border-bone/14 bg-void/78 px-2 py-2 shadow-[inset_0_1px_0_rgba(255,255,255,0.09),0_20px_70px_rgba(0,0,0,0.34)] backdrop-blur-xl sm:bottom-auto sm:left-6 sm:top-1/2 sm:-translate-x-0 sm:-translate-y-1/2 sm:flex-col"
    >
      {items.map(({ href, label, icon: Icon }) => {
        const isActive = activeId === href.slice(1);

        return (
          <a
            key={label}
            href={href}
            aria-current={isActive ? "location" : undefined}
            aria-label={label}
            title={label}
            className={`group grid size-10 place-items-center rounded-full transition duration-300 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gold active:translate-y-px sm:size-11 ${
              isActive ? "bg-bone/12 text-gold" : "text-bone/58 hover:bg-bone/8 hover:text-gold"
            }`}
          >
            <Icon size={18} weight={isActive ? "fill" : "regular"} className="transition duration-300 group-hover:scale-110" />
          </a>
        );
      })}
    </nav>
  );
}
