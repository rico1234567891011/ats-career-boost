import { motion } from "framer-motion";
import { FileX, Search, BarChart3, Code, EyeOff } from "lucide-react";

const problems = [
  { icon: Search, title: "Correspondência Semântica", desc: "O ATS compara seu currículo com a vaga usando análise semântica, não leitura humana." },
  { icon: Code, title: "Palavras-chave Estratégicas", desc: "Termos específicos precisam estar posicionados corretamente para serem identificados." },
  { icon: BarChart3, title: "Score Interno Invisível", desc: "Você recebe uma nota que nunca vê — e ela decide se um humano lerá seu currículo." },
  { icon: FileX, title: "Estrutura Compatível", desc: "Formatação inadequada impede o parser de extrair suas informações corretamente." },
  { icon: EyeOff, title: "Eliminação Silenciosa", desc: "Candidatos qualificados são descartados por estrutura errada, não por falta de capacidade." },
];

const container = {
  hidden: {},
  show: { transition: { staggerChildren: 0.1 } },
};

const item = {
  hidden: { opacity: 0, y: 20 },
  show: { opacity: 1, y: 0, transition: { duration: 0.5 } },
};

const ProblemSection = () => {
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
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">O Problema</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold mb-6">
            Por que candidatos qualificados<br className="hidden md:block" /> são{" "}
            <span className="text-gradient">rejeitados automaticamente</span>
          </h2>
          <p className="text-text-secondary text-lg max-w-2xl mx-auto">
            Sistemas ATS como a Gupy filtram currículos antes de qualquer recrutador. 
            Entenda como essa triagem invisível funciona.
          </p>
        </motion.div>

        <motion.div
          variants={container}
          initial="hidden"
          whileInView="show"
          viewport={{ once: true }}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-5xl mx-auto"
        >
          {problems.map((p, i) => (
            <motion.div
              key={i}
              variants={item}
              className="group p-6 rounded-xl border border-border bg-card hover:border-glow hover:glow-subtle transition-all duration-300"
            >
              <div className="w-10 h-10 rounded-lg bg-primary/10 flex items-center justify-center mb-4 group-hover:bg-primary/20 transition-colors">
                <p.icon className="w-5 h-5 text-primary" />
              </div>
              <h3 className="font-display font-semibold text-lg mb-2">{p.title}</h3>
              <p className="text-text-secondary text-sm leading-relaxed">{p.desc}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default ProblemSection;
