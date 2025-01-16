"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Lenis from "lenis";

export default function Objects() {
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
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-8">
      <div className="flex flex-col text-left md:text-center lg:max-w-[1366px] gap-8 px-8 md:pt-10">
        <h1 className="text-4xl md:text-6xl font-normalidad font-medium">
          Unsere Objekte
        </h1>
        <p className="text-lg md:text-2xl font-light">
          Bei uns stehen Ihre Immobilien im Mittelpunkt. Ob moderne Wohnanlagen,
          charmante Altbauten oder repräsentative Gewerbeobjekte – wir kümmern
          uns mit Leidenschaft und Kompetenz um jeden Aspekt der Verwaltung.
        </p>
      </div>
      <main className="flex justify-center">
        <section className="w-full lg:max-w-[1366px] grid grid-cols-1 md:grid-cols-2 justify-items-center gap-10 md:gap-20 px-4 md:px-48 pb-40">
          {properties.map((property) => (
            <ObjectCard
              key={property.id}
              title={property.title}
              units={property.units}
              type={property.type}
            />
          ))}
        </section>
      </main>
    </div>
  );
}

const ObjectCard = ({
  title,
  units,
  type,
}: {
  title: string;
  units: number;
  type: string;
}) => {
  return (
    <div className="flex flex-col gap-8 shadow-lg border-2 p-4 rounded-xl w-fit">
      <div className="relative">
        <div className="relative flex md:h-64 aspect-video bg-slate-300 rounded-lg justify-center items-center overflow-hidden">
          <Image
            src={"/img/placeholder-house.jpg"}
            height={1920}
            width={1080}
            alt={"placeholder für Objekte"}
          />
        </div>
      </div>
      <div className="flex flex-col gap-2">
        <h1 className="font-normalidad text-3xl text-blue-950">{title}</h1>
        <div className="flex justify-between text-slate-400">
          <span>{units} Einheiten</span>
          <span>{type}</span>
        </div>
      </div>
    </div>
  );
};

const properties = [
  { id: 1, title: "Museumstraße 10", units: 5, type: "Objekt" },
  { id: 2, title: "Kugelfeldstr. 23", units: 5, type: "Objekt" },
  { id: 3, title: "Marktplatz 4 - Glonn", units: 5, type: "Objekt" },
  { id: 4, title: "Buchhierlstr. 27", units: 5, type: "WEG" },
  { id: 5, title: "Wolfgang-Wagner-Straße 4", units: 5, type: "Objekt" },
  { id: 6, title: "Ortsmitte Nord", units: 5, type: "WEG" },
  {
    id: 7,
    title: "Pestalozzistr 22+ 24, 82008 Unterhaching",
    units: 5,
    type: "WEG",
  },
  { id: 8, title: "Kastanienhof Erding", units: 5, type: "WEG" },
  {
    id: 9,
    title: "Unterhachinger Str. 35, 81737 München",
    units: 5,
    type: "WEG",
  },
  { id: 10, title: "Wimbachtalstr. 6", units: 5, type: "WEG" },
  { id: 11, title: "südl. Münchner Str. 54", units: 5, type: "WEG" },
  { id: 12, title: "Hofangerstraße 43 - 45a", units: 5, type: "WEG" },
  { id: 13, title: "Haidelweg 50, 52", units: 5, type: "WEG" },
  {
    id: 14,
    title: "Katharinenstraße 1 +3, Unterhaching",
    units: 5,
    type: "WEG",
  },
  { id: 15, title: "Schlesierstr. 8 - 16", units: 5, type: "WEG" },
  { id: 16, title: "Gertraudenstraße 4", units: 5, type: "WEG" },
  {
    id: 17,
    title: "Karl-Mathes-Str.1, Unterhaching",
    units: 5,
    type: "WEG",
  },
  { id: 18, title: "Evereststr. 22", units: 5, type: "WEG" },
  {
    id: 19,
    title: "Mühlthaler Str. 105, 81475 München",
    units: 5,
    type: "WEG",
  },
  { id: 20, title: "Herzogstr. 109", units: 5, type: "WEG" },
  { id: 21, title: "Dr.-Max-Straße 9", units: 5, type: "WEG" },
  { id: 22, title: "Yorckstr. 90, Berlin", units: 5, type: "SEV" },
  { id: 23, title: "Forchhammer-Stiftung", units: 5, type: "Objekt" },
  { id: 24, title: "Rathausplatz 6, 6a", units: 5, type: "WEG" },
  { id: 25, title: "Rathausplatz 4, 4a", units: 5, type: "WEG" },
  { id: 26, title: "Untere Parkstraße 10", units: 5, type: "WEG" },
  { id: 27, title: "Georg-Baumann-Straße 5", units: 5, type: "WEG" },
  {
    id: 28,
    title: "Leitzachwerkstraße 3a, 83620 Feldkirchen-Westerham",
    units: 5,
    type: "WEG",
  },
  {
    id: 29,
    title: "Truderinger Str. 45-75, Säulenstr. 31 - 55",
    units: 5,
    type: "WEG",
  },
  {
    id: 30,
    title: "Ahornring 16, 82024 Taufkirchen",
    units: 5,
    type: "WEG",
  },
  { id: 31, title: "Münchener Str. 55 - 69", units: 5, type: "WEG" },
  { id: 32, title: "Endeweg 1 / 1a", units: 5, type: "Objekt" },
];
