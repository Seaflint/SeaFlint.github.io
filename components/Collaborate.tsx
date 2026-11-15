import { mailto } from "./site";

const CARDS = [
  {
    title: "Explore industry applications",
    body: "Discuss operational needs and potential pilot projects.",
    action: "Discuss a pilot",
    subject: "SeaFlint enquiry — Industry applications and pilots",
  },
  {
    title: "Develop research together",
    body: "Connect on methods, maritime applications and future funding proposals.",
    action: "Explore collaboration",
    subject: "SeaFlint enquiry — Research collaboration",
  },
  {
    title: "Contribute vessel data",
    body: "Discuss suitable datasets, permissions and a research partnership.",
    action: "Discuss data collaboration",
    subject: "SeaFlint enquiry — Data collaboration",
  },
  {
    title: "Request to test SeaFlint",
    body: "Tell us about your intended use and interest in evaluating the tool.",
    action: "Request testing access",
    subject: "SeaFlint enquiry — Testing access",
  },
];

export default function Collaborate() {
  return (
    <section id="collaborate" data-screen-label="Collaborate" className="bg-pale py-12 md:py-20">
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <h2 className="mb-10 text-center font-h2 text-[clamp(1.9rem,3.4vw,2.75rem)] font-bold tracking-[-0.02em] text-navy fade-in-up">
          How would you like to work with us?
        </h2>

        <div className="grid grid-cols-1 gap-5 md:grid-cols-2">
          {CARDS.map((card, i) => (
            <div
              key={card.title}
              className={`group flex flex-col rounded-xl border border-navy/10 bg-white p-7 shadow-[0_2px_10px_rgba(5,40,61,0.05)] transition-shadow hover:shadow-[0_14px_40px_rgba(5,40,61,0.12)] fade-in-up ${
                i % 2 === 1 ? "delay-1" : ""
              }`}
            >
              <h3 className="font-h3 text-[1.3rem] font-bold text-navy">{card.title}</h3>
              <p className="mt-2 text-[0.98rem] leading-relaxed text-navy/70">{card.body}</p>
              <a
                href={mailto(card.subject)}
                className="mt-5 inline-flex items-center gap-1 self-start text-sm font-bold text-cyan-dark hover:underline"
              >
                {card.action}
                <span className="material-symbols-outlined text-base transition-transform group-hover:translate-x-1">
                  arrow_forward
                </span>
              </a>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
