import Image from "next/image";
import React, { FC } from "react";
import { classed } from "@tw-classed/react";

interface IServiceCard {
  imgSrc: string;
  name: string;
  surename: string;
  position: string;
  info: string;
}

const CardTitle = classed("h4", "font-semibold text-xl");
const ImgContainer = classed(
  "div",
  "relative flex w-1/3 h-full overflow-hidden"
);

const TeamMemberCard: FC<IServiceCard> = ({
  imgSrc,
  name,
  surename,
  position,
  info,
}) => {
  return (
    <div className="relative flex w-80 h-48 hover:h-80 md:w-96 items-center text-blue-dark  bg-slate-50 rounded-xl drop-shadow-xl overflow-hidden group z-10 transition-all duration-700">
      <ImgContainer>
        <Image
          src={imgSrc}
          width={800}
          height={200}
          style={{ objectFit: "cover", height: "100%" }}
          alt=""
        />
      </ImgContainer>

      <div className="flex w-2/3 flex-col p-4 gap-3 z-0 ">
        <div>
          <CardTitle>{name},</CardTitle>
          <CardTitle>{surename}</CardTitle>
        </div>
        <span>{position}</span>
      </div>

      {/* Hoverable div in the background */}
      <div className="absolute flex flex-col bg-blue-dark text-slate-50 h-full w-full  p-4 gap-2 transition-all duration-700 ease-in-out transform translate-y-full group-hover:translate-y-0 z-0">
        <CardTitle>
          {name}, {surename}
        </CardTitle>
        <p className="text-slate-200 font-light">{info}</p>
      </div>
    </div>
  );
};

export default TeamMemberCard;
