import React from "react";
import { classed } from "@tw-classed/react";
import Image from "next/image";
import Button from "../ui/Button";

const ClassedSubHeader = classed(
  "h1",
  "flex w-full font-normalidad text-slate-800 text-md md:text-xl font-light uppercase"
);
const ClassedHeader = classed(
  "h4",
  "flex font-normalidad text-2xl md:text-6xl font-semibold"
);

const CasaviSection = () => {
  return (
    <div className="relative flex justify-center text-dark-blue px-10 xl:px-0 pt-32 pb-48 text-blue-dark">
      <div className="flex flex-col-reverse xl:flex-row max-w-[1366px] w-full gap-8 md:gap-0 bg-gradient-to-tr">
        <div className="flex flex-col md:w-3/4 justify-center gap-10">
          <div className="flex flex-col gap-2 px-4 md:px-0">
            <ClassedSubHeader>Casavi Serviceportal</ClassedSubHeader>
            <div className="flex flex-col xl:flex-row whitespace-nowrap">
              <ClassedHeader>Hausverwaltung in Ihrer</ClassedHeader>
              <span className="font-normalidad text-2xl md:text-6xl font-semibold xl:pl-2 text-orange-400">
                Hand
              </span>
            </div>
          </div>
          <p className="text-base font-light px-4 md:px-0">
            <strong>
              Ihre Immobilie jederzeit im Blick – einfach, transparent und
              bequem über PC oder Smartphone.&nbsp;
            </strong>
            In Ihrem persönlichen Casavi-Account finden Sie alle objektbezogenen
            Abrechnungsunterlagen, wichtige Dokumente und Protokolle an einem
            zentralen Ort. Über aktuelle Meldungen und Aushänge in Ihrem Objekt
            werden Sie sofort benachrichtigt. So behalten Sie den Überblick über
            Ihre Immobilie! Die GHV Gonzalez Hausverwaltung UG setzt auf moderne
            Kommunikation und digitale Lösungen, um Ihnen eine professionelle
            und transparente Immobilienverwaltung zu bieten. <br />
            <br />
            Wenn sie mehr über Ihre Vorteile mit unserem Portal erfahren wollen
            klicken Sie auf den Link.
          </p>
          <div className="flex w-full min-w-96 h-full items-end px-4 md:px-0">
            <Button title="mehr erfahren" href={"/casavi"} prio={3} />
          </div>
        </div>

        <div className="">
          <div className="flex justify-center transition-all duration-700 easy-in-out pr-6">
            <Image
              src="/graphics/casavi_oberfläche.png"
              height={1000}
              width={700}
              alt="Ein Portrait"
              className="relative z-10 drop-shadow-xl"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default CasaviSection;
