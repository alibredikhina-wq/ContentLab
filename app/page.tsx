import Header from "@/components/Header";
import Hero from "@/components/Hero";
import MouseGlow from "@/components/MouseGlow";
import Services from "@/components/Services";
import Cases from "@/components/Cases";
import Process from "@/components/Process";
import WhyUs from "@/components/WhyUs";
import Pricing from "@/components/Pricing";
import Contact from "@/components/Contact";
import Footer from "@/components/Footer";
import ScrollProgress from "@/components/ScrollProgress";
import JsonLd from "@/components/JsonLd";
import Protection from "@/components/Protection";
import YandexMetrika from "@/components/YandexMetrika";

export default function Home() {
  return (
    <main className="min-h-screen bg-[#0a0a0a] text-white">
      <JsonLd />
      <Protection />

      <MouseGlow />
      <ScrollProgress />
      <YandexMetrika />

      <Header />
      <Hero />
      <Services />
      <Cases />
      <Process />
      <WhyUs />
      <Pricing />
      <Contact />
      <Footer />
    </main>
  );
}
