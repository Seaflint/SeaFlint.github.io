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

    document.querySelectorAll(".fade-in-up").forEach((el) => observer.observe(el));

    // Hero content reveals immediately.
    document
      .querySelectorAll('section[data-screen-label="Hero"] .fade-in-up')
      .forEach((el) => el.classList.add("visible"));

    return () => observer.disconnect();
  }, []);

  return null;
}
