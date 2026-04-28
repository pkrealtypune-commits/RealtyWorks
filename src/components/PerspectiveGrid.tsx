"use client";

import React, { useRef, useState } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";
import { Layout, Shield, Zap, Globe } from "lucide-react";

const services = [
  {
    title: "Managed Offices",
    desc: "Fully serviced premium workspaces designed for high-growth teams in Pune.",
    icon: <Layout className="w-6 h-6" />,
  },
  {
    title: "Industrial Warehousing",
    desc: "Strategic logistics hubs in Chakan and Talegaon with RERA compliance.",
    icon: <Shield className="w-6 h-6" />,
  },
  {
    title: "Local SEO Strategy",
    desc: "Dominating local search and Google Ads for real estate and service centers.",
    icon: <Zap className="w-6 h-6" />,
  },
  {
    title: "ERP Systems",
    desc: "Custom high-conversion landing pages and back-office management software.",
    icon: <Globe className="w-6 h-6" />,
  },
];

const ServiceCard = ({ service, idx }: { service: typeof services[0], idx: number }) => {
  const cardRef = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useTransform(mouseYSpring, [-0.5, 0.5], ["15deg", "-15deg"]);
  const rotateY = useTransform(mouseXSpring, [-0.5, 0.5], ["-15deg", "15deg"]);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!cardRef.current) return;
    const rect = cardRef.current.getBoundingClientRect();
    const mouseX = (e.clientX - rect.left) / rect.width - 0.5;
    const mouseY = (e.clientY - rect.top) / rect.height - 0.5;
    x.set(mouseX);
    y.set(mouseY);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
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
      whileHover={{ 
        z: 50,
        scale: 1.05,
        borderColor: "rgba(255, 107, 0, 0.3)"
      }}
      className="flex-shrink-0 w-[300px] md:w-[350px] relative group bg-background-secondary border border-white/10 p-8 rounded-[2rem] transition-colors duration-300 cursor-pointer shadow-2xl"
    >
      <div 
        style={{ transform: "translateZ(40px)" }}
        className="w-14 h-14 bg-accent-orange/10 border border-accent-orange/20 rounded-2xl flex items-center justify-center text-accent-orange mb-6 group-hover:bg-accent-orange group-hover:text-white transition-all duration-500"
      >
        {service.icon}
      </div>

      <div style={{ transform: "translateZ(30px)" }}>
        <h3 className="text-xl font-bold text-white mb-3 tracking-tight">
          {service.title}
        </h3>
        <p className="text-sm text-foreground-secondary leading-relaxed font-light">
          {service.desc}
        </p>
      </div>

      <div 
        style={{ transform: "translateZ(20px)" }}
        className="absolute bottom-4 right-6 text-white/5 font-black text-6xl select-none group-hover:text-accent-orange/10 transition-colors"
      >
        0{idx + 1}
      </div>
    </motion.div>
  );
};

const PerspectiveGrid = () => {
  const [isPaused, setIsPaused] = useState(false);

  // Triple the list to ensure the marquee never shows a gap
  const carouselContent = [...services, ...services, ...services];

  return (
    <section className="relative py-24 bg-background-primary overflow-hidden perspective-[1200px]">
      <div className="container mx-auto px-6 relative z-20 pointer-events-none">
        <div className="text-center mb-16">
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-4 tracking-tighter">
            Our <span className="text-accent-orange">Expertise</span>
          </h2>
          <p className="text-foreground-secondary max-w-xl mx-auto font-light">
            High-utility solutions tailored for the evolving real estate and technical landscape.
          </p>
        </div>
      </div>

      {/* --- Infinite Flowing Carousel --- */}
      <div 
        className="relative flex w-full"
        onMouseEnter={() => setIsPaused(true)}
        onMouseLeave={() => setIsPaused(false)}
      >
        <motion.div
          animate={{
            x: isPaused ? undefined : ["0%", "-33.33%"],
          }}
          transition={{
            x: {
              duration: 25,
              repeat: Infinity,
              ease: "linear",
            },
          }}
          className="flex gap-6 px-3"
        >
          {carouselContent.map((service, idx) => (
            <ServiceCard 
              key={`${idx}-${service.title}`} 
              service={service} 
              idx={(idx % services.length)} 
            />
          ))}
        </motion.div>

        {/* Gradient Fades for the edges */}
        <div className="absolute inset-y-0 left-0 w-32 bg-gradient-to-r from-background-primary to-transparent z-30 pointer-events-none" />
        <div className="absolute inset-y-0 right-0 w-32 bg-gradient-to-l from-background-primary to-transparent z-30 pointer-events-none" />
      </div>

      {/* Background Lighting */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[500px] bg-accent-orange/5 blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default PerspectiveGrid;