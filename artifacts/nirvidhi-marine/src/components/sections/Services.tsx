import { motion, useScroll, useTransform } from 'framer-motion';
import { useRef } from 'react';
import gearImg from '@/assets/gear.jpg';

const SERVICES = [
  { num: "01", title: "Quay / Jetty Inspection", desc: "Underwater imagery, sonar and defect register." },
  { num: "02", title: "Bathymetry / Seabed Change", desc: "Under-keel, dredging and harbour data support." },
  { num: "03", title: "Hull / Mooring Inspection", desc: "Rapid underwater condition reports." },
  { num: "04", title: "Intake / Outfall / Reservoir", desc: "Civil infrastructure and utility support." },
  { num: "05", title: "Post-Event Assessment", desc: "Storm, incident and emergency underwater survey." },
  { num: "06", title: "Digital Asset Baseline", desc: "Recurring condition history and planning dashboard." },
];

export function Services() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-8%", "8%"]);

  return (
    <section id="services" className="relative w-full scroll-mt-24 py-24 md:py-32 bg-secondary/30 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Full-width heading block */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.9 }}
          className="mb-16"
        >
          <p className="text-accent font-sans font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-accent"></span>
            Asset Integrity & Inspection
          </p>
          {/*h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground leading-[1.1] whitespace-nowrap">
            Immediate value, from day one.
          </h2>
          */}
          
        </motion.div>

        {/* Two-column body, top-aligned */}
        <div className="grid grid-cols-1 lg:grid-cols-[minmax(0,1fr)_minmax(0,1.3fr)] gap-16 lg:gap-20 items-start">

          {/* Left — intro text, image, closing quote */}
          <motion.div
            ref={ref}
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-muted-foreground text-lg leading-relaxed font-light mb-10">
              We start with services that help ports and coastal assets while creating real
              training and research evidence.
            </p>

            <div className="relative aspect-[4/5] overflow-hidden rounded-sm mb-10">
              <motion.div style={{ y }} className="absolute inset-0 w-full h-[116%] -top-[8%]">
                <div className="absolute inset-0 bg-background/20 z-10 mix-blend-overlay" />
                <img src={gearImg} alt="Underwater inspection equipment" className="w-full h-full object-cover grayscale-[0.15]" />
              </motion.div>
            </div>

            {/*
            <p className="text-lg font-serif italic text-foreground pt-8 border-t border-border">
              One assignment can generate revenue, trainee exposure, data, research, and
              equipment feedback.
            </p>
            */}
          </motion.div>

          {/* Right — numbered list, top-aligned with left column */}
          <div className="flex flex-col">
            {SERVICES.map((s, i) => (
              <motion.div
                key={s.num}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, margin: "-60px" }}
                transition={{ duration: 0.6, delay: i * 0.07 }}
                className="grid grid-cols-[auto_1fr] gap-6 py-8 border-b border-border first:pt-0 last:border-b-0"
              >
                <span className="font-serif italic text-3xl text-primary/70 leading-none pt-1">
                  {s.num}
                </span>
                <div>
                  <p className="text-foreground font-serif text-xl mb-2 leading-snug">{s.title}</p>
                  <p className="text-sm md:text-base text-muted-foreground leading-relaxed font-light">{s.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}