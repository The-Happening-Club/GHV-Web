import React from "react";
import Image from "next/image";

const HeroSection = () => {
  return (
    <main className="flex w-full h-fit justify-center bg-gradient-to-tl from-blue-dark to-blue-950 overflow-hidden px-4 md:px-0">
        <div className="flex flex-col md:flex-row w-full max-w-[1366px]">
          <div className="p-4">
            <div className="relative flex justify-center  items-center  w-full  md:1/2 mt-10">
              {/* <div className="absolute right-0 flex bg-gradient-to-tr from-orange-600 to-orange-400 h-full w-1/2 bottom-0 left-1/2 rounded-tl-3xl rounded-tr-xl drop-shadow-2xl"></div>
              <div className="absolute right-0 flex bg-slate-50 h-5/6 w-1/2 bottom-0 left-24 rounded-tl-3xl rounded-tr-xl drop-shadow-2xl"></div>
              <div className="absolute right-0 flex bg-slate-50 h-3/6 w-1/2 bottom-0 left-0 rounded-tl-3xl rounded-tr-xl drop-shadow-2xl"></div> */}
{/* 
              <div className="absolute bg-gradient-to-br p-[1px] from-slate-50 to-slate-50/50 h-20 w-48 rounded-3xl z-20 backdrop-blur-sm drop-shadow-2xl top-48 -left-10">            
                  <div className="flex  justify-center items-center h-full w-full rounded-[calc(1.5rem-1px)]">hi</div>
              </div> */}
              <Image src="/img/andreas_hero_section.png" height={800} width={400} alt="Ein Portrait" className="relative z-10 drop-shadow-xl"/>
            </div>
          </div>
          <div className="bg-slate-400">
              <h1 className="text-slate-50 font-semibold text-5xl md:text-7xl">Ihre Immobilie in guten Händen</h1>
          </div>
        </div>
    </main>
  );
}

export default HeroSection;