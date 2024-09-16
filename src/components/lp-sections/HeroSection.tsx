import React from "react";
import Image from "next/image";
import Button from "../essentials/Button";

const HeroSection = () => {
  return (
    <main className="flex w-full pb-12 md:pb-0 h-fit justify-center bg-gradient-to-tl from-blue-dark to-blue-950 overflow-hidden px-4 md:px-0">
      <div className="flex flex-col md:flex-col-reverse w-full max-w-[1366px] gap-8">
        <div className="">
          <div className="relative w-fit h-fit flex justify-center items-center">
            <Image
              src="/graphics/HeroSectionGrafic_Static.png"
              height={100}
              width={1400}
              alt="Ein Portrait"
              className="relative z-10 drop-shadow-xl "
            />
          </div>
        </div>
        <div className="flex flex-col gap-8">
          <h1 className="text-slate-50 font-normalidad font-semibold text-5xl md:text-7xl">
            Ihre Immobilie in guten Händen
          </h1>
          <p className="text-lg font-light text-slate-50">
            <strong>transparent, persönlich, kompetent. –&nbsp;</strong>Die GHV
            Gonzalez Hausverwaltung UG bietet Ihnen professionelle Verwaltung
            mit modernster Technologie und persönlichem Service. Schnell, nahbar
            und verlässlich – für eine sorgenfreie Betreuung Ihrer Immobilie.
          </p>
          <Button prio={1} title="jetzt Anfragen!" href="/contact" />
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
