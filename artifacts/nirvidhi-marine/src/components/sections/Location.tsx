import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import harbourImg from '@/assets/harbour-v2.jpg';

export function Location() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);

  return (
    <section id="campus" className="relative w-full scroll-mt-24 py-24 md:py-32 bg-background overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, x: -40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <h2 className="text-4xl md:text-5xl lg:text-7xl font-serif font-medium text-foreground mb-8 leading-[1.1]">
              Vijaydurg:<br />
              <span className="italic text-muted-foreground">The Natural Harbour.</span>
            </h2>
            <div className="w-16 h-[1px] bg-accent mb-10"></div>
            <p className="text-muted-foreground text-lg mb-8 leading-relaxed font-light">
              We have identified Vijaydurg on the Konkan coast as the site for our flagship training and technology campus, now in the planning stage. Its immediate access to deep water and real-world maritime conditions makes it unsuited to the limitations of simulated pool training.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              This natural harbour will provide the harsh, authentic offshore environment needed to forge competent commercial divers and resilient marine technologies.
            </p>
          </motion.div>
          
          <motion.div
            initial={{ opacity: 0, scale: 0.95 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.2 }}
            className="relative aspect-[4/5] lg:aspect-square overflow-hidden rounded-sm"
          >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[124%] -top-[12%]">
              <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
              <img src={harbourImg} alt="Vijaydurg Natural Harbour" className="w-full h-full object-cover grayscale-[0.1] contrast-125" />
            </motion.div>
            <div className="absolute -bottom-6 -left-6 w-32 h-32 md:w-48 md:h-48 border border-accent z-20 pointer-events-none hidden md:block" />
          </motion.div>
        </div>
      </div>
    </section>
  );
}
