const PARTNERS = [
  { src: "/assets/partner-nhs.jpg", alt: "NHS", href: "https://www.uhs.nhs.uk/" },
  { src: "/assets/partner-rsg.png", alt: "Research Software Group", href: "https://rsgsoton.net/" },
  {
    src: "/assets/partner-southampton.png",
    alt: "University of Southampton",
    href: "https://www.southampton.ac.uk/about/faculties-schools-departments/school-of-mathematical-sciences",
  },
  { src: "/assets/partner-das.png", alt: "Decision Analysis Services", href: "https://www.das-int.com/" },
];

export default function TrustedBy() {
  return (
    <section className="py-2xl px-gutter bg-surface" data-screen-label="Trusted By">
      <div className="max-w-7xl mx-auto text-center fade-in-up">
        <span className="text-label-sm uppercase tracking-widest text-on-surface-variant font-bold block mb-xl">
          In partnership with
        </span>
        <div className="flex flex-wrap items-center justify-center gap-x-3xl gap-y-lg">
          {PARTNERS.map((partner) => (
            <a
              key={partner.alt}
              href={partner.href}
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center opacity-80 hover:opacity-100 transition-opacity"
              aria-label={partner.alt}
            >
              <img
                src={partner.src}
                alt={partner.alt}
                className="h-9 w-auto object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
