import Link from "next/link";
import React, { FC } from "react";
import { ArrowRightIcon } from "./Icons";

interface IButton {
  title: string;
  href: string;
  prio: number;
}

const Button: FC<IButton> = ({ title, href, prio }) => {
  let style: string;

  switch (prio) {
    case 1:
      style =
        "w-fit bg-orange-400 text-slate-50 hover:bg-orange-300 text-slate-50 px-6 py-2 ";
      break;
    case 2:
      style = "w-fit bg-blue-dark px-4 py-2 ";
      break;
    case 3:
      style =
        "items-center gap-3 bg-transparent text-orange-400 font-semibold hover:underline underline-offset-8";
      break;

    default:
      style = "bg-orange-400";
  }
  return (
    <div className={`flex rounded-md ${style}`}>
      <Link href={href}>{title}</Link>
      {prio === 3 ? (
        // Micro animation
        <div className="transition-all duration-500 ease-in-out">
          <ArrowRightIcon size={30} strokeColor={"#fb923c"} />
        </div>
      ) : null}
    </div>
  );
};

export default Button;
