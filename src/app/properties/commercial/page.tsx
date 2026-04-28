"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Building, 
  TrendingUp, 
  Landmark, 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  BarChart3 
} from "lucide-react";

const CommercialProperties = () => {
  const categories = [
    {
      title: "Grade-A Office Spaces",
      desc: "Premium corporate suites in IT Parks and Business Hubs like Cerebrum and Panchshil.",
      roi: "8-10% Yield",
      icon: <Building className="w-6 h-6" />
    },
    {
      title: "Showrooms & Retail",
      desc: "High-visibility ground floor spaces in prime commercial corridors.",
      roi: "High Footfall",
      icon: <Landmark className="w-6 h-6" />
    },
    {
      title: "Pre-Leased Assets",
      desc: "Immediate ROI with stable multinational tenants already in place.",
      roi: "Fixed Returns",
      icon: <TrendingUp className="w-6 h-6" />
    }
  ];

  const locations = [
    "Kalyani Nagar",
    "Viman Nagar",
    "Kharadi (IT Hub)",
    "Bund Garden Road",
    "Baner-Balewadi High Street"
  ];

  return (
    <main className="bg-background-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <motion.div 
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            className="max-w-4xl"
          >
            <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              Commercial Real Estate Portfolio
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tightest mb-6 uppercase">
              Premium <span className="text-accent-orange">Assets</span>. <br />
              Strategic Growth.
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-8 max-w-2xl">
              RealtyWorks connects businesses and investors with Pune's most coveted commercial addresses. 
              Specializing in Grade-A office acquisitions and high-yield retail spaces.
            </p>
          </motion.div>
        </div>
        {/* Abstract Background Grid */}
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
      </section>

      {/* Categories Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {categories.map((cat, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className="p-10 rounded-3xl bg-background-secondary border border-white/5 hover:border-accent-orange/50 transition-all group"
              >
                <div className="w-14 h-14 bg-accent-orange/10 rounded-2xl flex items-center justify-center text-accent-orange mb-8 group-hover:bg-accent-orange group-hover:text-white transition-all">
                  {cat.icon}
                </div>
                <h3 className="text-2xl font-bold mb-4 uppercase tracking-tight">{cat.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed mb-6">
                  {cat.desc}
                </p>
                <div className="flex items-center gap-2 text-accent-orange font-bold text-xs uppercase tracking-widest">
                  <BarChart3 className="w-4 h-4" />
                  {cat.roi}
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Focus Locations - "Fold Dense" List */}
      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Primary Investment Corridors</h2>
              <p className="text-foreground-secondary text-sm leading-relaxed mb-8">
                We monitor high-growth zones in East Pune to provide our clients with first-mover advantages 
                in upcoming commercial developments.
              </p>
              <div className="flex flex-wrap gap-3">
                {locations.map((loc, i) => (
                  <span key={i} className="px-5 py-2 rounded-full border border-white/10 text-[10px] font-bold uppercase tracking-widest text-white/60">
                    {loc}
                  </span>
                ))}
              </div>
            </div>
            
            <div className="w-full lg:w-auto">
              <Link 
                href="/contact" 
                className="group flex items-center gap-6 p-8 rounded-3xl bg-accent-orange text-white hover:brightness-110 transition-all shadow-[0_30px_60px_rgba(255,107,0,0.2)]"
              >
                <div className="text-left">
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-1">Inquiry for Q2 2026</p>
                  <p className="text-xl font-bold uppercase">Get Investment Portfolio</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Insight Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="relative rounded-[40px] overflow-hidden bg-background-secondary border border-white/5 p-12 lg:p-20">
            <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
              <div>
                <h2 className="text-3xl lg:text-5xl font-bold mb-8 uppercase leading-[1.1]">
                  Why Commercial <br /> 
                  <span className="text-accent-orange">Acquisition</span>?
                </h2>
                <ul className="space-y-6">
                  <li className="flex items-start gap-4">
                    <ShieldCheck className="w-6 h-6 text-accent-orange flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">MahaRERA Compliant</p>
                      <p className="text-sm text-foreground-secondary italic">Full due diligence on every project we represent.</p>
                    </div>
                  </li>
                  <li className="flex items-start gap-4">
                    <MapPin className="w-6 h-6 text-accent-orange flex-shrink-0" />
                    <div>
                      <p className="font-bold text-lg">Micro-Market Expertise</p>
                      <p className="text-sm text-foreground-secondary italic">Deep data on Kalyani Nagar and Kharadi rental yields.</p>
                    </div>
                  </li>
                </ul>
              </div>
              <div className="relative aspect-video rounded-2xl overflow-hidden opacity-40 grayscale group hover:grayscale-0 hover:opacity-100 transition-all duration-700">
                 <Image 
                  src="/logo.avif" 
                  alt="Pune Commercial Real Estate" 
                  fill 
                  className="object-contain p-12"
                />
              </div>
            </div>
            {/* Ambient Background Glow */}
            <div className="absolute -bottom-24 -right-24 w-96 h-96 bg-accent-orange/10 blur-[100px] rounded-full" />
          </div>
        </div>
      </section>
    </main>
  );
};

export default CommercialProperties;