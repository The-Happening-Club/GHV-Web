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
      <div className="flex justify-center">
        <hr className="flex w-2/3 max-w-[1366px]" />
      </div>
      <CasaviSection />
    </div>
  );
}
