"use client";

import Image from "next/image";
import { motion, Variants, useSpring, useMotionValue } from "framer-motion";

const Hero = () => {
  // --- PREMIUM TEXT VARIANTS ---
  const charVariants: Variants = {
    hidden: { y: "120%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { 
        duration: 1, 
        ease: [0.215, 0.61, 0.355, 1] 
      },
    },
  };

  const subtextVariants: Variants = {
    hidden: { opacity: 0, y: 15, filter: "blur(8px)" },
    visible: {
      opacity: 1,
      y: 0,
      filter: "blur(0px)",
      transition: { duration: 1.2, delay: 0.6, ease: "easeOut" },
    },
  };

  const ctaVariants: Variants = {
    hidden: { opacity: 0, y: 15 },
    visible: {
      opacity: 1,
      y: 0,
      transition: { delay: 1, duration: 0.8 }
    }
  };

  // --- MAGNETIC EFFECT ---
  const mX = useMotionValue(0);
  const mY = useMotionValue(0);
  const springX = useSpring(mX, { stiffness: 100, damping: 20 });
  const springY = useSpring(mY, { stiffness: 100, damping: 20 });

  const handleMagnetic = (e: React.MouseEvent) => {
    const { clientX, clientY, currentTarget } = e;
    const { left, top, width, height } = currentTarget.getBoundingClientRect();
    const x = (clientX - (left + width / 2)) * 0.25;
    const y = (clientY - (top + height / 2)) * 0.25;
    mX.set(x);
    mY.set(y);
  };

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden pb-[0.05em] -mb-[0.05em]">
        <motion.span variants={charVariants} className="inline-block will-change-transform">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    ));
  };

  return (
    <section className="relative min-h-screen h-[100svh] w-full overflow-hidden bg-[#0a0a0a] flex items-center pt-20 md:pt-0">
      
      {/* BACKGROUND LAYER */}
      <div className="absolute inset-0 z-0">
        <motion.div 
          initial={{ scale: 1.2, opacity: 0 }}
          whileInView={{ scale: 1, opacity: 1 }}
          viewport={{ once: false }}
          transition={{ duration: 2.5, ease: [0.16, 1, 0.3, 1] }}
          className="relative w-full h-full"
        >
          <Image 
            src="/images/hero1.avif" 
            alt="Premium Office Space" 
            fill 
            priority 
            className="object-cover brightness-[0.35] contrast-[1.1]" 
          />
        </motion.div>
        <div className="absolute inset-0 z-20 bg-gradient-to-b from-black/60 via-black/20 to-black md:bg-gradient-to-r md:from-black md:via-black/40 md:to-transparent" />
      </div>

      <div className="container relative z-30 mx-auto px-6 md:px-12 xl:px-20">
        <motion.div 
          className="max-w-5xl"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false, amount: 0.2 }}
        >
          
          <motion.h1 
            transition={{ staggerChildren: 0.015, delayChildren: 0.2 }}
            className="text-[2.75rem] leading-[1.1] md:text-8xl lg:text-[100px] font-bold tracking-tighter md:tracking-tight mb-6 md:mb-8 text-white md:leading-[0.85]"
          >
            <div className="block overflow-hidden h-fit">
              {splitText("Find Your Perfect")}
            </div>
            <div className="block overflow-hidden h-fit">
              {splitText("Office Space &")}
            </div>
            <div className="block overflow-hidden h-fit text-accent-orange">
              {splitText("Co-Working Hubs.")}
            </div>
          </motion.h1>

          <motion.p 
            variants={subtextVariants}
            className="max-w-xl text-base md:text-xl text-white/50 mb-8 md:mb-12 leading-relaxed text-balance"
          >
            Secure high-performance logistics-grade assets and agile workspaces designed for scalability. 
            <span className="block mt-4 text-[9px] md:text-[10px] uppercase tracking-[0.3em] md:tracking-[0.4em] font-black text-white/20">
              Premium Office Space • Pune, India
            </span>
          </motion.p>

          <motion.div 
            variants={ctaVariants}
            className="flex flex-col sm:flex-row gap-6 sm:gap-8 items-start sm:items-center"
          >
            <motion.a 
              href="/properties" 
              onMouseMove={handleMagnetic}
              onMouseLeave={() => { mX.set(0); mY.set(0); }}
              style={{ x: springX, y: springY }}
              className="w-full sm:w-auto bg-accent-orange text-white font-bold text-xs md:text-sm uppercase tracking-widest px-10 py-5 md:px-12 md:py-6 rounded-full shadow-2xl flex justify-center items-center group relative overflow-hidden"
            >
              <span className="relative z-10 flex items-center">
                Discover Properties
                <svg width="18" height="18" viewBox="0 0 15 15" fill="none" className="ml-3 md:ml-4 transition-transform group-hover:translate-x-2">
                    <path d="M1 7.5H14M14 7.5L8 1.5M14 7.5L8 13.5" stroke="currentColor" strokeWidth="2" />
                </svg>
              </span>
              <div className="absolute inset-0 bg-white/10 translate-y-full group-hover:translate-y-0 transition-transform duration-500" />
            </motion.a>
            
            <a href="/contact" className="w-full sm:w-auto text-center text-white/40 hover:text-white font-bold text-xs md:text-sm uppercase tracking-[0.2em] md:tracking-[0.3em] transition-all flex items-center justify-center group">
              Enquire <span className="ml-3 group-hover:translate-x-2 transition-transform">→</span>
            </a>
          </motion.div>
        </motion.div>
      </div>

      {/* Subtle Background Detail - Hidden on smallest screens */}
      <div className="absolute bottom-6 right-6 md:bottom-10 md:right-10 z-30 hidden sm:block">
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: false }}
          transition={{ delay: 1.5 }}
          className="flex gap-4 items-center"
        >
          <div className="w-8 md:w-12 h-[1px] bg-white/20" />
          <span className="text-[9px] md:text-[10px] text-white/20 uppercase tracking-[0.5em]">Global Standards</span>
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;