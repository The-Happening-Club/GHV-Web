"use client";

import { classed } from "@tw-classed/react";
import { useRouter } from "next/navigation";
import React from "react";

const Title = classed("h2", "text-3xl");

export default function Impressum() {
  const router = useRouter();
  const handleClick = () => {
    router.back();
  };
  return (
    <main className="flex md:min-h-[800px] w-full md:pb-0 justify-center bg-gradient-to-tl from-blue-dark to-blue-950 overflow-hidden px-6 xl:px-0">
      <div className="lg:relative w-full lg:max-w-[1366px] flex flex-col mt-14 pb-24 md:pb-0 md:pt-0 gap-8 md:gap-0 mb-40 text-white">
        <h1 className="text-5xl font-normalidad">Impressum</h1>
        <br />
        <p>
          GHV Gonzalez Hausverwaltungs UG (haftungsbeschr&auml;nkt)
          <br />
          Inselkammerstr. 11
          <br />
          82008 Unterhaching
        </p>
        <br />
        <p>
          Handelsregister: 225595
          <br />
          Registergericht: Amtsgericht M&uuml;nchen Registergericht
        </p>
        <br />
        <p>
          <strong>Vertreten durch:</strong>
          <br />
          Jesus, Sanchez Gonzalez
        </p>
        <br /> <br />
        <Title>Kontakt</Title>
        <br />
        <p>
          Telefon: 089 611 65 3000
          <br />
          E-Mail: info@ghv-web.de
        </p>
        <br /> <br />
        <Title>Umsatzsteuer-ID</Title>
        <br />
        <p>
          Umsatzsteuer-Identifikationsnummer gem&auml;&szlig; &sect; 27 a
          Umsatzsteuergesetz:
          <br />
          143/141/11622
        </p>
        <br /> <br />
        <Title>Angaben zur Berufs&shy;haftpflicht&shy;versicherung</Title>
        <br />
        <p>
          <strong>Name und Sitz des Versicherers:</strong>
          <br />
          Generali Deutschland Versicherungs Ag,
          <br />
          &Auml;u&szlig;ere Sulzbacher Str. 116,
          <br />
          90491 N&uuml;rnberg
        </p>
        <p>
          <br />
          <strong>Geltungsraum der Versicherung:</strong>
          <br />
          Deutschland
        </p>
        <br />
        <br />
        <Title>
          Verbraucher&shy;streit&shy;beilegung/Universal&shy;schlichtungs&shy;stelle
        </Title>
        <br />
        <p>
          Wir sind nicht bereit oder verpflichtet, an Streitbeilegungsverfahren
          vor einer Verbraucherschlichtungsstelle teilzunehmen.
        </p>
        <p>
          Quelle:{" "}
          <a href="https://www.e-recht24.de">https://www.e-recht24.de</a>
        </p>
      </div>

      <div
        onClick={handleClick}
        className="fixed rounded-full bottom-20 right-0 mr-8 flex justify-center items-center h-20 w-20 bg-slate-50/25 hover:bg-white cursor-pointer drop-shadow-lg rotate-180"
      >
        <svg
          width="31"
          height="16"
          viewBox="0 0 31 16"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <path
            d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
            fill="black"
          />
        </svg>
      </div>
    </main>
  );
}
