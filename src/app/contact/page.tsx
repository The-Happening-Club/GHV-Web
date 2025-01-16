"use client";
import {
  AdressSection,
  ContactSection,
} from "@/components/contact/ContactSection";
import Lenis from "lenis";
import React, { useEffect } from "react";

export default function Contact() {
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
    <div>
      <ContactSection />
      <AdressSection />
    </div>
  );
}
