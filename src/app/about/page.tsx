"use client";
import React, { useEffect, useRef } from "react";
import Lenis from "lenis";
import Image from "next/image";
import Link from "next/link";

export default function AboutPage() {
  const container = useRef<HTMLElement>(null);

  return (
    <>
      <main className="h-fit overflow-visible">
        <Section1 />
        <div className="relative flex flex-col items-center overflow-hidden bg-blue-dark py-20 md:py-40">
          <svg
            width="1296"
            height="2996"
            viewBox="0 0 1296 2996"
            fill="none"
            xmlns="http://www.w3.org/2000/svg"
            className="absolute h-fit z-0"
          >
            <path
              d="M603.004 2994.5C603.004 2994.5 522.504 2422 665.004 2041.5C807.504 1661 1542.75 1529.76 1201 1188C768.004 755.002 5 343 5 -5.61982e-05"
              stroke="#120041"
              strokeWidth="10"
              strokeLinecap="round"
            />
          </svg>

          <Section2
            title="Unsere Philosophie"
            paragraph={`Für uns stehen Menschen im Mittelpunkt – unsere Kunden und Mitarbeitenden. Immobilien sind für uns mehr als Gebäude: Sie sind Lebensräume und Werte, die geschützt werden wollen. \n\n Mit einem kleinen, engagierten Team stellen wir sicher, dass jede Immobilie die Aufmerksamkeit bekommt, die sie verdient.\n\nAls Familienunternehmen handeln wir flexibel, schnell und transparent.`}
            imgSrc="/graphics/michaela_organisation_verwaltung.png"
          />
          <Section2
            title="Unsere Geschichte"
            paragraph={`Unsere Wurzeln liegen in der renommierten GHV Glonner Hausverwaltungs GmbH.\n\n2016 führten wir diese Expertise in einem neu gegründeten Unternehmen fort, geleitet von Herrn Jesus Sanchez.\n\nDank unserer langjährigen Erfahrung in der WEG-Verwaltung (Wohnungseigentümergemeinschaften) genießen wir das Vertrauen zahlreicher Kunden.`}
            imgSrc="/graphics/jesus_technische_verwaltung.png"
          />
          <Section2
            title="Zukunftsorientiert"
            paragraph={`Die GHV steht für langjährige Erfahrung und innovative Lösungen. Als Mitglied des Verbands der Immobilienverwalter Bayern e. V. bleiben wir rechtlich und fachlich immer auf dem neuesten Stand.\n\nEntscheiden Sie sich für eine Hausverwaltung, die persönlich und kompetent ist – für Sie und Ihre Immobilie.`}
            imgSrc="/graphics/andreas_finanzielle_verwaltung.png"
          />
        </div>

        <Section3 />
      </main>
    </>
  );
}

const Section1 = () => {
  return (
    <section className="bg-slate-100 flex flex-col justify-between items-center w-full h-fit gap-10 pt-20 md:pt-40">
      <div className="flex flex-col h-full justify-center items-center gap-4">
        <h1 className="text-4xl text-center md:text-8xl font-semibold text-blue-dark font-normalidad">
          Schön das Sie hier sind!
        </h1>
        <h2 className="text-blue-dark font-thin text-xl md:text-3xl text-center mt-10">
          Die GHV Gonzalez Hausverwaltung UG bietet Ihnen professionelle
          Verwaltung <br /> und persönlichen Service.
        </h2>
      </div>

      <div className="md:w-1/2">
        <Image
          src="/img/hero_sectio_img.png"
          width={1920}
          height={1080}
          style={{ height: "auto", width: "100%" }}
          alt="GHV Vorstand"
        />
      </div>
    </section>
  );
};

const Section2 = ({
  title,
  paragraph,
  imgSrc,
}: {
  title: string;
  paragraph: string;
  imgSrc: string;
}) => {
  return (
    <section className="flex flex-col justify-start even:md:flex-row odd:md:flex-row-reverse  text-white  w-full h-fit md:px-96 px-8 md:p-20 mb-20 gap-40 z-10">
      <div className="flex flex-col w-full md:w-1/2 gap-10">
        <h2 className="text-4xl md:text-5xl font-normalidad">{title}</h2>
        <p className="text-xl font-thin whitespace-pre-line">{paragraph}</p>
      </div>
      <div className="flex w-full md:w-1/2 justify-center items-center">
        <div className="">
          <Image
            src={imgSrc}
            width={500}
            height={500}
            style={{ width: "100%", height: "auto", objectFit: "contain" }}
            alt="Team Foto"
          />
        </div>
      </div>
    </section>
  );
};
const Section3 = () => {
  return (
    <section className=" bg-blue-dark flex flex-col justify-center items-center text-white  w-full h-fit px-8 md:px-96 overflow-hidden gap-20 md:pt-40">
      <div className="flex flex-col justify-center items-center md:w-1/2 gap-4">
        <h2 className="text-4xl md:text-5xl font-normalidad text-center">
          Wir freuen uns auf Sie!
        </h2>
        <p className="text-xl font-thin text-center">
          Entdecken Sie die Vorteile unserer flexiblen und modernen
          Verwaltungslösungen. Kontaktieren Sie uns und überzeugen Sie sich
          selbst!
        </p>
      </div>
      <Link
        href={"mailto:info@ghv-web.com"}
        className="flex bg-orange-500 py-2 px-4 rounded-lg hover:bg-orange-200"
      >
        Jetzt Kontaktieren
      </Link>
      <div className="w-full md:w-fit h-fit">
        <Image
          src="/img/ghv-team-foto.png"
          width={1920}
          height={1080}
          alt="Team Foto"
          style={{ width: "100%", height: "auto", objectFit: "contain" }}
        />
      </div>
    </section>
  );
};
