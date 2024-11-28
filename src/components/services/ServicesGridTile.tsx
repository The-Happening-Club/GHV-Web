import React, { useState, useRef, useEffect } from "react";
import { serviceData, ServiceDataType } from "@/app/data/serviceData";

import SVGIcon from "@/icons/Icon";

type ServicesGridTileProps = {
  title: string;
  subtitle: string;
  description: string;
};

const ServicesGridTile: React.FC<ServicesGridTileProps> = ({
  title,
  subtitle,
  description,
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
      className="relative cursor-pointer group col-span-1 row-span-1 flex flex-col bg-blue-dark w-full h-auto aspect-square justify-center items-center gap-5 rounded-lg transition-all duration-700 ease-in-out hover:scale-105 hover:z-10 p-4 text-center"
      onClick={handleClick}
    >
      <span className="text-lg text-white max-w-full break-words text-wrap">
        {title}
      </span>
      <div
        ref={tileRef}
        className={`${visibility} flex-col justify-center items-left absolute bg-gradient-to-tr from-slate-100 to-slate-50 drop-shadow-lg w-96 h-80 transition-all duration-700 ease-in-out rounded-xl border border-slate-50 backdrop-blur-md p-4 gap-4`}
      >
        <p className="font-bold text-lg">{subtitle}</p>
        <p>{description}</p>
      </div>
    </div>
  );
};

export default ServicesGridTile;
