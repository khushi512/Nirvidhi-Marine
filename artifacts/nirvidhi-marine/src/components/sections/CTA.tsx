import { motion } from 'framer-motion';

export function CTA() {
  return (
    <section className="relative w-full py-32 md:py-40 bg-background flex items-center justify-center text-center">
      {/* Subtle radial gradient to draw focus */}
      <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_var(--tw-gradient-stops))] from-secondary/40 via-background to-background z-0 pointer-events-none" />
      
      <div className="max-w-4xl mx-auto px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
        >
          <h2 className="text-5xl md:text-7xl lg:text-[5.5rem] font-serif text-foreground mb-10 leading-[1.05]">
            Build the Blue Economy.
          </h2>
          <p className="text-xl md:text-2xl text-muted-foreground mb-16 font-light max-w-2xl mx-auto leading-relaxed">
            We are seeking strategic partners and investors to help bring our planned Vijaydurg campus to life.
          </p>
          <a 
            href="#contact"
            className="group relative inline-flex items-center justify-center border border-accent bg-transparent text-accent px-12 py-5 font-sans font-medium uppercase tracking-[0.2em] text-sm overflow-hidden transition-all duration-500"
          >
            <span className="absolute inset-0 bg-accent w-0 group-hover:w-full transition-all duration-500 ease-out"></span>
            <span className="relative z-10 group-hover:text-accent-foreground transition-colors duration-500">Initiate Conversation</span>
          </a>
        </motion.div>
      </div>
    </section>
  );
}
