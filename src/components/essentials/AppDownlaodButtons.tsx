import React from "react";
import Image from "next/image";
import Link from "next/link";

const AppDownlaodButtons = () => {
  return (
    <div className="flex flex-col md:flex-row px-4 gap-6">
      <Link
        href="https://apps.apple.com/de/app/casavi/id1104203456"
        className="flex justify-center bg-slate-200 hover:bg-slate-50 py-3 px-6 rounded-lg gap-2 drop-shadow-md hover:shadow-inner"
      >
        <div className="flex justify-center items-center">
          <Image
            src={"/icons/apple_icon.png"}
            height={40}
            width={40}
            alt="apple logo"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase">Download on the</span>
          <span className="text-2xl leading-none">Apple Store</span>
        </div>
      </Link>
      <Link
        href="https://play.google.com/store/search?q=casavi+app&c=apps"
        className="flex justify-center bg-slate-200 hover:bg-slate-50 py-3 px-6 rounded-lg gap-2 drop-shadow-md hover:shadow-inner"
      >
        <div className="flex justify-center items-center">
          <Image
            src={"/icons/google_play_icon.png"}
            height={40}
            width={40}
            alt="apple logo"
          />
        </div>
        <div className="flex flex-col">
          <span className="text-xs uppercase">Get it on</span>
          <span className="text-2xl leading-none">Google Play</span>
        </div>
      </Link>
    </div>
  );
};

export default AppDownlaodButtons;
