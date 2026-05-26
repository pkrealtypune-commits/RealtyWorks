"use client";

import React from "react";
import { motion, Variants } from "framer-motion";
import Link from "next/link";
import { ArrowUpRight } from "lucide-react";

export default function LifeAtRealty() {
  const videoSrc = "https://media-amura.sgp1.cdn.digitaloceanspaces.com/assets/videos/Life_Amura.mp4";
  const posterSrc = "https://media-amura.sgp1.cdn.digitaloceanspaces.com/assets/images/homepage/Life-AtAmura.webp";

  const containerVariants: Variants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.2, delayChildren: 0.1 }
    }
  };

  const itemVariants: Variants = {
    hidden: { opacity: 0, y: 30 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { duration: 0.8, ease: [0.16, 1, 0.3, 1] as const }
    }
  };

  return (
    <motion.section
      initial="hidden"
      whileInView="visible"
      viewport={{ once: true, margin: "-100px" }}
      variants={containerVariants}
      className="relative w-full py-20 md:py-24 bg-neutral-950 overflow-hidden text-white flex items-center justify-center"
    >
      {/* Ambient Glow */}
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-orange-600/[0.03] blur-[150px] rounded-full pointer-events-none" />
      <div className="absolute top-1/3 right-1/4 -translate-y-1/2 w-[400px] h-[400px] bg-neutral-800/[0.1] blur-[130px] rounded-full pointer-events-none" />

      <div className="max-w-7xl w-full mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* LEFT */}
          <div className="lg:col-span-6 w-full">
            <motion.div
              variants={itemVariants}
              className="relative rounded-[32px] overflow-hidden bg-neutral-900 border border-neutral-800/80 aspect-[4/3] md:aspect-[16/10] lg:aspect-[1/1.1] flex items-center justify-center group shadow-2xl hover:scale-[1.02] transition-all duration-700 ease-out"
            >
              {/* Video */}
              <video
                className="absolute inset-0 w-full h-full object-cover scale-105 group-hover:scale-100 transition-transform duration-1000 ease-out opacity-30 group-hover:opacity-40"
                autoPlay
                muted
                loop
                playsInline
                preload="none"
                poster={posterSrc}
              >
                <source src={videoSrc} type="video/mp4" />
              </video>

              {/* Overlay */}
              <div className="absolute inset-0 bg-gradient-to-br from-neutral-950/80 via-neutral-950/50 to-neutral-950/90" />

              {/* TEXT */}
              {/* Added responsive padding and max-width configuration to prevent edge bleeding */}
              <div className="relative z-10 px-6 py-8 sm:px-10 sm:py-12 md:px-12 md:py-14 w-full text-left overflow-visible box-border">
                {/* Scaled down font-sizes safely and fixed leading to avoid clipping */}
                <h2 className="text-4xl sm:text-5xl md:text-6xl lg:text-5xl xl:text-6xl font-black tracking-tight uppercase leading-none text-transparent bg-clip-text bg-gradient-to-b from-white via-neutral-100 to-neutral-400 break-words">
                  <span className="block">Strategic</span>
                  <span className="block text-orange-500 font-extrabold normal-case mt-1 md:mt-2">
                    Workspaces.
                  </span>
                </h2>
              </div>

              {/* Label */}
              <div className="absolute top-6 left-6 font-mono text-[10px] uppercase tracking-widest text-neutral-500">
                // About Realty Works
              </div>
            </motion.div>
          </div>

          {/* RIGHT */}
          <div className="lg:col-span-6 flex flex-col justify-center h-full lg:pl-6 w-full">
            <motion.div variants={itemVariants} className="w-full flex flex-col space-y-8">

              {/* Video Card */}
              <div className="relative w-full aspect-[16/10] rounded-[24px] overflow-hidden border border-neutral-800 bg-neutral-900 shadow-xl group/video">
                <video
                  className="w-full h-full object-cover transition-transform duration-700 ease-out group-hover/video:scale-[1.02]"
                  autoPlay
                  muted
                  loop
                  playsInline
                  preload="none"
                  poster={posterSrc}
                >
                  <source src={videoSrc} type="video/mp4" />
                </video>

                <div className="absolute inset-0 bg-neutral-950/30 group-hover/video:bg-transparent transition duration-500" />

                <div className="absolute bottom-4 left-4 z-30 flex items-center gap-2.5 bg-neutral-950/80 backdrop-blur-md px-4 py-2 rounded-full border border-neutral-800">
                  <span className="w-1.5 h-1.5 rounded-full bg-orange-500 animate-pulse" />
                  <span className="text-white font-mono text-[9px] uppercase tracking-[0.2em]">
                    Kalyani Nagar, Pune
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="space-y-6 max-w-xl">
                <h3 className="text-lg md:text-2xl font-light tracking-tight text-neutral-300 leading-relaxed">
                  Specializing in <span className="text-white font-medium">managed office solutions</span> in Pune, we provide the infrastructure so you can focus on scaling.
                </h3>

                <div className="grid grid-cols-2 gap-3 border-y border-neutral-900 py-4 text-sm text-neutral-400">
                  {["Strategic Locations", "Flexible Suites", "Startup Friendly", "Managed Services"].map((item, i) => (
                    <div key={i} className="flex items-center gap-2">
                      <div className="w-1 h-1 rounded-full bg-orange-500" />
                      <span>{item}</span>
                    </div>
                  ))}
                </div>

                {/* CTA */}
                <div className="flex flex-wrap items-center gap-6 pt-2">
                  <Link
                    href="/careers/"
                    className="inline-flex items-center gap-3 bg-white hover:bg-orange-500 text-neutral-950 hover:text-white px-6 py-3 rounded-full font-medium transition-all duration-300 group"
                  >
                    <span className="uppercase text-xs tracking-wider font-semibold">
                      Join Us
                    </span>
                    <div className="w-5 h-5 rounded-full bg-neutral-950 group-hover:bg-white text-white group-hover:text-orange-500 flex items-center justify-center transition">
                      <ArrowUpRight className="w-3 h-3 group-hover:rotate-45 transition" />
                    </div>
                  </Link>

                  <div className="flex items-center gap-6 text-xs border-l border-neutral-800 pl-6">
                    <div>
                      <p className="text-neutral-500 text-[9px] uppercase">Call</p>
                      <a href="tel:+919765464333" className="text-neutral-300 hover:text-orange-500 text-sm font-medium">
                        +91 97654 64333
                      </a>
                    </div>
                    <div>
                      <p className="text-neutral-500 text-[9px] uppercase">Email</p>
                      <a href="mailto:contact@realtyworks.co.in" className="text-neutral-300 hover:text-orange-500 text-sm font-medium">
                        contact@realtyworks.co.in
                      </a>
                    </div>
                  </div>
                </div>

              </div>
            </motion.div>
          </div>

        </div>
      </div>
    </motion.section>
  );
}