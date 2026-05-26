"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { usePathname } from "next/navigation";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown, Home, Building2, PhoneCall, BookOpen, Info } from "lucide-react";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Close mobile dropdown automatically if the user changes pages
  useEffect(() => {
    setMobilePropertiesOpen(false);
  }, [pathname]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: null }, 
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const propertyCategories = [
    { name: "Resedential", sub: "Resedential Societies", href: "/properties/resedentials" },
    { name: "Managed Office", sub: "Managed Office Solutions", href: "/properties/managed-offices" },
    { name: "Co-working", sub: "Co-working Spaces", href: "/properties/coworking" },
    { name: "Commercial", sub: "Premium Office Spaces", href: "/properties/commercial" },
    { name: "Industrial", sub: "Industrial Sheds & Land", href: "/properties/industrial" },
  ];

  return (
    <>
      {/* --- DESKTOP HEADER & MOBILE TOP BRAND ANCHOR --- */}
      <header
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-in-out border-b ${
          isScrolled 
            ? "py-2 h-16 bg-background-primary/90 backdrop-blur-xl border-white/10 shadow-lg" 
            : "py-4 h-20 bg-background-primary/70 backdrop-blur-md border-white/5"
        }`}
      >
        <div className="container mx-auto px-6 md:px-12 xl:px-20 h-full flex items-center justify-between">
          
          {/* Brand Logo Area */}
          <Link 
            href="/" 
            className="relative z-[60] flex items-center gap-3"
          >
            <div className="relative h-10 w-10 md:h-12 md:w-12 transition-transform duration-300 hover:scale-105">
              <Image 
                src="/logo.avif" 
                alt="RealtyWorks Logo" 
                fill
                className="object-contain"
                priority
              />
            </div>
            <div className="flex flex-col leading-none">
              <span className="text-lg md:text-xl font-bold tracking-tight text-foreground-primary">
                REALTY<span className="text-accent-orange uppercase font-black">WORKS</span>
              </span>
              <span className="text-[8px] tracking-[0.3em] text-foreground-secondary uppercase font-medium">
                Pune Office Specialists
              </span>
            </div>
          </Link>

          {/* Center: Desktop Navigation Links (Hidden on Mobile) */}
          <div className="hidden md:flex items-center gap-8 h-full">
            {navLinks.map((link) => (
              <div key={link.name} className="relative group h-full flex items-center">
                {link.href ? (
                  <Link
                    href={link.href}
                    className="text-sm font-semibold tracking-wide text-foreground-secondary hover:text-accent-orange transition-colors duration-300"
                  >
                    {link.name}
                  </Link>
                ) : (
                  <span className="text-sm font-semibold tracking-wide text-foreground-secondary group-hover:text-accent-orange transition-colors duration-300 cursor-default flex items-center gap-1">
                    {link.name}
                    <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                  </span>
                )}

                {link.name === "Properties" && (
                  <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                    <div className="w-64 bg-background-secondary border border-white/10 rounded-2xl shadow-xl overflow-hidden backdrop-blur-2xl">
                      <div className="p-5 flex flex-col gap-5">
                        {propertyCategories.map((cat) => (
                          <div key={cat.name}>
                            <p className="text-[10px] text-accent-orange uppercase tracking-[0.2em] mb-1.5 font-bold">{cat.name}</p>
                            <Link 
                              href={cat.href} 
                              className="block text-sm text-foreground-primary hover:text-accent-orange transition-colors duration-200"
                            >
                              {cat.sub}
                            </Link>
                          </div>
                        ))}
                      </div>
                    </div>
                  </div>
                )}
              </div>
            ))}
          </div>

          {/* Right actions: Desktop CTA Only */}
          <div className="hidden md:flex items-center gap-4">
            <motion.a
              href="/contact"
              whileHover={{ scale: 1.03 }}
              whileTap={{ scale: 0.98 }}
              className="bg-accent-orange text-white px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-lg transition-all"
            >
              Consultation
            </motion.a>
          </div>
        </div>
      </header>

      {/* --- MOBILE PERSISTENT APP BAR MODE (No Drawer Needed) --- */}
      <div className="md:hidden fixed bottom-6 left-1/2 -translate-x-1/2 w-[92%] max-w-lg bg-background-primary/80 backdrop-blur-xl border border-white/10 rounded-full z-50 shadow-[0_12px_40px_rgba(0,0,0,0.55)] flex flex-col items-center">
        
        {/* Inline Mobile Dropdown Panel for Spaces */}
        <AnimatePresence>
          {mobilePropertiesOpen && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.3, ease: [0.25, 1, 0.5, 1] }}
              className="w-full overflow-hidden border-b border-white/[0.06]"
            >
              <div className="grid grid-cols-2 gap-4 p-5 max-h-[40vh] overflow-y-auto">
                {propertyCategories.map((cat) => (
                  <Link
                    key={cat.name}
                    href={cat.href}
                    className="flex flex-col p-2.5 rounded-xl bg-white/[0.02] border border-white/[0.04] active:scale-[0.98] transition-transform"
                  >
                    <span className="text-[9px] uppercase text-accent-orange font-bold tracking-wider mb-0.5">
                      {cat.name}
                    </span>
                    <span className="text-xs text-foreground-primary font-medium truncate">
                      {cat.sub}
                    </span>
                  </Link>
                ))}
              </div>
            </motion.div>
          )}
        </AnimatePresence>

        {/* Primary Bottom Actions Grid Row */}
        <div className="w-full h-16 flex items-center justify-around px-2">
          <Link href="/" className="flex flex-col items-center justify-center text-foreground-secondary hover:text-accent-orange transition-colors w-12">
            <Home className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-semibold tracking-wide">Home</span>
          </Link>

          <button 
            onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)} 
            className={`flex flex-col items-center justify-center transition-colors w-12 ${mobilePropertiesOpen ? "text-accent-orange" : "text-foreground-secondary hover:text-accent-orange"}`}
          >
            <Building2 className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-semibold tracking-wide">Spaces</span>
          </button>

          <Link href="/about" className="flex flex-col items-center justify-center text-foreground-secondary hover:text-accent-orange transition-colors w-12">
            <Info className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-semibold tracking-wide">About</span>
          </Link>

          <Link href="/blog" className="flex flex-col items-center justify-center text-foreground-secondary hover:text-accent-orange transition-colors w-12">
            <BookOpen className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-semibold tracking-wide">Blog</span>
          </Link>

          <Link href="/contact" className="flex flex-col items-center justify-center text-foreground-secondary hover:text-accent-orange transition-colors w-12">
            <PhoneCall className="w-4 h-4 mb-0.5" />
            <span className="text-[9px] font-semibold tracking-wide">Contact</span>
          </Link>
        </div>
      </div>
    </>
  );
};

export default Navbar;