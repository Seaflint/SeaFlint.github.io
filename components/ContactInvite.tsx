import { mailto } from "./site";

export default function ContactInvite() {
  return (
    <section
      id="contact"
      data-screen-label="Contact"
      className="relative overflow-hidden bg-navy py-20 md:py-24"
    >
      {/* Subtle ocean depth gradient */}
      <div className="pointer-events-none absolute inset-0 bg-[radial-gradient(120%_120%_at_50%_0%,rgba(0,217,231,0.14)_0%,rgba(5,40,61,0)_55%)]" />
      <div className="relative mx-auto max-w-[1200px] px-5 text-center sm:px-6 fade-in-up">
        <h2 className="mx-auto max-w-3xl font-h2 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold leading-tight tracking-[-0.02em] text-white">
          Let&apos;s explore what we could do together.
        </h2>
        <p className="mx-auto mt-4 max-w-xl text-[1.05rem] text-white/75">
          Industry applications, joint research, data partnerships or testing.
        </p>
        <a
          href={mailto("SeaFlint enquiry — Start a conversation")}
          className="mt-8 inline-flex h-12 items-center justify-center rounded-full bg-cyan px-8 text-base font-bold text-navy shadow-[0_8px_24px_rgba(0,217,231,0.3)] transition-all duration-200 hover:bg-cyan-dark active:scale-95"
        >
          Start a conversation
          <span className="material-symbols-outlined ml-1 text-xl">arrow_forward</span>
        </a>
      </div>
    </section>
  );
}
