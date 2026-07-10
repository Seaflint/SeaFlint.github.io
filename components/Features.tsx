const FEATURES = [
  {
    n: "01",
    t: "Vessel-Specific Cleaning Optimization",
    d: "SeaFlint finds the exact moment cleaning a hull delivers measurable fuel savings, replacing fixed intervals with data-driven decisions.",
    bg: "bg-[#1e96fc]",
  },
  {
    n: "02",
    t: "Advanced Predictive Modelling",
    d: "XGBoost and ensemble tree models trained on real sensor data predict fuel consumption and capture the impact of fouling.",
    bg: "bg-[#0d9488]",
  },
  {
    n: "03",
    t: "Everything in One Place",
    d: "Voyage maps, time series plots, and model evaluation metrics stay in one interactive dashboard for faster review.",
    bg: "bg-[#f59e0b]",
  },
  {
    n: "04",
    t: "Full Voyage Visibility",
    d: "Track fleet movements on an interactive map and inspect any point for date, time, position, and flagged anomalies.",
    bg: "bg-[#072ac8]",
  },
  {
    n: "05",
    t: "Clean vs. Fouled Hull",
    d: "Three lines show observed fuel consumption, predicted fouled performance, and the clean hull baseline, with confidence intervals.",
    bg: "bg-[#1e96fc]",
  },
  {
    n: "06",
    t: "Trust Built In",
    d: "Managers can validate model performance with R², RMSE, and MAE metrics without relying on static reports.",
    bg: "bg-[#0d9488]",
  },
  {
    n: "07",
    t: "Up to 5% Fuel Savings",
    d: "Across four years of vessel data, SeaFlint demonstrated fuel savings of up to 5% per ship even after extra cleaning costs.",
    bg: "bg-[#f59e0b]",
  },
  {
    n: "08",
    t: "Connect Your Fleet Data Your Way",
    d: "Upload CSV or Excel files, or connect through agreed APIs. SeaFlint preprocesses and links data to weather and marine conditions.",
    bg: "bg-[#072ac8]",
  },
];

export default function Features() {
  return (
    <section
      className="py-3xl md:py-32 px-gutter bg-background"
      id="features"
      data-screen-label="Features"
    >
      <div className="max-w-7xl mx-auto">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl items-start mb-3xl fade-in-up">
          <div className="max-w-2xl">
            <span className="text-label-sm uppercase tracking-[0.24em] text-[#0d9488] font-semibold block mb-4">
              Key Features
            </span>
            <h2 className="font-h2 text-[clamp(2.35rem,4vw,4.25rem)] leading-[0.95] tracking-[-0.04em] text-on-surface">
              Built for smarter hull decisions.
            </h2>
          </div>
          <div className="lg:pt-3">
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              SeaFlint turns vessel data into timed, explainable cleaning decisions. The platform
              combines predictive modelling, fleet visibility, and validation tools so operators can
              act with confidence instead of relying on fixed schedules.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {FEATURES.map((feature) => (
            <article
              key={feature.n}
              className={`group relative min-h-[240px] rounded-[18px] p-5 shadow-[0_10px_30px_rgba(7,42,200,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(7,42,200,0.22)] ${feature.bg}`}
            >
              <div className="flex h-full flex-col">
                <span className="text-label-sm uppercase tracking-[0.22em] text-white/80 font-semibold">
                  {feature.n}
                </span>
                <h3 className="mt-3 font-h3 text-[1.42rem] leading-[1.05] tracking-[-0.03em] text-white">
                  {feature.t}
                </h3>
                <p className="mt-4 max-w-[23ch] text-[0.94rem] leading-6 text-white/80">
                  {feature.d}
                </p>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
