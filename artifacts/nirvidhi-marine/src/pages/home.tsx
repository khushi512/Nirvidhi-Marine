import { Navbar } from "@/components/layout/Navbar";
import { Footer } from "@/components/layout/Footer";
import { Hero } from "@/components/sections/Hero";
import { About } from "@/components/sections/About";
import { Services } from "@/components/sections/Services";
import { Campus } from "@/components/sections/Campus";
import { Products } from "@/components/sections/Products";
import { Vision } from "@/components/sections/Vision";
import { CTA } from "@/components/sections/CTA";

export default function Home() {
  return (
    <div className="min-h-[100dvh] w-full bg-background selection:bg-primary/30 selection:text-primary">
      <div className="noise-overlay"></div>
      <Navbar />
      <main>
        <Hero />
        <div className="theme-light"><About /></div>
        <div className="theme-dark"><Services /></div>
        <div className="theme-light"><Campus /></div>
        <div className="theme-dark"><Products /></div>
        <div className="theme-light"><Vision /></div>
        <div className="theme-dark"><CTA /></div>
      </main>
      <Footer />
    </div>
  );
}