"use client";

import { useEffect } from "react";

/**
 * Scrolls to the element named by the URL hash.
 *
 * The browser handles this for same-page anchor clicks, but Next.js client-side
 * navigation to another route's hash (e.g. "/#research" from /privacy) lands on
 * the URL without scrolling. This restores that behaviour, and also covers a
 * fresh load where images are still settling.
 */
export default function HashScroll() {
  useEffect(() => {
    const scrollToHash = () => {
      const id = decodeURIComponent(window.location.hash.replace("#", ""));
      if (!id) return;
      const el = document.getElementById(id);
      if (!el) return;
      const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
      el.scrollIntoView({ behavior: reduced ? "auto" : "smooth", block: "start" });
    };

    // Defer so layout and above-the-fold media have settled before measuring.
    const timer = window.setTimeout(scrollToHash, 120);
    window.addEventListener("hashchange", scrollToHash);
    return () => {
      window.clearTimeout(timer);
      window.removeEventListener("hashchange", scrollToHash);
    };
  }, []);

  return null;
}
