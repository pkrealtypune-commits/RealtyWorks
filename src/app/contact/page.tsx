"use client";

import { motion } from "framer-motion";
import { 
  Phone, 
  Mail, 
  MapPin, 
  Clock, 
  MessageSquare, 
  Send 
} from "lucide-react";

const ContactPage = () => {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: { staggerChildren: 0.1, delayChildren: 0.2 }
    }
  };

  const itemVariants = {
    hidden: { y: 20, opacity: 0 },
    visible: { y: 0, opacity: 1, transition: { duration: 0.5 } }
  };

  const contactMethods = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Direct Line",
      value: "+91 97654 64333",
      href: "tel:+919765464333"
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "contact@realtyworks.co.in",
      href: "mailto:contact@realtyworks.co.in"
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Office",
      value: "Cerebrum IT Park, Kalyani Nagar, Pune",
      href: "https://maps.google.com"
    }
  ];

  return (
    <main className="bg-background-primary min-h-screen pt-32 pb-20">
      <div className="container mx-auto px-6 md:px-12 xl:px-20">
        
        {/* Header Section */}
        <motion.div 
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          className="max-w-3xl mb-16"
        >
          <span className="text-accent-orange font-bold uppercase tracking-[0.3em] text-[10px] mb-4 block">
            Get in Touch
          </span>
          <h1 className="text-4xl md:text-6xl font-bold tracking-tightest mb-6 uppercase">
            Let's discuss your <span className="text-accent-orange">Next</span> move.
          </h1>
          <p className="text-foreground-secondary text-lg leading-relaxed">
            From managed office solutions in Kalyani Nagar to premium co-working spaces across Pune, 
            our specialists are ready to consult on your specific infrastructure needs.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 lg:grid-cols-12 gap-16">
          
          {/* LEFT: Contact Information */}
          <motion.div 
            variants={containerVariants}
            initial="hidden"
            animate="visible"
            className="lg:col-span-5 flex flex-col gap-12"
          >
            <div className="grid grid-cols-1 gap-8">
              {contactMethods.map((method, index) => (
                <motion.a 
                  key={index}
                  href={method.href}
                  variants={itemVariants}
                  className="flex items-start gap-6 p-6 rounded-2xl bg-background-secondary border border-white/5 hover:border-accent-orange/30 transition-all group"
                >
                  <div className="w-12 h-12 bg-accent-orange/10 rounded-xl flex items-center justify-center text-accent-orange group-hover:scale-110 transition-transform">
                    {method.icon}
                  </div>
                  <div>
                    <h4 className="text-[10px] uppercase tracking-widest text-white/40 font-bold mb-1">
                      {method.label}
                    </h4>
                    <p className="text-foreground-primary font-medium text-lg tracking-tight">
                      {method.value}
                    </p>
                  </div>
                </motion.a>
              ))}
            </div>

            {/* Availability Note */}
            <motion.div variants={itemVariants} className="p-8 rounded-2xl border border-dashed border-white/10">
              <div className="flex items-center gap-3 mb-4 text-accent-orange">
                <Clock className="w-5 h-5" />
                <h4 className="font-bold uppercase tracking-widest text-xs">Consultation Hours</h4>
              </div>
              <p className="text-sm text-foreground-secondary leading-relaxed">
                Our specialists are available for site visits and consultations: <br />
                <span className="text-foreground-primary font-bold">Mon — Sat: 09:00 AM - 07:00 PM</span>
              </p>
            </motion.div>
          </motion.div>

          {/* RIGHT: Inquiry Form */}
          <motion.div 
            initial={{ opacity: 0, x: 20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: 0.4 }}
            className="lg:col-span-7 bg-background-secondary p-8 md:p-12 rounded-3xl border border-white/5 shadow-2xl"
          >
            <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Full Name</label>
                <input type="text" placeholder="John Doe" className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Work Email</label>
                <input type="email" placeholder="john@company.com" className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors" />
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Requirement Type</label>
                <select className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors appearance-none">
                  <option>Managed Office</option>
                  <option>Co-working Space</option>
                  <option>Industrial Shed</option>
                  <option>Commercial Purchase</option>
                </select>
              </div>
              <div className="flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Required Seats / Area</label>
                <input type="text" placeholder="e.g. 50 Seats or 5000 sqft" className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors" />
              </div>
              <div className="md:col-span-2 flex flex-col gap-2">
                <label className="text-[10px] uppercase tracking-widest font-bold text-white/40 ml-1">Message</label>
                <textarea rows={4} placeholder="Tell us more about your business needs..." className="bg-background-primary border border-white/10 rounded-xl px-5 py-4 text-sm focus:outline-none focus:border-accent-orange transition-colors resize-none" />
              </div>
              <button 
                type="submit" 
                className="md:col-span-2 bg-accent-orange text-white py-5 rounded-xl font-bold flex items-center justify-center gap-3 hover:brightness-110 transition-all active:scale-[0.98] shadow-[0_20px_40px_rgba(255,107,0,0.2)]"
              >
                <Send className="w-4 h-4" />
                Submit Inquiry
              </button>
            </form>
          </motion.div>

        </div>

        {/* Map Placeholder Section */}
        <motion.div 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          className="mt-24 rounded-3xl overflow-hidden border border-white/5 h-96 relative grayscale opacity-70 hover:grayscale-0 hover:opacity-100 transition-all duration-700"
        >
          {/* Replace src with your actual Google Maps Embed link */}
          <iframe 
            src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3782.364736340578!2d73.90382367584144!3d18.557685468045615!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bc2c13f63773199%3A0xc39958742878d65!2sCerebrum%20IT%20Park!5e0!3m2!1sen!2sin!4v1714488000000!5m2!1sen!2sin"
            className="w-full h-full border-0"
            allowFullScreen
            loading="lazy"
          />
        </motion.div>

      </div>
    </main>
  );
};

export default ContactPage;