import { ImageAutoSlider } from "@/components/ui/image-auto-slider";

const SLIDES = [
  "/assets/dash-1.webp",
  "/assets/dash-2.webp",
  "/assets/dash-3.webp",
  "/assets/dash-4.webp",
];

export default function DashboardCarousel() {
  return (
    <section
      id="dashboard"
      data-screen-label="Dashboard"
      className="relative overflow-hidden bg-white py-3xl"
    >
      <div className="max-w-7xl mx-auto px-gutter">
        <div className="mb-2xl text-center fade-in-up">
          <span className="text-label-sm uppercase tracking-widest text-[#34A99D] font-bold mb-sm block">
            PREVIEW
          </span>
          <h2 className="font-h2 text-h2 text-black">Performance made visible</h2>
          <p className="font-body-md text-black/70 mt-sm max-w-xl mx-auto">
            Operators see each vessel&apos;s hull condition, fuel impact and recommended cleaning
            window — all in one continuous view.
          </p>
        </div>
      </div>

      {/* Full-bleed infinite auto-scroll of dashboard screenshots */}
      <ImageAutoSlider
        images={SLIDES}
        tileClassName="w-[300px] aspect-video md:w-[460px] lg:w-[540px]"
        speedSeconds={30}
      />

      {/* Bottom fade into the section background */}
      <div className="pointer-events-none absolute bottom-0 left-0 right-0 h-16 bg-gradient-to-t from-white to-transparent" />
    </section>
  );
}
