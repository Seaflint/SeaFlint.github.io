type Partner = {
  src: string;
  name: string;
  href: string;
  /** Invert a dark wordmark to white for the dark strip. */
  invert?: boolean;
  /** Lift dark grey secondary text so it reads on navy (pending approved dark variants). */
  lighten?: boolean;
};

const PARTNERS: Partner[] = [
  {
    src: "/assets/partner-southampton.png",
    name: "University of Southampton",
    href: "https://www.southampton.ac.uk/about/faculties-schools-departments/school-of-mathematical-sciences",
    // Navy wordmark — inverted to white lettering for the dark strip.
    invert: true,
  },
  {
    src: "/assets/partner-rsg.png",
    name: "Research Software Group",
    href: "https://rsgsoton.net/",
    lighten: true,
  },
  {
    src: "/assets/partner-cs.png",
    name: "Carisbrooke Shipping Ltd",
    href: "https://carisbrooke.co/",
  },
  {
    src: "/assets/partner-das.png",
    name: "Decision Analysis Services",
    href: "https://das-int.com/",
    lighten: true,
  },
];

export default function Partners() {
  return (
    <section
      data-screen-label="Partners"
      aria-label="Our partners"
      className="w-full bg-navy-800 py-12"
    >
      <div className="mx-auto max-w-[1200px] px-5 sm:px-6">
        <p className="mb-7 text-sm font-bold uppercase tracking-[0.22em] text-cyan">Our partners</p>
        <ul className="grid grid-cols-2 items-center gap-x-8 gap-y-8 md:grid-cols-4 md:gap-x-10">
          {PARTNERS.map((partner) => (
            <li key={partner.name} className="flex items-center justify-center">
              <a
                href={partner.href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={`${partner.name} (opens in a new tab)`}
                className="inline-flex items-center justify-center transition-opacity hover:opacity-80"
              >
                <img
                  src={partner.src}
                  alt={partner.name}
                  className={`max-h-16 w-auto max-w-full object-contain ${
                    partner.invert ? "brightness-0 invert" : ""
                  } ${partner.lighten ? "brightness-[1.75]" : ""}`}
                  loading="lazy"
                />
              </a>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
