import React, { FC } from "react";

interface IIcon {
  strokeColor?: string;
  width?: string;
  height?: string;
  size: number;
}

export const ArrowRightIcon: FC<IIcon> = ({ strokeColor, size }) => {
  return (
    <svg width={size} height={size / 2} viewBox="0 0 31 16" fill="none">
      <path
        d="M30.7071 8.70711C31.0976 8.31658 31.0976 7.68342 30.7071 7.29289L24.3431 0.928932C23.9526 0.538408 23.3195 0.538408 22.9289 0.928932C22.5384 1.31946 22.5384 1.95262 22.9289 2.34315L28.5858 8L22.9289 13.6569C22.5384 14.0474 22.5384 14.6805 22.9289 15.0711C23.3195 15.4616 23.9526 15.4616 24.3431 15.0711L30.7071 8.70711ZM0 9H30V7H0V9Z"
        fill={strokeColor}
      />
    </svg>
  );
};

export const AppleStoreIcon = () => {
  return (
    <svg width="30" height="30" viewBox="0 0 30 30" fill="none">
      <rect width="30" height="30" fill="url(#pattern0_1509_228)" />
      <defs>
        <pattern
          id="pattern0_1509_228"
          patternContentUnits="objectBoundingBox"
          width="1"
          height="1"
        ></pattern>
        <image id="image0_1509_228" width="512" height="512" />
      </defs>
    </svg>
  );
};
