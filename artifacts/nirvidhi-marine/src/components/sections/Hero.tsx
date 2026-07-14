import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import heroDiver from '@/assets/hero-diver.jpg';

export function Hero() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["0%", "40%"]);
  const opacity = useTransform(scrollYProgress, [0, 1], [1, 0]);

  return (
    <section ref={ref} className="relative h-[100dvh] w-full overflow-hidden bg-background">
      <motion.div style={{ y, opacity }} className="absolute inset-0 w-full h-full">
        <div className="absolute inset-0 bg-background/50 mix-blend-multiply z-10" />
        <div className="absolute inset-0 bg-gradient-to-b from-background/30 via-background/40 to-background z-10" />
        <img 
          src={heroDiver} 
          alt="Commercial diver underwater" 
          className="w-full h-full object-cover object-center scale-105" 
        />
      </motion.div>

      <div className="relative z-20 h-full flex flex-col justify-center pt-28 pb-16 px-6 md:px-12 lg:px-24 max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1.4, ease: [0.16, 1, 0.3, 1], delay: 0.2 }}
        >
          <h1 className="text-5xl md:text-6xl lg:text-8xl font-serif font-medium text-foreground leading-[1.08] tracking-tight mb-8">
            Building India's <br />
            <span className="text-muted-foreground italic font-light">Underwater</span> Workforce.
          </h1>
          <p className="max-w-2xl text-muted-foreground font-sans text-lg md:text-xl font-light leading-relaxed">
            Developing an internationally compliant underwater workforce and the advanced marine robotics base—ROV, AUV, and ASV—required to power the next generation of the blue economy.
          </p>
        </motion.div>
      </div>
    </section>
  );
}
