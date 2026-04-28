import Link from "next/link";
import Image from "next/image";

const Footer = () => {
  const currentYear = new Date().getFullYear();

  const platformLinks = [
    { name: "Home", href: "/" },
    { name: "About RealtyWorks", href: "/about" },
    { name: "Contact", href: "/contact" },
    { name: "Property Listings", href: "/listings" },
  ];

  const propertyCategories = [
    { name: "Managed Office Solutions", href: "/properties/managed-offices" },
    { name: "Co-working Spaces", href: "/properties/coworking" },
    { name: "Premium Office Spaces", href: "/properties/office-spaces" },
    { name: "Industrial Sheds & Land", href: "/properties/industrial" },
  ];

  const contactInfo = [
    { label: "Direct Line", value: "+91 97654 64333" },
    { label: "Corporate Email", value: "contact@realtyworks.co.in" },
    { label: "Regional Office", value: "Office No. 10, B3, Cerebrum IT Park, Kalyani Nagar, Pune 411014" },
  ];

  return (
    <footer className="w-full bg-background-primary border-t border-white/5 pt-16 pb-32 md:pt-20 md:pb-40">
      <div className="container mx-auto px-6 md:px-12 xl:px-20">
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-8 mb-16">
          
          {/* Column 1: Brand & Logo */}
          <div className="flex flex-col gap-6">
            <Link href="/" className="flex flex-col gap-4">
              <Image 
                src="/logo.avif" 
                alt="RealtyWorks Logo" 
                width={180} 
                height={50} 
                className="object-contain" // Removed brightness-0 invert to show original colors
                priority
              />
              <span className="text-xl font-bold tracking-tightest text-foreground-primary uppercase">
                REALTY<span className="text-accent-orange">WORKS.</span>
              </span>
            </Link>
            <p className="text-foreground-secondary text-sm leading-relaxed max-w-xs">
              Based in Kalyani Nagar, Pune, RealtyWorks specializes in office spaces, co-working, and managed office solutions tailored for high-growth enterprises.
            </p>
            <div className="flex flex-col gap-1">
               <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">MahaRERA ID</span>
               <span className="text-xs text-foreground-primary font-mono tracking-wider">A52100029799</span>
            </div>
          </div>

          {/* Column 2: Portfolio */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground-primary">Portfolio</h4>
            <div className="flex flex-col gap-6">
              <ul className="flex flex-col gap-3">
                {platformLinks.map((link) => (
                  <li key={link.name}>
                    <Link href={link.href} className="text-foreground-secondary text-sm hover:text-accent-orange transition-colors duration-300">
                      {link.name}
                    </Link>
                  </li>
                ))}
              </ul>
              <div className="flex flex-col gap-3">
                <span className="text-[10px] uppercase tracking-widest text-white/40 font-bold">Specializations</span>
                <ul className="flex flex-col gap-3 border-l border-white/10 pl-4">
                  {propertyCategories.map((cat) => (
                    <li key={cat.name}>
                      <Link href={cat.href} className="text-foreground-secondary text-sm hover:text-accent-orange transition-colors duration-300">
                        {cat.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Column 3: Contact Details */}
          <div className="flex flex-col gap-6">
            <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground-primary">Contact Us</h4>
            <ul className="flex flex-col gap-4">
              {contactInfo.map((item) => (
                <li key={item.label} className="flex flex-col">
                  <span className="text-[10px] uppercase tracking-widest text-accent-orange mb-1">{item.label}</span>
                  <span className="text-foreground-secondary text-sm font-medium leading-snug">{item.value}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Column 4: Newsletter/CTA */}
          <div className="flex flex-col gap-6">
            <div>
              <h4 className="text-sm font-bold uppercase tracking-[0.2em] text-foreground-primary mb-2">Investor Insights</h4>
              <p className="text-foreground-secondary text-xs">Secure early access to off-market inventory and premium managed office launches.</p>
            </div>
            <form className="flex flex-col gap-3">
              <input 
                type="email" 
                placeholder="Business Email" 
                className="bg-background-secondary border border-white/10 rounded-lg px-5 py-3 text-sm text-foreground-primary focus:outline-none focus:border-accent-orange transition-colors w-full"
              />
              <button 
                type="submit" 
                className="bg-accent-orange text-white rounded-lg px-6 py-3 text-sm font-bold hover:brightness-110 transition-all active:scale-[0.98] w-full"
              >
                Request Access
              </button>
            </form>
          </div>

        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-white/5 flex flex-col md:flex-row justify-between items-center gap-6">
          <div className="flex flex-col gap-1 text-center md:text-left">
            <p className="text-foreground-secondary text-[12px] tracking-wide">
              © {currentYear} RealtyWorks. All rights reserved.
            </p>
            <p className="text-[10px] text-white/30 italic">
              Authorized Channel Partner for Godrej Properties Pune.
            </p>
          </div>
          <div className="flex gap-8">
            <Link href="/privacy" className="text-foreground-secondary text-[11px] hover:text-white transition-colors">Privacy Policy</Link>
            <Link href="/terms" className="text-foreground-secondary text-[11px] hover:text-white transition-colors">Terms of Service</Link>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;