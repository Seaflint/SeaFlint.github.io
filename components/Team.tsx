"use client";

import Image from "next/image";
import { useState } from "react";

const TEAM = [
  {
    img: "/assets/team-3.webp",
    name: "Marah Thormann",
    role: "Lead Researcher, Predictive Analytics",
    bio: "Led the development and deployment of SeaFlint's machine learning and predictive modelling capabilities, enabling accurate estimation of fuel consumption and the operational impacts of hull fouling.",
  },
  {
    img: "/assets/team-1.webp",
    name: "Samuel Ward",
    role: "Lead Researcher, Optimization & Software Development",
    bio: "Leads the development of SeaFlint's optimization algorithms and overall software platform. He is responsible for translating advanced mathematical models into a scalable decision-support system, overseeing the design, implementation, and continuous evolution of SeaFlint's computational infrastructure and user-facing tools.",
  },
  {
    img: "/assets/team-2.webp",
    name: "Julian Wharton",
    role: "Project Co-Lead, Maritime Operations & Biofouling",
    bio: "Brings extensive expertise in marine biofouling and vessel operations, guiding the practical application of SeaFlint's technologies to industry needs.",
  },
  {
    img: "/assets/team-4.webp",
    name: "Alain Zemkoho",
    role: "Project Lead, Mathematical Optimization & AI",
    bio: "Directs the overall vision and scientific development of SeaFlint, integrating optimization, AI and data-driven decision-making for maritime sustainability.",
  },
];

export default function Team() {
  const [openBio, setOpenBio] = useState<string | null>(null);

  return (
    <section id="team" data-screen-label="Team" className="bg-white pb-12 pt-10 md:pb-20 md:pt-14">
      <div className="mx-auto grid max-w-[1200px] grid-cols-1 gap-8 px-5 sm:px-6 lg:grid-cols-4 lg:gap-10">
        <div className="lg:col-span-1 fade-in-up">
          <span className="mb-3 block text-sm font-bold uppercase tracking-[0.2em] text-cyan-dark">
            The team
          </span>
          <h2 className="mb-3 font-h2 text-[clamp(1.8rem,3vw,2.5rem)] font-bold tracking-[-0.02em] text-navy">
            Our team
          </h2>
          <p className="text-[1rem] leading-relaxed text-navy/70">
            A University of Southampton team pairing machine-learning research, optimisation and
            maritime operations expertise with real fleet data from Carisbrooke Shipping Ltd.
          </p>
        </div>

        <div className="grid grid-cols-1 gap-6 sm:grid-cols-2 lg:col-span-3 lg:grid-cols-4">
          {TEAM.map((member, i) => {
            const isOpen = openBio === member.name;
            const bioId = `bio-${member.name.replace(/\s+/g, "-").toLowerCase()}`;
            return (
              <div
                key={member.name}
                className={`flex flex-col fade-in-up ${i === 1 ? "delay-1" : i === 2 ? "delay-2" : i === 3 ? "delay-3" : ""}`}
              >
                <div className="relative aspect-[3/4] overflow-hidden rounded-xl border border-navy/10 bg-pale">
                  <Image
                    src={member.img}
                    alt={member.name}
                    fill
                    sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                    className="object-cover"
                  />
                </div>
                <h3 className="mt-4 font-h3 text-[1.15rem] font-bold text-navy">{member.name}</h3>
                <p className="mt-1 text-sm text-navy/65">{member.role}</p>
                <button
                  type="button"
                  onClick={() => setOpenBio(isOpen ? null : member.name)}
                  aria-expanded={isOpen}
                  aria-controls={bioId}
                  className="mt-3 inline-flex items-center gap-1 self-start text-sm font-bold text-cyan-dark hover:underline"
                >
                  {isOpen ? "Hide biography" : "Read biography"}
                  <span
                    className={`material-symbols-outlined text-base transition-transform ${isOpen ? "rotate-180" : ""}`}
                  >
                    expand_more
                  </span>
                </button>
                {isOpen && (
                  <p id={bioId} className="mt-3 text-sm leading-relaxed text-navy/70">
                    {member.bio}
                  </p>
                )}
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}
