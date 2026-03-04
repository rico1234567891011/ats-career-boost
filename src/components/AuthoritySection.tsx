import { motion } from "framer-motion";
import { Brain, GitCompare, Scale, FileCode } from "lucide-react";

const principles = [
  { icon: Brain, title: "Similaridade Semântica", desc: "Algoritmos comparam o significado do seu currículo com a descrição da vaga, não apenas palavras exatas." },
  { icon: GitCompare, title: "Matching de Requisitos", desc: "Cada requisito listado na vaga é verificado contra suas qualificações de forma automatizada." },
  { icon: Scale, title: "Densidade Equilibrada", desc: "Palavras-chave em excesso penalizam. O equilíbrio estratégico é o que gera alto score." },
  { icon: FileCode, title: "Estrutura Compatível", desc: "Parsers automatizados precisam de formatação específica para extrair dados corretamente." },
];

const AuthoritySection = () => {
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
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Base Técnica</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Baseado em como o <span className="text-gradient">ATS realmente funciona</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Nosso processo é fundamentado nos princípios reais de funcionamento 
            de sistemas como a Gupy.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 gap-4 max-w-4xl mx-auto">
          {principles.map((p, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="flex gap-4 p-6 rounded-xl border border-border bg-card hover:border-glow transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center flex-shrink-0">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <div>
                <h3 className="font-display font-semibold mb-1">{p.title}</h3>
                <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default AuthoritySection;
