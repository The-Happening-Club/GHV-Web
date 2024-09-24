import Button from "@/components/essentials/Button";
import { ArrowRightIcon } from "@/components/essentials/Icons";
import Image from "next/image";
import React from "react";

export default function Contact() {
  return (
    <>
      <div className="grid grid-cols-1 place-items-center bg-blue-dark py-36">
        <div className="grid grid-cols-[2fr_1fr] max-w-[1366px]">
          <main className="flex flex-col gap-8 text-slate-50 px-4">
            <h1 className="text-6xl font-normalidad">Kontaktieren sie uns!</h1>
            <p className="text-xl font-thin">
              <strong>Wir freuen uns, von Ihnen zu hören!</strong> <br /> Ob Sie
              Fragen zu unseren Dienstleistungen haben, Unterstützung benötigen
              oder eine unverbindliche Beratung wünschen – unser Team steht
              Ihnen gerne zur Verfügung.
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
            <div className="pt-8">
              <Button prio={1} title="Sagen sie hallo" href="/" />
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
      <div className="grid grid-cols-1 place-items-center py-40">
        <div className="grid grid-cols-[1fr_1fr] max-w-[1366px] gap-14">
          <div className="overflow-hidden rounded-lg">
            <Image
              src={"/img/ghv-contact-placeholder.png"}
              width={500}
              height={500}
              style={{ width: "100%", height: "100%" }}
              alt="map"
            />
          </div>
          <main className="flex flex-col gap-8 text-slate-900">
            <h1 className="text-6xl font-normalidad">
              Oder kommen sie vorbei!
            </h1>
            <div className="grid grid-cols-[2fr_1fr] gap-8 text-2xl">
              <h2 className="col-span-2 not-italic font-normal text-3xl">
                Adresse
              </h2>
              <address className="col-span-2 not-italic font-thin">
                Inselkammerstraße. 11
              </address>
              <address className="col-span-2 not-italic font-thin">
                82008 Unterhaching{" "}
              </address>

              <h2 className="col-span-2 not-italic font-normal text-3xl">
                Öffnungszeiten
              </h2>
              <span className="font-light">Montag - Freitag:</span>
              <span className="font-thin">9:00 - 12:00 Uhr</span>

              <span className="font-light">Montag, Dienstag, Donnerstag:</span>
              <span className="font-thin">13:30 - 16:00 Uhr</span>
            </div>
          </main>
        </div>
      </div>
    </>
  );
}
