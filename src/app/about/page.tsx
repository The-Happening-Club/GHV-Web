"use client";
import React, { useEffect, useRef } from "react";
import { motion, useScroll, useTime, useTransform } from "motion/react";
import Lenis from "lenis";
import Image from "next/image";

export default function AboutPage() {
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
  const container = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target: container,
    offset: ["start start", "end end"],
  });

  return (
    <>
      <main className="h-fit overflow-visible">
        <Section1 scrollYProgress={scrollYProgress} />
        <Section2 scrollYProgress={scrollYProgress} />
        <Section3 scrollYProgress={scrollYProgress} />
      </main>
    </>
  );
}

const Section1 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [1, 0.5]);
  // const rotate = useTransform(scrollYProgress, [0, 1], [0, -5]);

  return (
    <motion.section
      // style={{ rotate }}
      className="sticky top-0 bg-slate-100 flex flex-col justify-between items-center  w-full h-[100vh] gap-10"
    >
      <motion.div
        className="flex flex-col h-full justify-center items-center gap-4"
        style={{ scale }}
      >
        <h1 className="text-8xl font-semibold text-blue-dark font-normalidad">
          Schön das Sie hier sind!
        </h1>
        <h2 className="text-blue-dark">
          Schnell, nahbar und verlässlich – für eine sorgenfreie Betreuung Ihrer
          Immobilie.
        </h2>
        <Image
          src="/icons/icon_chevron_down.png"
          width={30}
          height={10}
          alt="chevron down icon"
          className="animate-bounce"
        />
      </motion.div>

      <motion.div className="h-fit" style={{ scale }}>
        <Image
          src="/img/hero_sectio_img.png"
          width={1920}
          height={1080}
          style={{ height: "100%", width: "auto" }}
          alt="GHV Vorstand"
        />
      </motion.div>
    </motion.section>
  );
};

const Section2 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const x = useTransform(scrollYProgress, [0, 0], [100, 100]);
  return (
    <motion.section
      // style={{ scale, rotate }}
      className="sticky top-0 bg-blue-dark flex justify-start   w-full h-[100vh] p-96"
    >
      <h1 className="text-5xl sticky ">Schön das Sie hier sind</h1>
      <motion.div className="sticky" style={{ rotate, x }}>
        <Image
          src="/img/ghv-team-foto.png"
          width={1920}
          height={1080}
          alt="Team Foto"
        />
      </motion.div>
    </motion.section>
  );
};

const Section3 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const x = useTransform(scrollYProgress, [0, 1], [10, 10]);
  return (
    <motion.section
      style={{ x }}
      className="sticky top-0 bg-slate-50 flex flex-col justify-start   w-full h-[100vh] p-96"
    >
      <h1 className="text-5xl sticky ">Schön das Sie hier sind</h1>
    </motion.section>
  );
};
