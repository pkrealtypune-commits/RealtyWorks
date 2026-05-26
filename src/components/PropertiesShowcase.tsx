"use client";

import Link from "next/link";
import { useState, useEffect, useRef } from "react";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { properties } from "@/data/properties";

export default function PropertiesShowcase() {
  const [index, setIndex] = useState(0);
  const containerRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const interval = setInterval(() => {
      setIndex((prev) => (prev === properties.length - 1 ? 0 : prev + 1));
    }, 4500);
    return () => clearInterval(interval);
  }, []);

  return (
    <section
      ref={containerRef}
      className="relative w-full min-h-screen flex items-center justify-center py-16 md:py-24 overflow-hidden select-none bg-[#0a0a0c] text-white"
      style={{ fontFamily: "'Inter', sans-serif" }}
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/3 left-1/4 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-amber-500/5 rounded-full blur-[130px] pointer-events-none mix-blend-screen" />
      <div className="absolute bottom-1/4 right-1/4 translate-x-1/2 translate-y-1/2 w-[450px] h-[450px] bg-zinc-500/5 rounded-full blur-[110px] pointer-events-none mix-blend-screen" />

      <div className="w-full max-w-[1340px] mx-auto px-4 sm:px-6 md:px-12 lg:px-16 flex flex-col justify-center space-y-10 md:space-y-6">

        {/* ROW 1 */}
        <div className="flex flex-col lg:flex-row items-start lg:items-end gap-6 lg:gap-8 w-full">

          {/* TEXT */}
          <div className="flex flex-col items-start space-y-2 max-w-xl">
            <span className="text-[11px] font-extrabold tracking-[0.4em] uppercase text-zinc-500 block pl-1">
              {properties[index].status || "Featured Collection"}
            </span>

            <h1 className="text-4xl sm:text-6xl md:text-7xl font-black tracking-tighter leading-none uppercase">
              <span className="block text-zinc-400 font-light tracking-tight normal-case text-2xl sm:text-3xl md:text-4xl mb-1">
                Discover Premium
              </span>

              <div className="overflow-hidden h-[1.15em] relative min-w-[300px] sm:min-w-[450px]">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={`title-${index}`}
                    initial={{ y: "90%", opacity: 0 }}
                    animate={{ y: "0%", opacity: 1 }}
                    exit={{ y: "-90%", opacity: 0 }}
                    transition={{ duration: 0.55, ease: [0.16, 1, 0.3, 1] }}
                    className="absolute left-0 top-0 block bg-gradient-to-r from-white via-zinc-200 to-zinc-500 bg-clip-text text-transparent"
                  >
                    {properties[index].title.split(" ")[0] || "Asset"}
                  </motion.span>
                </AnimatePresence>
              </div>
            </h1>
          </div>

          {/* ✅ FIXED IMG-1 */}
          <div className="relative w-full block min-h-[220px] sm:min-h-[280px] md:min-h-[320px] h-[220px] sm:h-[280px] md:h-[320px] rounded-3xl overflow-hidden border border-zinc-800/60 shadow-2xl bg-[#121215]">
            <AnimatePresence mode="wait">
              <motion.div
                key={`img1-${index}`}
                initial={{ opacity: 0, scale: 1.08 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.8, ease: [0.16, 1, 0.3, 1] }}
                className="absolute inset-0 w-full h-full"
              >
                <Image
                  src={properties[index].image}
                  alt={properties[index].title}
                  fill
                  sizes="(max-width: 768px) 100vw, 50vw"
                  priority
                  className="object-cover brightness-[0.75] contrast-[1.05] transition-transform duration-700"
                />
              </motion.div>
            </AnimatePresence>

            <div className="absolute bottom-4 left-5 z-20 bg-black/70 backdrop-blur-md px-4 py-1.5 rounded-full border border-white/5 shadow-xl flex items-center gap-2">
              <span className="w-1.5 h-1.5 rounded-full bg-amber-500 animate-pulse" />
              <span className="text-[10px] font-bold tracking-widest text-zinc-300 uppercase">
                LOC: {properties[index].location}
              </span>
            </div>
          </div>

        </div>

        {/* ROW 2 (UNCHANGED DESKTOP LOGIC) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-6 items-stretch w-full">

          <div className="lg:col-span-8 flex flex-col sm:flex-row items-start sm:items-center gap-6 bg-[#111114]/60 border border-zinc-800/50 p-6 sm:p-8 rounded-[32px] backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 w-32 h-32 bg-white/[0.01] rounded-full translate-x-10 -translate-y-10 group-hover:scale-110 transition-transform duration-700" />

            <div className="flex flex-col justify-center">
              <h2 className="text-5xl sm:text-6xl font-black tracking-tighter text-zinc-800 uppercase">
                SPEC
              </h2>
            </div>

            <div className="flex-1 space-y-4 w-full border-t sm:border-t-0 sm:border-l border-zinc-800/80 pt-4 sm:pt-0 sm:pl-8">
              <div className="text-sm sm:text-base text-zinc-400 font-light leading-relaxed max-w-md">
                Experience unparalleled refinement. A meticulously curated portfolio built exclusively for elite asset requirements.
              </div>

              <div className="flex flex-wrap gap-6 pt-1">
                <div className="flex flex-col">
                  <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Full Identity</span>
                  <div className="h-6 overflow-hidden relative min-w-[150px]">
                    <AnimatePresence mode="wait">
                      <motion.span
                        key={`text-title-${index}`}
                        className="absolute text-white font-medium text-sm sm:text-base whitespace-nowrap"
                      >
                        {properties[index].title}
                      </motion.span>
                    </AnimatePresence>
                  </div>
                </div>

                {properties[index].size && (
                  <div className="flex flex-col">
                    <span className="text-[10px] text-zinc-500 font-bold uppercase tracking-wider">Inventory Config</span>
                    <div className="h-6 overflow-hidden relative min-w-[120px]">
                      <AnimatePresence mode="wait">
                        <motion.span className="absolute text-zinc-300 font-light text-sm sm:text-base">
                          {properties[index].size}
                        </motion.span>
                      </AnimatePresence>
                    </div>
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* IMG-2 (UNCHANGED) */}
          <div className="lg:col-span-4 flex flex-row lg:flex-col gap-4 w-full">
            <div className="relative flex-1 h-[120px] lg:h-auto rounded-2xl overflow-hidden border border-zinc-800/80 bg-[#121215]">
              <Image
                src={properties[index].image}
                alt="Secondary thumbnail viewport"
                fill
                className="object-cover brightness-[0.35] grayscale contrast-[1.1]"
              />
            </div>

            <div className="flex flex-col justify-end p-2 min-w-[140px]">
              <h3 className="text-xl sm:text-2xl lg:text-3xl font-black tracking-tight uppercase leading-none text-zinc-200">
                Architectural <span className="text-amber-500 block lg:mt-1">Pinnacle</span>
              </h3>
            </div>
          </div>

        </div>

        {/* CTA */}
        <div className="pt-8 flex flex-col sm:flex-row items-center justify-between gap-6 w-full border-t border-zinc-800/50">
          <div className="flex gap-2.5">
            {properties.map((_, i) => (
              <button
                key={i}
                onClick={() => setIndex(i)}
                className="h-1.5 rounded-full transition-all duration-500 relative bg-zinc-800 overflow-hidden"
                style={{ width: i === index ? "36px" : "8px" }}
              />
            ))}
          </div>

          <Link
            href="/contact"
            className="flex-1 sm:flex-initial inline-flex items-center justify-center bg-white text-black px-6 md:px-8 py-3.5 rounded-full font-bold text-[11px] uppercase tracking-widest"
          >
            Enquire Now
          </Link>
        </div>

      </div>
    </section>
  );
}