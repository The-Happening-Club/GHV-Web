import React, { useState } from "react";

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
    <nav className="cursor-pointer relative flex w-[600px] justify-between h-8 transition-all duration-700 ease-in-out">
      <button
        onClick={() => sendFilter("all", 0)}
        className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[150px] ${
          activeIndex == 0 ? "text-orange-400" : "text-black"
        }`}
      >
        Übersicht
      </button>
      <button
        onClick={() => sendFilter("fin", 1)}
        className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[150px] ${
          activeIndex == 1 ? "text-orange-400" : "text-black"
        }`}
      >
        Finanziell
      </button>
      <button
        onClick={() => sendFilter("orga", 2)}
        className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[150px] ${
          activeIndex == 2 ? "text-orange-400" : "text-black"
        }`}
      >
        Organistorisch
      </button>
      <button
        onClick={() => sendFilter("tech", 3)}
        className={`flex justify-center transition-all duration-700 ease-in-out hover:text-orange-400 w-[150px] ${
          activeIndex == 3 ? "text-orange-400" : "text-black"
        }`}
      >
        Technisch
      </button>
      <div
        className="bg-orange-400 h-[2px] rounded-full absolute bottom-0 transition-transform duration-500 ease-in-out"
        style={{
          width: "150px",
          transform: `translateX(${activeIndex * 100}%)`, // Position anhand des aktiven Index
        }}
      ></div>
    </nav>
  );
};

export default ServiceNavigation;
