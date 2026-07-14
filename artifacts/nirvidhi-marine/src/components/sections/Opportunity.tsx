import { motion } from "framer-motion";

export function Opportunity() {
  return (
    <section id="operations" className="w-full scroll-mt-24 py-24 md:py-32 bg-background relative flex items-center justify-center text-center px-6">
      <div className="max-w-4xl mx-auto">
        <motion.p 
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-accent font-sans font-semibold tracking-[0.2em] text-xs md:text-sm uppercase mb-10"
        >
          The Blue Economy Mandate
        </motion.p>
        <motion.h2 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: 0.1, duration: 1 }}
          className="text-3xl md:text-4xl lg:text-5xl font-serif font-normal text-foreground leading-[1.35]"
        >
          The offshore industry demands <span className="italic text-muted-foreground">uncompromising competence</span>. We are closing the gap between theoretical knowledge and deep-water execution—building a technologically advanced, internationally compliant underwater workforce.
        </motion.h2>
      </div>
    </section>
  );
}
