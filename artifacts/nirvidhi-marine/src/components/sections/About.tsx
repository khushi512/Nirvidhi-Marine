import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import gearImg from '@/assets/gear.jpg';

export function About() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-10%", "10%"]);

  return (
    <section className="relative w-full py-24 md:py-32 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center">
          <motion.div
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
            className="order-2 lg:order-1 relative aspect-[4/3] lg:aspect-[3/4] overflow-hidden rounded-sm"
          >
            <motion.div style={{ y }} className="absolute inset-0 w-full h-[120%] -top-[10%]">
              <div className="absolute inset-0 bg-background/30 z-10 mix-blend-overlay" />
              <img src={gearImg} alt="Commercial diving gear" className="w-full h-full object-cover object-center grayscale-[0.2]" />
            </motion.div>
            <div className="absolute top-8 -right-8 w-full h-full border border-primary/20 z-0 hidden lg:block" />
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 40 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1, delay: 0.2 }}
            className="order-1 lg:order-2"
          >
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-10 leading-tight">
              Building the standard for marine skill development.
            </h2>
            <div className="space-y-6 text-muted-foreground text-lg leading-relaxed font-sans font-light">
              <p>
                Nirvidhi Marine is designing a rigorous, NSQF-aligned training pathway for commercial diving and offshore safety, mapped to international standards—IMCA, ADCI, and ISO—so every diver we certify is fit for global offshore deployment.
              </p>
              <p>
                Our curriculum is built on the uncompromising realities of the offshore industry and its accelerating shift toward technology. We will not simulate—we will immerse. Future trainees will be exposed to the exact conditions, equipment, and pressures they will face in the deep ocean, alongside the ROV, AUV, and ASV systems reshaping how that work gets done.
              </p>
            </div>
            
            <div className="mt-16 grid grid-cols-1 sm:grid-cols-2 gap-10 border-t border-border pt-12">
              <div>
                <p className="text-4xl font-serif text-primary mb-4 italic">01.</p>
                <p className="text-sm uppercase tracking-[0.15em] text-foreground font-semibold mb-3">Commercial Diving</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Industry-grade underwater welding, asset inspection, and deep-water repair.</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-primary mb-4 italic">02.</p>
                <p className="text-sm uppercase tracking-[0.15em] text-foreground font-semibold mb-3">Offshore Safety</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Survival protocols, emergency response, and critical hazard mitigation.</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-primary mb-4 italic">03.</p>
                <p className="text-sm uppercase tracking-[0.15em] text-foreground font-semibold mb-3">Marine Robotics</p>
                <p className="text-sm text-muted-foreground leading-relaxed">ROV, AUV, and ASV operation for inspection, survey, and subsea intervention.</p>
              </div>
              <div>
                <p className="text-4xl font-serif text-primary mb-4 italic">04.</p>
                <p className="text-sm uppercase tracking-[0.15em] text-foreground font-semibold mb-3">International Compliance</p>
                <p className="text-sm text-muted-foreground leading-relaxed">Curriculum mapped to IMCA, ADCI, and ISO underwater-operations standards.</p>
              </div>
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
