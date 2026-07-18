// src/components/layout/Navbar.tsx
import { motion, useScroll, useMotionValueEvent, AnimatePresence } from "framer-motion";
import { useState } from "react";
import { cn } from "@/lib/utils";

// ─── Types & Constants ────────────────────────────────────────────────────────

interface NavItem {
  label: string;
  href:  string;
}

const NAV_ITEMS: NavItem[] = [
  { label: "About Us",  href: "#about"    },
  { label: "Services",  href: "#services" },
  { label: "Campus",    href: "#campus"   },
  { label: "Products",  href: "#products" },
  { label: "Vision",    href: "#vision"   },
];

const SCROLL_THRESHOLD = 50;

// ─── Shared link styles ───────────────────────────────────────────────────────

const navLinkClass =
  "font-sans font-medium tracking-[0.15em] uppercase text-muted-foreground hover:text-primary transition-colors duration-200";

// ─── Component ────────────────────────────────────────────────────────────────

export function Navbar() {
  const { scrollY } = useScroll();
  const [isScrolled,  setIsScrolled]  = useState(false);
  const [isMenuOpen,  setIsMenuOpen]  = useState(false);

  useMotionValueEvent(scrollY, "change", (latest) => {
    setIsScrolled(latest > SCROLL_THRESHOLD);
  });

  const closeMenu  = () => setIsMenuOpen(false);
  const toggleMenu = () => setIsMenuOpen((prev) => !prev);

  return (
    <motion.header
      className={cn(
        "fixed top-0 w-full z-50 transition-all duration-500",
        isScrolled || isMenuOpen
          ? "bg-background/90 backdrop-blur-md border-b border-border py-4"
          : "bg-transparent border-transparent py-8"
      )}
    >
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex items-center justify-between">

        {/* Logo — always navigates home */}
        
        <a href="/"
          aria-label="Nirvidhi Marine — go to homepage"
          className="flex items-center gap-3 group"
        >
          <span className="font-serif text-lg md:text-xl tracking-wide text-foreground">
            Nirvidhi{" "}
            <span className="text-primary italic">Marine</span>
          </span>
        </a>

        {/* Desktop nav */}
        <nav className="hidden md:flex items-center gap-8" aria-label="Main navigation">
          {NAV_ITEMS.map((item) => (
            <a key={item.href} href={item.href} className={cn(navLinkClass, "text-xs")}>
              {item.label}
            </a>
          ))}
        </nav>

        {/* Desktop CTA */}
        <a
          href="#contact"
          className="hidden md:inline-flex items-center justify-center border border-accent text-accent px-6 py-2.5 text-xs font-sans font-medium uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-all duration-300"
        >
          Partner With Us
        </a>

        {/* Mobile hamburger */}
        <button
          type="button"
          aria-label={isMenuOpen ? "Close menu" : "Open menu"}
          aria-expanded={isMenuOpen}
          onClick={toggleMenu}
          className="md:hidden relative z-10 flex h-8 w-8 flex-col items-center justify-center gap-[6px]"
        >
          <span className={cn("block h-[1.5px] w-6 bg-foreground transition-all duration-300", isMenuOpen && "translate-y-[3.75px] rotate-45")} />
          <span className={cn("block h-[1.5px] w-6 bg-foreground transition-all duration-300", isMenuOpen && "-translate-y-[3.75px] -rotate-45")} />
        </button>
      </div>

      {/* Mobile dropdown */}
      <AnimatePresence>
        {isMenuOpen && (
          <motion.div
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: "auto" }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3, ease: [0.16, 1, 0.3, 1] }}
            className="md:hidden overflow-hidden border-t border-border bg-background/95 backdrop-blur-md"
          >
            <nav className="flex flex-col px-6 py-8 gap-6" aria-label="Mobile navigation">
              {NAV_ITEMS.map((item) => (
                <a  
                  key={item.href}
                  href={item.href}
                  onClick={closeMenu}
                  className={cn(navLinkClass, "text-sm")}
                >
                  {item.label}
                </a>
              ))}
              <a
                href="#contact"
                onClick={closeMenu}
                className="inline-flex items-center justify-center mt-2 border border-accent text-accent px-6 py-3 text-xs font-sans font-medium uppercase tracking-[0.15em] hover:bg-accent hover:text-accent-foreground transition-all duration-300"
              >
                Partner With Us
              </a>
            </nav>
          </motion.div>
        )}
      </AnimatePresence>
    </motion.header>
  );
}