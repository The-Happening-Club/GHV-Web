import React from "react";
import { classed } from "@tw-classed/react";
import ServiceCard from "./ServiceCard";

const ClassedSection = classed(
  "section",
  "flex justify-center bg-gradient-to-t from-slate-50 to-slate-100 px-6 pt-48 pb-32 md:pb-60  transition-all duration-500 ease-out"
);
const ClassedSectionContainer = classed(
  "div",
  "flex flex-col w-full max-w-[1366px]"
);
const ClassedSubHeader = classed(
  "h1",
  "flex w-full justify-center text-lg md:text-xl font-light text-blue-dark uppercase"
);
const ClassedHeader = classed(
  "h4",
  " text-center font-normalidad justify-center text-2xl md:text-4xl font-semibold text-blue-dark"
);

const serviceCardArray = [
  {
    imgSrc: "/graphics/andreas_finanzielle_verwaltung.png",
    title: "Finanzielle Verwaltung",
    info: "Die organisatorische Verwaltung sorgt für reibungslose Abläufe: Eigentümerversammlungen, Protokolle, Hausordnungen, Vertragsüberwachung und klare Kommunikation.",
    href: "/services",
  },
  {
    imgSrc: "/graphics/michaela_organisation_verwaltung.png",
    title: "Organistatorische Verwaltung",
    info: "Wir inspizieren Gemeinschaftseigentum, überwachen Wartung und Reparaturen, sichern die Gebäudetechnik und erkennen frühzeitig Mängel, um Kosten zu sparen.",
    href: "/services",
  },
  {
    imgSrc: "/graphics/jesus_technische_verwaltung.png",
    title: "Technische Verwaltung",
    info: "Wir erstellen Wirtschaftspläne, Jahresabrechnungen und verwalten Rücklagen. Mit klarer Buchführung sorgen wir für Transparenz und wirtschaftliche Stabilität.",
    href: "/services",
  },
];

const ServiceSection = () => {
  return (
    <ClassedSection>
      <ClassedSectionContainer>
        <ClassedSubHeader>Was wir Ihnen bieten</ClassedSubHeader>

        <ClassedHeader>
          Unsere <span className="text-orange-400">&nbsp;Services&nbsp;</span>{" "}
          auf einen Blick
        </ClassedHeader>
        <div className="flex flex-col items-center xl:flex-row gap-16 mt-16">
          {serviceCardArray.map((el, index) => (
            <ServiceCard
              key={index}
              imgSrc={el.imgSrc}
              title={el.title}
              info={el.info}
              href={el.href}
            />
          ))}
        </div>
      </ClassedSectionContainer>
    </ClassedSection>
  );
};

export default ServiceSection;
