"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import Link from "next/link";
import { Building2, Rocket, ShieldCheck, Users2, MapPin, Phone } from "lucide-react";

const AboutPage = () => {
  const fadeIn = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const stats = [
    { label: "Spaces Managed", value: "50,000+ Sq. Ft." },
    { label: "Corporate Clients", value: "200+" },
    { label: "Pune Presence", value: "12+ Years" },
    { label: "Customer Satisfaction", value: "98%" },
  ];

  const values = [
    {
      icon: <Building2 className="w-6 h-6" />,
      title: "Strategic Selection",
      description: "We don't just find desks; we find locations that put your business at the center of Pune's economic pulse.",
    },
    {
      icon: <ShieldCheck className="w-6 h-6" />,
      title: "Full Transparency",
      description: "As a MahaRERA registered agency, we ensure every contract and lease is legally sound and honest.",
    },
    {
      icon: <Rocket className="w-6 h-6" />,
      title: "Scalability",
      description: "From a single co-working desk to a full floor in an IT Park, we grow as your workforce grows.",
    },
  ];

  return (
    <main className="bg-background-primary text-foreground-primary">
      {/* Hero Section */}
      <section className="relative pt-32 pb-20 overflow-hidden border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12 xl:px-20 relative z-10">
          <motion.div initial="hidden" animate="visible" variants={fadeIn} className="max-w-3xl">
            <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
              About Realty Works
            </span>
            <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 uppercase">
              Searching for the <span className="text-accent-orange">Perfect</span> Workspace.
            </h1>
            <p className="text-foreground-secondary text-lg leading-relaxed mb-8">
              Based in the heart of Kalyani Nagar, Pune, RealtyWorks specializes in high-performance office spaces, 
              co-working hubs, and managed solutions designed for the modern enterprise.
            </p>
          </motion.div>
        </div>
        {/* Background Decorative Element */}
        <div className="absolute top-0 right-0 w-1/3 h-full bg-accent-orange/5 blur-[120px] -z-10" />
      </section>

      {/* Stats Strip */}
      <section className="py-12 bg-background-secondary border-b border-white/5">
        <div className="container mx-auto px-6 md:px-12">
          <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
            {stats.map((stat, i) => (
              <div key={i} className="text-center md:text-left">
                <div className="text-2xl md:text-3xl font-bold text-accent-orange mb-1">{stat.value}</div>
                <div className="text-[10px] uppercase tracking-widest text-foreground-secondary font-bold">
                  {stat.label}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Deep Dive Section */}
      <section className="py-24">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">
            <motion.div 
              initial={{ opacity: 0, x: -30 }} 
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              className="relative aspect-square md:aspect-video lg:aspect-square rounded-2xl overflow-hidden border border-white/10"
            >
              <Image 
                src="/logo.avif" 
                alt="RealtyWorks Pune Office" 
                fill 
                className="object-contain p-12 opacity-50"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-background-primary via-transparent to-transparent" />
            </motion.div>

            <div className="flex flex-col gap-8">
              <h2 className="text-3xl font-bold tracking-tight">Tailored Solutions for Every Business Size</h2>
              <p className="text-foreground-secondary leading-relaxed">
                At RealtyWorks, we understand that productivity isn't just about four walls. It’s about the synergy 
                between infrastructure and inspiration. Located in **Cerebrum IT Park**, we are at the epicenter 
                of Pune’s corporate growth.
              </p>
              <p className="text-foreground-secondary leading-relaxed">
                We provide strategic, flexible, and cost-effective workspaces that enhance growth. Whether you need 
                a startup-friendly co-working space or a premium managed office, our team provides 
                end-to-end consulting—from site selection to lease management.
              </p>
              
              <div className="flex flex-col gap-4 mt-4">
                <div className="flex items-start gap-4">
                  <div className="p-2 bg-accent-orange/10 rounded-lg text-accent-orange">
                    <MapPin className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="font-bold text-sm">Strategic Location</h4>
                    <p className="text-xs text-foreground-secondary">Office No. 10, B3, Cerebrum IT Park, Kalyani Nagar, Pune</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Values Section */}
      <section className="py-24 bg-background-secondary/30">
        <div className="container mx-auto px-6 md:px-12 xl:px-20">
          <div className="text-center max-w-2xl mx-auto mb-16">
            <h2 className="text-3xl font-bold mb-4">Why Businesses Trust Us</h2>
            <p className="text-foreground-secondary text-sm">We combine local market intelligence with a global standard of service.</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {values.map((v, i) => (
              <div key={i} className="p-8 rounded-2xl bg-background-secondary border border-white/5 hover:border-accent-orange/50 transition-colors group">
                <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange mb-6 group-hover:scale-110 transition-transform">
                  {v.icon}
                </div>
                <h3 className="text-xl font-bold mb-3">{v.title}</h3>
                <p className="text-foreground-secondary text-sm leading-relaxed">{v.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-24 border-t border-white/5">
        <div className="container mx-auto px-6 text-center">
          <h2 className="text-4xl font-bold mb-8">Ready to find your next office?</h2>
          <div className="flex flex-col md:flex-row gap-4 justify-center">
            <Link 
              href="/contact" 
              className="bg-accent-orange text-white px-8 py-4 rounded-full font-bold hover:brightness-110 transition-all flex items-center justify-center gap-2"
            >
              <Phone className="w-4 h-4" />
              Contact Our Specialists
            </Link>
            <Link 
              href="/listings" 
              className="border border-white/10 hover:bg-white/5 text-white px-8 py-4 rounded-full font-bold transition-all"
            >
              Browse Listings
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
};

export default AboutPage;