import Image from "next/image";
import React from "react";

const PartnerSection = () => {
  return (
    //* hier sollen später die logos automatisch endlos durchlaufen */
    <div className="flex flex-col md:flex-row w-full min-h-48 justify-center items-center md:gap-20 pt-4 pb-8 h-fit bg-slate-200 overflow-x-scroll">
      <div className="flex aspect-square justify-center items-center grayscale hover:grayscale-0">
        <Image
          src="/logo/haufe_logo.svg"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="flex grayscale aspect-square   hover:grayscale-0">
        <Image
          src="/logo/VDIV_Logo.png"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="flex grayscale aspect-square   hover:grayscale-0">
        <Image
          src="/logo/casavi_logo.png"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
      <div className="flex grayscale aspect-square   hover:grayscale-0">
        <Image
          src="/logo/weinzierl_logo.png"
          width={200}
          height={100}
          style={{ objectFit: "contain" }}
          alt=""
        />
      </div>
    </div>
  );
};

export default PartnerSection;
