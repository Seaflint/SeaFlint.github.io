"use client";

import { usePathname } from "next/navigation";

export default function Footer() {
  const year = new Date().getFullYear();
  const pathname = usePathname();

  // Section anchors only exist on the landing page; prefix them elsewhere.
  const onHome = pathname === "/";
  const sectionHref = (hash: string) => (onHome ? hash : `/${hash}`);

  return (
    <footer className="w-full border-t border-white/10 bg-navy py-8">
      <div className="mx-auto flex max-w-[1200px] flex-col items-center justify-between gap-5 px-5 sm:flex-row sm:px-6">
        <img src="/assets/logo.png" alt="SeaFlint" className="h-9 w-auto brightness-0 invert" />
        <nav aria-label="Footer" className="flex items-center gap-6 text-sm font-semibold text-white/75">
          <a href={sectionHref("#research")} className="transition-colors hover:text-cyan">
            Research
          </a>
          <a href={sectionHref("#contact")} className="transition-colors hover:text-cyan">
            Contact
          </a>
          <a href="/privacy" className="transition-colors hover:text-cyan">
            Privacy
          </a>
        </nav>
        <p className="text-sm text-white/55">© {year} SeaFlint</p>
      </div>
    </footer>
  );
}
