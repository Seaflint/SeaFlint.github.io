export default function Research() {
  return (
    <section
      className="py-3xl px-gutter max-w-7xl mx-auto"
      id="contact"
      data-screen-label="Research"
    >
      <div className="grid grid-cols-1 lg:grid-cols-5 gap-lg items-stretch">
        <div className="lg:col-span-2 flex flex-col justify-center fade-in-up">
          <span className="text-label-sm uppercase tracking-widest text-primary font-bold mb-sm block">
            The Research Behind SeaFlint
          </span>
          <h2 className="font-h2 text-h2 text-on-surface mb-md">
            Grounded in peer-reviewed research
          </h2>
          <p className="font-body-lg text-on-surface-variant">
            SeaFlint is built on peer-reviewed academic research. If you want to dive deeper into
            the methodology, the machine-learning models, or the optimization framework that powers
            our platform, our full paper is freely available.
          </p>
        </div>

        {/* Paper card */}
        <div className="lg:col-span-3 fade-in-up delay-1">
          <a
            href="https://arxiv.org/abs/2602.11248"
            target="_blank"
            rel="noopener"
            className="group block h-full p-xl md:p-2xl bg-surface-container-low rounded-xl border border-outline-variant hover:border-primary transition-colors duration-300 relative overflow-hidden"
          >
            <div className="absolute top-0 right-0 p-lg opacity-[0.07] group-hover:scale-110 transition-transform duration-500 pointer-events-none">
              <span className="material-symbols-outlined text-[160px]">description</span>
            </div>
            <div className="relative z-10 flex flex-col h-full">
              <span className="inline-flex items-center gap-2 self-start text-label-sm uppercase tracking-widest text-on-surface-variant mb-lg">
                <span className="material-symbols-outlined text-primary text-xl">article</span>
                Research paper
              </span>
              <h3 className="font-h3 text-h3 text-on-surface mb-lg max-w-xl text-balance">
                Data-Driven Hull-Fouling Cleaning Schedule Optimization to Reduce Carbon Footprint
                of Vessels
              </h3>
              <dl className="space-y-sm mb-xl">
                <div className="flex gap-md">
                  <dt className="w-28 shrink-0 font-body-sm text-on-surface-variant">Authors</dt>
                  <dd className="font-body-sm text-on-surface">
                    S. Ward, M. L. Thormann, J. Wharton, A. Zemkoho
                  </dd>
                </div>
                <div className="flex gap-md">
                  <dt className="w-28 shrink-0 font-body-sm text-on-surface-variant">
                    Institution
                  </dt>
                  <dd className="font-body-sm text-on-surface">University of Southampton</dd>
                </div>
              </dl>
              <span className="mt-auto inline-flex items-center gap-2 text-primary font-bold">
                Read the full paper on arXiv
                <span className="material-symbols-outlined transition-transform group-hover:translate-x-1">
                  arrow_outward
                </span>
              </span>
            </div>
          </a>
        </div>
      </div>
    </section>
  );
}
