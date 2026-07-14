import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { Opportunity } from "@/components/sections/Opportunity";
import { About } from "@/components/sections/About";
import { Location } from "@/components/sections/Location";
import { Vision } from "@/components/sections/Vision";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background selection:bg-primary/30 selection:text-primary">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <Opportunity />
        <About />
        <Location />
        <Vision />
        <CTA />
      </main>
      <Footer />
    </div>
  );
}
