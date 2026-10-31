import type { Metadata } from "next";
import Header from "@/components/Header";
import Footer from "@/components/Footer";
import { CONTACT_EMAIL } from "@/components/site";

export const metadata: Metadata = {
  title: "Privacy notice | SeaFlint",
  description:
    "How SeaFlint handles personal data on this website, including server logs, third-party font delivery and email enquiries.",
};

const LAST_UPDATED = "30 October 2026";

/** Highlights a fact the project lead must confirm before publishing. */
function Confirm({ children }: { children: React.ReactNode }) {
  return (
    <mark className="rounded bg-[#fff3bf] px-1.5 py-0.5 text-navy">[To confirm: {children}]</mark>
  );
}

export default function PrivacyPage() {
  return (
    <>
      <Header />
      <main id="top">
        {/* Navy title band — also gives the transparent sticky header a dark backdrop */}
        <section className="bg-navy pb-14 pt-32 md:pb-16 md:pt-36">
          <div className="mx-auto max-w-[800px] px-5 sm:px-6">
            <h1 className="font-h1 text-[clamp(2rem,4vw,3rem)] font-black leading-tight tracking-[-0.02em] text-white">
              Privacy notice
            </h1>
            <p className="mt-4 text-[1.05rem] text-white/75">
              How we handle personal data in connection with this website.
            </p>
            <p className="mt-3 text-sm text-white/55">Last updated: {LAST_UPDATED}</p>
          </div>
        </section>

        <section className="bg-white py-12 md:py-16">
          <div className="mx-auto max-w-[800px] px-5 sm:px-6">
            <div className="space-y-10 text-[1rem] leading-relaxed text-navy/80">
              <section aria-labelledby="summary">
                <h2 id="summary" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Summary
                </h2>
                <p>
                  This website is an information site about SeaFlint, a research project on
                  hull-fouling and vessel performance. It does not ask you to create an account, does
                  not contain any forms, and does not use cookies or analytics. We do not build
                  profiles of visitors or use your data for advertising.
                </p>
                <p className="mt-3">
                  The only personal data involved is the limited technical information your browser
                  sends when it requests a page, and anything you choose to tell us if you email us.
                </p>
              </section>

              <section aria-labelledby="who-we-are">
                <h2 id="who-we-are" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Who we are
                </h2>
                <p>
                  SeaFlint is developed by a research team at the University of Southampton, working
                  with industry partners. The data controller for this website is{" "}
                  <Confirm>
                    the controller&apos;s full legal name and registered address — most likely the
                    University of Southampton, University Road, Southampton SO17 1BJ
                  </Confirm>
                  .
                </p>
                <p className="mt-3">
                  Questions about this notice can be sent to{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-cyan-dark hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  . <Confirm>whether enquiries should instead go to a named data protection officer or the University&apos;s central privacy team</Confirm>
                </p>
              </section>

              <section aria-labelledby="scope">
                <h2 id="scope" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  What this notice covers
                </h2>
                <p>
                  This notice covers this public website only. It does not cover the SeaFlint
                  application behind the login, which has its own terms and privacy arrangements, nor
                  the websites of our partners or any other site we link to.
                </p>
              </section>

              <section aria-labelledby="what-we-collect">
                <h2 id="what-we-collect" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  What we collect
                </h2>

                <h3 className="mb-2 mt-5 font-h3 text-[1.15rem] font-bold text-navy">
                  Cookies and analytics
                </h3>
                <p>
                  This website sets no cookies and uses no analytics, tracking pixels or advertising
                  technology. Nothing is stored in your browser&apos;s local or session storage.
                </p>

                <h3 className="mb-2 mt-5 font-h3 text-[1.15rem] font-bold text-navy">
                  Server logs
                </h3>
                <p>
                  Like virtually all websites, our hosting provider automatically records technical
                  information when a page is requested. This typically includes your IP address, the
                  page requested, the time of the request, and your browser and device type. These
                  logs are used to serve the site, keep it secure and diagnose faults.
                </p>
                <p className="mt-3">
                  The site is hosted by{" "}
                  <Confirm>
                    the hosting provider and its data-processing terms — the current development site
                    runs on Vercel Inc.
                  </Confirm>
                </p>

                <h3 className="mb-2 mt-5 font-h3 text-[1.15rem] font-bold text-navy">
                  Fonts and icons
                </h3>
                <p>
                  The site loads an icon font from Google Fonts (
                  <span className="whitespace-nowrap">fonts.googleapis.com</span>). When your browser
                  requests that file, your IP address and browser details are shared with Google,
                  which acts as an independent controller for that request. Our main typeface is
                  served from our own domain and involves no third-party request.
                </p>

                <h3 className="mb-2 mt-5 font-h3 text-[1.15rem] font-bold text-navy">
                  If you email us
                </h3>
                <p>
                  The contact buttons on this site open your own email application with a pre-filled
                  subject line. No information is sent to us until you choose to send the message.
                  When you do, we receive whatever you include — typically your name, email address,
                  organisation and the details of your enquiry — and we use it to respond and to
                  discuss any collaboration you raise.
                </p>
                <p className="mt-3">
                  Please do not send confidential or commercially sensitive vessel data by email. If
                  an enquiry needs that kind of information, we will agree appropriate arrangements
                  with you first.
                </p>
              </section>

              <section aria-labelledby="legal-basis">
                <h2 id="legal-basis" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Why we are allowed to use this information
                </h2>
                <p>
                  Under UK data protection law we rely on our legitimate interests in running a
                  secure, functioning website and in responding to enquiries about our research. Where
                  an enquiry leads to a research collaboration or data partnership, further processing
                  would be covered by a separate agreement and, where relevant, by the University&apos;s
                  research-ethics and data-governance arrangements.
                </p>
              </section>

              <section aria-labelledby="retention">
                <h2 id="retention" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  How long we keep it
                </h2>
                <p>
                  Server logs are kept for the period set by our hosting provider and then deleted or
                  aggregated. Email correspondence is kept for as long as needed to deal with your
                  enquiry and any resulting collaboration, and then disposed of in line with our
                  records-retention practice.
                </p>
                <p className="mt-3">
                  <Confirm>
                    the actual retention periods for server logs and enquiry correspondence
                  </Confirm>
                </p>
              </section>

              <section aria-labelledby="sharing">
                <h2 id="sharing" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Who we share it with
                </h2>
                <p>
                  We do not sell personal data and we do not share it for marketing. Personal data is
                  only handled by our hosting and email providers acting on our behalf, by Google in
                  respect of the icon-font request described above, and by members of the SeaFlint
                  team who need to see your enquiry in order to answer it. We may also disclose
                  information where the law requires it.
                </p>
              </section>

              <section aria-labelledby="external-links">
                <h2 id="external-links" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Links to other sites
                </h2>
                <p>
                  This site links to the SeaFlint login, to our published research on arXiv, and to
                  our partners&apos; websites. Those organisations are responsible for their own
                  handling of your data, and we suggest reading their privacy notices.
                </p>
              </section>

              <section aria-labelledby="your-rights">
                <h2 id="your-rights" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Your rights
                </h2>
                <p>
                  Under UK data protection law you have the right to ask what personal data we hold
                  about you, to have inaccurate data corrected, to ask for data to be erased or its
                  use restricted, to object to processing based on legitimate interests, and to
                  receive certain data in a portable form. To exercise any of these rights, email{" "}
                  <a
                    href={`mailto:${CONTACT_EMAIL}`}
                    className="font-semibold text-cyan-dark hover:underline"
                  >
                    {CONTACT_EMAIL}
                  </a>
                  .
                </p>
                <p className="mt-3">
                  If you are unhappy with how we have handled your personal data you can complain to
                  the Information Commissioner&apos;s Office at{" "}
                  <a
                    href="https://ico.org.uk/make-a-complaint/"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-semibold text-cyan-dark hover:underline"
                  >
                    ico.org.uk
                    <span className="sr-only"> (opens in a new tab)</span>
                  </a>
                  .
                </p>
              </section>

              <section aria-labelledby="changes">
                <h2 id="changes" className="mb-3 font-h2 text-[1.5rem] font-bold text-navy">
                  Changes to this notice
                </h2>
                <p>
                  We will update this notice if the way the site works changes — for example if we
                  add an enquiry form, analytics or cookies. The date at the top shows when it was
                  last revised.
                </p>
              </section>
            </div>

            <div className="mt-12 border-t border-navy/10 pt-8">
              <a
                href="/"
                className="inline-flex items-center gap-1 text-sm font-bold text-cyan-dark hover:underline"
              >
                <span className="material-symbols-outlined text-base">arrow_back</span>
                Back to the SeaFlint home page
              </a>
            </div>
          </div>
        </section>
      </main>
      <Footer />
    </>
  );
}
