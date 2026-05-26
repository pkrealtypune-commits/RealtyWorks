"use client";

import React, { useMemo } from "react";
import { motion, useMotionValue, useSpring, useTransform } from "framer-motion";

const locations = [
  "Kharadi", "Viman Nagar", "Hadapsar", "Kalyani Nagar", "Koregaon Park", "Yerwada",
  "Magarpatha City", "Hinjewadi", "Baner", "Balewadi", "Wakad", "Aundh", "Talawade",
  "Pashan", "Pimpri", "Chinchwad", "Bhosari", "Camp", "SB Road", "Ravet", "Shivajinagar",
  "Bavdhan", "Lohegaon", "Manjri", "Warje", "Dighi", "Vadgaon Sheri", "Kondhwa",
  "Fursungi", "Katraj"
];

const duplicated = [...locations, ...locations, ...locations];

// Deterministic depth calculation
const getDepth = (i: number) => {
  const seed = i + 1;
  const pseudoRand = Math.abs(Math.sin(seed) * 10000) % 1;
  return parseFloat((pseudoRand * -120 - 20).toFixed(2));
};

const SpatialCard = ({ name, index, mouseX, mouseY }: any) => {
  const zDepth = useMemo(() => getDepth(index), [index]);
  const factor = 1 + Math.abs(zDepth) / 140;

  const driftX = useTransform(mouseX, [-0.5, 0.5], [index % 2 === 0 ? -10 : 10, index % 2 === 0 ? 10 : -10]);
  const driftY = useTransform(mouseY, [-0.5, 0.5], [-12, 12]);

  const contentX = useSpring(useTransform(driftX, (v) => v * factor));
  const contentY = useSpring(useTransform(driftY, (v) => v * factor));

  return (
    <motion.div
      whileHover={{ scale: 1.03 }}
      className="relative flex flex-shrink-0 items-center justify-center w-[140px] sm:w-[160px] md:w-[200px] lg:w-[220px] aspect-[16/11] border border-white/5 bg-background-secondary rounded-xl md:rounded-2xl overflow-hidden cursor-pointer group shadow-[0_8px_20px_rgba(0,0,0,0.25)] transition-shadow duration-500 hover:shadow-accent-orange/10"
    >
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300"
      />
      <motion.div
        style={{ x: contentX, y: contentY, z: zDepth }}
        className="relative z-10 flex flex-col items-center justify-center p-3 md:p-4 text-center"
      >
        <span className="text-[11px] sm:text-xs md:text-sm font-bold mb-1.5 text-white group-hover:text-accent-orange transition">
          {name}
        </span>
        <div className="flex gap-1 items-center">
          <span className="text-[8px] text-white/40 uppercase tracking-widest font-mono">PuneHub</span>
          <div className="w-1 h-1 rounded-full bg-accent-orange animate-pulse" />
        </div>
      </motion.div>
    </motion.div>
  );
};

const Row = ({ direction = "left", duration, mouseX, mouseY }: any) => (
  <div className="relative w-full overflow-hidden flex">
    <motion.div
      className="flex gap-3 md:gap-5"
      animate={{ x: direction === "left" ? ["0%", "-33.333%"] : ["-33.333%", "0%"] }}
      transition={{ ease: "linear", duration, repeat: Infinity }}
    >
      {duplicated.map((loc, i) => (
        <SpatialCard key={`${loc}-${i}`} name={loc} index={i} mouseX={mouseX} mouseY={mouseY} />
      ))}
    </motion.div>
  </div>
);

const LocationSpatialGrid = () => {
  const ref = React.useRef<HTMLDivElement>(null);
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    if (!ref.current) return;
    const rect = ref.current.getBoundingClientRect();
    mouseX.set((e.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((e.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full py-16 md:py-20 bg-background-primary overflow-hidden perspective-[1200px]"
    >
      <div className="relative z-10 w-full">
        <div className="text-center mb-12 md:mb-16 max-w-xl mx-auto px-6">
          <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] block mb-3">Pune Presence</span>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tighter mb-3 md:mb-4">
            Key Operational <span className="italic">Hubs.</span>
          </h2>
          <p className="text-white/40 text-xs md:text-sm">Our strategic network across Pune's vital zones.</p>
        </div>
        <div className="space-y-4 md:space-y-6" suppressHydrationWarning>
          <Row direction="left" duration={110} mouseX={mouseX} mouseY={mouseY} />
          <Row direction="right" duration={95} mouseX={mouseX} mouseY={mouseY} />
          <Row direction="left" duration={80} mouseX={mouseX} mouseY={mouseY} />
        </div>
      </div>
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)]" />
    </section>
  );
};

export default LocationSpatialGrid;