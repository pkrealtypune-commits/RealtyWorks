"use client";

import { motion, Variants } from "framer-motion";

const FloatingContact = () => {
  // Updated constants for RealtyWorks
  const phoneNumber = "+919765464333"; 
  const whatsappMessage = "Hello RealtyWorks! I'm interested in office spaces/managed solutions in Pune.";
  const ctaLine = "Kalyani Nagar Office Specialists";

  // --- MOTION VARIANTS ---

  const charVariants: Variants = {
    hidden: { y: "110%", opacity: 0 },
    visible: {
      y: "0%",
      opacity: 1,
      transition: { 
        duration: 0.8, 
        ease: [0.215, 0.61, 0.355, 1] 
      },
    },
  };

  const buttonVariants: Variants = {
    hidden: { scale: 0, opacity: 0, y: 40 },
    visible: {
      scale: 1,
      opacity: 1,
      y: 0,
      transition: { 
        type: "spring", 
        stiffness: 260, 
        damping: 18,
        delay: 2.2 
      },
    },
    hover: { 
      scale: 1.1,
      y: -8,
      transition: { duration: 0.3, ease: "easeOut" } 
    },
    tap: { scale: 0.95 }
  };

  const splitText = (text: string) => {
    return text.split("").map((char, index) => (
      <span key={index} className="inline-block overflow-hidden pb-[0.1em] -mb-[0.1em]">
        <motion.span variants={charVariants} className="inline-block will-change-transform">
          {char === " " ? "\u00A0" : char}
        </motion.span>
      </span>
    ));
  };

  return (
    /* Lifting to bottom-28 to stay clear of the TrustBar (bottom-6).
       z-[999] ensures tooltips are always on top.
    */
    <div className="fixed bottom-28 left-6 right-6 z-[999] pointer-events-none flex items-end justify-between">
      
      {/* 1. LEFT SIDE - Calling Button */}
      <motion.a
        href={`tel:${phoneNumber}`}
        initial="hidden"
        whileInView="visible"
        viewport={{ once: false }}
        variants={buttonVariants}
        whileHover="hover"
        whileTap="tap"
        className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-accent-orange text-white rounded-full shadow-[0_15px_35px_rgba(255,107,0,0.3)]"
        aria-label="Call Now"
      >
        <svg viewBox="0 0 24 24" className="w-6 h-6 md:w-7 md:h-7 fill-current">
          <path d="M6.62 10.79c1.44 2.83 3.76 5.14 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1-9.39 0-17-7.61-17-17 0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"/>
        </svg>
        
        {/* Premium Tooltip */}
        <span className="absolute left-full ml-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-black/5 whitespace-nowrap">
          Call Specialist
        </span>
      </motion.a>

      {/* 2. RIGHT SIDE - WhatsApp with Bouncy Text */}
      <div className="flex flex-col gap-3 items-end">
        
        {/* Animated CTA Line */}
        <motion.div 
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          transition={{ staggerChildren: 0.015, delayChildren: 2.4 }}
          className="mr-1 hidden sm:block text-[10px] md:text-[11px] font-bold text-white tracking-[0.15em] uppercase pb-1 opacity-80 text-right drop-shadow-md"
        >
          {splitText(ctaLine)}
        </motion.div>

        {/* WhatsApp Button */}
        <motion.a
          href={`https://wa.me/${phoneNumber.replace('+', '')}?text=${encodeURIComponent(whatsappMessage)}`}
          target="_blank"
          rel="noopener noreferrer"
          initial="hidden"
          whileInView="visible"
          viewport={{ once: false }}
          variants={buttonVariants}
          whileHover="hover"
          whileTap="tap"
          className="pointer-events-auto relative group flex items-center justify-center w-14 h-14 md:w-16 md:h-16 bg-[#25D366] text-white rounded-full shadow-[0_15px_35px_rgba(37,211,102,0.3)]"
          aria-label="WhatsApp"
        >
          <svg viewBox="0 0 24 24" className="w-7 h-7 md:w-8 md:h-8 fill-current relative z-10">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>

          {/* Pulse Ripple */}
          <span className="absolute inset-0 rounded-full bg-[#25D366] animate-ping opacity-20 pointer-events-none scale-150" />
          
          {/* Tooltip */}
          <span className="absolute right-full mr-4 top-1/2 -translate-y-1/2 px-3 py-1.5 bg-white text-black text-[9px] font-black uppercase tracking-[0.2em] rounded-md opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none shadow-2xl border border-black/5 whitespace-nowrap">
            Chat Online
          </span>
        </motion.a>
      </div>
    </div>
  );
};

export default FloatingContact;