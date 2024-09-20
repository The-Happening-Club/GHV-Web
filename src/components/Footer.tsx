import React from "react";
import { classed } from "@tw-classed/react";
import Image from "next/image";

const ClassedHeader = classed("h4", "font-semibold text-2xl");
const ClassedContainer = classed(
  "div",
  "flex flex-col items-center md:items-start"
);
const ClassedLink = classed(
  "a",
  "text-lg text-center md:text-left font-light not-italic"
);
const ClassedLogoLink = classed(
  "div",
  "flex justify-center md:items-end items-center md:items-end w-20 h-20 overflow-hidden"
);

const Footer = () => {
  return (
    <footer className="flex flex-col gap-8 items-center md:justify-center bg-blue-dark text-slate-50  pt-8 pb-16 px-4 md:px-0">
      <div className="flex flex-col md:flex-row gap-20 lg:gap-48 max-w-[1366px] ">
        <ClassedContainer>
          <ClassedHeader>Adresse</ClassedHeader>
          <address className="text-lg text-center md:text-left font-light not-italic">
            Inselkammerstr. 11, <br /> 82008 Unterhaching
          </address>
        </ClassedContainer>
        <ClassedContainer>
          <ClassedHeader>Datenschutz</ClassedHeader>
          <ClassedLink>Impressum</ClassedLink>
          <ClassedLink>DSGVO</ClassedLink>
        </ClassedContainer>
        <ClassedContainer>
          <ClassedHeader>Kontakt</ClassedHeader>
          <ClassedLink href="mailto:info@ghv-web.de">
            info@ghv-web.de
          </ClassedLink>
          <ClassedLink href="tel:0896511300">
            Telefon: 089 65 11 3000
          </ClassedLink>
        </ClassedContainer>
        <div className="flex">
          <ClassedLogoLink>
            <Image
              src={"/logo/VDIV_Logo.png"}
              width={2000}
              height={800}
              alt="logo des Verband der Immobilienverwalter Deutschland e.V."
              className="grayscale hover:grayscale-0"
            />
          </ClassedLogoLink>
          <ClassedLogoLink>
            <Image
              src={"/logo/GHV_logo_200x200.png"}
              width={50}
              height={100}
              alt="logo des Verband der Immobilienverwalter Deutschland e.V."
              className="grayscale hover:grayscale-0"
            />
          </ClassedLogoLink>
        </div>
      </div>

      <span className="font-thin">
        2024 TheHappeningClub - All rights reserved
      </span>
    </footer>
  );
};

export default Footer;
