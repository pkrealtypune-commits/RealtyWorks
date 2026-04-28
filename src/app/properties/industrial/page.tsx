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
  HardHat
} from "lucide-react";

const IndustrialPage = () => {
  const specs = [
    { icon: <Maximize className="w-5 h-5" />, label: "Apex Height", value: "30 - 45 Ft." },
    { icon: <Zap className="w-5 h-5" />, label: "Power Load", value: "Up to 500 HP" },
    { icon: <Container className="w-5 h-5" />, label: "Floor Load", value: "5 - 8 Tons/Sqm" },
    { icon: <Truck className="w-5 h-5" />, label: "Docking", value: "Hydraulic Docks" },
  ];

  const subSectors = [
    {
      title: "Built-to-Suit (BTS)",
      desc: "Custom-constructed warehouses tailored to your specific supply chain workflow.",
      image: "/industrial/bts.jpg"
    },
    {
      title: "Manufacturing Units",
      desc: "Ready-to-move sheds with heavy power connectivity and EOT crane provisions.",
      image: "/industrial/manufacturing.jpg"
    },
    {
      title: "Industrial Land",
      desc: "Strategic NA/MIDC plots for large-scale industrial development in Pune.",
      image: "/industrial/land.jpg"
    }
  ];

  return (
    <main className="bg-background-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <div className="max-w-4xl">
            <motion.div
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
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
                <div key={i} className="flex flex-col items-center justify-center py-6 px-4 rounded-[1.5rem] bg-background-primary/40 border border-white/5 group hover:border-accent-orange/30 transition-all">
                  <div className="text-accent-orange mb-3 group-hover:scale-110 transition-transform">{spec.icon}</div>
                  <span className="text-[9px] uppercase font-black tracking-widest text-white/40 mb-1">{spec.label}</span>
                  <span className="text-sm font-bold">{spec.value}</span>
                </div>
              ))}
            </div>
          </div>
        </div>
        
        {/* Background Grayscale Industrial Image Placeholder */}
        <div className="absolute top-0 right-0 w-1/2 h-full opacity-10 pointer-events-none grayscale">
           <Image src="/logo.avif" alt="Industrial" fill className="object-contain p-20" />
        </div>
      </section>

      {/* Industrial Hubs Strip */}
      <section className="py-8 bg-accent-orange">
        <div className="container mx-auto px-6 flex flex-wrap justify-center gap-8 md:gap-16">
          {["CHAKAN MIDC", "TALEGAON", "SHIKRAPUR", "LONI KALBHOR", "RANJANGAON"].map((hub) => (
            <span key={hub} className="text-white font-black italic tracking-tighter text-xl md:text-2xl opacity-80 uppercase">
              {hub}
            </span>
          ))}
        </div>
      </section>

      {/* Solutions Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end mb-16 gap-6">
            <div className="max-w-2xl">
              <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Specialized Solutions</h2>
              <p className="text-foreground-secondary text-sm">We provide end-to-end industrial consulting, from land acquisition to turnkey shed construction.</p>
            </div>
            <Link href="/contact" className="text-accent-orange font-bold uppercase tracking-widest text-xs flex items-center gap-2 hover:gap-4 transition-all">
              Download Industrial Portfolio <ChevronRight className="w-4 h-4" />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {subSectors.map((item, i) => (
              <div key={i} className="group cursor-pointer">
                <div className="relative aspect-[4/5] rounded-[2.5rem] overflow-hidden border border-white/5 mb-6">
                  <Image 
                    src="/logo.avif" 
                    alt={item.title} 
                    fill 
                    className="object-contain p-16 opacity-10 grayscale group-hover:scale-110 transition-transform duration-700" 
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
                  <div className="absolute bottom-8 left-8 right-8">
                    <h3 className="text-2xl font-bold uppercase mb-2">{item.title}</h3>
                    <p className="text-sm text-foreground-secondary opacity-0 group-hover:opacity-100 transition-opacity duration-500">
                      {item.desc}
                    </p>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Trust & Safety Section */}
      <section className="py-24 bg-background-secondary/30">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div className="space-y-10">
              <div className="flex gap-6">
                <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange flex-shrink-0">
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
                <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange flex-shrink-0">
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
              <div className="relative z-10">
                <h3 className="text-2xl font-bold mb-6 uppercase">Need a specific <br /> <span className="text-accent-orange">Shed</span> size?</h3>
                <p className="text-sm text-foreground-secondary mb-8">
                  From 5,000 sq.ft. to 5,00,000 sq.ft., we have a database of ready-to-move 
                  industrial assets in Chakan and Talegaon MIDC.
                </p>
                <Link href="/contact" className="inline-block bg-accent-orange text-white px-10 py-4 rounded-full font-bold uppercase tracking-widest text-[10px] hover:brightness-110 transition-all">
                  Get Current Availability
                </Link>
              </div>
              <Factory className="absolute -bottom-10 -right-10 w-64 h-64 text-white/5 -rotate-12 group-hover:rotate-0 transition-transform duration-700" />
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default IndustrialPage;