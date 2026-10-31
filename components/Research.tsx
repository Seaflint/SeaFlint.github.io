import { PAPER_URL } from "./site";

export default function Research() {
  return (
    <section id="research" data-screen-label="Research" className="bg-white pb-10 pt-12 md:pb-14 md:pt-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <div className="grid grid-cols-1 gap-8 lg:grid-cols-5 lg:items-stretch">
          {/* Explanation (left) */}
          <div className="flex flex-col justify-center lg:col-span-2 fade-in-up">
            <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-cyan-dark">
              The research behind SeaFlint
            </span>
            <h2 className="mb-4 font-h2 text-[clamp(1.8rem,3vw,2.5rem)] font-bold leading-tight tracking-[-0.02em] text-navy">
              Grounded in peer-reviewed research
            </h2>
            <p className="text-[1.05rem] leading-relaxed text-navy/75">
              SeaFlint is built on peer-reviewed academic research. If you want to dive deeper into
              the methodology, the machine-learning models, or the optimisation framework that powers
              our platform, our full paper is freely available.
            </p>
          </div>

          {/* Publication card (right) */}
          <div className="lg:col-span-3 fade-in-up delay-1">
            <div className="flex h-full flex-col rounded-xl border border-navy/10 bg-pale p-7 md:p-9">
              <span className="mb-5 inline-flex items-center gap-2 self-start rounded-full bg-white px-3 py-1.5 text-sm font-bold uppercase tracking-wider text-navy/70">
                <span className="material-symbols-outlined text-base text-cyan-dark">article</span>
                Research paper
              </span>
              <h3 className="mb-6 font-h3 text-[1.45rem] font-bold leading-snug tracking-[-0.01em] text-navy text-balance">
                Data-Driven Hull-Fouling Cleaning Schedule Optimization to Reduce Carbon Footprint of
                Vessels
              </h3>
              <dl className="mb-7 space-y-3">
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-navy/55">Authors</dt>
                  <dd className="text-sm text-navy">S. Ward, M. L. Thormann, J. Wharton, A. Zemkoho</dd>
                </div>
                <div className="flex gap-4">
                  <dt className="w-28 shrink-0 text-sm font-semibold text-navy/55">Institution</dt>
                  <dd className="text-sm text-navy">University of Southampton</dd>
                </div>
              </dl>
              <a
                href={PAPER_URL}
                target="_blank"
                rel="noopener noreferrer"
                className="mt-auto inline-flex items-center gap-2 self-start text-base font-bold text-cyan-dark hover:underline"
              >
                Read the full paper on arXiv
                <span className="material-symbols-outlined text-lg">arrow_outward</span>
                <span className="sr-only">(opens in a new tab)</span>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
