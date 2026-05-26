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
        className="flex flex-col gap-3 md:gap-8"
      >
        {duplicatedList.map((t, i) => (
          <div
            key={i}
            className="w-full aspect-[3/2] md:aspect-[4/3] bg-white/[0.03] border border-white/10 rounded-xl md:rounded-3xl p-3 md:p-6 flex flex-col justify-center backdrop-blur-sm shadow-xl"
          >
            <p className="text-[10px] md:text-[11px] text-white/60 line-clamp-3 md:line-clamp-4 leading-relaxed italic">
              "{t.content}"
            </p>
            <div className="mt-3 md:mt-4 border-t border-white/10 pt-3 md:pt-4">
              <p className="text-white text-[10px] md:text-[11px] font-bold">
                {t.name}
              </p>
              <p className="text-accent-orange text-[8px] md:text-[9px] uppercase tracking-[0.15em] md:tracking-[0.2em] font-semibold">
                {t.company}
              </p>
            </div>
          </div>
        ))}
      </motion.div>

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
      y: direction > 0 ? 400 : -400,
      opacity: 0,
      rotateX: 15,
      scale: 0.95,
    }),
    center: {
      y: 0,
      opacity: 1,
      rotateX: 0,
      scale: 1,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] },
    },
    exit: (direction: number) => ({
      y: direction > 0 ? -400 : 400,
      opacity: 0,
      rotateX: -15,
      scale: 0.95,
      transition: { duration: 0.5, ease: [0.16, 1, 0.3, 1] },
    }),
  };

  return (
    <section className="relative min-h-[85vh] md:h-screen w-full bg-background-primary overflow-hidden perspective-[1500px]">
      
      {/* Watermark */}
      <div className="absolute inset-0 flex items-center justify-center opacity-[0.03] pointer-events-none z-0">
        <h2 className="text-[22vw] font-black text-white select-none leading-none tracking-tighter">
          CLIENTS
        </h2>
      </div>

      {/* Film Strips */}
      <div className="absolute inset-0 grid grid-cols-12 gap-4 md:gap-8 px-4 md:px-8 z-10 pointer-events-none">
        <div className="hidden md:block col-span-3 lg:col-span-2 h-full">
          <FilmStrip reverse />
        </div>
        <div className="hidden md:block col-start-10 col-span-3 lg:col-start-11 lg:col-span-2 h-full">
          <FilmStrip />
        </div>
      </div>

      {/* Center Card */}
      <div className="relative h-full w-full flex items-center justify-center z-20 pointer-events-none">
        <div className="w-full max-w-xl md:max-w-2xl px-4 md:px-6 pointer-events-auto">
          <AnimatePresence initial={false} custom={direction} mode="wait">
            <motion.div
              key={index}
              custom={direction}
              variants={paperVariants}
              initial="enter"
              animate="center"
              exit="exit"
              style={{ transformStyle: "preserve-3d" }}
              className="bg-background-secondary border border-white/10 rounded-2xl md:rounded-[3rem] p-6 sm:p-8 md:p-20 shadow-[0_40px_80px_-20px_rgba(0,0,0,1)] md:shadow-[0_60px_120px_-20px_rgba(0,0,0,1)] flex flex-col items-center text-center relative overflow-hidden"
            >
              {/* Accent Line */}
              <div className="absolute top-0 left-0 w-full h-1 bg-gradient-to-r from-transparent via-accent-orange to-transparent opacity-60" />

              {/* Quote Symbol */}
              <div className="text-accent-orange text-[5rem] md:text-[12rem] font-serif absolute -top-2 -left-2 opacity-5 italic">
                “
              </div>

              {/* Content */}
              <motion.p className="text-base sm:text-lg md:text-3xl text-white font-light leading-relaxed mb-6 md:mb-12 tracking-tight">
                "{testimonials[index].content}"
              </motion.p>

              {/* Author */}
              <div className="flex flex-col items-center">
                <h4 className="text-white text-lg sm:text-xl md:text-3xl font-bold tracking-tight md:tracking-tighter">
                  {testimonials[index].name}
                </h4>

                <div className="flex items-center gap-2 md:gap-3 mt-3 md:mt-4">
                  <div className="w-6 md:w-8 h-[1px] bg-accent-orange/50" />
                  <p className="text-accent-orange uppercase tracking-[0.2em] md:tracking-[0.3em] text-[8px] md:text-[10px] font-bold">
                    {testimonials[index].role}
                    <span className="text-white/20 mx-1">|</span>
                    {testimonials[index].company}
                  </p>
                  <div className="w-6 md:w-8 h-[1px] bg-accent-orange/50" />
                </div>
              </div>
            </motion.div>
          </AnimatePresence>
        </div>
      </div>

      {/* Navigation */}
      <div className="absolute bottom-6 md:bottom-12 left-0 w-full z-40 px-4 md:px-10">
        <div className="max-w-7xl mx-auto flex items-center justify-between">

          <button
            onClick={prevStep}
            className="group p-2.5 md:p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="text-sm md:text-xl group-hover:-translate-x-1 inline-block transition-transform">
              ←
            </span>
          </button>

          <div className="flex gap-2 md:gap-3 items-center">
            {testimonials.map((_, i) => (
              <motion.div
                key={i}
                animate={{
                  width: i === index ? 36 : 10,
                  backgroundColor:
                    i === index
                      ? "rgba(255, 107, 0, 1)"
                      : "rgba(255, 255, 255, 0.1)",
                }}
                className="h-1 md:h-1.5 rounded-full transition-all duration-500"
              />
            ))}
          </div>

          <button
            onClick={nextStep}
            className="group p-2.5 md:p-5 bg-white/5 hover:bg-white/10 border border-white/10 rounded-full backdrop-blur-md"
          >
            <span className="text-sm md:text-xl group-hover:translate-x-1 inline-block transition-transform">
              →
            </span>
          </button>

        </div>
      </div>
    </section>
  );
};

export default Testimonials;