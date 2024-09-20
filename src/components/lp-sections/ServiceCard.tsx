import Image from "next/image";
import React, { FC } from "react";
import { classed } from "@tw-classed/react";
import Button from "../essentials/Button";

interface IServiceCard {
  imgSrc: string;
  title: string;
  info: string;
  href: string;
}

const CardTitle = classed("h4", "font-semibold text-xl");
const CardParagraph = classed("p", "text-md");
const ImgContainer = classed("div", "flex w-fit h-fit");

const ServiceCard: FC<IServiceCard> = ({ imgSrc, title, info, href }) => {
  return (
    <div className="flex flex-col xl:w-96 items-center text-slate-50 gap-8 bg-blue-dark rounded-xl drop-shadow-xl px-8 pt-6 pb-8">
      <ImgContainer>
        <Image src={imgSrc} width={200} height={200} alt="" />
      </ImgContainer>

      <div className="flex flex-col gap-3">
        <CardTitle>{title}</CardTitle>
        <CardParagraph>{info}</CardParagraph>
      </div>
      <div className="flex w-full h-full items-end">
        <Button title="mehr erfahren" href={href} prio={3} />
      </div>
    </div>
  );
};

export default ServiceCard;
