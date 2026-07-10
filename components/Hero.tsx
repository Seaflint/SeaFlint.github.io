import { Typewriter } from "@/components/ui/typewriter";

export default function Hero() {
  return (
    <section
      className="relative min-h-[100svh] overflow-hidden bg-[#06122f]"
      data-screen-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        <video
          className="absolute inset-0 h-full w-full object-cover object-center scale-105"
          src="/assets/hero.mp4"
          autoPlay
          muted
          loop
          playsInline
          preload="auto"
          aria-hidden="true"
        />
        {/* Neutral scrim for text legibility (no color tint) */}
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(0,0,0,0.15)_0%,rgba(0,0,0,0)_35%,rgba(0,0,0,0.55)_100%)]" />
      </div>
      <div className="relative z-10 mx-auto flex min-h-[100svh] max-w-7xl items-center px-6 pb-16 pt-28 sm:pb-20 lg:px-12 lg:pb-24">
        <div className="mx-auto max-w-4xl text-center">
          <div className="space-y-6">
            <h1 className="font-h1 text-[clamp(3.25rem,7.2vw,7rem)] leading-[0.93] tracking-[-0.06em] text-white fade-in-up delay-1 text-balance mx-auto max-w-4xl">
              <Typewriter
                words={["Stop biofouling from burning extra fuel"]}
                speed={60}
                loop={false}
                highlight="burning extra fuel"
                highlightClassName="text-[#34A99D]"
                cursorChar="|"
              />
            </h1>
            {/* <p className="font-body-lg text-[clamp(1.05rem,1.45vw,1.35rem)] leading-[1.6] text-white max-w-2xl fade-in-up delay-2">
              Algae and marine growth on a hull quietly increase drag, burn more fuel and lift
              emissions. SeaFlint reads a vessel&apos;s own sensor data with machine learning to
              pinpoint the exact moment a hull needs cleaning.
            </p> */}
          </div>
          <div className="mt-10 flex flex-col sm:flex-row items-center justify-center gap-3 fade-in-up delay-3">
            <a
              className="inline-flex h-14 items-center justify-center rounded-full bg-[#34A99D] px-8 text-base font-semibold text-white shadow-[0_8px_20px_rgba(52,169,157,0.35)] transition-all duration-200 hover:bg-[#2b8f85] active:scale-95"
              href="https://seaflint.soton.ac.uk/users/login"
            >
              Login
            </a>
            <a
              className="inline-flex h-14 items-center justify-center rounded-full bg-white/80 backdrop-blur-md px-8 text-base font-semibold text-[#091a3a] shadow-[0_8px_20px_rgba(0,0,0,0.18)] transition-all duration-200 hover:bg-white/90 active:scale-95"
              href="#dashboard"
            >
              Preview
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
