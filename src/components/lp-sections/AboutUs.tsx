import React from "react";
import { classed } from "@tw-classed/react";
import TeamMemberCard from "./TeamMemberCard";
import Button from "../essentials/Button";

const ClassedSection = classed(
  "section",
  "flex justify-center bg-gradient-to-t from-slate-50 to-slate-100 px-4 md:px-0 pt-48 pb-16 md:pb-32"
);
const ClassedSectionContainer = classed(
  "div",
  "w-full px-6 xl:px-0 flex flex-col max-w-[1366px]"
);
const ClassedSubHeader = classed(
  "h1",
  "flex w-full justify-center text-lg md:text-xl font-light text-blue-dark uppercase"
);
const ClassedHeader = classed(
  "h4",
  "flex w-full justify-center text-2xl md:text-4xl font-semibold text-blue-dark"
);

const serviceCardArray = [
  {
    imgSrc: "/img/jesus.png",
    name: "Jesus",
    surename: "Sanchez Gonzalez",
    position: "Geschäftsführer",
    info: "Mit über 35 Jahren Erfahrung in der Immobilienverwaltung führt Herr Sanchez die GHV mit Engagement und Fachwissen. Als technischer Leiter der GHV Glonner Hausverwaltung übernahm er 2016 die Leitung und gründete das Unternehmen neu, um die erfolgreiche Arbeit fortzusetzen.",
  },
  {
    imgSrc: "/img/Michaela.png",
    name: "Michaela",
    surename: "Paetzmann",
    position: "Leiterin Sachbearbeitung und Buchhaltung",
    info: "Michaela P. unterstützt als erfahrene stellvertretende Geschäftsführerin Herrn Sanchez in allen Bereichen der Verwaltung. Sie sorgt dafür, dass Abläufe reibungslos und effizient verlaufen.",
  },
  {
    imgSrc: "/img/andreas.png",
    name: "Andreas",
    surename: "Sanchez Paetzmann",
    position: "Assistenz der Geschäftsführung",
    info: "Seit 2020 bereichert Andreas S. das Unternehmen mit frischem betriebswirtschaftlichem Wissen. Er kümmert sich um die Verwaltung und unterstützt die Geschäftsführung in allen organisatorischen Belangen.",
  },
];

const AboutUs = () => {
  return (
    <ClassedSection>
      <ClassedSectionContainer>
        <ClassedSubHeader>Persönlich und Kompetent</ClassedSubHeader>

        <ClassedHeader>
          Unser <span className="text-orange-400">&nbsp;Team&nbsp;</span> für
          Sie
        </ClassedHeader>
        <div className="flex flex-col items-center lg:flex-row  gap-16 mt-16">
          {serviceCardArray.map((el, index) => (
            <TeamMemberCard
              key={index}
              imgSrc={el.imgSrc}
              name={el.name}
              surename={el.surename}
              position={el.position}
              info={el.info}
            />
          ))}
        </div>
        <div className="flex w-full h-full justify-center pt-20">
          <Button
            title="Erfahren Sie mehr über uns"
            href={"/aboutus"}
            prio={3}
          />
        </div>
      </ClassedSectionContainer>
    </ClassedSection>
  );
};

export default AboutUs;
