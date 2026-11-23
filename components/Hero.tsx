"use client";

// The hero background video is disabled for now — the still image is used instead.
// To restore it: uncomment the react import, the state/effect block, the <video>
// element and the pause/play control, then remove the <Image> that replaced it.
// import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { mailto } from "./site";

export default function Hero() {
  // const videoRef = useRef<HTMLVideoElement>(null);
  // const [playing, setPlaying] = useState(true);

  // // Respect reduced-motion: don't autoplay, show the poster still.
  // useEffect(() => {
  //   const prefersReduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  //   const video = videoRef.current;
  //   if (!video) return;
  //   if (prefersReduced) {
  //     video.removeAttribute("autoplay");
  //     video.pause();
  //     setPlaying(false);
  //   }
  // }, []);

  // const togglePlay = () => {
  //   const video = videoRef.current;
  //   if (!video) return;
  //   if (video.paused) {
  //     void video.play();
  //     setPlaying(true);
  //   } else {
  //     video.pause();
  //     setPlaying(false);
  //   }
  // };

  const scrollToPlatform = (e: React.MouseEvent) => {
    e.preventDefault();
    const el = document.getElementById("platform");
    if (!el) return;
    const reduced = window.matchMedia("(prefers-reduced-motion: reduce)").matches;
    el.scrollIntoView({ behavior: reduced ? "auto" : "smooth" });
    history.pushState(null, "", "#platform");
  };

  return (
    <section
      className="relative overflow-hidden bg-navy"
      data-screen-label="Hero"
    >
      <div className="absolute inset-0 z-0">
        {/* Background video disabled — still image only.
        <video
          ref={videoRef}
          className="absolute inset-0 h-full w-full scale-125 object-cover object-center translate-x-[10%]"
          src="/assets/hero.mp4"
          poster="/assets/hero_bg2.jpg"
          autoPlay
          muted
          loop
          playsInline
          preload="metadata"
          aria-hidden="true"
        />
        */}
        <Image
          src="/assets/hero_bg2.jpg"
          alt=""
          aria-hidden="true"
          fill
          priority
          sizes="100vw"
          className="scale-125 object-cover object-center translate-x-[10%]"
        />
        {/* Navy scrim — stronger on the left where the text sits, especially on mobile */}
        <div className="absolute inset-0 bg-[linear-gradient(90deg,rgba(5,40,61,0.92)_0%,rgba(5,40,61,0.72)_38%,rgba(5,40,61,0.25)_72%,rgba(5,40,61,0.1)_100%)]" />
        <div className="absolute inset-0 bg-[linear-gradient(180deg,rgba(5,40,61,0.35)_0%,rgba(5,40,61,0)_40%,rgba(5,40,61,0.55)_100%)]" />
      </div>

      <div className="relative z-10 mx-auto flex min-h-[520px] max-w-[1200px] items-center px-5 pb-14 pt-28 sm:px-6 md:min-h-[600px] md:pb-20">
        <div className="max-w-2xl text-left">
          <p className="fade-in-up delay-1 mb-5 text-sm font-bold uppercase tracking-[0.2em] text-cyan">
            Vessel data <span className="text-white/40">•</span> Machine learning{" "}
            <span className="text-white/40">•</span> Optimisation
          </p>
          <h1 className="fade-in-up delay-1 font-h1 text-[clamp(2.15rem,5.2vw,3.75rem)] font-black leading-[1.03] tracking-[-0.03em] text-white text-balance">
            Smarter hull cleaning.
            <br />
            Better-informed decisions.
          </h1>
          <p className="fade-in-up delay-2 mt-6 max-w-xl text-[clamp(1.05rem,1.4vw,1.15rem)] leading-[1.6] text-white/85">
            SeaFlint uses vessel data to help operators assess hull performance and explore
            cost-effective cleaning schedules.
          </p>
          <div className="fade-in-up delay-3 mt-9 flex flex-col gap-3 sm:flex-row sm:items-center">
            <a
              href="#platform"
              onClick={scrollToPlatform}
              className="inline-flex h-12 items-center justify-center rounded-full bg-cyan px-7 text-base font-bold text-navy shadow-[0_8px_24px_rgba(0,217,231,0.3)] transition-all duration-200 hover:bg-cyan-dark active:scale-95"
            >
              Explore the tool
              <span className="material-symbols-outlined ml-1 text-xl">arrow_forward</span>
            </a>
            <a
              href={mailto("SeaFlint enquiry — Discuss an opportunity")}
              className="inline-flex h-12 items-center justify-center rounded-full border border-white/40 bg-white/5 px-7 text-base font-semibold text-white backdrop-blur-sm transition-all duration-200 hover:bg-white/15 active:scale-95"
            >
              Discuss an opportunity
              <span className="material-symbols-outlined ml-1 text-xl">arrow_forward</span>
            </a>
          </div>
        </div>
      </div>

      {/* Video pause/play control — not needed while the background is a still image.
      <button
        type="button"
        onClick={togglePlay}
        className="absolute bottom-5 right-5 z-20 inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 bg-navy/50 text-white backdrop-blur transition-colors hover:bg-navy/70"
        aria-label={playing ? "Pause background video" : "Play background video"}
      >
        <span className="material-symbols-outlined text-xl">{playing ? "pause" : "play_arrow"}</span>
      </button>
      */}
    </section>
  );
}
