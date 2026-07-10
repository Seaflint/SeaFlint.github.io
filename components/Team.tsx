import Image from "next/image";

const TEAM = [
  {
    img: "/assets/team-3.webp",
    name: "Marah Thormann",
    role: "Lead Researcher, Predictive Analytics",
    bio: "Led the development and deployment of SeaFlint's machine learning and predictive modelling capabilities, enabling accurate estimation of fuel consumption and the operational impacts of hull fouling.",
    delay: "",
  },
  {
    img: "/assets/team-1.webp",
    name: "Samuel Ward",
    role: "Lead Researcher, Optimization & Software Development",
    bio: "Leads the development of SeaFlint's optimization algorithms and overall software platform. He is responsible for translating advanced mathematical models into a scalable decision-support system, overseeing the design, implementation, and continuous evolution of SeaFlint's computational infrastructure and user-facing tools.",
    delay: "delay-1",
  },
  {
    img: "/assets/team-2.webp",
    name: "Julian Wharton",
    role: "Project Co-Lead, Maritime Operations & Biofouling",
    bio: "Brings extensive expertise in marine biofouling and vessel operations, guiding the practical application of SeaFlint's technologies to industry needs.",
    delay: "delay-2",
  },
  {
    img: "/assets/team-4.webp",
    name: "Alain Zemkoho",
    role: "Project Lead, Mathematical Optimization & AI",
    bio: "Directs the overall vision and scientific development of SeaFlint, integrating optimization, AI and data-driven decision-making for maritime sustainability.",
    delay: "delay-3",
  },
];

export default function Team() {
  return (
    <section
      className="py-3xl px-gutter bg-surface-container-low overflow-hidden"
      id="team"
      data-screen-label="Team"
    >
      <div className="max-w-7xl mx-auto">
        <div className="border-t border-outline-variant pt-xl mb-2xl fade-in-up">
          <div className="max-w-2xl">
            <span className="text-label-sm uppercase tracking-widest text-primary font-bold mb-sm block">
              The Team
            </span>
            <h2 className="font-h2 text-h2 text-on-surface mb-md">The people behind SeaFlint</h2>
            <p className="font-body-lg text-on-surface-variant">
              A University of Southampton team pairing machine-learning research, optimization and
              maritime operations expertise with real fleet data from Carisbrooke Shipping Ltd.
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-lg">
          {TEAM.map((member) => (
            <div
              key={member.name}
              className={`group relative overflow-hidden rounded-xl bg-surface-variant aspect-[3/4] fade-in-up ${member.delay}`}
            >
              <Image
                src={member.img}
                alt={member.name}
                fill
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                className="object-cover"
              />
              <div className="absolute inset-x-0 bottom-0 p-lg bg-gradient-to-t from-black/80 to-transparent translate-y-[calc(100%-72px)] group-hover:translate-y-0 transition-transform duration-300">
                <h4 className="text-white font-h3 text-h3">{member.name}</h4>
                <p className="text-white/80 font-body-sm">{member.role}</p>
                <p className="text-white/70 font-body-sm mt-sm">{member.bio}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
