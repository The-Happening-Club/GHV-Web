import Image from "next/image";
import Link from "next/link";
import React, {FC} from "react";
import { classed } from "@tw-classed/react";


interface IServiceCard {
    imgSrc: string,
    title: string,
    info: string,
    href: string,
}


const CardTitle = classed("h4", "font-semibold text-lg")
const CardParagraph = classed("p", "text-md")
const ImgContainer = classed("div", "flex w-fit h-fit rounded-lg bg-red-500 overflow-hidden")

const ServiceCard:FC<IServiceCard> = ({imgSrc, title, info, href}) => {

    return(
        <div className="flex flex-col items-center text-blue-dark gap-8">
            <ImgContainer className="">
                <Image src={imgSrc} width={200} height={200} alt=""/>
            </ImgContainer>

            <div className="flex flex-col gap-3">
                <CardTitle>{title}</CardTitle>
                <CardParagraph>{info}</CardParagraph>
            </div>
            <div className="flex w-full">
                <Link href={href} >mehr erfahren</Link>
            </div>
        </div>
    )
}


export default ServiceCard