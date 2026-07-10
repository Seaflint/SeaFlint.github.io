"use client";

import { useEffect, useRef, useState } from "react";
import { createPortal } from "react-dom";
import { useRegister } from "./RegisterContext";

const NAV_LINKS = [
  { href: "#features", label: "Features" },
  { href: "#about", label: "About" },
  { href: "#dashboard", label: "Preview" },
  { href: "#team", label: "Team" },
];

export default function Header() {
  const { openRegister } = useRegister();
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const headerRef = useRef<HTMLElement>(null);

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

  return (
    <>
    <header
      ref={headerRef}
      id="header"
      className={`fixed top-0 inset-x-0 z-50 w-full transition-all duration-300 ease-out will-change-transform ${
        scrolled ? "bg-black/35 backdrop-blur-xl" : "bg-transparent"
      }`}
    >
      <nav className="mx-auto flex items-center justify-between gap-6 w-full max-w-7xl px-6 py-1 lg:px-12">
        <a
          className="flex items-center gap-3 rounded-full px-1 py-1 text-white transition-opacity hover:opacity-80"
          href="#top"
        >
          <img
            src="/assets/logo.png"
            alt="SeaFlint"
            className="h-14 w-auto brightness-0 invert saturate-150"
          />
          
        </a>

        <div className="hidden lg:flex items-center gap-10 text-sm font-semibold text-white">
          {NAV_LINKS.map((link) => (
            <a key={link.href} className="transition-colors hover:text-white" href={link.href}>
              {link.label}
            </a>
          ))}
        </div>

        <div className="flex items-center gap-3">
          <a
            href="https://seaflint.soton.ac.uk/users/login"
            className="hidden sm:inline-flex h-11 items-center rounded-full border-2 border-white bg-transparent px-5 text-sm font-semibold text-white transition-all hover:bg-white hover:text-[#091a3a] active:scale-95"
          >
            Login
          </a>
          <button
            type="button"
            onClick={openRegister}
            className="hidden sm:inline-flex h-11 items-center rounded-full bg-[#34A99D] px-5 text-sm font-semibold text-white shadow-[0_8px_20px_rgba(52,169,157,0.35)] transition-all hover:bg-[#2b8f85] active:scale-95"
          >
            Request Access
          </button>
          <button
            type="button"
            onClick={() => setOpen((v) => !v)}
            className="lg:hidden inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/20 bg-white/10 text-white backdrop-blur-sm transition-colors hover:bg-white/15"
            aria-expanded={open}
            aria-controls="mobile-menu"
            aria-label="Toggle menu"
          >
            <svg
              viewBox="0 0 32 32"
              fill="none"
              stroke="currentColor"
              strokeWidth={2.5}
              strokeLinecap="round"
              strokeLinejoin="round"
              className={`size-5 text-white transition-transform ease-in-out duration-300 ${
                open ? "-rotate-45" : ""
              }`}
            >
              <path
                className={`transition-all ease-in-out duration-300 ${
                  open
                    ? "[stroke-dasharray:20_300] [stroke-dashoffset:-32.42px]"
                    : "[stroke-dasharray:12_63]"
                }`}
                d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"
              />
              <path d="M7 16 27 16" />
            </svg>
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
            className={`fixed inset-y-0 left-0 z-50 flex w-3/4 max-w-sm flex-col border-r border-white/10 bg-black/95 backdrop-blur-xl shadow-lg transition-transform ease-in-out duration-300 ${
              open ? "translate-x-0" : "-translate-x-full"
            }`}
          >
            <div className="flex items-center justify-between p-4 border-b border-white/10">
              <img
                src="/assets/logo.png"
                alt="SeaFlint"
                className="h-8 w-auto brightness-0 invert"
              />
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
                  className="justify-start px-3 h-11 inline-flex items-center rounded-md text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                  href={link.href}
                >
                  {link.label}
                </a>
              ))}
              <a
                onClick={() => setOpen(false)}
                className="justify-start px-3 h-11 inline-flex items-center rounded-md text-base font-medium text-white transition-colors hover:bg-white/10 hover:text-white"
                href="https://seaflint.soton.ac.uk/users/login"
              >
                Login
              </a>
              <button
                onClick={() => {
                  setOpen(false);
                  openRegister();
                }}
                className="justify-start px-3 h-11 inline-flex items-center rounded-md text-base font-medium text-[#fcf300] transition-colors hover:bg-white/10"
              >
                Register
              </button>
            </div>
          </aside>
        </div>,
        document.body
      )}
  </>
  );
}
