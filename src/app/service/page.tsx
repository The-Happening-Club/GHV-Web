import { AppleStoreIcon } from "@/components/essentials/Icons";

export default function Services() {
  const activeIndex = 0;

  return (
    <main className="grid grid-cols-1 justify-items-center transition-all duration-700">
      {/* hinzufügen von info über die Services */}
      <div className="flex flex-col items-center w-full max-w-[1366px] mt-14 mb-24 gap-8">
        <h1 className="text-4xl font-normalidad font-semibold">
          Alle unsere Services im Überblick!
        </h1>

        <nav className="relative grid grid-cols-4 grid-rows-2 gap-4 h-8 transition-all duration-700 ease-in-out">
          <div className="flex justify-center">Übersicht</div>
          <div className="flex justify-center">Finanziell</div>
          <div className="flex justify-center">Organistorisch</div>
          <div className="flex justify-center">Technisch</div>
          <div
            className="bg-orange-400 h-1 rounded-full absolute bottom-0 transition-transform duration-500 ease-in-out"
            style={{
              width: "calc(100% / 4)",
              transform: `translateX(${activeIndex * 100}%)`, // Position anhand des aktiven Index
            }}
          ></div>
        </nav>

        <div className="grid grid-cols-2 md:grid-cols-3 gap-8">
          <div className="grid place-content-center justify-items-center aspect-square rounded grid-cols-1 grid-rows-2 bg-blue-dark text-slate-50 p-8">
            <div className="h-10 w-10 bg-slate-50 rounded-full"></div>
            <h3 className="text-2xl">Finanzen</h3>
          </div>
          <div className="grid place-content-center justify-items-center aspect-square rounded grid-cols-1 grid-rows-2 bg-blue-dark text-slate-50 p-8">
            <div className="h-10 w-10 bg-slate-50 rounded-full"></div>
            <h3 className="text-2xl">Finanzen</h3>
          </div>
          <div className="grid place-content-center justify-items-center aspect-square rounded grid-cols-1 grid-rows-2 bg-blue-dark text-slate-50 p-8">
            <div className="h-10 w-10 bg-slate-50 rounded-full"></div>
            <h3 className="text-2xl">Finanzen</h3>
          </div>
          <div className="grid place-content-center justify-items-center aspect-square rounded grid-cols-1 grid-rows-2 bg-blue-dark text-slate-50 p-8">
            <div className="h-10 w-10 bg-slate-50 rounded-full"></div>
            <h3 className="text-2xl">Finanzen</h3>
          </div>
        </div>
      </div>
    </main>
  );
}
