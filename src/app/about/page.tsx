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
        <Section2
          title="Unsere Philosophie"
          paragraph="Für uns stehen Menschen im Mittelpunkt – unsere Kunden und Mitarbeitenden. Immobilien sind für uns mehr als Gebäude: Sie sind Lebensräume und Werte, die geschützt werden wollen.

Mit einem kleinen, engagierten Team stellen wir sicher, dass jede Immobilie die Aufmerksamkeit bekommt, die sie verdient.

Als Familienunternehmen handeln wir flexibel, schnell und transparent."
          scrollYProgress={scrollYProgress}
        />
        <Section2
          title="Unsere Geschichte"
          paragraph="Für uns stehen Menschen im Mittelpunkt – unsere Kunden und Mitarbeitenden. Immobilien sind für uns mehr als Gebäude: Sie sind Lebensräume und Werte, die geschützt werden wollen.

Mit einem kleinen, engagierten Team stellen wir sicher, dass jede Immobilie die Aufmerksamkeit bekommt, die sie verdient.

Als Familienunternehmen handeln wir flexibel, schnell und transparent."
          scrollYProgress={scrollYProgress}
        />
        <Section2
          title="Zukunftsorientiert"
          paragraph="Die GHV steht für langjährige Erfahrung und innovative Lösungen. Als Mitglied des Verbands der Immobilienverwalter Bayern e. V. bleiben wir rechtlich und fachlich immer auf dem neuesten Stand.

Entscheiden Sie sich für eine Hausverwaltung, die persönlich und kompetent ist – für Sie und Ihre Immobilie."
          scrollYProgress={scrollYProgress}
        />

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
        <h2 className="text-blue-dark font-thin text-3xl text-center mt-10">
          Die GHV Gonzalez Hausverwaltung UG bietet Ihnen professionelle
          Verwaltung <br /> und persönlichen Service.
        </h2>
        <Image
          src="/icons/icon_chevron_down.png"
          width={30}
          height={10}
          alt="chevron down icon"
          className="animate-bounce mt-10"
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

const Section2 = ({
  scrollYProgress,
  title,
  paragraph,
}: {
  scrollYProgress: any;
  title: string;
  paragraph: string;
}) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const x = useTransform(scrollYProgress, [0, 0], [100, 100]);
  return (
    <motion.section
      // style={{ scale, rotate }}
      className="sticky top-0 bg-blue-dark flex justify-start even:flex-row odd:flex-row-reverse  text-white  w-full h-[100vh] p-96"
    >
      <div className="w-1/2">
        <h2 className="text-5xl sticky ">{title}</h2>
        <p className="text-xl font-thin">{paragraph}</p>
      </div>
    </motion.section>
  );
};
const Section3 = ({ scrollYProgress }: { scrollYProgress: any }) => {
  const scale = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
  const rotate = useTransform(scrollYProgress, [0, 1], [-5, 0]);
  const x = useTransform(scrollYProgress, [0, 0], [100, 100]);
  return (
    <motion.section
      // style={{ scale, rotate }}
      className="sticky top-0 bg-blue-dark flex justify-start even:flex-row odd:flex-row-reverse  text-white  w-full h-[100vh] p-96"
    >
      <div className="w-svw h-fit">
        <Image
          src="/img/ghv-team-foto.png"
          width={1920}
          height={1080}
          alt="Team Foto"
        />
      </div>
    </motion.section>
  );
};
