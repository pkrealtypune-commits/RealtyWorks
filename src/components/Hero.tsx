"use client";

import React, { useRef, Suspense, useMemo } from "react";
import { motion, Variants } from "framer-motion";
import { Canvas, useFrame } from "@react-three/fiber";
import { Points, PointMaterial, Sphere } from "@react-three/drei";
import { ArrowUpRight } from "lucide-react";
import * as random from "maath/random/dist/maath-random.esm";
import * as THREE from "three";

// --- 3D PARTICLE ORB COMPONENT ---
function AnimatedOrb() {
  const ref = useRef<THREE.Points | null>(null);
  
  const spherePoints = useMemo(() => {
    return random.inSphere(new Float32Array(1500), { radius: 1.5 }) as Float32Array;
  }, []);

  useFrame((state) => {
    if (!ref.current) return;
    ref.current.rotation.x = state.clock.getElapsedTime() * 0.05;
    ref.current.rotation.y = state.clock.getElapsedTime() * 0.07;
  });

  return (
    <group rotation={[0, 0, Math.PI / 4]}>
      <Points ref={ref} positions={spherePoints} stride={3} frustumCulled>
        <PointMaterial
          transparent
          color="#6366f1"
          size={0.025}
          sizeAttenuation={true}
          depthWrite={false}
          blending={THREE.AdditiveBlending}
        />
      </Points>
      <Sphere args={[0.8, 32, 32]}>
        <meshStandardMaterial 
          color="#0f172a" 
          wireframe 
          transparent 
          opacity={0.08} 
        />
      </Sphere>
    </group>
  );
}

// --- MAIN HERO COMPONENT ---
export default function PremiumHero() {
  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.15,
        delayChildren: 0.1,
      },
    },
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 20 },
    visible: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 1.0,
        ease: [0.16, 1, 0.3, 1],
      },
    },
  };

  return (
    /* ADJUSTED: Changed h-auto to min-h-screen on mobile and tweaked paddings to expand the container fully */
    <section className="relative w-full min-h-screen lg:h-screen overflow-x-hidden bg-[#030712] flex flex-col lg:flex-row lg:items-center justify-center select-none pt-4 pb-5 lg:py-0">
      
      {/* 1. CINEMATIC BACKGROUND VIDEO MATRIX */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <video
          autoPlay
          muted
          loop
          playsInline
          className="w-full h-full object-cover scale-105"
          poster="https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&w=1920&q=80"
        >
          <source
            src="https://player.vimeo.com/external/434045526.sd.mp4?s=c27ee37daaaaf9ab03247071efc609c250912cb9&profile_id=165&oauth2_token_id=57447761"
            type="video/mp4"
          />
        </video>
        <div className="absolute inset-0 bg-gradient-to-b from-[#030712]/40 via-[#030712]/80 to-[#030712] lg:bg-gradient-to-r lg:from-[#030712] lg:via-[#030712]/80 lg:to-transparent z-10" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#030712] via-transparent to-[#030712]/30 z-10" />
        <div className="absolute inset-0 bg-[#030712]/20 backdrop-blur-[1px] z-10" />
      </div>

      {/* 2. DYNAMIC AMBIENT LIGHT BLOBS */}
      <div className="absolute top-1/4 left-1/4 w-[300px] md:w-[500px] h-[300px] md:h-[500px] bg-indigo-600/10 rounded-full blur-[100px] md:blur-[140px] pointer-events-none animate-pulse duration-[8000ms] z-10" />
      <div className="absolute bottom-1/4 right-1/4 w-[350px] md:w-[600px] h-[350px] md:h-[600px] bg-emerald-600/5 rounded-full blur-[110px] md:blur-[160px] pointer-events-none animate-pulse duration-[12000ms] z-10" />

      {/* 3. CORE INTERACTIVE INTERFACE GRID */}
      {/* ADJUSTED: Changed h-full to flex flex-col on mobile to leverage the screen vertical height dynamically */}
      <div className="max-w-7xl w-full mx-auto px-6 md:px-12 flex flex-col lg:grid lg:grid-cols-12 gap-4 lg:gap-12 items-center relative z-20 min-h-screen lg:h-full pt-16 sm:pt-24 lg:pt-16">
        
        {/* MOBILE OVERLAY VIEWPORT AREA (16:9 Aspect Screen Layout) */}
        <div className="order-1 lg:order-2 lg:col-span-5 w-full aspect-[16/9] lg:aspect-auto lg:h-[65vh] relative flex items-center justify-between rounded-2xl overflow-hidden bg-transparent border-none flex-shrink-0">
          
          {/* Three.js Canvas Layer */}
          <div className="absolute lg:inset-0 right-0 w-1/2 lg:w-full h-full z-0 pointer-events-none">
            <motion.div 
              className="w-full h-full"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 1.2, ease: "easeOut", delay: 0.2 }}
            >
              <div className="w-full h-full block lg:hidden">
                <Canvas camera={{ position: [0, 0, 3], fov: 75 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
                  <Suspense fallback={null}>
                    <AnimatedOrb />
                  </Suspense>
                </Canvas>
              </div>

              <div className="w-full h-full hidden lg:block">
                <Canvas camera={{ position: [0, 0, 3], fov: 60 }}>
                  <ambientLight intensity={0.5} />
                  <pointLight position={[10, 10, 10]} intensity={1.5} color="#6366f1" />
                  <Suspense fallback={null}>
                    <AnimatedOrb />
                  </Suspense>
                </Canvas>
              </div>
            </motion.div>
          </div>

          {/* Mobile Text Heading Layer */}
          <div className="absolute inset-y-0 left-0 w-[65%] z-10 flex flex-col justify-center pl-6 bg-gradient-to-r from-[#030712] via-[#030712]/40 to-transparent lg:hidden text-left">
            <div className="inline-flex items-center gap-2 mb-2 w-fit">
              <span className="w-1.5 h-1.5 rounded-full bg-indigo-500 animate-ping" />
              <span className="text-[9px] uppercase tracking-[0.2em] text-zinc-400 font-medium">Premium Space</span>
            </div>
            
            <h1 className="text-xl sm:text-3xl font-bold text-white tracking-tight leading-[1.1]">
              Find Your Perfect <br />
              Office Space & <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
                Co-Working Hubs.
              </span>
            </h1>
          </div>
          
        </div>

        {/* BOTTOM CONTENT AREA: DESCRIPTION & CTAs ON MOBILE */}
        {/* ADJUSTED: flex-grow expands this box down, and mt-10 / md:mt-12 spaces it beautifully away from the 16:9 view */}
        <motion.div 
          className="order-2 lg:order-1 lg:col-span-7 flex flex-col justify-start text-left mt-10 md:mt-12 lg:mt-0 flex-grow"
          variants={containerVariants}
          initial="hidden"
          animate="visible"
        >
          {/* Desktop Only Tagline */}
          <motion.div variants={itemVariants} className="hidden lg:inline-flex items-center gap-2 px-3 py-1.5 rounded-full bg-white/5 border border-white/10 backdrop-blur-md w-fit mb-4 shadow-2xl">
            <span className="w-2 h-2 rounded-full bg-indigo-500 animate-ping" />
            <span className="text-xs uppercase tracking-[0.25em] text-zinc-400 font-medium">Premium Office Space • Pune, India</span>
          </motion.div>

          {/* Desktop Only Heading */}
          <motion.h1 
            variants={itemVariants}
            className="hidden lg:block text-4xl sm:text-6xl xl:text-7xl font-bold text-white tracking-tight leading-[1.05] mb-6"
          >
            Find Your Perfect <br />
            Office Space & <br />
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-white via-zinc-200 to-zinc-400">
              Co-Working Hubs.
            </span>
          </motion.h1>

          {/* Subtext Paragraph */}
          {/* ADJUSTED: mb-8 provides breathing space right before the buttons container */}
          <motion.p 
            variants={itemVariants}
            className="text-sm sm:text-base lg:text-lg text-zinc-400 max-w-xl font-light leading-relaxed mb-8 lg:mb-10"
          >
            Secure high-performance logistics-grade assets and agile workspaces designed for scalability and engineered for generational distinction.
          </motion.p>

          {/* Mobile & Desktop Action Trigger Systems */}
          {/* ADJUSTED: Added mb-6 on mobile to guarantee items don't hit or overlap your custom bottom app navigation menu */}
          <motion.div variants={itemVariants} className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto mb-6 lg:mb-0">
            <a 
              href="/properties/managed-offices" 
              className="group relative px-6 py-4 lg:px-8 bg-white text-black font-semibold text-sm rounded-xl lg:rounded-sm overflow-hidden flex items-center justify-center gap-2 transition-all duration-300 hover:bg-zinc-100 shadow-[0_0_30px_rgba(255,255,255,0.1)]"
            >
              Discover Properties
              <ArrowUpRight className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
            </a>
            
            <a 
              href="/contact" 
              className="px-6 py-4 lg:px-8 bg-white/5 text-white font-medium text-sm rounded-xl lg:rounded-sm border border-white/10 backdrop-blur-md transition-all duration-300 hover:bg-white/10 hover:border-white/20 text-center"
            >
              Enquire Now
            </a>
          </motion.div>
        </motion.div>
        
      </div>

      {/* 4. PREMIUM SCROLL INDICATOR */}
      <motion.div 
        className="absolute bottom-8 left-1/2 -translate-x-1/2 z-20 hidden lg:flex flex-col items-center gap-2 cursor-pointer"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1.2, duration: 1 }}
      >
        <span className="text-[10px] uppercase tracking-[0.3em] text-zinc-500 font-semibold">Scroll Down</span>
        <div className="w-[20px] h-[36px] rounded-full border-2 border-zinc-700 p-1 flex justify-center">
          <motion.div 
            className="w-1 h-2 bg-indigo-500 rounded-full"
            animate={{ 
              y: [0, 12, 0],
              opacity: [1, 0.2, 1]
            }}
            transition={{
              duration: 2,
              repeat: Infinity,
              ease: "easeInOut"
            }}
          />
        </div>
      </motion.div>

    </section>
  );
}