import SVGEconomicPlan from "@/icons/SVGEconomicPlan";

export type ServiceDataType = {
  tag?: string;
  icon: React.ComponentType;
  title: string;
  shortText: string;
  longText: string;
};

export const serviceData: ServiceDataType[] = [
  {
    tag: "fin",
    icon: SVGEconomicPlan,
    title: "Wirtschaftsplan",
    shortText: "dksjaflö",
    longText: "dkajfskdljp",
  },
  {
    tag: "fin",
    icon: SVGEconomicPlan,
    title: "Jahreabrechnung",
    shortText: "dksjaflö",
    longText: "dkajfskdljp",
  },
  {
    tag: "orga",
    icon: SVGEconomicPlan,
    title: "Eigentümerversammlung",
    shortText: "dksjaflö",
    longText: "dkajfskdljp",
  },
  {
    tag: "orga",
    icon: SVGEconomicPlan,
    title: "Hausordnung",
    shortText: "fasdf",
    longText: "fdasf",
  },
  {
    tag: "orga",
    icon: SVGEconomicPlan,
    title: "Überwachung Verträge",
    shortText: "dfasdf",
    longText: "dfasdfa",
  },
  {
    tag: "fin",
    icon: SVGEconomicPlan,
    title: "Geldverwaltung",
    shortText: "dfasdf",
    longText: "dfasdfa",
  },
  {
    tag: "fin",
    icon: SVGEconomicPlan,
    title: "Rechnungskontrolle",
    shortText: "dfasdf",
    longText: "dfasdfa",
  },
  {
    tag: "fin",
    icon: SVGEconomicPlan,
    title: "Buchführung",
    shortText: "dfasdf",
    longText: "dfasdfa",
  },
  {
    tag: "tech",
    icon: SVGEconomicPlan,
    title: "Technische Kontrolle",
    shortText: "dfasdf",
    longText: "dfasdfa",
  },
];
