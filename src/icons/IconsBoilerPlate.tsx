import React from "react";

import type { SVGTypes } from "./svg.types";

const SVG: React.FC<SVGTypes> = ({ className, color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M18.6249 0H6.12491C4.40616 0 3.01553 1.35 3.01553 3L2.99991 27C2.99991 28.65 4.39053 30 6.10928 30H24.8749C26.5937 30 27.9999 28.65 27.9999 27V9L18.6249 0ZM20.1874 15H13.9374V16.5H18.6249C19.4843 16.5 20.1874 17.175 20.1874 18V22.5C20.1874 23.325 19.4843 24 18.6249 24H17.0624V25.5H13.9374V24H10.8124V21H17.0624V19.5H12.3749C11.5155 19.5 10.8124 18.825 10.8124 18V13.5C10.8124 12.675 11.5155 12 12.3749 12H13.9374V10.5H17.0624V12H20.1874V15ZM17.0624 9V2.25L24.0937 9H17.0624Z"
        fill={color ? color : "#A6A6A6"}
      />
    </svg>
  );
};

export default SVG;
