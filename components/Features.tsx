const FEATURES = [
  {
    n: "01",
    t: "Vessel-Specific Cleaning Optimization",
    d: "SeaFlint finds the exact moments cleaning a hull delivers cost-effective fuel savings, replacing fixed maintenance intervals with data-driven decisions.",
  },
  {
    n: "02",
    t: "Advanced Predictive Modelling",
    d: "XGBoost and other machine learning models trained on real-world sensor data to predict fuel consumption and capture the impact of hull fouling.",
  },
  {
    n: "03",
    t: "Everything in One Place",
    d: "Voyage maps, time series plots, and model evaluation metrics stay in one interactive dashboard for faster review.",
  },
  {
    n: "04",
    t: "Full Voyage Visibility",
    d: "Track fleet movements on an interactive map and inspect any point for date, time, position, and flagged anomalies.",
  },
  {
    n: "05",
    t: "Clean vs. Fouled Hull",
    d: "Visualisation of observed and predicted fuel consumption together with the clean hull baseline and confidence intervals.",
  },
  {
    n: "06",
    t: "Trust Built In",
    d: "Managers can validate model performance with R², RMSE, and MAE metrics without relying on static reports.",
  },
  {
    n: "07",
    t: "Up to 5% Fuel Savings",
    d: "Across four years of vessel data, SeaFlint demonstrated fuel savings of up to 5% per ship even after extra cleaning costs.",
  },
  {
    n: "08",
    t: "Connect Your Fleet Data Your Way",
    d: "Note: The current source for the weather and marine data limits the amount of data we can download and is only available for non-commercial purposes.",
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
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-2xl lg:items-start mb-3xl fade-in-up">
          <div className="max-w-2xl">
            <span className="text-label-sm uppercase tracking-[0.24em] text-[#34A99D] font-semibold block mb-4">
              Key Features
            </span>
            <h2 className="font-h2 text-[clamp(2.35rem,4vw,4.25rem)] leading-[0.95] tracking-[-0.04em] text-on-surface">
              Built for smarter hull decisions.
            </h2>
          </div>
          <div className="lg:mt-8">
            <p className="font-body-lg text-on-surface-variant max-w-xl">
              SeaFlint turns vessel data into timed, explainable cleaning decisions. The platform
              combines predictive modelling, fleet visibility, and validation tools so operators can
              act with confidence instead of relying on fixed schedules.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-4">
          {FEATURES.map((feature, i) => {
            const light = i % 2 === 1;
            return (
              <article
                key={feature.n}
                className={`group relative min-h-[240px] rounded-[18px] p-5 shadow-[0_10px_30px_rgba(7,42,200,0.14)] transition-all duration-300 hover:-translate-y-1 hover:shadow-[0_16px_38px_rgba(7,42,200,0.22)] ${
                  light ? "bg-white border border-[#34A99D]/30" : "bg-[#34A99D]"
                }`}
              >
                <div className="flex h-full flex-col">
                  <span
                    className={`text-label-sm uppercase tracking-[0.22em] font-semibold ${
                      light ? "text-[#34A99D]" : "text-white/80"
                    }`}
                  >
                    {feature.n}
                  </span>
                  <h3
                    className={`mt-3 font-h3 text-[1.42rem] leading-[1.05] tracking-[-0.03em] ${
                      light ? "text-on-surface" : "text-white"
                    }`}
                  >
                    {feature.t}
                  </h3>
                  <p
                    className={`mt-4 max-w-[23ch] text-[0.94rem] leading-6 ${
                      light ? "text-on-surface-variant" : "text-white/80"
                    }`}
                  >
                    {feature.d}
                  </p>
                </div>
              </article>
            );
          })}
        </div>
      </div>
    </section>
  );
}
