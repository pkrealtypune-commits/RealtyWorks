"use client";

import React, { useState, useEffect } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import { testimonials } from "@/data/testimonials";

const FilmStrip = ({ reverse = false }: { reverse?: boolean }) => {
  const duplicatedList = [...testimonials, ...testimonials, ...testimonials];

  return (
    <div className="relative h-full w-full overflow-hidden opacity-40 transition-all duration-700 hover:opacity-70">
      <motion.div
        animate={{
          y: reverse ? ["-50%", "0%"] : ["0%", "-50%"],
        }}
        transition={{
          duration: 35,
          ease: "linear",
          repeat: Infinity,
        }}
        className="flex flex-col gap-8"
      >
        {duplicatedList.map((t, i) => (
          <div
            key={i}
            className="w-full aspect-[4/3] bg-white/[0.03] border border-white/10 rounded-3xl p-6 flex flex-col justify-center backdrop-blur-sm shadow-xl"
          >
            <p className="text-[11px] text-white/60 line-clamp-4 leading-relaxed italic">
              "{t.content}"
            </p>
            <div className="mt-4 border-t border-white/10 pt-4">
              <p className="text-white text-[11px] font-bold">{t.name}</p>
              <p className="text-accent-orange text-[9px] uppercase tracking-[0.2em] font-semibold">
                {t.company}
              </p>
            </div>
          </div>
        ))}
      </motion.div>
      
      {/* Gradient Mask to fade top and bottom of strips */}
      <div className="absolute inset-0 pointer-events-none bg-gradient-to-b from-background-primary via-transparent to-background-primary z-10" />
    </div>
  );
};

const Testimonials = () => {
  const [index, setIndex] = useState(0);
  const [direction, setDirection] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      nextStep();
    }, 6000);
    return () => clearInterval(timer);
  }, [index]);

  const nextStep = () => {
    setDirection(1);
    setIndex((prev) => (prev + 1) % testimonials.length);
  };

  const prevStep = () => {
    setDirection(-1);
    setIndex((prev) => (prev - 1 + testimonials.length) % testimonials.length);
  };

  const paperVariants: Variants = {
    enter: (direction: number) => ({
      y: direction > 0 ? 500 : -500,
      opacity: 0,
      rotateX: 20,
      scale: 0.95,
      z: -150,
    }),
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      z: 0,
      transition: { duration: 0.9, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -500 : 500,
      opacity: 0,
      rotateX: -20,
      scale: 0.95,
      z: -100,
      transition: { duration: 0.6, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative h-screen w-full bg-background-primary overflow-hidden perspective-[1500px]">
      {/* Watermark Branding */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <h2 className="text-[22vw] font-black text-white select-none leading-none tracking-tighter">
          CLIENTS
        </h2>
      </div>

      {/* --- REFINED FILM STRIP LAYER --- */}
      <div className="absolute inset-0 grid grid-cols-12 gap-8 px-8 z-10 pointer-events-none">
        <div className="hidden md:block col-span-3 lg:col-span-2 h-full">
          <FilmStrip reverse={true} />
        </div>
        <div className="hidden md:block col-start-10 col-span-3 lg:col-start-11 lg:col-span-2 h-full">
          <FilmStrip reverse={false} />
        </div>
      </div>

      {/* --- FOCUSED CENTER CARD --- */}
      <div className="relative h-full w-full flex items-center justify-center z-20 pointer-events-none">
        <div className="w-full max-w-2xl px-6 pointer-events-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={paperVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="bg-background-secondary border border-white/10 rounded-[3rem] p-12 md:p-20 shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Top Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1.5 bg-gradient-to-r from-transparent via-accent-orange to-transparent opacity-60" />

              <div className="text-accent-orange text-[12rem] font-serif leading-none absolute -top-4 -left-4 opacity-5 select-none italic">
                “
              </div>

              <motion.p className="text-2xl md:text-3xl text-white font-light leading-relaxed mb-12 relative z-10 tracking-tight">
                "{testimonials[index].content}"
              </motion.p>

              <div className="flex flex-col items-center relative z-10">
                <h4 className="text-white text-3xl font-bold tracking-tighter">
                  {testimonials[index].name}
                </h4>
                <div className="flex items-center gap-3 mt-4">
                  <div className="w-8 h-[1px] bg-accent-orange/50" />
                  <p className="text-accent-orange uppercase tracking-[0.3em] text-[10px] font-bold">
                    {testimonials[index].role} <span className="text-white/20 mx-1">|</span> {testimonials[index].company}
                  </p>
                  <div className="w-8 h-[1px] bg-accent-orange/50" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* --- NAV CONTROLS --- */}
      <div className="absolute bottom-12 left-0 w-full z-40 px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">
          <button
            onClick={prevStep}
            className="group p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-md"
          >
            <span className="text-white text-xl group-hover:-translate-x-1 inline-block transition-transform">
              ←
            </span>
          </button>

          <div className="flex gap-3 items-center">
            {testimonials.map((_, i) => (
              <motion.div
                key={i}
                initial={false}
                animate={{
                  width: i === index ? 48 : 12,
                  backgroundColor: i === index ? "rgba(255, 107, 0, 1)" : "rgba(255, 255, 255, 0.1)"
                }}
                className="h-1.5 rounded-full transition-all duration-500"
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="group p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full transition-all backdrop-blur-md"
          >
            <span className="text-white text-xl group-hover:translate-x-1 inline-block transition-transform">
              →
            </span>
          </button>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;