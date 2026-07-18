import { motion, useScroll, useTransform, AnimatePresence } from 'framer-motion';
import { useRef, useState } from 'react';
import { Plus } from 'lucide-react';
import harbourImg from '@/assets/harbour-v2.jpg';

const VERTICALS = [
  { title: "Skills & Qualifications Academy", desc: "Coastal employment, NCVET/NSQF pathway, subsea workforce. The Academy delivers a rigorous, NSQF-aligned training pathway for commercial diving and offshore safety, mapped to IMCA, ADCI, and ISO standards, immersing trainees in the exact conditions and equipment of deep-ocean work rather than simulating them." },
  { title: "Subsea Operations & Asset Integrity", desc: "Port, hull, jetty, bathymetry, underwater infrastructure — the operational services arm generating real assignments from day one." },
  { title: "Marine Robotics & Autonomous Systems", desc: "ROV, AUV, USV/ASV operator training and technology capability, built around the same platforms used in live operations." },
  { title: "Applied Research & Maritime Data", desc: "Datasets, digital twins, AI inspection, and sponsored research generated from every assignment and training cycle." },
  { title: "Vijaydurg Maritime Living Lab", desc: "A structured simulation-to-sea validation environment for testing new equipment, protocols, and platforms before offshore deployment." },
  { title: "Assembly, Repair & MRO Cluster", desc: "Make in India localisation, spares, repair, and supplier base — the manufacturing and maintenance backbone of the campus." },
];

const VALIDATION_STEPS = ["Simulation", "Bench Test", "Controlled Water", "Sheltered Harbour", "Coastal Trial", "User Demo"];

export function Campus() {
  const ref = useRef(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-12%", "12%"]);
  const [openIndex, setOpenIndex] = useState<number | null>(0);

  return (
    <section id="campus" className="relative w-full scroll-mt-24 py-24 md:py-32 bg-background overflow-hidden border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        {/* Block A — Vijaydurg story */}
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-24 items-center mb-28">
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
              We have identified Vijaydurg on the Konkan coast as the site for our flagship
              training and technology campus, now in the planning stage. Its immediate access
              to deep water and real-world maritime conditions makes it unsuited to the
              limitations of simulated pool training.
            </p>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              This natural harbour will provide the harsh, authentic offshore environment needed
              to forge competent commercial divers and resilient marine technologies.
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

        {/* Block B — Six verticals, as an expandable list */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="border-t border-border pt-16 mb-28"
        >
          <div className="max-w-2xl mb-12">
            <p className="text-primary font-sans font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-primary"></span>
              One Operating Cycle
            </p>
            <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-[1.15]">
              Six integrated verticals.
            </h3>
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              These are not separate campuses — they are one cycle: train, operate, research,
              test, validate, repair and scale.
            </p>
          </div>

          <div className="border-t border-border">
            {VERTICALS.map((v, i) => {
              const isOpen = openIndex === i;
              return (
                <div key={v.title} className="border-b border-border">
                  <button
                    onClick={() => setOpenIndex(isOpen ? null : i)}
                    className="w-full flex items-center justify-between gap-6 py-6 text-left group"
                  >
                    <div className="flex items-baseline gap-6">
                      <span className="font-mono text-xs text-muted-foreground/50 w-6">
                        {String(i + 1).padStart(2, '0')}
                      </span>
                      <span className="font-serif text-xl md:text-2xl text-foreground group-hover:text-primary transition-colors duration-300">
                        {v.title}
                      </span>
                    </div>
                    <Plus
                      className={`w-5 h-5 text-muted-foreground flex-shrink-0 transition-transform duration-300 ${isOpen ? 'rotate-45' : ''}`}
                    />
                  </button>
                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ height: 0, opacity: 0 }}
                        animate={{ height: 'auto', opacity: 1 }}
                        exit={{ height: 0, opacity: 0 }}
                        transition={{ duration: 0.35, ease: [0.16, 1, 0.3, 1] }}
                        className="overflow-hidden"
                      >
                        <p className="text-muted-foreground text-base leading-relaxed font-light pl-12 pb-8 max-w-2xl">
                          {v.desc}
                        </p>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </div>
              );
            })}
          </div>
        </motion.div>

        {/* Block C — Living Lab, as a real timeline 
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="border-t border-border pt-16"
        >
          <p className="text-primary font-sans font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Strategic Location Use
          </p>
          <h3 className="text-3xl md:text-4xl font-serif text-foreground mb-6 leading-[1.15]">
            Vijaydurg Maritime Living Lab & Sea-Validation Facility.
          </h3>
          <p className="text-muted-foreground text-lg leading-relaxed font-light mb-20 max-w-3xl">
            The natural-harbour and creek-to-coast environment is examined as a progressive
            validation pathway.
          </p>

           Timeline 
          <div className="relative hidden md:block mb-20 px-4">
            <div className="absolute top-1/2 left-0 right-0 h-[1px] bg-border -translate-y-1/2" />
            <div className="relative flex justify-between">
              {VALIDATION_STEPS.map((step, i) => (
                <motion.div
                  key={step}
                  initial={{ opacity: 0, y: 15 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true, margin: "-60px" }}
                  transition={{ duration: 0.5, delay: i * 0.1 }}
                  className={`flex flex-col items-center gap-4 ${i % 2 === 0 ? 'flex-col' : 'flex-col-reverse'}`}
                >
                  {i % 2 === 0 ? (
                    <>
                      <span className="text-xs uppercase tracking-[0.1em] text-foreground font-sans font-medium whitespace-nowrap -mt-10">
                        {step}
                      </span>
                      <span className="w-3 h-3 rounded-full bg-primary border-4 border-background" />
                    </>
                  ) : (
                    <>
                      <span className="w-3 h-3 rounded-full bg-accent border-4 border-background" />
                      <span className="text-xs uppercase tracking-[0.1em] text-foreground font-sans font-medium whitespace-nowrap -mb-10">
                        {step}
                      </span>
                    </>
                  )}
                </motion.div>
              ))}
            </div>
          </div>

           Mobile fallback — simple vertical list 
          <div className="flex flex-col gap-4 mb-16 md:hidden">
            {VALIDATION_STEPS.map((step, i) => (
              <div key={step} className="flex items-center gap-4">
                <span className="w-2.5 h-2.5 rounded-full bg-primary flex-shrink-0" />
                <span className="text-sm uppercase tracking-[0.1em] text-foreground font-sans font-medium">{step}</span>
              </div>
            ))}
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-10 pt-10 border-t border-border">
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-foreground font-semibold mb-3">
                What the Living Lab Delivers
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                Test plans, readiness reviews, operating windows, telemetry, mission evidence,
                safety controls, and university/startup access and stakeholder demonstrations.
              </p>
            </div>
            <div>
              <p className="text-xs uppercase tracking-[0.15em] text-foreground font-semibold mb-3">
                Why It Matters
              </p>
              <p className="text-sm text-muted-foreground leading-relaxed font-light">
                It converts Vijaydurg from a passive location into a structured maritime
                technology and sea-validation asset for Maharashtra.
              </p>
            </div>
          </div>
        </motion.div>
*/}
      </div>
    </section>
  );
}