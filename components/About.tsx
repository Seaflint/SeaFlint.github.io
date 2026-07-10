import Image from "next/image";

export default function About() {
  return (
    <section
      className="py-3xl px-gutter bg-surface-container-low"
      id="about"
      data-screen-label="About"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-center">
          <div className="fade-in-up order-2 lg:order-1">
            <span className="text-label-sm uppercase tracking-widest text-primary font-bold mb-sm block">
              About SeaFlint
            </span>
            <h2 className="font-h2 text-h2 text-on-surface mb-lg">Why SeaFlint?</h2>
            <p className="font-body-lg text-on-surface-variant mb-md">
              SeaFlint is a research-driven decision-support platform that helps shipping companies
              improve fuel efficiency, reduce emissions, and support more sustainable maritime
              operations. Developed through a collaboration between researchers and industry
              partners, SeaFlint combines machine learning, optimization, and operational vessel
              data to identify actionable opportunities for performance improvement.
            </p>
            <p className="font-body-md text-on-surface-variant mb-md">
              One of SeaFlint&apos;s core innovations is the use of data-driven models to quantify
              the impact of hull fouling on fuel consumption and to determine optimal hull-cleaning
              schedules that balance environmental benefits and operational costs. Built on
              real-world data from commercial vessels, the platform provides practical insights that
              can help operators reduce fuel consumption, lower carbon emissions, and improve
              compliance with evolving maritime sustainability regulations.
            </p>
            <p className="font-body-md text-on-surface-variant mb-xl">
              The platform is accessible through an interactive web dashboard that gives fleet
              managers, analysts and researchers practical insights to reduce fuel consumption,
              lower carbon emissions, and improve compliance with evolving maritime sustainability
              regulations grounded in evidence, not fixed schedules.
            </p>
          </div>
          <div className="fade-in-up delay-1 order-1 lg:order-2">
            <div className="relative aspect-[4/3] rounded-xl overflow-hidden border border-outline-variant">
              <Image
                src="/assets/about-hull.webp"
                alt="Biofouled hull"
                fill
                sizes="(max-width: 1024px) 100vw, 50vw"
                className="object-cover"
              />
              <div className="absolute top-md left-md flex gap-sm">
                <span className="bg-inverse-surface/70 backdrop-blur text-inverse-on-surface text-label-sm px-md py-xs rounded-full">
                  Biofouled hull
                </span>
                <span className="bg-[#0d9488]/80 backdrop-blur text-white text-label-sm px-md py-xs rounded-full">
                  Increased drag
                </span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
