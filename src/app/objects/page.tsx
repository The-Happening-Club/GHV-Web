"use client";
import React from "react";
import { motion } from "motion/react";
import { div } from "motion/react-client";

export default function Objects() {
  return (
    <div className="">
      <main className="sticky w-svw h-svh bg-red-500">
        <h1 className="text-5xl">Schön das Sie hier sind</h1>
        <h2>
          Willkommen bei der GHV – Ihrem Partner für professionelle und
          zukunftsorientierte Immobilienverwaltung! Mit über 35 Jahren Erfahrung
          und einer klaren Ausrichtung auf Qualität und Effizienz bieten wir
          Eigentümern und Mietern umfassende Lösungen für eine sorgenfreie
          Immobilienverwaltung.
        </h2>
      </main>
      <motion.div
        className="w-full h-[1000px] bg-blue-400"
        initial={{
          opacity: 0,
        }}
        whileInView={{
          opacity: 1,
          transition: {
            duration: 3,
          },
        }}
        viewport={{
          once: true,
          amount: 0.8,
        }}
      ></motion.div>
    </div>
  );
}
