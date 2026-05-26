"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Home, 
  TrendingUp, 
  Building2, 
  ShieldCheck, 
  ChevronRight, 
  MapPin, 
  BarChart3 
} from "lucide-react";
import { allProperties } from "@/data/allproperties";

const ResidentialProperties = () => {
  // Filters properties specifically for the Residential category
  const residentialProperties = allProperties.filter(
    (item) => item.category?.toLowerCase() === "residential"
  );

  // Extracts unique locations for the filter section
  const locations = Array.from(
    new Set(residentialProperties.map((prop) => prop.location).filter(Boolean))
  );

  // Icon mapping for different types of residential units
  const getCategoryIcon = (type: string) => {
    switch (type?.toLowerCase()) {
      case "villa":
        return <Home className="w-6 h-6" />;
      case "residential":
      default:
        return <Building2 className="w-6 h-6" />;
    }
  };

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
              Residential Portfolio
            </span>
            <h1 className="text-4xl md:text-7xl font-bold tracking-tightest mb-6 uppercase">
              Elite <span className="text-accent-orange">Living</span>. <br />
              Timeless Spaces.
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-8 max-w-2xl">
              Discover curated luxury residences across Pune's most desirable neighborhoods. 
              From high-rise riverfront apartments to exclusive villas, find your next home with RealtyWorks.
            </p>
          </motion.div>
        </div>
        <div className="absolute inset-0 bg-[url('/grid.svg')] bg-center [mask-image:linear-gradient(180deg,white,rgba(255,255,255,0))] opacity-10 pointer-events-none" />
      </section>

      {/* Properties Grid */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {residentialProperties.map((item, i) => (
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
                    sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                    className="object-cover group-hover:scale-105 transition-transform duration-500 opacity-80 group-hover:opacity-100"
                  />
                  <div className="absolute top-4 left-4 bg-black/60 backdrop-blur-md px-3 py-1 rounded-full text-[10px] uppercase font-bold tracking-wider text-accent-orange border border-white/10">
                    {item.transaction}
                  </div>
                </div>

                <div className="p-8 flex flex-col flex-grow">
                  <div className="flex items-center justify-between mb-6">
                    <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange group-hover:bg-accent-orange group-hover:text-white transition-all">
                      {getCategoryIcon(item.type || '')}
                    </div>
                    <span className="text-white/40 text-xs font-medium flex items-center gap-1">
                      <MapPin className="w-3 h-3 text-accent-orange" /> {item.location}
                    </span>
                  </div>

                  <h3 className="text-xl font-bold mb-2 uppercase tracking-tight line-clamp-1 text-white group-hover:text-accent-orange transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-white/60 text-xs font-semibold mb-3 tracking-wide">
                    {item.name} • {item.size}
                  </p>
                  <p className="text-foreground-secondary text-sm leading-relaxed mb-6 line-clamp-3 flex-grow">
                    {item.description}
                  </p>
                  
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

      {/* Primary Corridors */}
      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="flex flex-col lg:flex-row justify-between items-end gap-12">
            <div className="max-w-xl">
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tighter">Prime Residential Hubs</h2>
              <p className="text-foreground-secondary text-sm leading-relaxed mb-8">
                We represent properties in neighborhoods that define Pune's modern lifestyle, 
                balancing serene environments with premium urban connectivity.
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
                  <p className="text-[10px] uppercase font-black tracking-widest opacity-80 mb-1">Exclusive Access</p>
                  <p className="text-xl font-bold uppercase">Schedule a Viewing</p>
                </div>
                <div className="w-12 h-12 bg-white/20 rounded-full flex items-center justify-center group-hover:translate-x-2 transition-transform">
                  <ChevronRight className="w-6 h-6" />
                </div>
              </Link>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
};

export default ResidentialProperties;