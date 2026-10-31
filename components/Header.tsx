"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { usePathname } from "next/navigation";
import { LOGIN_URL, mailto } from "./site";

const NAV_LINKS = [
  { href: "#platform", id: "platform", label: "Platform" },
  { href: "#research", id: "research", label: "Research" },
  { href: "#collaborate", id: "collaborate", label: "Collaborate" },
  { href: "#team", id: "team", label: "Team" },
];

const GET_IN_TOUCH = mailto("SeaFlint enquiry");

export default function Header() {
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState<string>("");
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);
  const pathname = usePathname();

  // Section anchors only exist on the landing page; prefix them elsewhere.
  const onHome = pathname === "/";
  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`);

  useEffect(() => setMounted(true), []);

  // Background change on scroll.
  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 10);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Hide on scroll down, reveal on scroll up.
  useEffect(() => {
    const header = headerRef.current;
    if (!header) return;

    let lastScroll = window.scrollY;
    let ticking = false;

    const update = () => {
      const y = window.scrollY;
      if (y > lastScroll && y > 120 && !open) {
        header.classList.add("header-hidden");
      } else {
        header.classList.remove("header-hidden");
      }
      lastScroll = y;
      ticking = false;
    };

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(update);
        ticking = true;
      }
    };

    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [open]);

  // Scroll-spy: highlight the nav link whose section is in view.
  useEffect(() => {
    const sections = NAV_LINKS.map((l) => document.getElementById(l.id)).filter(
      (el): el is HTMLElement => el !== null
    );
    if (sections.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) setActive(entry.target.id);
        });
      },
      { rootMargin: "-45% 0px -50% 0px", threshold: 0 }
    );
    sections.forEach((s) => observer.observe(s));
    return () => observer.disconnect();
  }, []);

  // Close the mobile menu on Escape.
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") setOpen(false);
    };
    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [open]);

  return (
    <>
      <header
        ref={headerRef}
        id="header"
        className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-out will-change-transform ${
          scrolled ? "bg-navy/80 backdrop-blur-xl shadow-[0_2px_20px_rgba(5,40,61,0.25)]" : "bg-transparent"
        }`}
      >
        <nav className="mx-auto flex items-center justify-between gap-6 w-full max-w-[1200px] px-5 py-3 sm:px-6">
          <a
            className="flex items-center gap-3 rounded-full px-1 py-1 text-white transition-opacity hover:opacity-80"
            href={onHome ? "#top" : "/"}
            aria-label="SeaFlint — back to top"
          >
            <img
              src="/assets/logo.png"
              alt="SeaFlint"
              className="h-12 w-auto brightness-0 invert"
            />
            <span className="hidden sm:inline-flex text-lg font-bold tracking-[-0.02em]">
              SeaFlint
            </span>
          </a>

          <div className="hidden lg:flex items-center gap-9 text-sm font-semibold text-white/85">
            {NAV_LINKS.map((link) => (
              <a
                key={link.href}
                href={sectionHref(link.href)}
                aria-current={active === link.id ? "true" : undefined}
                className={`transition-colors hover:text-white ${
                  active === link.id ? "text-cyan" : ""
                }`}
              >
                {link.label}
              </a>
            ))}
          </div>

          <div className="flex items-center gap-3">
            <a
              href={GET_IN_TOUCH}
              className="hidden sm:inline-flex h-11 items-center rounded-full bg-cyan px-5 text-sm font-bold text-navy shadow-[0_6px_18px_rgba(0,217,231,0.3)] transition-all hover:bg-cyan-dark active:scale-95"
            >
              Get in touch
            </a>
            <a
              href={LOGIN_URL}
              className="hidden sm:inline-flex h-11 items-center px-3 text-sm font-semibold text-white/85 transition-colors hover:text-white"
            >
              Log in
            </a>
            <button
              type="button"
              onClick={() => setOpen((v) => !v)}
              className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
              aria-expanded={open}
              aria-controls="mobile-menu"
              aria-label="Toggle menu"
            >
              <span className="material-symbols-outlined">{open ? "close" : "menu"}</span>
            </button>
          </div>
        </nav>
      </header>

      {mounted &&
        createPortal(
          <div id="mobile-menu">
            {/* Backdrop */}
            <div
              onClick={() => setOpen(false)}
              className={`fixed inset-0 z-50 bg-black/50 backdrop-blur-sm transition-opacity duration-300 ${
                open ? "opacity-100" : "pointer-events-none opacity-0"
              }`}
            />
            {/* Panel */}
            <aside
              role="dialog"
              aria-label="Menu"
              className={`fixed inset-y-0 left-0 z-50 flex w-3/4 max-w-sm flex-col border-r border-white/10 bg-navy/95 backdrop-blur-xl shadow-lg transition-transform ease-in-out duration-300 ${
                open ? "translate-x-0" : "-translate-x-full"
              }`}
            >
              <div className="flex items-center justify-between p-4 border-b border-white/10">
                <img src="/assets/logo.png" alt="SeaFlint" className="h-9 w-auto brightness-0 invert" />
                <button
                  onClick={() => setOpen(false)}
                  className="h-9 w-9 inline-flex items-center justify-center rounded-full text-white hover:bg-white/10"
                  aria-label="Close menu"
                >
                  <span className="material-symbols-outlined">close</span>
                </button>
              </div>
              <div className="grid gap-y-1 overflow-y-auto px-4 pt-6 pb-5">
                {NAV_LINKS.map((link) => (
                  <a
                    key={link.href}
                    onClick={() => setOpen(false)}
                    className="justify-start px-3 h-12 inline-flex items-center rounded-md text-base font-medium text-white transition-colors hover:bg-white/10"
                    href={sectionHref(link.href)}
                  >
                    {link.label}
                  </a>
                ))}
                <a
                  onClick={() => setOpen(false)}
                  className="justify-start px-3 h-12 inline-flex items-center rounded-md text-base font-medium text-white transition-colors hover:bg-white/10"
                  href={LOGIN_URL}
                >
                  Log in
                </a>
                <a
                  onClick={() => setOpen(false)}
                  className="mt-2 justify-center px-3 h-12 inline-flex items-center rounded-full bg-cyan text-base font-bold text-navy transition-colors hover:bg-cyan-dark"
                  href={GET_IN_TOUCH}
                >
                  Get in touch
                </a>
              </div>
            </aside>
          </div>,
          document.body
        )}
    </>
  );
}
