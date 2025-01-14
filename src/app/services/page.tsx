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
  const [modalTitle, setModalTitle] = useState("");
  const [modalVisibility, setModalVisibility] = useState(false);

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

  return (
    <div className="grid grid-cols-1 justify-items-center transition-all duration-700 min-h-[1000px]">
      {/* hinzufügen von info über die Services */}
      <div className="flex flex-col items-center w-full max-w-[1366px] mt-14 mb-24 gap-8">
        <h1 className="text-4xl font-normalidad font-semibold">
          Alle unsere Services im Überblick!
        </h1>

        <ServiceNavigation onSendFilter={handleServiceFilter} />

        <GridWrapper>
          <div className="grid grid-cols-2 md:grid-cols-3 gap-4 w-full p-4 grid-flow-row">
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
              />
            ))}
          </div>
        </GridWrapper>
      </div>
    </div>
  );
}
