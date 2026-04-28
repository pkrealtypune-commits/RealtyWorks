"use client";

import React, { useRef } from "react";
import Image from "next/image";
import { motion, Variants, useTransform, useMotionValue, useSpring } from "framer-motion";

const AboutSection = () => {
  const containerRef = useRef<HTMLDivElement>(null);

  // --- 3D Mouse Tracking Logic ---
  const mouseX = useMotionValue(0);
  const mouseY = useMotionValue(0);

  const handleMouseMove = (event: React.MouseEvent<HTMLDivElement>) => {
    if (!containerRef.current) return;
    const rect = containerRef.current.getBoundingClientRect();
    
    // Calculate normalized mouse position (-0.5 to 0.5)
    const x = (event.clientX - rect.left) / rect.width - 0.5;
    const y = (event.clientY - rect.top) / rect.height - 0.5;
    
    mouseX.set(x);
    mouseY.set(y);
  };

  const handleMouseLeave = () => {
    mouseX.set(0);
    mouseY.set(0);
  };

  // Smooth springs for high-end feel
  const rotateX = useSpring(useTransform(mouseY, [-0.5, 0.5], [10, -10]), { stiffness: 100, damping: 20 });
  const rotateY = useSpring(useTransform(mouseX, [-0.5, 0.5], [-10, 10]), { stiffness: 100, damping: 20 });
  
  const moveX = useSpring(useTransform(mouseX, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 30 });
  const moveY = useSpring(useTransform(mouseY, [-0.5, 0.5], [-20, 20]), { stiffness: 150, damping: 30 });

  // --- Animation Variants ---
  const textVariants: Variants = {
    hidden: { opacity: 0, x: -30 },
    visible: { 
      opacity: 1, 
      x: 0, 
      transition: { duration: 1.8, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  const imageVariants: Variants = {
    hidden: { opacity: 0, scale: 0.9, rotateY: -15 },
    visible: { 
      opacity: 1, 
      scale: 1, 
      rotateY: 0,
      transition: { duration: 1.2, ease: [0.16, 1, 0.3, 1] } 
    },
  };

  return (
    <section 
      ref={containerRef}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className="relative w-full py-28 bg-background-primary overflow-hidden perspective-[1500px]"
    >
      {/* --- 3D Background Watermark --- */}
      <motion.div 
        style={{ x: moveX, y: moveY }}
        className="absolute inset-0 z-0 pointer-events-none select-none flex flex-col justify-center items-center opacity-[0.02]"
      >
        <h2 className="text-[20vw] font-black leading-none tracking-tighter text-white">REALTY</h2>
        <h2 className="text-[20vw] font-black leading-none tracking-tighter text-accent-orange">WORKS</h2>
      </motion.div>

      {/* --- Floating 3D Orbs --- */}
      <div className="absolute inset-0 z-10 pointer-events-none">
        {[1, 2, 3].map((i) => (
          <motion.div
            key={i}
            animate={{
              y: [0, -20, 0],
              rotate: [0, 10, 0],
            }}
            transition={{
              duration: 5 + i,
              repeat: Infinity,
              ease: "easeInOut",
            }}
            style={{
              top: `${20 * i}%`,
              left: `${25 * i}%`,
              x: useTransform(mouseX, [-0.5, 0.5], [i * -10, i * 10]),
            }}
            className="absolute w-16 h-16 rounded-2xl border border-white/5 bg-white/5 backdrop-blur-sm shadow-2xl"
          />
        ))}
      </div>

      <div className="container mx-auto px-6 md:px-12 lg:px-24 relative z-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
          
          {/* --- Left Side: 3D Image Card --- */}
          <motion.div 
            style={{ rotateX, rotateY, transformStyle: "preserve-3d" }}
            variants={imageVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            className="relative group"
          >
            <div className="relative z-10 aspect-[4/5] overflow-hidden rounded-3xl border border-white/10 bg-background-secondary shadow-2xl">
              <motion.div 
                style={{ x: moveX, y: moveY, scale: 1.1, transformStyle: "preserve-3d" }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src="/images/about.avif"
                  alt="Realty Works Pune"
                  fill
                  className="object-cover"
                  priority
                />
              </motion.div>
              
              {/* Overlay HUD */}
              <div className="absolute inset-0 z-20 bg-gradient-to-t from-background-primary/80 via-transparent to-transparent" />
              <div className="absolute bottom-8 left-8 z-30 flex items-center gap-3 bg-white/10 backdrop-blur-md px-6 py-3 rounded-full border border-white/10">
                <div className="w-2 h-2 rounded-full bg-accent-orange animate-pulse" />
                <span className="text-white font-bold text-[10px] uppercase tracking-[0.2em]">Kalyani Nagar, Pune</span>
              </div>
            </div>

            {/* Depth Shadow Element */}
            <motion.div 
              style={{ x: moveX, y: moveY, translateZ: -50 }}
              className="absolute -inset-4 bg-accent-orange/5 blur-3xl rounded-full -z-10"
            />
          </motion.div>

          {/* --- Right Side: Content --- */}
          <motion.div 
            initial="hidden"
            whileInView="visible"
            viewport={{ once: false }}
            transition={{ staggerChildren: 0.1 }}
            className="flex flex-col space-y-8"
          >
            <motion.div variants={textVariants}>
              <span className="text-accent-orange font-bold uppercase tracking-[0.4em] text-xs block mb-4">About Realty Works</span>
              <h2 className="text-5xl md:text-7xl font-bold text-white tracking-tightest leading-[0.9] mb-8">
                Strategic <br />
                <span className="text-foreground-secondary">Workspaces.</span>
              </h2>
              <p className="text-foreground-secondary text-lg md:text-xl font-light leading-relaxed max-w-xl">
                Specializing in **managed office solutions** in Pune, we provide the infrastructure so you can focus on scaling. From co-working to custom-built headquarters.
              </p>
            </motion.div>

            {/* Feature List */}
            <motion.div variants={textVariants} className="grid grid-cols-1 sm:grid-cols-2 gap-4 border-y border-white/10 py-10">
              {["Strategic Locations", "Flexible Suites", "Startup Friendly", "Managed Services"].map((item, i) => (
                <div key={i} className="flex items-center space-x-3">
                  <div className="w-1.5 h-1.5 rounded-full bg-accent-orange" />
                  <span className="text-white font-medium tracking-tight">{item}</span>
                </div>
              ))}
            </motion.div>

            {/* Contact Actions */}
            <motion.div variants={textVariants} className="flex flex-wrap gap-8 pt-4">
              <div>
                <p className="text-foreground-secondary text-[10px] uppercase tracking-widest mb-2">Direct Line</p>
                <a href="tel:+919765464333" className="text-white text-xl font-bold hover:text-accent-orange transition-colors">+91 97654 64333</a>
              </div>
              <div>
                <p className="text-foreground-secondary text-[10px] uppercase tracking-widest mb-2">Email</p>
                <a href="mailto:contact@realtyworks.co.in" className="text-white text-xl font-bold hover:text-accent-orange transition-colors">contact@realtyworks.co.in</a>
              </div>
            </motion.div>
          </motion.div>

        </div>
      </div>
    </section>
  );
};

export default AboutSection;