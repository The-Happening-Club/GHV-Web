import Image from "next/image";

export const ContactSection = () => {
  return (
    <div className="grid grid-cols-1 place-items-center  md:py-40 bg-blue-dark">
      <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] max-w-[1366px] gap-4 px-6 py-10">
        <main className="flex order-1 md:-order-none flex-col gap-8 text-slate-50 px-4">
          <h1 className="text-4xl md:text-6xl font-normalidad">
            Kontaktieren sie uns!
          </h1>
          <p className="text-xl font-thin">
            <strong>Wir freuen uns, von Ihnen zu hören!</strong> <br /> Ob Sie
            Fragen zu unseren Dienstleistungen haben, Unterstützung benötigen
            oder eine unverbindliche Beratung wünschen – unser Team steht Ihnen
            gerne zur Verfügung.
          </p>
          <div className="grid grid-cols-[30px_2fr] gap-4 place-content-center">
            <div className="flex items-center">
              <Image
                src={"/icons/mail.png"}
                width={20}
                height={20}
                alt="telefon icon"
              />
            </div>
            <a
              href="mailto:info@ghv-web.de"
              className="hover:text-orange-400 w-fit text-xl font-thin h-fit"
            >
              info@ghv-web.de
            </a>
            <div className="flex items-center">
              <Image
                src={"/icons/telefon.png"}
                width={20}
                height={20}
                alt="telefon icon"
              />
            </div>
            <a
              href="tel:+4965113000"
              className="hover:text-orange-400 w-fit text-xl font-thin"
            >
              089 / 65113000
            </a>
            <div className="flex items-center">
              <Image
                src={"/icons/fax.png"}
                width={30}
                height={20}
                alt="telefon icon"
              />
            </div>
            <a
              href="fax:+4965113002"
              className="hover:text-orange-400 w-fit text-xl font-thin"
            >
              089 / 65113002
            </a>
          </div>
        </main>
        <div className="overflow-hidden rounded-lg">
          <Image
            src={"/graphics/michaela_organisation_verwaltung.png"}
            width={500}
            height={500}
            style={{ width: "100%" }}
            alt="map"
          />
        </div>
      </div>
    </div>
  );
};

export const AdressSection = () => {
  return (
    <div className="grid grid-cols-1 place-items-center py-10 md:py-40 bg-slate-50">
      <div className="grid grid-cols-1 md:grid-cols-[1fr_1fr] max-w-[1366px] gap-20 px-6 ">
        <div className="order-last md:-order-none overflow-hidden rounded-lg">
          <Image
            src={"/graphics/ghv_map.png"}
            width={500}
            height={500}
            style={{ width: "100%", height: "100%" }}
            alt="map"
          />
        </div>
        <div className="flex flex-col gap-8 text-slate-900">
          <h2 className="text-4xl md:text-6xl font-normalidad">
            Wo Sie uns finden!
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-[2fr_1fr] gap-6 text-2xl">
            <h2 className="md:col-span-2 not-italic font-normal text-xl md:text-3xl">
              Adresse
            </h2>
            <div className="flex flex-col md:col-span-2 gap-2">
              <address className="text-xl not-italic font-light">
                Inselkammerstraße. 11
              </address>
              <address className="md:col-span-2 text-xl not-italic font-light">
                82008 Unterhaching{" "}
              </address>
            </div>

            <h2 className="md:col-span-2 not-italic font-normal text-xl md:text-3xl">
              Öffnungszeiten
            </h2>
            <span className=" text-xl font-light">Montag - Freitag:</span>
            <span className=" text-xl font-thin">9:00 - 12:00 Uhr</span>

            <span className=" text-xl font-light">
              Montag, Dienstag, Donnerstag:
            </span>
            <span className=" text-xl font-thin">13:30 - 16:00 Uhr</span>
          </div>
        </div>
      </div>
    </div>
  );
};
