"use client";

import { useEffect } from "react";

/**
 * Reveals elements with the `.fade-in-up` class as they scroll into view,
 * and immediately reveals any inside the Hero section. Ported from the
 * original vanilla IntersectionObserver script.
 */
export default function RevealObserver() {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add("visible");
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.12 }
    );

    const revealHero = () =>
      document
        .querySelectorAll('section[data-screen-label="Hero"] .fade-in-up')
        .forEach((el) => el.classList.add("visible"));

    const observeAll = () => {
      document
        .querySelectorAll(".fade-in-up:not(.visible)")
        .forEach((el) => observer.observe(el));
      // Hero content reveals immediately.
      revealHero();
    };

    observeAll();

    // Pick up any `.fade-in-up` nodes added later (e.g. dev Fast Refresh
    // remounts a section), so freshly mounted content never stays hidden.
    const mo = new MutationObserver(observeAll);
    mo.observe(document.body, { childList: true, subtree: true });

    return () => {
      observer.disconnect();
      mo.disconnect();
    };
  }, []);

  return null;
}
