import Divider from "@/components/ui/Divider";
import AboutUs from "@/components/lp-sections/AboutUs";
import CasaviSection from "@/components/lp-sections/CasaviSection";
import CounterSection from "@/components/lp-sections/CounterSection";
import HeroSection from "@/components/lp-sections/HeroSection";
import PartnerSection from "@/components/lp-sections/PartnerSection";
import ServiceSection from "@/components/lp-sections/ServiceSection";

export default function Home() {
  return (
    <div className="h-full">
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <CounterSection />
      <AboutUs />
      {/* Testimonial Slider */}
      <Divider />
      <CasaviSection />
    </div>
  );
}
