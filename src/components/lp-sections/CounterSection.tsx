"use client";

import React, { useState, useEffect } from "react";
import { classed } from "@tw-classed/react";

const ClassedSubHeader = classed(
  "h1",
  "flex w-full justify-center text-lg md:text-xl font-light text-slate-50 uppercase"
);
const ClassedHeader = classed(
  "h4",
  "flex font-normalidad w-full justify-center text-2xl md:text-4xl font-semibold text-slate-50"
);

const CounterSection = () => {
  const [units, setUnits] = useState(0);
  const [objects, setObjects] = useState(0);
  const [years, setYears] = useState(0);

  useEffect(() => {
    const unitsInterval = setInterval(() => {
      setUnits((prevUnits) => {
        if (prevUnits < 500) {
          return prevUnits + 1;
        } else {
          clearInterval(unitsInterval);
          return prevUnits;
        }
      });
    }, 5);
    const objectsInterval = setInterval(() => {
      setObjects((prevObject) => {
        if (prevObject < 30) {
          return prevObject + 1;
        } else {
          clearInterval(objectsInterval);
          return prevObject;
        }
      });
    }, 30);
    const yearInterval = setInterval(() => {
      setYears((prevYears) => {
        if (prevYears < 30) {
          return prevYears + 1;
        } else {
          clearInterval(yearInterval);
          return prevYears;
        }
      });
    }, 40);

    return () => {
      clearInterval(unitsInterval);
      clearInterval(yearInterval);
      clearInterval(objectsInterval);
    };
  }, []);

  return (
    <div className="flex flex-col items-center md:justify-center bg-gradient-to-tl from-blue-dark to-blue-950 text-slate-50  pt-10 pb-20  gap-16">
      <div>
        <ClassedSubHeader>Zählen sie auf uns</ClassedSubHeader>

        <ClassedHeader>
          Die <span className="text-orange-400">&nbsp;GHV&nbsp;</span> in Zahlen
        </ClassedHeader>
      </div>
      <div className="flex flex-col md:flex-row items-center md:justify-center gap-24">
        <div className="flex flex-col items-center w-52">
          <span className="text-6xl font-bold hover:bg-gradient-to-tr hover:from-orange-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent">
            {units}+
          </span>
          <span className="text-3xl font-thin">Einheiten</span>
        </div>
        <div className="flex flex-col items-center w-80">
          <span className="text-6xl font-bold hover:bg-gradient-to-tr hover:from-orange-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent">
            {years}+ Jahre
          </span>
          <span className="text-3xl font-thin">Expertise</span>
        </div>
        <div className="flex flex-col items-center w-52">
          <span className="text-6xl font-bold hover:bg-gradient-to-tr hover:from-orange-500 hover:to-orange-400 hover:bg-clip-text hover:text-transparent">
            {objects}+
          </span>
          <span className="text-3xl font-thin">Objekte</span>
        </div>
      </div>
    </div>
  );
};

export default CounterSection;
