import React from "react";

import SVGEconomicPlan from "./SVGEconomicPlan";
import SVGYearlyReview from "./SVGYearlyReview";

const IconsSVGMap = { SVGEconomicPlan, SVGYearlyReview };

type IconProps = {
  icon: keyof typeof IconsSVGMap;
  className?: string;
};

const SVGIcon: React.FC<IconProps> = ({ icon, className }) => {
  const Icon = IconsSVGMap[icon];
  return <Icon className={className} />;
};

export default SVGIcon;
