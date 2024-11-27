import React, { useState, useRef, useEffect } from "react";
import { ServiceDataType } from "@/app/data/serviceData";
import SVGEconomicPlan from "@/icons/SVGEconomicPlan";
import SVGYearlyReview from "@/icons/SVGYearlyReview";
type ServicesGridTileProps = {
  title: string;
  shortText: string;
  longText: string;
  icon: React.ReactNode; // Akzeptiert JSX
};

const ServicesGridTile: React.FC<ServicesGridTileProps> = ({
  title,
  icon,
  shortText,
  longText,
}) => {
  const [visibility, setVisibility] = useState("hidden");
  const tileRef = useRef<HTMLDivElement>(null);

  const handleClickAway = (e: MouseEvent) => {
    if (tileRef.current && !tileRef.current.contains(e.target as Node)) {
      setVisibility("hidden");
    }
  };

  useEffect(() => {
    document.addEventListener("mousedown", handleClickAway);
    return () => {
      document.removeEventListener("mousedown", handleClickAway);
    };
  });
  const handleClick = () => {
    if (visibility === "hidden") {
      setVisibility("flex");
    } else {
      setVisibility("hidden");
    }
  };
  return (
    <div
      className="relative cursor-pointer group col-span-1 row-span-1 flex flex-col bg-blue-dark w-full h-auto aspect-square justify-center items-center gap-5 rounded-lg transition-all duration-700 ease-in-out"
      onClick={handleClick}
    >
      {icon}
      <span className="text-lg text-white max-w-full break-words text-wrap">
        {title}
      </span>
      <div
        ref={tileRef}
        className={`${visibility} flex-col justify-center items-center absolute bg-gradient-to-tr from-slate-50/90 to-slate-50/60 drop-shadow-lg w-96 h-96 transition-all duration-700 ease-in-out rounded-xl border border-slate-50 backdrop-blur-md z-10`}
      >
        <p className="font-bold text-lg">{title}</p>
        <p>{longText}</p>
      </div>
    </div>
  );
};

export default ServicesGridTile;
