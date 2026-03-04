import { motion } from "framer-motion";
import { ArrowRight } from "lucide-react";

const CTA_URL = "https://helpful-kelpie-a6831b.netlify.app/";

const FinalCTASection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      {/* Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] rounded-full bg-primary/5 blur-[100px]" />

      <div className="container px-6 relative z-10">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center max-w-3xl mx-auto"
        >
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Pare de ser eliminado<br />
            <span className="text-gradient">por algoritmo.</span>
          </h2>
          <p className="text-text-secondary text-lg mb-10 max-w-xl mx-auto">
            Seu próximo emprego pode depender de como seu currículo é lido por uma máquina. 
            Otimize agora.
          </p>

          <motion.a
            href={CTA_URL}
            target="_blank"
            rel="noopener noreferrer"
            whileHover={{ scale: 1.02 }}
            whileTap={{ scale: 0.98 }}
            className="inline-flex items-center gap-3 px-10 py-5 rounded-lg bg-primary text-primary-foreground font-semibold text-lg glow-primary transition-all hover:brightness-110"
          >
            Aprimorar meu currículo para passar na ATS
            <ArrowRight className="w-5 h-5" />
          </motion.a>
        </motion.div>
      </div>
    </section>
  );
};

export default FinalCTASection;
