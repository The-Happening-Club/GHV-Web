"use client";

import React, { useEffect, useState } from "react";
import Image from "next/image";
import Link from "next/link";

const pageLinks = [
  { link: "", name: "Home" },
  { link: "services", name: "Service" },
  { link: "objects", name: "Objekte" },
  { link: "about", name: "über uns" },
  { link: "contact", name: "Kontakt" },
];

const BurgerLink = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link
      href={`/${link}`}
      className="text-blue-950 hover:text-orange-400 text-5xl font-light"
    >
      <div>{name}</div>
    </Link>
  );
};

const BurgerMenu = () => {
  const [burgerOpen, setBurgerOpen] = useState(false);

  useEffect(() => {
    setBurgerOpen(false);
  }, []);

  return (
    <>
      <div
        className={`relative flex flex-col justify-center items-center gap-2 w-10 z-50`}
        onClick={() => setBurgerOpen(!burgerOpen)}
      >
        <div
          className="relative h-1 w-full bg-blue-950 rounded-xl transition-all ease-in-out duration-500"
          style={
            burgerOpen ? { transform: " translateY(10.5px) rotate(45deg)" } : {}
          }
        ></div>
        <div
          className="relative h-1 w-full bg-blue-950 rounded-xl transition-all ease-in-out duration-1000"
          style={
            burgerOpen ? { opacity: 0, transform: "translateX(80px)" } : {}
          }
        ></div>
        <div
          className="relative h-1 w-full bg-blue-950 rounded-xl transition-all ease-in-out duration-500"
          style={
            burgerOpen
              ? { transform: "translateY(-13.5px) rotate(-45deg)" }
              : {}
          }
        ></div>
      </div>
      <div
        className={`fixed flex flex-col items-center justify-center bg-slate-50 w-full h-full left-0 gap-8 transition-all duration-500 ease-in-out z-40`}
        style={
          burgerOpen
            ? { transform: "translateY(0)", opacity: 1 }
            : { transform: "translateY(-120%)", opacity: 0 }
        }
      >
        {pageLinks.map((el, index) => (
          <div key={index} onClick={() => setBurgerOpen(!burgerOpen)}>
            <BurgerLink link={el.link} name={el.name} />
          </div>
        ))}
      </div>
    </>
  );
};

const NavLink = ({ link, name }: { link: string; name: string }) => {
  return (
    <Link href={`/${link}`} className="text-blue-950 hover:text-orange-400">
      <div>{name}</div>
    </Link>
  );
};

const NavBar = () => {
  return (
    <>
      <nav className="fixed flex h-20 w-full justify-center items-center px-4 bg-slate-50 overflow-hidden z-50">
        <div className="flex justify-between items-center w-full max-w-[1366px]">
          <div className="flex w-fit z-50">
            <Link href={"/"} className="flex items-center gap-4 text-blue-950">
              <Image
                src={"/logo/ghv_logo_200x200.png"}
                width={40}
                height={40}
                alt="GHV Logo"
                className="drop-shadow-md"
              />
              {/* Logo mit Text hinzufügen und Switchen */}
            </Link>
          </div>

          <div>
            <div className="hidden md:flex gap-4">
              {pageLinks.map((el, index) => (
                <NavLink key={index} link={el.link} name={el.name} />
              ))}
            </div>
            <div className="md:hidden">
              <BurgerMenu />
            </div>
          </div>
        </div>
      </nav>
      <div className="h-20"></div>
    </>
  );
};

export default NavBar;
