import AboutUs from "@/components/lp-sections/AboutUs";
import CasaviSection from "@/components/lp-sections/CasaviSection";
import CounterSection from "@/components/lp-sections/CounterSection";
import HeroSection from "@/components/lp-sections/HeroSection";
import ServiceSection from "@/components/lp-sections/ServiceSection";


export default function Home() {
  return (
    <div className="h-full">
        <HeroSection />
        <ServiceSection />
        <CounterSection />
        <AboutUs />
        <CasaviSection />
    </div>
  );
}
