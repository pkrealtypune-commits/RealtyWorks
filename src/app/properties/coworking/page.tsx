"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { 
  Users, 
  Wifi, 
  Coffee, 
  Zap, 
  Calendar, 
  Laptop,
  Check,
  Smartphone
} from "lucide-react";

const CoworkingPage = () => {
  const memberships = [
    {
      title: "Hot Desk",
      price: "Starts @ ₹6,999/mo",
      features: ["Flexible seating", "High-speed WiFi", "Pantry access", "Community events"],
      cta: "Book a Trial",
      popular: false
    },
    {
      title: "Dedicated Desk",
      price: "Starts @ ₹9,999/mo",
      features: ["Fixed workstation", "Lockable storage", "Mailing address", "Meeting room credits"],
      cta: "Reserve Now",
      popular: true
    },
    {
      title: "Private Cabin",
      price: "Starts @ ₹12,999/mo",
      features: ["Enclosed office", "Company branding", "Dedicated AC", "Maximum privacy"],
      cta: "Get a Quote",
      popular: false
    }
  ];

  const amenities = [
    { icon: <Wifi />, name: "High-Speed Internet" },
    { icon: <Coffee />, name: "Unlimited Tea/Coffee" },
    { icon: <Zap />, name: "Power Backup" },
    { icon: <Users />, name: "Networking Events" },
    { icon: <Calendar />, name: "Meeting Rooms" },
    { icon: <Smartphone />, name: "App-based Booking" },
  ];

  return (
    <main className="bg-background-primary min-h-screen">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 border-b border-white/5 overflow-hidden">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <div className="max-w-3xl">
            <motion.span 
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block"
            >
              Collaborative Workspaces
            </motion.span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 uppercase">
              Work <span className="text-accent-orange">Better</span>, Together.
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
              Experience Pune's most vibrant co-working ecosystem in Kalyani Nagar. 
              Modern infrastructure meets a community of innovators. Just bring your laptop.
            </p>
          </div>
        </div>
        {/* Visual Decoration */}
        <div className="absolute top-0 right-0 w-1/2 h-full bg-gradient-to-l from-accent-orange/5 to-transparent pointer-events-none" />
      </section>

      {/* Amenities Strip - Fold Density Focus */}
      <section className="py-12 bg-background-secondary/50 border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8">
            {amenities.map((item, i) => (
              <div key={i} className="flex items-center gap-3 group">
                <div className="text-accent-orange group-hover:scale-110 transition-transform">
                  {item.icon}
                </div>
                <span className="text-[10px] uppercase font-bold tracking-widest text-white/70">
                  {item.name}
                </span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Membership Tiers */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center mb-16">
            <h2 className="text-3xl font-bold uppercase tracking-tighter mb-4">Choose Your Plan</h2>
            <p className="text-foreground-secondary text-sm">Flexible memberships designed to scale with your ambition.</p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {memberships.map((plan, i) => (
              <motion.div 
                key={i}
                whileHover={{ y: -10 }}
                className={`relative p-8 rounded-3xl border ${plan.popular ? 'border-accent-orange bg-background-secondary shadow-[0_20px_50px_rgba(255,107,0,0.1)]' : 'border-white/5 bg-background-secondary/40'} transition-all`}
              >
                {plan.popular && (
                  <span className="absolute -top-4 left-1/2 -translate-x-1/2 bg-accent-orange text-white text-[10px] font-black uppercase px-4 py-1 rounded-full tracking-widest">
                    Most Popular
                  </span>
                )}
                <h3 className="text-2xl font-bold mb-2 uppercase">{plan.title}</h3>
                <p className="text-accent-orange font-bold text-lg mb-8">{plan.price}</p>
                
                <ul className="space-y-4 mb-10">
                  {plan.features.map((feat, idx) => (
                    <li key={idx} className="flex items-center gap-3 text-sm text-foreground-secondary">
                      <Check className="w-4 h-4 text-accent-orange" />
                      {feat}
                    </li>
                  ))}
                </ul>

                <Link 
                  href="/contact" 
                  className={`block text-center py-4 rounded-xl font-bold transition-all ${
                    plan.popular 
                      ? 'bg-accent-orange text-white hover:brightness-110' 
                      : 'bg-white/5 text-white hover:bg-white/10'
                  }`}
                >
                  {plan.cta}
                </Link>
              </motion.div>
            ))}
          </div>
        </div>
      </section>

      {/* Location Insight */}
      <section className="py-24 bg-background-secondary/20">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <div className="relative aspect-square rounded-3xl overflow-hidden border border-white/5">
              <Image 
                src="/logo.avif" 
                alt="Co-working Community" 
                fill 
                className="object-contain p-20 opacity-30 grayscale"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary to-transparent" />
            </div>
            
            <div>
              <h2 className="text-3xl font-bold mb-6 uppercase tracking-tight">The Heart of <span className="text-accent-orange">Kalyani Nagar</span></h2>
              <p className="text-foreground-secondary leading-relaxed mb-6">
                Our co-working spaces are strategically located within walking distance of Pune’s best cafes, 
                transit points, and corporate offices. Networking happens naturally here.
              </p>
              <div className="space-y-4">
                <div className="flex gap-4 p-4 rounded-2xl bg-background-primary border border-white/5">
                  <Laptop className="w-6 h-6 text-accent-orange" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Plug & Play Ready</h4>
                    <p className="text-xs text-foreground-secondary italic">Move in within 24 hours of registration.</p>
                  </div>
                </div>
                <div className="flex gap-4 p-4 rounded-2xl bg-background-primary border border-white/5">
                  <Users className="w-6 h-6 text-accent-orange" />
                  <div>
                    <h4 className="font-bold text-sm uppercase">Business Concierge</h4>
                    <p className="text-xs text-foreground-secondary italic">On-site support for printing, couriers, and reception.</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Trial CTA */}
      <section className="py-20 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <div className="max-w-2xl mx-auto p-10 rounded-[40px] bg-gradient-to-br from-accent-orange to-[#ff8c33] text-white">
            <h2 className="text-3xl font-bold mb-4 uppercase tracking-tighter">Experience it first-hand</h2>
            <p className="mb-8 font-medium opacity-90">Grab a free day-pass and test our high-speed internet and ergonomic seating.</p>
            <Link 
              href="https://wa.me/919765464333?text=I'd%20like%20to%20book%20a%20free%20trial%20day" 
              className="inline-block bg-white text-accent-orange px-8 py-4 rounded-full font-black uppercase tracking-widest text-xs hover:scale-105 transition-transform"
            >
              Get Free Day Pass
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default CoworkingPage;