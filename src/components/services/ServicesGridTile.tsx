import React, { useState, useRef, useEffect } from "react";

interface ModalValueProps {
  title: string;
  subtitle: string;
  description: string;
}

interface ServicesGridTileProps {
  title: string;
  subtitle: string;
  description: string;
  onClick: (params: ModalValueProps) => void;
}

const ServicesGridTile: React.FC<ServicesGridTileProps> = ({
  title,
  subtitle,
  description,
  onClick,
}) => {
  const handleClick = () => {
    onClick({
      title: title,
      subtitle: subtitle,
      description: description,
    });
  };

  return (
    <div
      className="relative cursor-pointer group col-span-1 row-span-1 flex flex-col bg-blue-dark w-full h-auto aspect-square justify-center items-center gap-5 rounded-lg transition-all duration-700 ease-in-out hover:scale-105 p-4 text-center -z-100"
      onClick={handleClick}
    >
      <span className="text-sm md:text-lg text-white max-w-full break-words text-wrap">
        {title}
      </span>
    </div>
  );
};

export default ServicesGridTile;
