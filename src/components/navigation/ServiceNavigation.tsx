import React, { useState } from "react";

const navTitle = [
  {
    title: "Übersicht",
  },
  {
    title: "Finanzen",
  },
  {
    title: "Organisatorisch",
  },
  {
    title: "Technisch",
  },
];
interface FilterProps {
  onSendFilter: (value: string, index: number) => void;
}

const ServiceNavigation: React.FC<FilterProps> = ({ onSendFilter }) => {
  const [activeIndex, setActiveIndex] = useState(0);

  const sendFilter = (filter: string, index: number) => {
    setActiveIndex(index);
    onSendFilter(filter, index);
  };

  return (
    <>
      <nav className="cursor-pointer relative  w-[350px] md:w-[600px] justify-between h-8 transition-all duration-700 ease-in-out hidden sm:flex">
        <button
          onClick={() => sendFilter("all", 0)}
          className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 text-ellipsis ${
            activeIndex == 0 ? "text-orange-400" : "text-black"
          }`}
        >
          <span className="w-[87.5px] md:w-[150px] overflow-x-hidden text-ellipsis">
            Übersicht
          </span>
        </button>
        <button
          onClick={() => sendFilter("fin", 1)}
          className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[87.5px] md:w-[150px] overflow-x-hidden text-ellipsis ${
            activeIndex == 1 ? "text-orange-400" : "text-black"
          }`}
        >
          <span className="w-[87.5px] md:w-[150px] overflow-x-hidden text-ellipsis">
            Finanzen
          </span>
        </button>
        <button
          onClick={() => sendFilter("orga", 2)}
          className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[87.5px] md:w-[150px] text-ellipsis ${
            activeIndex == 2 ? "text-orange-400" : "text-black"
          }`}
        >
          <span className="w-[87.5px] md:w-[150px] overflow-x-hidden text-ellipsis">
            Organistorisch
          </span>
        </button>
        <button
          onClick={() => sendFilter("tech", 3)}
          className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[87.5px] md:w-[150px] text-ellipsis ${
            activeIndex == 3 ? "text-orange-400" : "text-black"
          }`}
        >
          <span className="w-[87.5px] md:w-[150px] overflow-x-hidden text-ellipsis">
            Technisch
          </span>
        </button>
        <div
          className="bg-orange-400 h-[2px] rounded-full absolute bottom-0 transition-transform duration-500 ease-in-out w-[87.5px] md:w-[150px]"
          style={{
            transform: `translateX(${activeIndex * 100}%)`, // Position anhand des aktiven Index
          }}
        ></div>
      </nav>
      {}
      {/* <nav>
        <button>{title}</button>
      </nav> */}
    </>
  );
};

export default ServiceNavigation;
