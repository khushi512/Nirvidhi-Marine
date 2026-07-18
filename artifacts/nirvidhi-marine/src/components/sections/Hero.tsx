// src/components/sections/Hero.tsx
import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { ArrowDown } from 'lucide-react';
import { cn } from '@/lib/utils';
import heroVideo from '@/assets/hero-bg.mp4';

const scrollToSection = (href: string) => {
  document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
};

export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);

  const { scrollYProgress } = useScroll({
    target:  sectionRef,
    offset: ['start start', 'end start'],
  });
  const y       = useTransform(scrollYProgress, [0, 1], ['0%',  '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  return (
    <section
      ref={sectionRef}
      className="relative h-[100dvh] w-full overflow-hidden bg-background"
    >
      {/* Video background */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        muted
        loop
        playsInline
        preload="auto"
      />

      {/* Dark overlays for text legibility */}
      <div className="absolute inset-0 bg-background/50 mix-blend-multiply z-10" />
      <div className="absolute inset-0 bg-gradient-to-b from-background/20 via-background/40 to-background z-10" />

      {/* Content (parallax on scroll) */}
      <motion.div
        style={{ y, opacity }}
        className="relative z-20 h-full max-w-7xl mx-auto px-6 md:px-12 lg:px-24 flex flex-col justify-between pt-28 pb-12"
      >
 
        {/* Top label */}
        <motion.div
          className="flex items-center gap-3"
          initial={{ opacity: 0, y: -10 }}
          animate={{ opacity: 1,  y: 0   }}
          transition={{ duration: 0.6, delay: 0.3 }}
        >
          {/*<span className="font-mono text-xs text-primary/60 tracking-[0.2em]">01</span>
          <span className="w-6 h-[1px] bg-primary/40" />
          <span className="text-xs uppercase tracking-[0.2em] text-muted-foreground font-sans font-medium">
            Nirvidhi Marine
          </span>
          */}
        </motion.div>
        {/* Headline + subtitle + CTA */}
        <div>
          <motion.h1
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1,  y: 0  }}
            transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
            className="text-5xl md:text-6xl lg:text-8xl font-serif font-medium text-foreground leading-[1.08] tracking-tight mb-6"
          >
            Building India's <br />
            <span className="text-muted-foreground italic font-light">
              Underwater
            </span>{' '}
            Workforce.
          </motion.h1>

          <motion.p
            className="max-w-xl text-muted-foreground font-sans text-base md:text-lg font-light leading-relaxed mb-8"
            initial={{ opacity: 0, y: 14 }}
            animate={{ opacity: 1,  y: 0  }}
            transition={{ duration: 0.7, delay: 0.5 }}
          >
            Developing an internationally compliant underwater workforce and the advanced marine robotics base—ROV, AUV, and ASV—required to power the next generation of the blue economy.
          </motion.p>

          <motion.button
            onClick={() => scrollToSection('#about')}
            className="inline-flex items-center gap-3 text-xs uppercase tracking-[0.2em] text-primary font-medium font-sans group"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1  }}
            transition={{ duration: 0.6, delay: 0.7 }}
          >
            <span>Discover More</span>
            <ArrowDown className="w-3.5 h-3.5 transition-transform duration-300 group-hover:translate-y-1" />
          </motion.button>
        </div>

        {/* Bottom scroll cue — replaces old progress dots + arrows */}
        <motion.div
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ duration: 0.8, delay: 1 }}
          className="flex items-center justify-center"
        >
          <button
            onClick={() => scrollToSection('#about')}
            aria-label="Scroll to next section"
            className={cn(
              'w-11 h-11 rounded-full border border-foreground/20 backdrop-blur-sm',
              'flex items-center justify-center',
              'text-foreground/50 hover:text-foreground hover:border-foreground/60',
              'transition-all duration-300 animate-bounce'
            )}
          >
            <ArrowDown className="w-4 h-4" />
          </button>
        </motion.div>
      </motion.div>
    </section>
  );
}