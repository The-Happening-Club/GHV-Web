import React from "react";
import { classed } from "@tw-classed/react";
import Image from "next/image";
import Link from "next/link";

const ClassedSubHeader = classed("h1", "flex w-full font-normalidad text-md md:text-xl font-light uppercase")
const ClassedHeader = classed("h4", "flex font-normalidad text-2xl md:text-6xl font-semibold")

const CasaviSection = () => {

    return(
        <div className="relative flex justify-center bg-slate-50 text-dark-blue px-10 md:px-0 pt-10 pb-14">
            <div className="flex flex-col-reverse md:flex-row max-w-[1366px] gap-8 md:gap-0 bg-gradient-to-tr">
                <div className="flex flex-col justify-center gap-10">
                    <div className="flex flex-col gap-2 px-4">
                        <ClassedSubHeader>
                            Casavi Serviceportal
                        </ClassedSubHeader>
                        <div className="flex flex-col md:flex-row whitespace-nowrap">
                            <ClassedHeader>
                                Hausverwaltung in Ihrer
                            </ClassedHeader>
                            <span className="font-normalidad text-2xl md:text-6xl font-semibold md:pl-2 text-orange-400">Hand</span>
                        </div>
                    </div>
                    <p className="px-4 text-md font-light">Mit der Casavi-App haben Sie jederzeit Zugriff auf alle wichtigen Informationen rund um Ihre Immobilie – einfach, transparent und direkt auf Ihrem Smartphone. Egal, ob aktuelle Abrechnungen, Mitteilungen oder wichtige Dokumente: Bei uns behalten Sie den Überblick. Die GHV setzt auf moderne Kommunikation und digitale Lösungen, um Ihnen den besten Service zu bieten.
                    </p>


                    <div className="flex flex-col md:flex-row px-4 gap-6">
                        <Link href="https://apps.apple.com/de/app/casavi/id1104203456" className="flex justify-center bg-slate-200 hover:bg-slate-50 py-3 px-6 rounded-lg gap-2 drop-shadow-md hover:shadow-inner">
                        <div className="flex justify-center items-center">
                            <Image src={"/icons/apple_icon.png"} height={40} width={40} alt="apple logo" />
                        </div>
                            <div className="flex flex-col">
                                <span className="text-xs uppercase">Download on the</span>
                                <span className="text-2xl leading-none">Apple Store</span>
                            </div>
                        </Link>
                        <Link href="https://play.google.com/store/search?q=casavi+app&c=apps" className="flex justify-center bg-slate-200 hover:bg-slate-50 py-3 px-6 rounded-lg gap-2 drop-shadow-md hover:shadow-inner">
                            <div className="flex justify-center items-center">
                                <Image src={"/icons/google_play_icon.png"} height={40} width={40} alt="apple logo"/>
                            </div>
                            <div className="flex flex-col">
                                <span className="text-xs uppercase">Get it on</span>
                                <span className="text-2xl leading-none">Google Play</span>
                            </div>
                        </Link>
                    </div>
                </div>
                
                <div className="">
                    <div className=" transition-all duration-700 easy-in-out pr-6">
                        <Image src="/graphics/casavi_oberfläche.png" height={1000} width={700} alt="Ein Portrait" className="relative z-10 drop-shadow-xl"/>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default CasaviSection