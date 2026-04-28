"use client";

import React, { useState, useEffect } from "react";
import { motion } from "framer-motion";
import { ShieldCheck, Activity, Award } from "lucide-react";

const TrustBar = () => {
  const [time, setTime] = useState("");

  // Real-time clock for the "Live" feel
  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString([], { 
        hour: '2-digit', 
        minute: '2-digit', 
        second: '2-digit',
        hour12: false 
      }));
    }, 1000);
    return () => clearInterval(timer);
  }, []);

  return (
    <div className="fixed bottom-6 left-1/2 -translate-x-1/2 z-[998] w-[95%] max-w-5xl pointer-events-none">
      <motion.div 
        initial={{ y: 100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ delay: 2.5, duration: 0.8, ease: "easeOut" }}
        className="pointer-events-auto bg-background-secondary/60 backdrop-blur-xl border border-white/10 rounded-2xl px-6 py-3 flex flex-wrap items-center justify-between gap-4 shadow-[0_20px_50px_rgba(0,0,0,0.5)]"
      >
        {/* Heartbeat / Live Status */}
        <div className="flex items-center gap-3 md:border-r border-white/10 md:pr-6">
          <div className="relative flex h-2.5 w-2.5">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-accent-orange opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2.5 w-2.5 bg-accent-orange"></span>
          </div>
          <div className="flex flex-col">
            <span className="text-[9px] text-white/40 uppercase tracking-widest leading-none font-bold">System Status</span>
            <span className="text-[12px] text-white font-mono flex items-center gap-1.5">
              {time} <span className="text-accent-orange font-bold text-[10px]">LIVE</span>
            </span>
          </div>
        </div>

        {/* Credentials */}
        <div className="flex items-center gap-4 md:gap-8 flex-1 justify-center">
          <div className="flex items-center gap-2">
            <ShieldCheck className="w-4 h-4 text-accent-orange shrink-0" />
            <span className="text-[10px] md:text-[11px] text-white/80 font-medium">
              MahaRERA: <span className="text-white font-bold">A52100029799</span>
            </span>
          </div>
          
          <div className="hidden sm:flex items-center gap-2">
            <Award className="w-4 h-4 text-accent-orange shrink-0" />
            <span className="text-[10px] md:text-[11px] text-white/80 font-medium tracking-tight">
              Authorized Partner: <span className="text-white font-bold italic">Godrej Properties</span>
            </span>
          </div>
        </div>

        {/* Action / Traffic - Hidden on Mobile */}
        <div className="hidden lg:flex items-center gap-3 pl-6 border-l border-white/10">
          <div className="flex flex-col items-end">
            <span className="text-[9px] text-white/40 uppercase tracking-widest leading-none font-bold">Active Queries</span>
            <span className="text-[12px] text-white font-mono flex items-center gap-2">
              <Activity className="w-3 h-3 text-green-500 animate-pulse" />
              12 Online
            </span>
          </div>
        </div>
      </motion.div>
    </div>
  );
};

export default TrustBar;