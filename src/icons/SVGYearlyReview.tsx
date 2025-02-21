import React from "react";

import type { SVGTypes } from "./svg.types";

const SVGYearlyReview: React.FC<SVGTypes> = ({ className, color }) => {
  return (
    <svg
      width="30"
      height="30"
      viewBox="0 0 30 30"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
    >
      <path
        d="M21.6667 16.5H16.6667C15.75 16.5 15 17.175 15 18V22.5C15 23.325 15.75 24 16.6667 24H21.6667C22.5833 24 23.3333 23.325 23.3333 22.5V18C23.3333 17.175 22.5833 16.5 21.6667 16.5ZM21.6667 1.5V3H8.33333V1.5C8.33333 0.675 7.58333 0 6.66667 0C5.75 0 5 0.675 5 1.5V3H3.33333C1.48333 3 0.0166667 4.35 0.0166667 6L0 27C0 28.65 1.48333 30 3.33333 30H26.6667C28.5 30 30 28.65 30 27V6C30 4.35 28.5 3 26.6667 3H25V1.5C25 0.675 24.25 0 23.3333 0C22.4167 0 21.6667 0.675 21.6667 1.5ZM25 27H5C4.08333 27 3.33333 26.325 3.33333 25.5V10.5H26.6667V25.5C26.6667 26.325 25.9167 27 25 27Z"
        fill="#A6A6A6"
      />
    </svg>
  );
};

export default SVGYearlyReview;
