"use client";

import React, { useRef } from "react";
import { motion, useMotionValue, useSpring, useTransform, Variants } from "framer-motion";

const locations = [
  "Kharadi", "Viman Nagar", "Hadapsar", "Kalyani Nagar", "Koregaon Park", "Yerwada",
  "Magarpatha City", "Hinjewadi", "Baner", "Balewadi", "Wakad", "Aundh", "Talawade",
  "Pashan", "Pimpri", "Chinchwad", "Bhosari", "Camp", "SB Road", "Ravet", "Shivajinagar",
  "Bavdhan", "Lohegaon", "Manjri", "Warje", "Dighi", "Vadgaon Sheri", "Kondhwa",
  "Fursungi", "Katraj"
];

// Inside LocationSpatialGrid.tsx

const getDepth = (i: number) => {
  const seed = i + 1;
  const pseudoRand = Math.abs(Math.sin(seed) * 10000) % 1;
  
  // We round the result to 2 decimal places to ensure 
  // server and client generate the EXACT same string for the CSS transform.
  const depth = pseudoRand * -120 - 20;
  return parseFloat(depth.toFixed(2)); 
};

const SpatialCard = ({ name, index, mouseX, mouseY }: any) => {
  const zDepth = React.useMemo(() => getDepth(index), [index]);

  // Adjust responsiveness based on Z-depth (items in the back move slower)
  const responsiveFactor = 1 + (Math.abs(zDepth) / 140); 
  const driftX = useTransform(mouseX, [-0.5, 0.5], [index % 2 === 0 ? -15 : 15, index % 2 === 0 ? 15 : -15]);
  const driftY = useTransform(mouseY, [-0.5, 0.5], [-20, 20]);

  // Use springs for smooth spatial drift on the content
  const contentX = useSpring(useTransform(driftX, (v) => v * responsiveFactor));
  const contentY = useSpring(useTransform(driftY, (v) => v * responsiveFactor));

  // Entrance Variant: Clean, decelarating scale & fade
  const cardVariants: Variants = {
    hidden: { opacity: 0, scale: 0.95 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] } // Decelarating ease-out
    }
  };

  return (
    <motion.div
      variants={cardVariants}
      whileHover={{ scale: 1.02 }}
      className="relative flex items-center justify-center aspect-[16/9] border border-white/5 bg-background-secondary rounded-2xl overflow-hidden cursor-pointer group shadow-[0_10px_30px_rgba(0,0,0,0.3)] transition-shadow duration-500 hover:shadow-accent-orange/10"
    >
      {/* Dynamic Cursor Light (Only visible on hover) */}
      <motion.div 
        style={{ x: contentX, y: contentY }}
        className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(255,107,0,0.1)_0%,transparent_60%)] opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-0"
      />

      {/* Structured Location Text with Spatial Parallax */}
      <motion.div 
        style={{ x: contentX, y: contentY, z: zDepth }}
        className="relative z-10 flex flex-col items-center justify-center p-6 text-center transform-style-3d"
      >
        <span className="text-white text-base md:text-lg font-bold tracking-tight mb-2 opacity-90 group-hover:opacity-100 transition-opacity group-hover:text-accent-orange">
          {name}
        </span>
        <div className="flex gap-1.5 items-center">
            <span className="text-[10px] text-white/40 uppercase tracking-widest font-mono">PuneHub</span>
            <div className="w-1.5 h-1.5 rounded-full bg-accent-orange animate-pulse" />
        </div>
      </motion.div>

      {/* Decorative Spatial Grid (behind text) */}
      <div className="absolute inset-0 z-0 opacity-[0.03] group-hover:opacity-[0.08] transition-opacity"
           style={{ backgroundImage: 'linear-gradient(#ffffff10 1px, transparent 1px), linear-gradient(90deg, #ffffff10 1px, transparent 1px)', backgroundSize: '20px 20px' }} />

    </motion.div>
  );
};

const LocationSpatialGrid = () => {
  const containerRef = useRef<HTMLDivElement>(null);
  
  // Mouse position tracking
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Normalize mouse position (-0.5 to 0.5)
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05, // Clean, continuous fanning effect
      }
    }
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={() => { mouseX.set(0); mouseY.set(0); }} // Reset to center
      className="relative w-full py-24 bg-background-primary overflow-hidden perspective-[1200px]"
    >
      <div className="container mx-auto px-6 relative z-10">
        
        {/* Professional Header */}
        <div className="text-center mb-16 max-w-xl mx-auto">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] block mb-3"
          >
            Pune Presence
          </motion.span>
          <h2 className="text-4xl md:text-5xl font-bold text-white tracking-tighter mb-4 leading-tight">
            Key Operational <span className="text-foreground-secondaryitalic">Hubs.</span>
          </h2>
          <p className="text-white/40 font-light max-w-sm mx-auto text-sm leading-relaxed">
            Our strategic network across Pune's vital commercial and technical zones.
          </p>
        </div>

        {/* --- Staggered Spatial Grid --- */}
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: true, amount: 0.1 }}
          className="relative grid grid-cols-2 md:grid-cols-4 lg:grid-cols-5 gap-5 max-w-6xl mx-auto transform-style-3d"
        >
          {locations.map((location, i) => (
            <SpatialCard 
              key={location} 
              name={location} 
              index={i} 
              mouseX={mouseX} 
              mouseY={mouseY} 
            />
          ))}
        </motion.div>
      </div>

      {/* Background Lighting/Atmosphere */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,rgba(10,10,10,1)_0%,rgba(0,0,0,1)_100%)] z-0" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full h-[600px] bg-accent-orange/[0.03] blur-[150px] -z-10 rounded-full" />
    </section>
  );
};

export default LocationSpatialGrid;