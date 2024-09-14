import AboutUs from "@/components/lp-sections/AboutUs";
import ServiceSection from "@/components/lp-sections/ServiceSection";


export default function Home() {
  return (
    <div className="h-full">
        <ServiceSection />
        <AboutUs />
    </div>
  );
}
