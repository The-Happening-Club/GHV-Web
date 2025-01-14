import React from "react";

type ServiceModalData = {
  visibility: boolean;
  setVisibility: () => void;
  subtitle: string;
  description: string;
};

export const ServiceModal: React.FC<ServiceModalData> = ({
  visibility,
  subtitle,
  description,
  setVisibility,
}) => {
  return (
    <div
      className={`${
        visibility ? "flex" : "hidden"
      } flex-col justify-top items-left absolute bg-slate-100/95 backdrop-blur-md drop-shadow-lg w-[90%] h-[90%] transition-all duration-700 ease-in-out rounded-xl border border-slate-50-md p-4 top-[5%] left-[5%] gap-4 z-100`}
    >
      <p className="font-bold text-lg">{subtitle}</p>
      <p>{description}</p>
    </div>
  );
};
