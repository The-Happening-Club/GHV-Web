import Image from "next/image";
import React from "react";

const PartnerSection = () => {
  return (
    //* hier sollen später die logos automatisch endlos durchlaufen */
    <div className="flex w-full justify-center items-center gap-20 pt-4 pb-8 h-fit bg-slate-200">
      <div className="flex justify-center items-center grayscale hover:grayscale-0">
        <Image src="/logo/haufe_logo.svg" width={200} height={100} alt="" />
      </div>
      <div className="flex grayscale hover:grayscale-0">
        <Image src="/logo/VDIV_Logo.png" width={200} height={100} alt="" />
      </div>
      <div className="flex grayscale hover:grayscale-0">
        <Image src="/logo/casavi_logo.png" width={200} height={100} alt="" />
      </div>
      <div className="flex grayscale hover:grayscale-0">
        <Image src="/logo/weinzierl_logo.png" width={200} height={100} alt="" />
      </div>
    </div>
  );
};

export default PartnerSection;
