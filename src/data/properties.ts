// data/properties.ts

export interface Property {
  id: number;
  title: string;
  location: string;
  type: string;
  size: string;
  status: "For Sale" | "For Rent";
  image: string;
}

export const properties: Property[] = [
  {
    id: 1,
    title: "Palladio Kharadi Central (VJ)",
    location: "Kharadi, Pune",
    type: "Commercial Retail",
    size: "440 to 620 sq.ft",
    status: "For Sale",
    image: "/images/property1.avif"
  },
  {
    id: 2,
    title: "Central Avenue",
    location: "Kharadi, Pune",
    type: " Studio & Shops",
    size: "360 sq.ft Starting",
    status: "For Rent",
    image: "/images/property2.avif"
  },
  {
    id: 3,
    title: "Grant Bay",
    location: "Kharadi, Pune",
    type: "Shops",
    size: "976 to 1483 sq.ft",
    status: "For Sale",
    image: "/images/property3.avif"
  }
];