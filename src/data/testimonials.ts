// data/testimonials.ts

export interface Testimonial {
  id: number;
  name: string;
  role: string;
  company: string;
  content: string;
  image?: string;
}

export const testimonials: Testimonial[] = [
  {
    id: 1,
    name: "Rajesh Malhotra",
    role: "CEO",
    company: "TechFlow Solutions",
    content: "The managed office space in Hinjewadi completely transformed our team's productivity. The transition was seamless, and the 3D layout of the office is exactly what we needed for our scale.",
  },
  {
    id: 2,
    name: "Sneha Kapoor",
    role: "Founder",
    company: "Creative Pulse",
    content: "Finding a workspace in Pune that balances luxury with functionality is hard. Realty Works delivered a bespoke headquarters that truly reflects our brand identity.",
  },
  {
    id: 3,
    name: "Amit Verma",
    role: "Operations Head",
    company: "Global Logistics",
    content: "Strategic location and world-class managed services. We focused on our growth while they handled every single bit of the infrastructure. Highly recommended!",
  }
];