"use client";
import React from "react";
import Image from "next/image";

export default function Objects() {
  return (
    <div className="flex flex-col justify-center items-center gap-10 pt-8">
      <div className="flex flex-col text-left md:text-center lg:max-w-[1366px] gap-8 px-8 md:pt-10">
        <h1 className="text-4xl md:text-6xl font-normalidad font-medium">
          Unsere Objekte
        </h1>
        <p className="text-lg md:text-2xl font-thin">
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
  {
    id: 1,
    title: "Sunrise Tower",
    units: 120,
    city: "Munich",
    district: "Maxvorstadt",
    type: "WEG",
  },
  {
    id: 2,
    title: "Riverside Apartments",
    units: 80,
    city: "Berlin",
    district: "Kreuzberg",
    type: "MFH",
  },
  {
    id: 3,
    title: "Alpenblick Villas",
    units: 15,
    city: "Garmisch-Partenkirchen",
    district: "Zugspitze",
    type: "WEG",
  },
  {
    id: 4,
    title: "City Center Loft",
    units: 50,
    city: "Hamburg",
    district: "St. Pauli",
    type: "MFH",
  },
  {
    id: 5,
    title: "Greenwood Estate",
    units: 200,
    city: "Frankfurt",
    district: "Nordend",
    type: "WEG",
  },
  {
    id: 6,
    title: "Seaside Residences",
    units: 30,
    city: "Kiel",
    district: "Holtenau",
    type: "MFH",
  },
  {
    id: 7,
    title: "Skyline Plaza",
    units: 250,
    city: "Düsseldorf",
    district: "Bilk",
    type: "WEG",
  },
  {
    id: 8,
    title: "Parkview Terraces",
    units: 100,
    city: "Stuttgart",
    district: "Vaihingen",
    type: "MFH",
  },
  {
    id: 9,
    title: "Lakeside Retreat",
    units: 45,
    city: "Leipzig",
    district: "Plagwitz",
    type: "WEG",
  },
  {
    id: 10,
    title: "Urban Oasis",
    units: 90,
    city: "Cologne",
    district: "Ehrenfeld",
    type: "MFH",
  },
  {
    id: 11,
    title: "Golden Gate Apartments",
    units: 60,
    city: "Nuremberg",
    district: "Südstadt",
    type: "WEG",
  },
  {
    id: 12,
    title: "Royal View Residences",
    units: 35,
    city: "Heidelberg",
    district: "Altstadt",
    type: "MFH",
  },
  {
    id: 13,
    title: "Elmwood Heights",
    units: 75,
    city: "Freiburg",
    district: "Stühlinger",
    type: "WEG",
  },
  {
    id: 14,
    title: "Sunset Boulevard",
    units: 110,
    city: "Bremen",
    district: "Schwachhausen",
    type: "MFH",
  },
  {
    id: 15,
    title: "Meadowfield Apartments",
    units: 40,
    city: "Dortmund",
    district: "Hörde",
    type: "WEG",
  },
  {
    id: 16,
    title: "Cedarwood Estate",
    units: 65,
    city: "Hannover",
    district: "Linden",
    type: "MFH",
  },
  {
    id: 17,
    title: "Highland Court",
    units: 85,
    city: "Augsburg",
    district: "Lechhausen",
    type: "WEG",
  },
  {
    id: 18,
    title: "Brookfield Residences",
    units: 55,
    city: "Essen",
    district: "Rüttenscheid",
    type: "MFH",
  },
  {
    id: 19,
    title: "Silverstone Towers",
    units: 95,
    city: "Mainz",
    district: "Neustadt",
    type: "WEG",
  },
  {
    id: 20,
    title: "Pebble Creek Villas",
    units: 20,
    city: "Regensburg",
    district: "Kumpfmühl",
    type: "MFH",
  },
];
