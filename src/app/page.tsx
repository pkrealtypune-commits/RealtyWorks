import Hero from "@/components/Hero";
import PropertiesShowcase from "@/components/PropertiesShowcase";
import SalesReminderSection from "@/components/SalesReminderSection";
import AboutSection from "@/components/aboutUs";
import Testimonials from "@/components/Testimonials";
import PrespectiveGrid from "@/components/PerspectiveGrid"
import TrustBar from "@/components/TrustBar";
import LocationCluster from "@/components/LocationCluster";

/**
 * Metadata for the landing page.
 * Next.js automatically injects this into the <head> of the document.
 */
export const metadata = {
  title: "Premium Industrial Realty | Warehousing & Logistics Solutions",
  description: "Discover high-end industrial warehouses and logistics-grade realty spaces designed for scalability and performance.",
};

export default function Home() {
  return (
    <main className="relative w-full flex flex-col">
      {/* The Hero component handles its own GSAP intro, 
        parallax effects, and smooth scroll integration. 
      */}
      <Hero />
      <PropertiesShowcase />
      <PrespectiveGrid />
      <SalesReminderSection />
      <AboutSection />
      <LocationCluster />
      <Testimonials />
      {/* <TrustBar /> */}
      
      {/* Future components (e.g., Stats, Properties, About) 
        should be added here as the page grows.
      */}
    </main>
  );
}