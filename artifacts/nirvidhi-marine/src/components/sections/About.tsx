import { motion } from 'framer-motion';
import { AboutTeam } from './AboutTeam';
import diversImg from '@/assets/reef-divers.jpg';

export function About() {
  return (
    <section id="about" className="relative w-full scroll-mt-24 py-24 md:py-32 bg-background border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 lg:gap-20 items-center mb-20">
          <motion.div
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1 }}
          >
            <p className="text-accent font-sans font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
              <span className="w-8 h-[1px] bg-accent"></span>
              About Us
            </p>
            <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-8 leading-[1.1]">
              Founded by Ex-Marcos.<br />Built for the Blue Economy.
            </h2>
            {/* DRAFT — replace with final founding story once details are shared */}
            <p className="text-muted-foreground text-lg leading-relaxed font-light">
              Nirvidhi Marine was founded by a team of former Indian Navy officers who identified
              a critical gap in India's underwater workforce — the need for internationally
              compliant diving, offshore safety, and marine robotics training built to the
              standards the global offshore industry demands.
            </p>
          </motion.div>

          {/* Image */}
          <motion.div
            initial={{ opacity: 0, scale: 0.96 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 1.1, delay: 0.15 }}
            className="relative aspect-[4/3] overflow-hidden rounded-sm"
          >
            <div className="absolute inset-0 bg-primary/10 mix-blend-overlay z-10" />
            <img
              src={diversImg}
              alt="Commercial divers on a reef survey"
              className="w-full h-full object-cover"
            />
            <div className="absolute -bottom-5 -right-5 w-24 h-24 md:w-32 md:h-32 border border-accent z-20 pointer-events-none hidden md:block" />
          </motion.div>
        </div>
{/*}
        <div className="border-t border-border pt-16">
          <AboutTeam />
        </div>
        */}
      </div>
    </section>
  );
}