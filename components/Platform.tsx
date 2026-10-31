"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import { mailto, PAPER_URL } from "./site";

type GalleryImage = {
  id: string;
  src: string;
  w: number;
  h: number;
  title: string;
  caption: string;
  alt: string;
};

type Feature = {
  id: string;
  menuLabel: string;
  originalTitle: string;
  body: string;
  /** Extra JSX-free note rendered under the body. */
  note?: string;
  imageIds: string[];
  /** Feature-specific action link (label + mailto subject). */
  action?: { label: string; subject: string };
  /** Show the arXiv paper link under this feature. */
  paperLink?: boolean;
};

const IMAGES: GalleryImage[] = [
  {
    id: "dash-1",
    src: "/assets/dash-1.webp",
    w: 1200,
    h: 700,
    title: "Voyage map",
    caption: "Interactive voyage map tracing a vessel's route between ports.",
    alt: "Map of a vessel voyage from the UK down to Spain and Portugal with anchor markers at each port call.",
  },
  {
    id: "dash-4",
    src: "/assets/dash-4.webp",
    w: 1200,
    h: 700,
    title: "Integrated dashboard",
    caption: "The full SeaFlint dashboard — selection, voyage map, histograms and model variables in one view.",
    alt: "Full dashboard with vessel selection, a voyage map, wind histograms and a fuel-consumption time series.",
  },
  {
    id: "dash-3",
    src: "/assets/dash-3.webp",
    w: 1200,
    h: 700,
    title: "Fuel consumption — observed vs predicted",
    caption: "Observed fuel consumption against predicted fouled and clean-hull baselines across voyages.",
    alt: "Time-series chart of fuel oil consumed showing observed, predicted fouled and predicted clean lines across several port legs.",
  },
  {
    id: "dash-2",
    src: "/assets/dash-2.webp",
    w: 1200,
    h: 700,
    title: "Histograms — wind speed and direction",
    caption: "Wind-speed histogram and wind-direction rose summarising a vessel's conditions.",
    alt: "Dashboard histograms panel showing a wind-speed distribution bar chart and a wind-direction rose chart.",
  },
];

const FEATURES: Feature[] = [
  {
    id: "cleaning-optimisation",
    menuLabel: "Cleaning optimisation",
    originalTitle: "Vessel-Specific Cleaning Optimization",
    body: "SeaFlint finds the exact moments cleaning a hull delivers cost-effective fuel savings, replacing fixed maintenance intervals with data-driven decisions.",
    imageIds: [],
  },
  {
    id: "predictive-modelling",
    menuLabel: "Predictive modelling",
    originalTitle: "Advanced Predictive Modelling",
    body: "XGBoost and other machine-learning models trained on real-world sensor data to predict fuel consumption and capture the impact of hull fouling.",
    imageIds: ["dash-3"],
  },
  {
    id: "dashboard-overview",
    menuLabel: "Dashboard overview",
    originalTitle: "Everything in One Place",
    body: "Voyage maps, time-series plots, and model-evaluation metrics stay in one interactive dashboard for faster review.",
    imageIds: ["dash-4"],
  },
  {
    id: "voyage-visibility",
    menuLabel: "Voyage visibility",
    originalTitle: "Full Voyage Visibility",
    body: "Track fleet movements on an interactive map and inspect any point for date, time, position, and flagged anomalies.",
    imageIds: ["dash-1"],
  },
  {
    id: "clean-vs-fouled",
    menuLabel: "Clean vs fouled hull",
    originalTitle: "Clean vs. Fouled Hull",
    body: "Visualisation of observed and predicted fuel consumption together with the clean-hull baseline and confidence intervals.",
    imageIds: ["dash-3"],
  },
  {
    id: "model-evaluation",
    menuLabel: "Model evaluation",
    originalTitle: "Trust Built In",
    body: "Managers can validate model performance with R², RMSE, and MAE metrics without relying on static reports.",
    imageIds: ["dash-2"],
  },
  {
    id: "fuel-savings",
    menuLabel: "Fuel savings research",
    originalTitle: "Up to 5% Fuel Savings",
    body: "Numerical experiments using four years of sensor data from nine vessels indicated potential fuel-consumption reductions of up to 5%, accounting for additional cleaning costs.",
    note: "Results depend on the vessels, data and assumptions studied; they are not a guarantee of operational savings.",
    imageIds: [],
    paperLink: true,
  },
  {
    id: "data-access",
    menuLabel: "Data requirements and access",
    originalTitle: "Data requirements and access",
    body: "The current source for the weather and marine data limits the amount of data we can download and is only available for non-commercial purposes.",
    imageIds: [],
    action: {
      label: "Contact us to discuss access",
      subject: "SeaFlint enquiry — Data requirements and access",
    },
  },
];

const DEFAULT_ID = "voyage-visibility";
const imageById = (id: string) => IMAGES.find((i) => i.id === id)!;

export default function Platform() {
  const [selectedId, setSelectedId] = useState(DEFAULT_ID);
  const [galleryMode, setGalleryMode] = useState(false);
  const [featureIdx, setFeatureIdx] = useState(0);
  const [galleryIdx, setGalleryIdx] = useState(0);
  const [lightbox, setLightbox] = useState(false);
  const [aboutOpen, setAboutOpen] = useState(false);

  const viewLargerRef = useRef<HTMLButtonElement>(null);
  const lightboxCloseRef = useRef<HTMLButtonElement>(null);
  const lightboxRef = useRef<HTMLDivElement>(null);

  const feature = FEATURES.find((f) => f.id === selectedId) ?? FEATURES.find((f) => f.id === DEFAULT_ID)!;

  // Resolve deep links on mount: ?feature=<id> and #about (open disclosure).
  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const f = params.get("feature");
    if (f && FEATURES.some((x) => x.id === f)) setSelectedId(f);
    if (window.location.hash.replace("#", "") === "about") setAboutOpen(true);
  }, []);

  const currentImages = galleryMode ? IMAGES : feature.imageIds.map(imageById);
  const currentIdx = galleryMode ? galleryIdx : featureIdx;
  const setCurrentIdx = galleryMode ? setGalleryIdx : setFeatureIdx;
  const currentImage = currentImages[Math.min(currentIdx, currentImages.length - 1)];

  const selectFeature = (id: string) => {
    setSelectedId(id);
    setFeatureIdx(0);
    setGalleryMode(false);
  };

  // Lightbox: focus management, focus containment and Escape.
  useEffect(() => {
    if (!lightbox) return;
    lightboxCloseRef.current?.focus();

    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") {
        setLightbox(false);
        viewLargerRef.current?.focus();
        return;
      }
      if (e.key !== "Tab") return;
      // Contain focus within the dialog.
      const dialog = lightboxRef.current;
      if (!dialog) return;
      const focusable = dialog.querySelectorAll<HTMLElement>(
        'button, [href], input, select, textarea, [tabindex]:not([tabindex="-1"])'
      );
      if (focusable.length === 0) return;
      const first = focusable[0];
      const last = focusable[focusable.length - 1];
      if (e.shiftKey && document.activeElement === first) {
        e.preventDefault();
        last.focus();
      } else if (!e.shiftKey && document.activeElement === last) {
        e.preventDefault();
        first.focus();
      }
    };

    window.addEventListener("keydown", onKey);
    return () => window.removeEventListener("keydown", onKey);
  }, [lightbox]);

  const closeLightbox = () => {
    setLightbox(false);
    viewLargerRef.current?.focus();
  };

  return (
    <section
      id="platform"
      data-screen-label="Platform"
      className="relative bg-pale py-12 md:py-20"
    >
      {/* Legacy anchor aliases → this section */}
      <span id="features" className="absolute -top-24" aria-hidden="true" />
      <span id="dashboard" className="absolute -top-24" aria-hidden="true" />

      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="mb-10 text-center fade-in-up">
          <h2 className="font-h2 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold tracking-[-0.02em] text-navy">
            See what SeaFlint reveals
          </h2>
          <p className="mt-3 text-[1.05rem] text-navy/70 max-w-2xl mx-auto">
            Explore vessel data, compare fuel performance and examine model predictions.
          </p>
        </div>

        {/* Controls — persistent selector label, gallery toggle and current selection on one row */}
        <div className="mb-5 flex flex-wrap items-center gap-x-5 gap-y-3 fade-in-up">
          <div className="flex items-center gap-2">
            <label htmlFor="feature-select" className="text-sm font-semibold text-navy/70">
              Explore all 8 features
            </label>
            <select
              id="feature-select"
              value={galleryMode ? "" : selectedId}
              onChange={(e) => selectFeature(e.target.value)}
              className="h-11 rounded-xl border border-navy/15 bg-white px-3 text-sm font-semibold text-navy shadow-sm focus:border-cyan"
            >
              {galleryMode && (
                <option value="" disabled>
                  Viewing all screenshots
                </option>
              )}
              {FEATURES.map((f) => (
                <option key={f.id} value={f.id}>
                  {f.menuLabel}
                </option>
              ))}
            </select>
          </div>

          <button
            type="button"
            onClick={() => setGalleryMode((g) => !g)}
            className="inline-flex h-11 items-center justify-center gap-2 rounded-xl border border-navy/20 bg-white px-5 text-sm font-semibold text-navy transition-colors hover:border-cyan hover:text-cyan"
          >
            <span className="material-symbols-outlined text-lg">
              {galleryMode ? "arrow_back" : "gallery_thumbnail"}
            </span>
            {galleryMode ? "Back to selected feature" : "View all screenshots"}
          </button>

          <p className="flex items-center gap-1.5 text-sm text-navy/70" aria-live="polite">
            <span className="material-symbols-outlined text-lg text-cyan-dark">check_circle</span>
            {galleryMode ? (
              <>All screenshots — {IMAGES.length} images</>
            ) : (
              <>
                Selected: <span className="font-bold text-navy">{feature.originalTitle}</span>
              </>
            )}
          </p>
        </div>

        {/* Content card */}
        <div className="grid grid-cols-1 gap-0 overflow-hidden rounded-xl border border-navy/10 bg-white shadow-[0_18px_50px_rgba(5,40,61,0.12)] lg:grid-cols-5 fade-in-up">
          {/* Left: text (feature mode only) */}
          {!galleryMode && (
            <div className="flex flex-col justify-center gap-4 p-7 lg:col-span-2 lg:p-9">
              <h3 className="font-h3 text-[1.5rem] font-bold leading-tight tracking-[-0.01em] text-navy">
                {feature.originalTitle}
              </h3>
              <p className="text-[1rem] leading-relaxed text-navy/75">{feature.body}</p>
              {feature.note && (
                <p className="text-sm leading-relaxed text-navy/55">{feature.note}</p>
              )}
              {feature.paperLink && (
                <a
                  href={PAPER_URL}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1 text-sm font-bold text-cyan-dark hover:underline"
                >
                  Read the full paper on arXiv
                  <span className="material-symbols-outlined text-base">arrow_outward</span>
                  <span className="sr-only">(opens in a new tab)</span>
                </a>
              )}
              {feature.action && (
                <a
                  href={mailto(feature.action.subject)}
                  className="inline-flex items-center gap-1 text-sm font-bold text-cyan-dark hover:underline"
                >
                  {feature.action.label}
                  <span className="material-symbols-outlined text-base">arrow_forward</span>
                </a>
              )}
            </div>
          )}

          {/* Right: image viewer */}
          <div
            className={`flex flex-col bg-pale/60 p-5 sm:p-7 ${
              galleryMode ? "lg:col-span-5" : "lg:col-span-3"
            }`}
          >
            {currentImages.length > 0 && currentImage ? (
              <>
                <div className="relative mx-auto flex aspect-[16/9] w-full items-center justify-center overflow-hidden rounded-xl border border-navy/10 bg-white">
                  <Image
                    src={currentImage.src}
                    alt={currentImage.alt}
                    width={currentImage.w}
                    height={currentImage.h}
                    sizes="(max-width: 1024px) 100vw, 60vw"
                    className="h-full w-full object-contain"
                  />
                </div>
                <div className="mt-4 flex items-center justify-between gap-3">
                  <button
                    type="button"
                    onClick={() => setCurrentIdx(Math.max(0, currentIdx - 1))}
                    disabled={currentIdx === 0}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-colors hover:border-cyan disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Previous image"
                  >
                    <span className="material-symbols-outlined">chevron_left</span>
                  </button>

                  <div className="min-w-0 flex-1 text-center">
                    <p className="truncate text-sm font-semibold text-navy">{currentImage.title}</p>
                    <p className="text-xs text-navy/60">
                      Image {currentIdx + 1} of {currentImages.length}
                    </p>
                  </div>

                  <button
                    type="button"
                    onClick={() => setCurrentIdx(Math.min(currentImages.length - 1, currentIdx + 1))}
                    disabled={currentIdx === currentImages.length - 1}
                    className="inline-flex h-11 w-11 items-center justify-center rounded-full border border-navy/20 bg-white text-navy transition-colors hover:border-cyan disabled:cursor-not-allowed disabled:opacity-35"
                    aria-label="Next image"
                  >
                    <span className="material-symbols-outlined">chevron_right</span>
                  </button>
                </div>

                <p className="mt-3 text-center text-sm text-navy/65">{currentImage.caption}</p>

                <button
                  ref={viewLargerRef}
                  type="button"
                  onClick={() => setLightbox(true)}
                  className="mx-auto mt-3 inline-flex items-center gap-1 text-sm font-bold text-cyan-dark hover:underline"
                >
                  <span className="material-symbols-outlined text-base">zoom_in</span>
                  View larger
                </button>
              </>
            ) : (
              <div className="flex min-h-[220px] flex-col items-center justify-center gap-3 rounded-xl border border-dashed border-navy/15 bg-white/60 p-8 text-center">
                <span className="material-symbols-outlined text-4xl text-navy/30">image</span>
                <p className="max-w-sm text-sm text-navy/60">
                  No screenshot for this view yet. Browse every available screenshot with “View all
                  screenshots”.
                </p>
              </div>
            )}
          </div>
        </div>

        {/* About SeaFlint disclosure (not a 9th feature) */}
        <details
          id="about"
          open={aboutOpen}
          onToggle={(e) => setAboutOpen((e.currentTarget as HTMLDetailsElement).open)}
          className="mt-6 overflow-hidden rounded-2xl border border-navy/10 bg-white/70"
        >
          <summary className="flex cursor-pointer list-none items-center justify-between gap-3 px-6 py-4 text-left font-bold text-navy marker:content-none">
            <span className="inline-flex items-center gap-2">
              <span className="material-symbols-outlined text-cyan-dark">info</span>
              About SeaFlint — why it matters
            </span>
            <span className="material-symbols-outlined text-navy/50 transition-transform group-open:rotate-180">
              expand_more
            </span>
          </summary>
          <div className="grid grid-cols-1 gap-6 px-6 pb-7 pt-1 lg:grid-cols-2 lg:items-center">
            <div className="space-y-3 text-[0.97rem] leading-relaxed text-navy/75">
              <p>
                SeaFlint is a research-driven decision-support platform that helps shipping companies
                improve fuel efficiency, reduce emissions, and support more sustainable maritime
                operations. Developed through a collaboration between researchers and industry
                partners, SeaFlint combines machine learning, optimisation, and operational vessel
                data to identify actionable opportunities for performance improvement.
              </p>
              <p>
                One of SeaFlint&apos;s core innovations is the use of data-driven models to quantify
                the impact of hull fouling on fuel consumption and to determine optimal hull-cleaning
                schedules that balance environmental benefits and operational costs. Built on
                real-world data from commercial vessels, the platform provides practical insights
                that can help operators reduce fuel consumption, lower carbon emissions, and improve
                compliance with evolving maritime sustainability regulations.
              </p>
              <p>
                Accessed through an interactive web dashboard, SeaFlint translates these optimisation
                insights into actionable, evidence-based recommendations for fleet managers, analysts
                and researchers — moving beyond fixed maintenance schedules to support timely,
                data-informed operational decisions.
              </p>
            </div>
            <div className="relative aspect-[4/3] overflow-hidden rounded-xl border border-navy/10">
              <Image
                src="/assets/about-hull.webp"
                alt="Biofouled vessel hull showing marine growth that increases drag"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute left-3 top-3 flex gap-2">
                <span className="rounded-full bg-navy/70 px-3 py-1 text-xs font-semibold text-white backdrop-blur">
                  Biofouled hull
                </span>
                <span className="rounded-full bg-cyan/80 px-3 py-1 text-xs font-semibold text-navy backdrop-blur">
                  Increased drag
                </span>
              </div>
            </div>
          </div>
        </details>
      </div>

      {/* Lightbox dialog */}
      {lightbox && currentImage && (
        <div
          ref={lightboxRef}
          role="dialog"
          aria-modal="true"
          aria-label={`${currentImage.title} — enlarged`}
          className="fixed inset-0 z-[70] flex flex-col bg-navy/90 p-4 backdrop-blur-sm"
          onClick={closeLightbox}
        >
          <div className="flex items-center justify-between text-white">
            <p className="text-sm font-semibold">{currentImage.title}</p>
            <button
              ref={lightboxCloseRef}
              type="button"
              onClick={closeLightbox}
              className="inline-flex h-10 w-10 items-center justify-center rounded-full border border-white/25 text-white hover:bg-white/10"
              aria-label="Close enlarged image"
            >
              <span className="material-symbols-outlined">close</span>
            </button>
          </div>
          <div
            className="flex min-h-0 flex-1 items-center justify-center py-4"
            onClick={(e) => e.stopPropagation()}
          >
            <img
              src={currentImage.src}
              alt={currentImage.alt}
              className="max-h-full max-w-full object-contain"
            />
          </div>
          <p className="text-center text-sm text-white/80">{currentImage.caption}</p>
        </div>
      )}
    </section>
  );
}
