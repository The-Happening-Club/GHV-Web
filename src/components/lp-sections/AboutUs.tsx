import React,{FC} from "react";
import { classed } from "@tw-classed/react";
import TeamMemberCard from "./TeamMemberCard";
import Button from "../essentials/Button";

const ClassedSection = classed("section", "flex justify-center bg-gradient-to-t from-slate-50 to-slate-100 px-4 md:px-0 pt-16 pb-24 md:pb-32")
const ClassedSectionContainer = classed("div", " flex flex-col max-w-[1366px]")
const ClassedSubHeader = classed("h1", "flex w-full justify-center text-lg md:text-xl font-light text-blue-dark uppercase")
const ClassedHeader = classed("h4", "flex w-full justify-center text-2xl md:text-4xl font-semibold text-blue-dark")

const serviceCardArray = [{imgSrc: "/img/jesus.png", name: "Jesus", surename: "Sanchez Gonzalez", position: "Geschäftsführer"},
                          {imgSrc: "/img/michaela.jpg", name: "Michaela", surename: "Paetzmann", position: "Stellvertretende Geschäftsführerin"},
                          {imgSrc: "/img/andreas.png", name: "Andreas", surename: "Sanchez Paetzmann", position: "Assitenz der Geschäftsführung"}
                        ]


const AboutUs = () => {

    return(
        <ClassedSection>
            <ClassedSectionContainer>

                <ClassedSubHeader>
                        Persönlich und Kompetent
                </ClassedSubHeader>

                <ClassedHeader>
                     Unser <span className="text-orange-400">&nbsp;Team&nbsp;</span> für Sie
                </ClassedHeader>
                <div className="flex flex-col md:flex-row  gap-16 mt-16">
                    {   
                        serviceCardArray.map((el, index) => (
                            <TeamMemberCard 
                                        key={index}
                                        imgSrc={el.imgSrc}
                                        name={el.name}
                                        surename={el.surename}
                                        position={el.position}
                                        />
                        ))
                        
                    }
                </div>
                <div className="flex w-full h-full justify-center pt-20">
                    <Button title="Erfahren Sie mehr über uns" href={"/aboutus"} prio={3} />
                </div>
            </ClassedSectionContainer>
        </ClassedSection>
    )
}

export default AboutUs;