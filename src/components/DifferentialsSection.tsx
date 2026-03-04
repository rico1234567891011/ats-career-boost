import { motion } from "framer-motion";
import { X, Check } from "lucide-react";

const others = [
  "Templates prontos e genéricos",
  "Currículo padronizado para todos",
  "Inserção aleatória de palavras-chave",
  "Foco apenas na aparência visual",
];

const ours = [
  "Narrativa estratégica personalizada",
  "Otimização técnica para ATS",
  "Aderência real à vaga específica",
  "Performance medida por score interno",
];

const DifferentialsSection = () => {
  return (
    <section className="py-24 md:py-32 relative">
      <div className="container px-6">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Nosso Diferencial</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Estratégia, não <span className="text-gradient">cosmética</span>
          </h2>
        </motion.div>

        <div className="grid md:grid-cols-2 gap-6 max-w-4xl mx-auto">
          <motion.div
            initial={{ opacity: 0, x: -20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl border border-border bg-card"
          >
            <p className="font-display font-semibold text-text-tertiary mb-6 uppercase text-sm tracking-wider">Abordagem comum</p>
            <ul className="space-y-4">
              {others.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-text-secondary">
                  <X className="w-5 h-5 text-destructive flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.5 }}
            className="p-8 rounded-xl border border-glow bg-card glow-subtle"
          >
            <p className="font-display font-semibold text-primary mb-6 uppercase text-sm tracking-wider">Nossa abordagem</p>
            <ul className="space-y-4">
              {ours.map((item, i) => (
                <li key={i} className="flex items-start gap-3">
                  <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                  <span>{item}</span>
                </li>
              ))}
            </ul>
          </motion.div>
        </div>
      </div>
    </section>
  );
};

export default DifferentialsSection;
