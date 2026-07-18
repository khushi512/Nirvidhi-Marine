import { motion } from 'framer-motion';
import rovImg from '@/assets/rov.jpg';
import auvImg from '@/assets/auv.jpg';
import asvImg from '@/assets/asv.jpg';

const PLATFORMS = [
  { tag: "ROV", name: "Remotely Operated Vehicle", description: "Tethered systems for live subsea inspection, offshore asset maintenance, and deep-water intervention under direct pilot control.", img: rovImg, alt: "Remotely operated vehicle (ROV) for subsea operations" },
  { tag: "AUV", name: "Autonomous Underwater Vehicle", description: "Untethered platforms for seabed mapping, survey, and long-duration data collection across the water column without human intervention.", img: auvImg, alt: "Autonomous underwater vehicle (AUV) on ocean surface" },
  { tag: "ASV", name: "Autonomous Surface Vehicle", description: "Uncrewed surface craft for hydrographic survey, environmental monitoring, and real-time data relay between subsea assets and shore.", img: asvImg, alt: "Autonomous surface vehicle (ASV) conducting a marine survey" },
];

export function Products() {
  return (
    <section id="products" className="relative w-full scroll-mt-24 py-24 md:py-32 bg-secondary/20 border-t border-border">
      <div className="max-w-7xl mx-auto px-6 md:px-12 lg:px-24">
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 1 }}
          className="max-w-3xl mb-16 md:mb-20"
        >
          <p className="text-primary font-sans font-semibold tracking-[0.2em] text-xs uppercase mb-6 flex items-center gap-4">
            <span className="w-8 h-[1px] bg-primary"></span>
            Designed, Assembled, Validated in India
          </p>
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-serif text-foreground mb-6 leading-[1.1]">
            ROV, AUV & ASV Platforms
          </h2>
          <p className="text-muted-foreground text-lg leading-relaxed font-light">
            Our marine robotics arm develops uncrewed underwater and surface systems for
            inspection, survey, and data collection across the offshore industry.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 lg:gap-10">
          {PLATFORMS.map((platform, index) => (
            <motion.div
              key={platform.tag}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-80px" }}
              transition={{ duration: 0.9, delay: index * 0.15 }}
              className="group relative flex flex-col overflow-hidden rounded-sm border border-border/50 bg-background"
            >
              <div className="relative w-full aspect-[4/3] overflow-hidden">
                <img src={platform.img} alt={platform.alt} className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105" />
                <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/10 to-transparent pointer-events-none" />
                <p className="absolute bottom-4 left-5 text-[11px] uppercase tracking-[0.25em] text-accent font-semibold">{platform.tag}</p>
              </div>
              <div className="p-6 md:p-7 flex flex-col gap-3">
                <p className="text-lg font-serif text-foreground leading-snug">{platform.name}</p>
                <p className="text-sm text-muted-foreground leading-relaxed font-light">{platform.description}</p>
              </div>
            </motion.div>
          ))}
        </div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-60px" }}
          transition={{ duration: 0.9, delay: 0.4 }}
          className="mt-16 pt-12 border-t border-border flex flex-col sm:flex-row gap-10 sm:gap-16"
        >
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">Phase II Development</p>
            <p className="text-base text-foreground font-serif tracking-wide">ROV, AUV & ASV Robotics Hub</p>
          </div>
          <div>
            <p className="text-[11px] uppercase tracking-[0.2em] text-primary font-semibold mb-2">Compliance Framework</p>
            <p className="text-base text-foreground font-serif tracking-wide">IMCA / ADCI / ISO-Aligned Curriculum</p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}