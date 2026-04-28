"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Coffee, 
  Wifi, 
  Shield, 
  Zap, 
  Users, 
  Clock, 
  ArrowRight,
  CheckCircle2
} from "lucide-react";

const ManagedOffices = () => {
  const features = [
    { icon: <Wifi className="w-5 h-5" />, title: "Enterprise-Grade IT", desc: "Redundant high-speed fiber with dedicated bandwidth." },
    { icon: <Shield className="w-5 h-5" />, title: "24/7 Security", desc: "Biometric access and round-the-clock surveillance." },
    { icon: <Coffee className="w-5 h-5" />, title: "Premium Pantry", desc: "Fully stocked cafeteria with gourmet refreshments." },
    { icon: <Zap className="w-5 h-5" />, title: "100% Power Backup", desc: "Heavy-duty DG sets to ensure zero downtime." },
  ];

  const benefits = [
    "Custom Interior Fit-outs",
    "Zero Capital Expenditure (CAPEX)",
    "Professional Front-Desk Management",
    "Daily Housekeeping & Maintenance",
    "Access to Meeting & Board Rooms",
    "Strategic Kalyani Nagar Address"
  ];

  return (
    <main className="bg-background-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ duration: 0.6 }}
            >
              <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
                Corporate Workspace Solutions
              </span>
              <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 uppercase">
                Managed <span className="text-accent-orange">Offices</span> Built for Growth.
              </h1>
              <p className="text-foreground-secondary text-lg leading-relaxed mb-8 max-w-xl">
                Eliminate the complexities of facility management. We provide plug-and-play, fully managed office spaces in Pune's premium business districts.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="bg-accent-orange text-white px-8 py-4 rounded-full font-bold flex items-center gap-2 hover:brightness-110 transition-all">
                  Request a Quote <ArrowRight className="w-4 h-4" />
                </Link>
                <div className="flex items-center gap-3 px-6 py-4 rounded-full border border-white/10 text-sm font-medium">
                  <div className="w-2 h-2 rounded-full bg-green-500 animate-pulse" />
                  Available in Kalyani Nagar
                </div>
              </div>
            </motion.div>

            <motion.div 
              initial={{ opacity: 0, scale: 0.95 }}
              animate={{ opacity: 1, scale: 1 }}
              transition={{ duration: 0.8, delay: 0.2 }}
              className="relative aspect-video lg:aspect-square rounded-3xl overflow-hidden border border-white/10 shadow-2xl"
            >
              <Image 
                src="/logo.avif" 
                alt="Managed Office Interior" 
                fill 
                className="object-contain p-20 opacity-20 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-br from-accent-orange/10 via-transparent to-background-primary/80" />
              <div className="absolute bottom-8 left-8 right-8 p-6 bg-background-secondary/80 backdrop-blur-md rounded-2xl border border-white/10">
                <p className="text-sm font-bold text-white mb-1">Cerebrum IT Park Hub</p>
                <p className="text-xs text-foreground-secondary italic">Optimized for 20 to 200+ workstations.</p>
              </div>
            </motion.div>
          </div>
        </div>
      </section>

      {/* Feature Grid */}
      <section className="py-24 bg-background-secondary/30">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tight">The Managed Advantage</h2>
            <p className="text-foreground-secondary text-sm">Focus on your business, let us handle the infrastructure and operations.</p>
          </div>
          
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
            {features.map((f, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background-primary border border-white/5 hover:border-accent-orange/30 transition-all group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                  {f.icon}
                </div>
                <h3 className="text-lg font-bold mb-2 uppercase tracking-wide">{f.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Benefits & Comparison */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-20 items-center">
            <div>
              <h2 className="text-3xl font-bold mb-8 uppercase">Why Choose <span className="text-accent-orange">Managed</span> Over Traditional?</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-6">
                {benefits.map((benefit, i) => (
                  <div key={i} className="flex items-center gap-3">
                    <CheckCircle2 className="w-5 h-5 text-accent-orange flex-shrink-0" />
                    <span className="text-sm text-foreground-secondary font-medium">{benefit}</span>
                  </div>
                ))}
              </div>
              <p className="mt-10 text-foreground-secondary leading-relaxed text-sm">
                Managed offices at Cerebrum IT Park provide the perfect balance between privacy and community. 
                With RealtyWorks, you get a dedicated office space that reflects your brand identity 
                without the administrative burden of traditional leasing.
              </p>
            </div>
            
            <div className="bg-background-secondary p-10 rounded-3xl border border-white/5 shadow-inner">
              <h4 className="text-xl font-bold mb-6 text-center">Request A Floor Plan</h4>
              <form className="flex flex-col gap-4">
                <input type="text" placeholder="Company Name" className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors" />
                <input type="email" placeholder="Business Email" className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors" />
                <select className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors">
                  <option>Desired No. of Seats</option>
                  <option>20-50 Seats</option>
                  <option>50-100 Seats</option>
                  <option>100+ Seats</option>
                </select>
                <button className="bg-accent-orange text-white py-4 rounded-xl font-bold hover:brightness-110 transition-all shadow-lg mt-2">
                  Get Detailed Brochure
                </button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Final CTA */}
      <section className="py-20 border-t border-white/5 bg-accent-orange/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Your Next Office is Waiting in Kalyani Nagar</h2>
          <p className="text-foreground-secondary mb-10 max-w-2xl mx-auto">
            Schedule a site visit today and experience the future of corporate workspaces.
          </p>
          <Link href="tel:+919765464333" className="inline-flex items-center gap-4 text-2xl font-bold text-accent-orange hover:underline underline-offset-8 transition-all">
            <Clock className="w-6 h-6" /> +91 97654 64333
          </Link>
        </div>
      </section>
    </main>
  );
};

export default ManagedOffices;