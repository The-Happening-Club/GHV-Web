"use client";

import Divider from "@/components/ui/Divider";
import AboutUs from "@/components/lp-sections/AboutUs";
import CasaviSection from "@/components/lp-sections/CasaviSection";
import CounterSection from "@/components/lp-sections/CounterSection";
import HeroSection from "@/components/lp-sections/HeroSection";
import PartnerSection from "@/components/lp-sections/PartnerSection";
import ServiceSection from "@/components/lp-sections/ServiceSection";
import { useEffect } from "react";
import Lenis from "lenis";

export default function Home() {
  useEffect(() => {
    const lenis = new Lenis();

    function raf(time: number) {
      lenis.raf(time);
      requestAnimationFrame(raf);
    }

    requestAnimationFrame(raf);

    return () => {
      lenis.destroy();
    };
  }, []);
  return (
    <>
      <HeroSection />
      <PartnerSection />
      <ServiceSection />
      <CounterSection />
      <AboutUs />
      {/* Testimonial Slider */}
      <Divider />
      <CasaviSection />
    </>
  );
}
