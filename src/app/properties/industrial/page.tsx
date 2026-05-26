"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Factory, 
  Container, 
  Zap, 
  Truck, 
  Maximize, 
  ShieldAlert, 
  ChevronRight,
  HardHat,
  MapPin,
  BarChart3
} from "lucide-react";
import { allProperties } from "@/data/allproperties";

const IndustrialPage = () => {
  // Filter only industrial properties
  const industrialProperties = allProperties.filter(
    (item) => item.category?.toLowerCase() === "industrial"
  );

  const specs = [
    { icon: <Maximize className="w-5 h-5" />, label: "Apex Height", value: "30 - 45 Ft." },
    { icon: <Zap className="w-5 h-5" />, label: "Power Load", value: "Up to 500 HP" },
    { icon: <Container className="w-5 h-5" />, label: "Floor Load", value: "5 - 8 Tons/Sqm" },
    { icon: <Truck className="w-5 h-5" />, label: "Docking", value: "Hydraulic Docks" },
  ];

  return (
    <main className="bg-background-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div initial={{ opacity: 0, x: -20 }} animate={{ opacity: 1, x: 0 }}>
              <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Industrial & Logistics Division
              </span>
              <h1 className="text-4xl md:text-7xl font-bold tracking-tightest mb-6 uppercase">
                Heavy-Duty <br /> 
                <span className="text-accent-orange">Infrastructure</span>.
              </h1>
              <p className="text-foreground-secondary text-lg leading-relaxed mb-8 max-w-2xl">
                RealtyWorks is a leader in industrial real estate, providing specialized 
                warehousing and manufacturing sheds across Pune’s primary industrial belts.
              </p>
            </motion.div>

            {/* Quick Spec Bar */}
            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mt-12 p-2 bg-background-secondary/50 rounded-[2rem] border border-white/5 backdrop-blur-md">
              {specs.map((spec, i) => (
                <div key={i} className="flex flex-col items-center justify-center py-6 px-4 rounded-[1.5rem] bg-background-primary/40 border border-white/5">
                  <div className="text-accent-orange mb-3">{spec.icon}</div>
                  <span className="text-[9px] uppercase font-black tracking-widest text-white/40 mb-1">{spec.label}</span>
                  <span className="text-sm font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Industrial Properties Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <h2 className="text-3xl font-bold uppercase tracking-tighter mb-12">Available Assets</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {industrialProperties.map((item, i) => (
              <motion.div 
                key={item.id || i}
                whileHover={{ y: -10 }}
                className="rounded-3xl bg-background-secondary border border-white/5 hover:border-accent-orange/50 transition-all group overflow-hidden flex flex-col h-full"
              >
                <div className="relative w-full h-48 bg-neutral-900 overflow-hidden">
                  <Image 
                    src={item.image} 
                    alt={item.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-accent-orange border border-white/10">
                    {item.transaction}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange">
                      <Factory className="w-6 h-6" />
                    </div>
                    <span className="text-white/40 text-xs font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-orange" /> {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight text-white">{item.title}</h3>
                  <p className="text-white/60 text-xs font-semibold mb-3 tracking-wide">{item.name} • {item.size}</p>
                  <p className="text-foreground-secondary text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">{item.description}</p>
                  
                  <div className="flex items-center gap-2 text-accent-orange font-bold text-xs uppercase tracking-widest border-t border-white/5 pt-4 mt-auto">
                    <BarChart3 className="w-4 h-4" />
                    {item.roi}
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Compliance Section */}
      <section className="py-24 bg-background-secondary/30">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange">
                  <ShieldAlert className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">Compliance & Approvals</h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    We exclusively handle properties with clear titles, non-agricultural (NA) permissions, 
                    and Fire/Pollution Board (MPCB) compliance.
                  </p>
                </div>
              </div>
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange">
                  <HardHat className="w-6 h-6" />
                </div>
                <div>
                  <h4 className="text-xl font-bold uppercase mb-2 tracking-tight">Technical Advisory</h4>
                  <p className="text-sm text-foreground-secondary leading-relaxed">
                    Our team provides technical site assessments, checking for soil stability, 
                    HT power line proximity, and logistical accessibility.
                  </p>
                </div>
              </div>
            </div>

            <div className="p-10 rounded-[3rem] bg-background-primary border border-white/5 relative overflow-hidden group">
              <h3 className="text-2xl font-bold mb-6 uppercase">Need a specific <br /> <span className="text-accent-orange">Shed</span> size?</h3>
              <p className="text-sm text-foreground-secondary mb-8">
                From 5,000 sq.ft. to 5,00,000 sq.ft., we have a database of ready-to-move 
                industrial assets in Chakan and Talegaon MIDC.
              </p>
              <Link href="/contact" className="inline-block bg-accent-orange text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px]">
                Get Current Availability
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustrialPage;