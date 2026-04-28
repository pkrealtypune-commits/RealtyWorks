"use client";

import { useState } from "react";
import Image from "next/image";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { properties } from "@/data/properties";

const PropertiesShowcase = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev === 0 ? properties.length - 1 : prev - 1));
  };

  const sliderVariants: Variants = {
    initial: (direction: number) => ({
      opacity: 0,
      scale: 0.95,
      x: direction > 0 ? "20%" : "-20%",
      rotateY: direction > 0 ? 30 : -30,
      z: -200,
    }),
    animate: {
      opacity: 1,
      scale: 1,
      x: 0,
      rotateY: 0,
      z: 0,
      transition: {
        duration: 1.2,
        ease: [0.16, 1, 0.3, 1],
        staggerChildren: 0.1,
      },
    },
    exit: (direction: number) => ({
      opacity: 0,
      scale: 1.05,
      x: direction > 0 ? "-10%" : "10%",
      rotateY: direction > 0 ? -15 : 15,
      z: 100,
      transition: {
        duration: 0.8,
        ease: [0.16, 1, 0.3, 1],
      },
    }),
  };

  return (
    <section className="relative h-screen w-full overflow-hidden bg-background-primary select-none flex items-center perspective-[2000px]">
      <AnimatePresence initial={false} custom={direction} mode="popLayout">
        <motion.div
          key={index}
          custom={direction}
          variants={sliderVariants}
          // --- VIEWPORT RE-TRIGGER LOGIC ---
          initial="initial"
          whileInView="animate"
          viewport={{ once: false, amount: 0.3 }}
          exit="exit"
          className="absolute inset-0 w-full h-full preserve-3d"
        >
          {/* Background Ken Burns Effect */}
          <motion.div 
            className="absolute inset-0 w-full h-full"
            animate={{ scale: [1, 1.08, 1] }}
            transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          >
            <Image
              src={properties[index].image}
              alt={properties[index].title}
              fill
              priority
              className="object-cover brightness-[0.75] contrast-[1.1] saturate-[1.1]"
            />
          </motion.div>

          <div className="absolute inset-0 bg-gradient-to-r from-background-primary/80 via-background-primary/20 to-transparent pointer-events-none" />
          <div className="absolute inset-0 bg-[radial-gradient(circle_at_center,transparent_0%,rgba(0,34,68,0.4)_100%)] pointer-events-none" />

          {/* Main Content */}
          <div className="relative z-10 w-full h-full flex flex-col justify-center px-10 md:px-24 lg:px-32">
            <div className="max-w-6xl w-full mx-auto">
              
              {/* Badge */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <span className="inline-block mb-8 px-6 py-2 rounded-full text-[10px] font-bold tracking-[0.4em] uppercase border border-white/20 bg-background-primary/40 text-accent-orange backdrop-blur-xl shadow-xl">
                  {properties[index].status}
                </span>
              </motion.div>

              {/* Title */}
              <motion.h2
                variants={{
                  initial: { opacity: 0, x: -30 },
                  animate: { opacity: 1, x: 0, transition: { duration: 0.8 } }
                }}
                className="text-6xl md:text-8xl lg:text-9xl font-bold text-white tracking-tightest mb-8 leading-[0.85] drop-shadow-2xl"
              >
                {properties[index].title}
              </motion.h2>

              {/* Info Row */}
              <motion.div
                variants={{
                  initial: { opacity: 0, y: 30 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.8 } }
                }}
                className="flex flex-col md:flex-row md:items-end gap-10 mb-16"
              >
                <div className="flex flex-col gap-2">
                  <span className="text-accent-orange text-[10px] font-bold uppercase tracking-[0.5em] opacity-90">Location</span>
                  <p className="text-white text-2xl md:text-4xl font-light uppercase tracking-widest border-l-2 border-accent-orange/60 pl-6 text-balance">
                    {properties[index].location}
                  </p>
                </div>
                <div className="hidden md:block h-12 w-[1px] bg-white/20 mx-4" />
                <div className="flex flex-col gap-2">
                   <span className="text-white/40 text-[10px] font-bold uppercase tracking-[0.5em]">Inventory</span>
                   <p className="text-white/80 text-lg md:text-xl tracking-widest uppercase">
                     {properties[index].size}
                   </p>
                </div>
              </motion.div>

              {/* CTAs */}
              <motion.div 
                className="flex flex-wrap gap-6"
                variants={{
                  initial: { opacity: 0, y: 20 },
                  animate: { opacity: 1, y: 0, transition: { duration: 0.6 } }
                }}
              >
                <button className="group relative bg-accent-orange text-white px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,107,0,0.3)] active:scale-95">
                  <span className="relative z-10">Enquire Now</span>
                  <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
                </button>
                <button className="border border-white/20 bg-white/5 backdrop-blur-xl px-12 py-5 rounded-full font-bold text-[12px] uppercase tracking-[0.2em] text-white hover:bg-white/10 transition-all">
                  Full Details
                </button>
              </motion.div>
            </div>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Navigation Controls */}
      <div className="absolute inset-x-0 top-1/2 -translate-y-1/2 z-[100] px-6 md:px-10 flex justify-between pointer-events-none">
        <button 
          onClick={prevStep}
          className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/10 bg-background-primary/30 backdrop-blur-xl text-white/60 hover:text-accent-orange hover:border-accent-orange/40 transition-all group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:-translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M15 19l-7-7 7-7" />
          </svg>
        </button>

        <button 
          onClick={nextStep}
          className="pointer-events-auto w-14 h-14 md:w-16 md:h-16 flex items-center justify-center rounded-full border border-white/10 bg-background-primary/30 backdrop-blur-xl text-white/60 hover:text-accent-orange hover:border-accent-orange/40 transition-all group"
        >
          <svg className="w-6 h-6 transition-transform group-hover:translate-x-1" fill="none" stroke="currentColor" viewBox="0 0 24 24">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={1.5} d="M9 5l7 7-7 7" />
          </svg>
        </button>
      </div>

      {/* Progress Bar */}
      <div className="absolute bottom-0 left-0 w-full h-[3px] bg-white/5 z-50 overflow-hidden">
        <motion.div 
          className="h-full bg-accent-orange origin-left"
          animate={{ scaleX: (index + 1) / properties.length }}
          transition={{ duration: 1, ease: "circOut" }}
        />
      </div>
    </section>
  );
};

export default PropertiesShowcase;