import React from "react";
import { classed } from "@tw-classed/react";
import ServiceCard from "./ServiceCard";
import { title } from "process";


const ClassedSection = classed("section", "flex justify-center bg-gradient-to-t from-slate-50 to-slate-100 px-4 md:px-0 pt-16 pb-24 md:pb-32")
const ClassedSectionContainer = classed("div", " flex flex-col max-w-[1366px]")
const ClassedSubHeader = classed("h1", "flex w-full justify-center text-lg md:text-xl font-light text-blue-dark uppercase")
const ClassedHeader = classed("h4", "flex w-full justify-center text-2xl md:text-4xl font-semibold text-blue-dark")



const serviceCardArray = [{imgSrc: "/graphics/andreas_finanzielle_verwaltung.png", title: "Finanzielle Verwaltung", info: "Die finanzielle Verwaltung sorgt für die finanzielle Gesundheit der Gemeinschaft. Sie umfasst die Erstellung eines Wirtschaftsplans, Überwachung von Einnahmen und", href: "/services",},
                          {imgSrc: "/graphics/michaela_organisation_verwaltung.png", title: "Organistatorische Verwaltung", info: "Die organisatorische Verwaltung ist von entscheidender Bedeutung, um die finanzielle Gesundheit der Gemeinschaft sicherzustellen. Dieser Teil der Finanzverwaltung beinhaltet Beispielsweise  die Erstellung eines Wirtschaftsplans...", href: "/services",},
                          {imgSrc: "/graphics/jesus_technische_verwaltung.png", title: "Technische Verwaltung", info: "Die finanzielle Verwaltung sorgt für die finanzielle Gesundheit der Gemeinschaft.        Lorem ipsum dolor sit amet consectetur adipisicing elit. Consequatur fugit explicabo cum voluptas dolores cupiditate quasi consequuntur dolor, quas saepe ipsam labore vitae possimus voluptate suscipit inventore iusto laborum officiis.", href: "/services",}
                        ]

const ServiceSection = () => {

    return(
        <ClassedSection>
            <ClassedSectionContainer>
                <ClassedSubHeader>
                            Was wir Ihnen bieten
                </ClassedSubHeader>
         
                <ClassedHeader>
                        Unsere <span className="text-orange-400">&nbsp;Services&nbsp;</span> auf einen Blick
                </ClassedHeader>
                <div className="flex flex-col md:flex-row gap-16 mt-16">
                    {   
                        serviceCardArray.map((el, index) => (
                            <ServiceCard key={index}
                                        imgSrc={el.imgSrc}
                                        title={el.title}
                                        info={el.info}
                                        href={el.href}/>
                        ))
                        
                    }
                </div>
            </ClassedSectionContainer>
        </ClassedSection>
    )
}


export default ServiceSection;