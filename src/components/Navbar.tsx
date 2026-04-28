"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { motion, AnimatePresence } from "framer-motion";
import { ChevronDown } from "lucide-react"; // Optional: adding an icon for better UX

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);
  const [mobilePropertiesOpen, setMobilePropertiesOpen] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    if (isOpen) document.body.style.overflow = "hidden";
    else {
      document.body.style.overflow = "unset";
      setMobilePropertiesOpen(false);
    }
  }, [isOpen]);

  const navLinks = [
    { name: "Home", href: "/" },
    { name: "Properties", href: null }, // Set to null to prevent redirection
    { name: "About", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Blog", href: "/blog" },
  ];

  const propertyCategories = [
    { name: "Managed Office", sub: "Managed Office Solutions", href: "/properties/managed-offices" },
    { name: "Co-working", sub: "Co-working Spaces", href: "/properties/coworking" },
    { name: "Commercial", sub: "Premium Office Spaces", href: "/properties/commercial" },
    { name: "Industrial", sub: "Industrial Sheds & Land", href: "/properties/industrial" },
  ];

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 ease-premium border-b ${
        isScrolled 
          ? "py-2 h-16 bg-background-primary/90 backdrop-blur-xl border-white/10 shadow-premium" 
          : "py-4 h-20 bg-background-primary/70 backdrop-blur-md border-white/5"
      }`}
    >
      <div className="container mx-auto px-6 md:px-12 xl:px-20 h-full flex items-center justify-between">
        
        {/* Left: Brand Logo Area */}
        <Link 
          href="/" 
          onClick={() => setIsOpen(false)}
          className="relative z-[60] flex items-center gap-3 interactive"
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
            <span className="text-lg md:text-xl font-bold tracking-tightest text-foreground-primary">
              REALTY<span className="text-accent-orange uppercase">WORKS</span>
            </span>
            <span className="text-[8px] tracking-[0.3em] text-foreground-secondary uppercase font-medium">
              Pune Office Specialists
            </span>
          </div>
        </Link>

        {/* Center: Desktop Navigation Links */}
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
                /* Non-clickable trigger for Properties */
                <span className="text-sm font-semibold tracking-wide text-foreground-secondary group-hover:text-accent-orange transition-colors duration-300 cursor-default flex items-center gap-1">
                  {link.name}
                  <ChevronDown className="w-3 h-3 transition-transform group-hover:rotate-180" />
                </span>
              )}

              {link.name === "Properties" && (
                <div className="absolute top-full left-0 pt-4 opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all duration-300 transform translate-y-2 group-hover:translate-y-0">
                  <div className="w-64 bg-background-secondary border border-white/10 rounded-2xl shadow-premium overflow-hidden backdrop-blur-2xl">
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

        {/* Right: Actions */}
        <div className="flex items-center gap-4">
          <motion.a
            href="/contact"
            whileHover={{ scale: 1.03 }}
            whileTap={{ scale: 0.98 }}
            className="hidden sm:inline-flex bg-accent-orange text-white px-6 py-2.5 rounded-full text-xs font-extrabold tracking-widest uppercase shadow-lg transition-all interactive"
          >
            Consultation
          </motion.a>

          {/* Mobile Hamburger Button */}
          <button 
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden relative z-[60] flex flex-col gap-1.5 p-2 focus:outline-none"
            aria-label="Toggle Menu"
          >
            <span className={`w-6 h-0.5 bg-foreground-primary rounded-full transition-all duration-300 ${isOpen ? "rotate-45 translate-y-2" : "bg-accent-orange"}`} />
            <span className={`w-6 h-0.5 bg-foreground-primary rounded-full transition-all duration-300 ${isOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-foreground-primary rounded-full transition-all duration-300 ${isOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>
      </div>

      {/* Mobile Menu Overlay */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, x: "100%" }}
            animate={{ opacity: 1, x: 0 }}
            exit={{ opacity: 0, x: "100%" }}
            transition={{ duration: 0.5, ease: [0.22, 1, 0.36, 1] }}
            className="fixed inset-0 z-[50] w-full h-screen bg-background-primary flex flex-col pt-32 px-8 overflow-y-auto"
          >
            <div className="flex flex-col gap-8 pb-10">
              {navLinks.map((link, i) => (
                <motion.div
                  key={link.name}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: 0.1 + i * 0.05 }}
                >
                  {link.name === "Properties" ? (
                    <div className="flex flex-col">
                      <button
                        onClick={() => setMobilePropertiesOpen(!mobilePropertiesOpen)}
                        className="flex items-center justify-between w-full text-3xl font-bold text-foreground-primary text-left"
                      >
                        Properties
                        <span className={`transition-transform duration-300 text-accent-orange ${mobilePropertiesOpen ? 'rotate-180' : ''}`}>
                          <ChevronDown className="w-8 h-8" />
                        </span>
                      </button>

                      <AnimatePresence>
                        {mobilePropertiesOpen && (
                          <motion.div
                            initial={{ height: 0, opacity: 0 }}
                            animate={{ height: "auto", opacity: 1 }}
                            exit={{ height: 0, opacity: 0 }}
                            className="overflow-hidden mt-4 ml-2 flex flex-col gap-6 border-l border-accent-orange/30 pl-6"
                          >
                            {propertyCategories.map((cat) => (
                              <Link
                                key={cat.name}
                                href={cat.href}
                                onClick={() => setIsOpen(false)}
                                className="text-xl text-foreground-secondary hover:text-accent-orange flex flex-col"
                              >
                                <span className="text-[10px] uppercase text-accent-orange font-bold tracking-widest">{cat.name}</span>
                                {cat.sub}
                              </Link>
                            ))}
                          </motion.div>
                        )}
                      </AnimatePresence>
                    </div>
                  ) : (
                    <Link
                      href={link.href!}
                      onClick={() => setIsOpen(false)}
                      className="text-3xl font-bold text-foreground-primary hover:text-accent-orange"
                    >
                      {link.name}
                    </Link>
                  )}
                </motion.div>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;