import React from "react";
import { classed } from "@tw-classed/react";
import ServiceCard from "./ServiceCard";

const ClassedSection = classed(
  "section",
  "flex justify-center bg-gradient-to-t from-slate-50 to-slate-100 px-6 pt-32 pb-32 md:pb-48  transition-all duration-500 ease-out"
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
    info: "Die finanzielle Verwaltung sichert die wirtschaftliche Stabilität Ihrer Immobilie. Wir erstellen maßgeschneiderte Wirtschaftspläne, transparente Jahresabrechnungen und kümmern uns um die gewissenhafte Verwaltung von Rücklagen und Hausgeldern. Mit unserer professionellen Buchführung und der Kontrolle aller Rechnungen sorgen wir für klare, nachvollziehbare Finanzen und maximale Transparenz.",
    href: "/services",
  },
  {
    imgSrc: "/graphics/michaela_organisation_verwaltung.png",
    title: "Organistatorische Verwaltung",
    info: "Die organisatorische Verwaltung stellt sicher, dass alle Abläufe rund um Ihre Immobilie reibungslos funktionieren. Wir organisieren Eigentümerversammlungen, führen Beschlussprotokolle und kümmern uns um die Einhaltung von Haus- und Nutzungsordnungen. Zudem überwachen wir alle Verträge in enger Zusammenarbeit mit den Eigentümern und sorgen für eine strukturierte und transparente Kommunikation.",
    href: "/services",
  },
  {
    imgSrc: "/graphics/jesus_technische_verwaltung.png",
    title: "Technische Verwaltung",
    info: "Die technische Verwaltung ist der Schlüssel zur langfristigen Erhaltung Ihrer Immobilie. Wir führen regelmäßige Inspektionen des Gemeinschaftseigentums durch, überwachen Wartungs- und Reparaturarbeiten und sorgen dafür, dass die Gebäudetechnik und Außenanlagen stets in einwandfreiem Zustand sind. Mit unserer technischen Expertise erkennen wir frühzeitig Mängel und sparen Ihnen dadurch langfristig Kosten.",
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
        <div className="flex flex-col items-center lg:px-40 xl:flex-row gap-16 mt-16">
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
