import AboutUs from "@/components/lp-sections/AboutUs";
import HeroSection from "@/components/lp-sections/HeroSection";
import ServiceSection from "@/components/lp-sections/ServiceSection";


export default function Home() {
  return (
    <div className="h-full">
        <HeroSection />
        <ServiceSection />
        <AboutUs />
    </div>
  );
}
