"use client";

import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

export default function ScrollChoreography() {
  useEffect(() => {
    const reduceMotion = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    if (reduceMotion) {
      gsap.set(".gsap-reveal", { autoAlpha: 1, y: 0, filter: "blur(0px)" });
      return;
    }

    const context = gsap.context(() => {
      gsap.defaults({ ease: "power3.out", duration: 1 });

      ScrollTrigger.batch(".gsap-reveal", {
        start: "top 82%",
        once: true,
        interval: 0.08,
        batchMax: 5,
        onEnter: (batch) => {
          gsap.fromTo(
            batch,
            { autoAlpha: 0, y: 34, filter: "blur(12px)" },
            { autoAlpha: 1, y: 0, filter: "blur(0px)", stagger: 0.11, overwrite: "auto" }
          );
        }
      });

      gsap.to("[data-drift='left']", {
        xPercent: -10,
        yPercent: 5,
        rotation: -3,
        scrollTrigger: {
          trigger: "[data-drift-section]",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to("[data-drift='right']", {
        xPercent: 12,
        yPercent: -6,
        rotation: 4,
        scrollTrigger: {
          trigger: "[data-drift-section]",
          start: "top bottom",
          end: "bottom top",
          scrub: 1
        }
      });

      gsap.to("[data-marquee-track]", {
        xPercent: -50,
        ease: "none",
        scrollTrigger: {
          trigger: "[data-marquee]",
          start: "top bottom",
          end: "bottom top",
          scrub: 0.6
        }
      });

      gsap.fromTo(
        "[data-cta-line]",
        { scaleX: 0, transformOrigin: "left center" },
        {
          scaleX: 1,
          duration: 1.2,
          ease: "power3.inOut",
          scrollTrigger: {
            trigger: "[data-cta-line]",
            start: "top 76%",
            once: true
          }
        }
      );
    });

    return () => context.revert();
  }, []);

  return null;
}
