import RevealObserver from "@/components/RevealObserver";
import HashScroll from "@/components/HashScroll";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Platform from "@/components/Platform";
import Collaborate from "@/components/Collaborate";
import Research from "@/components/Research";
import Team from "@/components/Team";
import ContactInvite from "@/components/ContactInvite";
import Partners from "@/components/Partners";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <>
      <RevealObserver />
      <HashScroll />
      <a
        href="#platform"
        className="skip-link rounded-full bg-cyan px-5 py-3 text-sm font-bold text-navy"
      >
        Skip to main content
      </a>
      <Header />
      <main id="top">
        <Hero />
        <Platform />
        <Collaborate />
        <Research />
        <Team />
        <ContactInvite />
      </main>
      <Partners />
      <Footer />
    </>
  );
}
