"use client";

import React, { use, useEffect, useState } from "react";
import { serviceData, ServiceDataType } from "../data/serviceData";
import ServiceNavigation from "@/components/navigation/ServiceNavigation";
import ServicesGridTile from "@/components/services/ServicesGridTile";
import Image from "next/image";
import { classed } from "@tw-classed/react";
import { ServiceModal } from "@/components/services/ServiceModal";

const GridWrapper = classed("section", "relative w-full max-w-[800px]");

export default function ServicesPage() {
  const [serviceFilter, setServiceFilter] = useState("all");
  const [activeIndex, setActiveIndex] = useState(0);
  const [serviceImage, setServiceImage] = useState(
    "andreas_finanzielle_verwaltung.png"
  );

  interface ModalValueProps {
    title: string;
    subtitle: string;
    description: string;
  }

  const [modalValues, setModalValues] = useState<ModalValueProps>({
    title: "",
    subtitle: "",
    description: "",
  });
  const [modalVisibility, setModalVisibility] = useState(true);

  useEffect(() => {
    const serviceImages = [
      "andreas_finanzielle_verwaltung.png",
      "andreas_finanzielle_verwaltung.png",
      "michaela_organisation_verwaltung.png",
      "jesus_technische_verwaltung.png",
    ];

    setServiceImage(
      serviceImages[activeIndex] || "andreas_finanzielle_verwaltung.png"
    );
  }, [activeIndex]);

  const handleServiceFilter = (value: string, index: number) => {
    setServiceFilter(value);
    setActiveIndex(index);
  };

  const filteredServices: ServiceDataType[] = serviceData.filter(
    (service) => serviceFilter === "all" || service.tag === serviceFilter
  );

  const handleModalClose = () => {
    console.log(modalVisibility);
    setModalVisibility(true);
    setModalValues({ title: "", subtitle: "", description: "" });
    document.body.style.overflow = "";
  };

  const handleModal = (data: ModalValueProps) => {
    console.log(modalVisibility);
    setModalVisibility(false);
    setModalValues(data);
    document.body.style.overflow = "hidden";
  };

  return (
    <div className="grid grid-cols-1 justify-items-center transition-all duration-400 ease-in-out min-h-[1000px]">
      {/* hinzufügen von info über die Services */}
      <div className="flex flex-col items-center w-full max-w-[1366px] mt-14 mb-24 gap-8 px-4">
        <h1 className="text-3xl md:text-4xl font-normalidad font-semibold">
          Alle unsere Services im Überblick!
        </h1>

        <ServiceNavigation onSendFilter={handleServiceFilter} />

        <GridWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full md:p-4 grid-flow-row">
            {activeIndex !== 0 ? (
              <div className="col-span-1 row-span-1 flex flex-col bg-transparent w-full h-auto aspect-square justify-center items-center gap-5 rounded-lg">
                <Image
                  src={`/graphics/${serviceImage}`}
                  height={1080}
                  width={1920}
                  style={{
                    width: "100%",
                    height: "auto",
                    objectFit: "contain",
                  }}
                  alt="Ein Portrait"
                />
              </div>
            ) : null}
            {filteredServices.map((el, index) => (
              <ServicesGridTile
                key={index}
                title={el.title}
                subtitle={el.subtitle}
                description={el.description}
                onClick={handleModal}
              />
            ))}
          </div>
        </GridWrapper>
      </div>
      <div
        className={`fixed flex flex-col w-svw h-svh bg-slate-900/50 backdrop-blur-sm justify-center items-center px-4 md:px-0 z-20 transition-all ease-in-out duration-700 ${
          modalVisibility
            ? "opacity-0 -top-full pointer-events-none"
            : "opacity-100 top-0"
        }`}
      >
        <div className="relative -top-20 md:-top-40 flex flex-col p-8 max-w-[450px] bg-white rounded-2xl pb-8">
          <div
            className="absolute top-0 right-0 m-2 flex w-6 h-6 justify-center items-center rounded-full bg-red-500 shadow-lg p-1 cursor-pointer"
            onClick={handleModalClose}
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="white"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
            >
              <line x1="18" y1="6" x2="6" y2="18"></line>
              <line x1="6" y1="6" x2="18" y2="18"></line>
            </svg>
          </div>
          <header className="text-3xl font-normalidad font-medium mb-4 text-blue-dark">
            {modalValues.title}
          </header>
          <span className="text-xl mb-2">{modalValues.subtitle}</span>
          <p className="text-base font-light">{modalValues.description}</p>
        </div>
      </div>
    </div>
  );
}
