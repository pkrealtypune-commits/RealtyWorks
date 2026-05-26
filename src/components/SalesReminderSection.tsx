"use client";

import React, { useRef } from "react";
import { motion, Variants, useSpring, useTransform, useMotionValue } from "framer-motion";

const SalesReminderSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- Mouse Physics (Provides subtle background drift) ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    mouseX.set((event.clientX - rect.left) / rect.width - 0.5);
    mouseY.set((event.clientY - rect.top) / rect.height - 0.5);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Smooth springs for high-end drift
  const springConfig = { stiffness: 100, damping: 30 };
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-40, 40]), springConfig);
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-40, 40]), springConfig);

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
  };

  const buttonVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9 },
    visible: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.5, ease: "easeOut" },
    },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-24 md:py-32 overflow-hidden bg-background-primary perspective-[1200px]"
    >
      {/* --- Continuous Bouncing 3D Background Elements --- */}
      <div className="absolute inset-0 z-0 pointer-events-none">
        
        {/* Floating Glass Morphism Card 1 (Tilted Left) */}
        <motion.div 
          style={{ x: moveX, y: moveY }}
          animate={{
            y: [0, -30, 0], // The Bounce sequence
            rotate: [15, 18, 15], // Slight continuous turn
          }}
          transition={{
            duration: 6, // Total cycle time
            repeat: Infinity, // Loop forever
            ease: "easeInOut", // Smooth "ball-like" physics
          }}
          className="absolute top-10 left-[5%] w-64 h-64 bg-white/[0.03] border border-white/5 rounded-[3rem] blur-[2px] hidden lg:block"
        />
        
        {/* Floating Glass Morphism Card 2 (Lower Right) */}
        <motion.div 
          style={{ 
            x: useTransform(moveX, (v) => v * -1.5), 
            y: useTransform(moveY, (v) => v * -1.5) 
          }}
          animate={{
            y: [0, 40, 0], // The Bounce sequence (offset)
            rotate: [-10, -14, -10], // Slight continuous turn
          }}
          transition={{
            duration: 8, // Different duration prevents synchronization
            delay: 1, // Staggers the bounce start
            repeat: Infinity, // Loop forever
            ease: "easeInOut", // Smooth physics
          }}
          className="absolute bottom-10 right-[5%] w-80 h-80 bg-accent-orange/[0.03] border border-accent-orange/10 rounded-[4rem] blur-[1px] hidden lg:block"
        />

        {/* --- Core Glowing & Border Elements --- */}
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[300px] bg-accent-orange/5 blur-[120px] rounded-full" />
        <div className="absolute bottom-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
        <div className="absolute top-0 left-0 w-full h-[1px] bg-gradient-to-r from-transparent via-white/10 to-transparent" />
      </div>

      <div className="container relative z-10 mx-auto px-6">
        <motion.div
          variants={containerVariants}
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, margin: "-100px" }}
          className="max-w-4xl mx-auto text-center"
        >
          {/* Subtle 3D Tilt on the Heading */}
          <motion.div style={{ rotateX: useTransform(mouseY, [-0.5, 0.5], [5, -5]), rotateY: useTransform(mouseX, [-0.5, 0.5], [-5, 5]) }}>
            <motion.h2
              variants={itemVariants}
              className="text-4xl md:text-6xl font-bold text-white mb-6 tracking-tight leading-tight"
            >
              Are you looking for an <br className="hidden md:block" />
              <span className="text-accent-orange">Office Space to rent?</span>
            </motion.h2>
          </motion.div>

          <motion.p
            variants={itemVariants}
            className="text-lg md:text-xl text-foreground-secondary mb-12 max-w-2xl mx-auto font-light leading-relaxed"
          >
            Find the perfect workspace with our premium, flexible solutions in
            Pune! Designed for high-growth enterprises and modern professionals.
          </motion.p>

          <motion.div
            variants={itemVariants}
            className="flex flex-col sm:flex-row items-center justify-center gap-5"
          >
            <motion.a
              href="#enquire"
              variants={buttonVariants}
              whileHover={{ y: -4, scale: 1.05, boxShadow: "0 20px 40px rgba(255, 107, 0, 0.2)" }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 bg-accent-orange text-white font-bold rounded-full shadow-lg transition-all text-center"
            >
              Enquire Now
            </motion.a>

            <motion.a
              href="/properties/coworking"
              variants={buttonVariants}
              whileHover={{ 
                y: -4, 
                scale: 1.05,
                backgroundColor: "rgba(255, 255, 255, 0.1)"
              }}
              whileTap={{ scale: 0.98 }}
              className="w-full sm:w-auto px-10 py-4 border border-white/20 bg-white/5 backdrop-blur-sm text-white font-bold rounded-full transition-all text-center"
            >
              View Office Spaces
            </motion.a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
};

export default SalesReminderSection;