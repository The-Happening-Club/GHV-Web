import React from "react";
import Image from "next/image";
import Button from "../ui/Button";

const HeroSection = () => {
  return (
    <main className="flex md:min-h-[800px] w-full md:pb-0 justify-center bg-gradient-to-tl from-blue-dark to-blue-950 overflow-hidden px-6 xl:px-0">
      <div className="lg:relative w-full lg:max-w-[1366px] flex flex-col-reverse xl:flex-row mt-14 pb-24 md:pb-0 md:pt-0 gap-8 md:gap-0">
        <div className="flex flex-col h-fit md:h-full md:w-7/12 md:z-10 md:flex-col-reverse">
          <div className="flex flex-col justify-center md:h-full gap-8 md:pl-10 lg:pl-0">
            <h1 className="text-slate-50 font-normalidad font-semibold text-4xl lg:text-6xl xl:text-8xl">
              Ihre Immobilie in guten Händen
            </h1>
            <p className="text-lg md:text-2xl font-extralight text-slate-50">
              <strong>Transparent, Persönlich, Kompetent.</strong>
              <br />
              Die GHV Gonzalez Hausverwaltung UG bietet Ihnen professionelle
              Verwaltung und persönlichem Service.
            </p>
            <Button prio={1} title="jetzt Anfragen!" href="/contact" />
          </div>
        </div>
        <div className="lg:absolute flex md:justify-end h-fit md:h-full md:w-full md:bottom-0 md:-right-20 xl:-right-48">
          <div className="md:flex md:items-end h-fit md:h-full lg:w-8/12">
            <Image
              src="/img/hero_sectio_img.png"
              height={1080}
              width={1920}
              style={{ width: "100%", height: "auto", objectFit: "contain" }}
              alt="Ein Portrait"
            />
          </div>
        </div>
      </div>
    </main>
  );
};

export default HeroSection;
