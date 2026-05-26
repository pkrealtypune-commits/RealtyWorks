"use client";

import React from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

const locations = [
  "Kharadi", "Viman Nagar", "Hadapsar", "Kalyani Nagar", "Koregaon Park", "Yerwada",
  "Magarpatha City", "Hinjewadi", "Baner", "Balewadi", "Wakad", "Aundh", "Talawade",
  "Pashan", "Pimpri", "Chinchwad", "Bhosari", "Camp", "SB Road", "Ravet", "Shivajinagar",
  "Bavdhan", "Lohegaon", "Manjri", "Warje", "Dighi", "Vadgaon Sheri", "Kondhwa",
  "Fursungi", "Katraj"
];

// Duplicate the array to create a seamless, gap-free loop
const duplicatedLocations = [...locations, ...locations, ...locations];

const getDepth = (i: number) => {
  const seed = i + 1;
  const pseudoRand = Math.abs(Math.sin(seed) * 10000) % 1;
  const depth = pseudoRand * -120 - 20;
  return parseFloat(depth.toFixed(2));
};

const SpatialCard = ({ name, index, mouseX, mouseY }: any) => {
  const zDepth = React.useMemo(() => getDepth(index), [index]);

  const responsiveFactor = 1 + (Math.abs(zDepth) / 140);
  const driftX = useTransform(mouseX, [-0.5, 0.5], [index % 2 === 0 ? -15 : 15, index % 2 === 0 ? 15 : -15]);
  const driftY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  const contentX = useSpring(useTransform(driftX, (v) => v * responsiveFactor));
  const contentY = useSpring(useTransform(driftY, (v) => v * responsiveFactor));

  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="relative flex flex-shrink-0 items-center justify-center w-[220px] md:w-[280px] aspect-[16/10] border border-white/5 bg-background-secondary rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-accent-orange/10"
    >
      {/* Dynamic Cursor Light */}
      <motion.div
        style={{ x: contentX, y: contentY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      />

      {/* Structured Location Text with Spatial Parallax */}
      <motion.div
        style={{ x: contentX, y: contentY, z: zDepth }}
        className="relative z-10 flex flex-col items-center justify-center p-6 text-center transform-style-3d"
      >
        <span className="text-white text-sm md:text-base font-bold tracking-tight mb-2 opacity-90 group-hover:opacity-100 transition-opacity group-hover:text-accent-orange">
          {name}
        </span>
        <div className="flex gap-1.5 items-center">
          <span className="text-[9px] text-white/40 uppercase tracking-widest font-mono">PuneHub</span>
          <div className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
        </div>
      </motion.div>

      {/* Decorative Spatial Grid */}
      <div
        className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
        style={{ backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', backgroundSize: '20px 20px' }}
      />
    </motion.div>
  );
};

const LocationSpatialGrid = () => {
  const containerRef = React.useRef<HTMLDivElement>(null);

  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();

    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  return (
    <section
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }}
      className="relative w-full py-24 bg-background-primary overflow-hidden perspective-[1200px]"
    >
      <div className="relative z-10 w-full">

        {/* Professional Header */}
        <div className="text-center mb-16 max-w-xl mx-auto px-6">
          <motion.span
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] block mb-3"
          >
            Pune Presence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 leading-tight">
            Key Operational <span className="text-foreground-secondary italic">Hubs.</span>
          </h2>
          <p className="text-white/40 font-light max-w-sm mx-auto text-sm leading-relaxed">
            Our strategic network across Pune's vital commercial and technical zones.
          </p>
        </div>

        {/* --- Infinite Loop Carousel Container --- */}
        <div className="relative w-full overflow-hidden flex mask-gradient">
          {/* Fading Edge Overlays to look ultra-clean */}
          <div className="absolute inset-y-0 left-0 w-16 md:w-32 bg-gradient-to-r from-background-primary to-transparent z-20 pointer-events-none" />
          <div className="absolute inset-y-0 right-0 w-16 md:w-32 bg-gradient-to-l from-background-primary to-transparent z-20 pointer-events-none" />

          <motion.div
            className="flex gap-5 pre-render-3d"
            animate={{ x: ["0%", "-33.333%"] }}
            transition={{
              ease: "linear",
              duration: 45, // Tweak this number to speed up or slow down the marquee
              repeat: Infinity,
            }}
          >
            {duplicatedLocations.map((location, i) => (
              <SpatialCard
                key={`${location}-${i}`}
                name={location}
                index={i}
                mouseX={mouseX}
                mouseY={mouseY}
              />
            ))}
          </motion.div>
        </div>

      </div>

      {/* Background Lighting/Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-orange/[0.03] blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default LocationSpatialGrid;