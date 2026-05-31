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

      gsap.utils.toArray<HTMLElement>(".gsap-reveal").forEach((element, index) => {
        const distance = index % 3 === 0 ? 44 : index % 3 === 1 ? 28 : 36;

        const reveal = gsap.fromTo(
          element,
          { autoAlpha: 0, y: distance, filter: "blur(14px)" },
          {
            autoAlpha: 1,
            y: 0,
            filter: "blur(0px)",
            ease: "none",
            paused: true
          }
        );

        ScrollTrigger.create({
          trigger: element,
          start: "top 92%",
          end: "top 66%",
          scrub: 0.65,
          invalidateOnRefresh: true,
          onUpdate: (self) => reveal.progress(self.progress),
          onRefresh: (self) => reveal.progress(self.progress),
          onLeave: () => reveal.progress(1),
          onLeaveBack: () => reveal.progress(0)
        });
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
          ease: "none",
          scrollTrigger: {
            trigger: "[data-cta-line]",
            start: "top 88%",
            end: "top 54%",
            scrub: 0.7
          }
        }
      );

      ScrollTrigger.refresh();
    });

    return () => context.revert();
  }, []);

  return null;
}
