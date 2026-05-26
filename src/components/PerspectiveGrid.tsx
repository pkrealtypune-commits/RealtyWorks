"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layout, Shield, Zap, Globe, ArrowUpRight } from "lucide-react";

const services = [
  {
    title: "Managed Office Solutions",
    desc: "Fully tailor-made premium workspaces managed completely to support enterprise operational scale.",
    icon: <Layout className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1497366216548-37526070297c?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    title: "Co-working",
    desc: "Flexible, high-energy work environments tailored for scaling teams and independent innovators.",
    icon: <Zap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1556761175-5973dc0f32e7?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    title: "Co-working Spaces",
    desc: "Premium community-driven hubs equipped with top-tier shared infrastructure and amenities.",
    icon: <Globe className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1497215728101-856f4ea42174?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    title: "Commercial",
    desc: "Strategic retail and elite commercial setups positioned within high-growth corridors.",
    icon: <Shield className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1486406146926-c627a92ad1ab?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    title: "Premium Office Spaces",
    desc: "Iconic corporate layouts designed with superior architecture for institutional brands.",
    icon: <Layout className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1606857521015-7f9fcf423740?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-2 lg:col-span-2 row-span-1",
  },
  {
    title: "Industrial",
    desc: "Heavy-duty manufacturing environments and operational spaces built for high performance.",
    icon: <Shield className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1586528116311-ad8dd3c8310d?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-1 lg:col-span-1 row-span-1",
  },
  {
    title: "Industrial Sheds & Land",
    desc: "Compliant industrial zones, expansive storage sheds, and land layouts across strategic logistics hubs.",
    icon: <Zap className="w-5 h-5" />,
    image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?auto=format&fit=crop&w=600&q=80",
    gridClass: "md:col-span-3 lg:col-span-3 row-span-1",
  },
];

const ServiceCard = ({ service, idx }: { service: typeof services[0]; idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const springConfig = { damping: 25, stiffness: 250 };
  const dx = useSpring(mouseX, springConfig);
  const dy = useSpring(mouseY, springConfig);

  const rotateX = useTransform(dy, [-0.5, 0.5], [5, -5]);
  const rotateY = useTransform(dx, [-0.5, 0.5], [-5, 5]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  return (
    <motion.div
      ref={cardRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateX,
        rotateY,
        transformStyle: "preserve-3d",
      }}
      className={`relative group overflow-hidden rounded-[24px] bg-neutral-900 border border-neutral-800 p-8 flex flex-col justify-between min-h-[300px] transition-all duration-500 ${service.gridClass}`}
    >
      {/* Background Asset Image */}
      <div 
        className="absolute inset-0 bg-cover bg-center transition-transform duration-700 ease-out group-hover:scale-103 pointer-events-none" 
        style={{ backgroundImage: `url(${service.image})` }}
      />
      
      {/* Dark Readability Scrim Overlay */}
      <div className="absolute inset-0 bg-gradient-to-t from-neutral-950 via-neutral-950/70 to-neutral-950/40 group-hover:via-neutral-950/60 group-hover:from-neutral-950/90 transition-all duration-500 pointer-events-none" />

      {/* Interactive Flash Follow Radial Glow */}
      <motion.div 
        className="absolute inset-0 pointer-events-none opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{
          background: `radial-gradient(400px circle at calc(${dx.get() + 0.5} * 100%) calc(${dy.get() + 0.5} * 100%), rgba(249, 115, 22, 0.12), transparent 60%)`
        }}
      />

      {/* Card Header Structure */}
      <div className="relative z-10 flex items-start justify-between" style={{ transform: "translateZ(25px)" }}>
        <div className="w-11 h-11 rounded-xl bg-neutral-950/80 border border-neutral-800 flex items-center justify-center text-neutral-300 group-hover:text-orange-500 group-hover:border-orange-500/30 transition-all duration-300">
          {service.icon}
        </div>
        <span className="text-xs font-mono tracking-widest text-neutral-500">
          // 0{idx + 1}
        </span>
      </div>

      {/* Typography and Interactive Movement */}
      <div className="relative z-10 mt-16" style={{ transform: "translateZ(35px)" }}>
        <h3 className="text-2xl font-medium text-white tracking-tight flex items-center gap-2 mb-2 transition-transform duration-300 group-hover:translate-x-1">
          {service.title}
          <ArrowUpRight className="w-4 h-4 opacity-0 -translate-x-2 translate-y-2 group-hover:opacity-100 group-hover:translate-x-0 group-hover:translate-y-0 transition-all duration-300 text-orange-500" />
        </h3>

        {/* Text Hover Animation: Slides slightly up and shifts color depth */}
        <p className="text-sm text-neutral-300/80 leading-relaxed font-light max-w-2xl transition-all duration-500 transform translate-y-1.5 group-hover:translate-y-0 group-hover:text-neutral-100">
          {service.desc}
        </p>
      </div>

      {/* Dynamic Border Framework */}
      <div className="absolute inset-0 border border-transparent group-hover:border-neutral-700/20 rounded-[24px] pointer-events-none transition-all duration-500" />
    </motion.div>
  );
};

export default function ServicesGrid() {
  return (
    <section className="relative w-full py-24 bg-neutral-950 text-white overflow-hidden">
      
      {/* Lighting Bleeds */}
      <div className="absolute top-0 left-1/4 w-[500px] h-[500px] bg-orange-600/[0.02] blur-[140px] rounded-full pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-[600px] h-[600px] bg-orange-500/[0.02] blur-[160px] rounded-full pointer-events-none" />

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        
        {/* Core Block Header */}
        <div className="flex flex-col md:flex-row md:items-end justify-between mb-16 gap-6">
          <div className="max-w-xl">
            <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-neutral-900 border border-neutral-800 text-xs text-neutral-400 font-mono mb-4">
              <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
              Capabilities
            </div>
            <h2 className="text-4xl md:text-5xl font-normal tracking-tight text-neutral-100">
              Our <span className="font-semibold text-orange-500">Expertise</span>
            </h2>
          </div>
          <p className="text-neutral-400 max-w-sm font-light text-sm leading-relaxed">
            High-utility asset spaces and structural ecosystems tailored for modern enterprise setups.
          </p>
        </div>

        {/* Expanded 7-Card Balanced Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 auto-rows-auto perspective-[1500px]">
          {services.map((service, idx) => (
            <ServiceCard 
              key={service.title} 
              service={service} 
              idx={idx} 
            />
          ))}
        </div>

      </div>
    </section>
  );
}