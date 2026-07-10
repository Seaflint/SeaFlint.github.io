import { RegisterProvider } from "@/components/RegisterContext";
import RevealObserver from "@/components/RevealObserver";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import TrustedBy from "@/components/TrustedBy";
import Features from "@/components/Features";
import About from "@/components/About";
import DashboardCarousel from "@/components/DashboardCarousel";
import Team from "@/components/Team";
import Research from "@/components/Research";
import RegisterModal from "@/components/RegisterModal";
import Footer from "@/components/Footer";

export default function Home() {
  return (
    <RegisterProvider>
      <RevealObserver />
      <Header />
      <main id="top">
        <Hero />
        <TrustedBy />
        <Features />
        <About />
        <DashboardCarousel />
        <Team />
        <Research />
      </main>
      <RegisterModal />
      <Footer />
    </RegisterProvider>
  );
}
