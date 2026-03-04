import { motion } from "framer-motion";
import { Target, Layers, Cpu, MessageSquare } from "lucide-react";

const steps = [
  { num: "01", icon: Target, title: "Análise Estratégica da Vaga", desc: "Mapeamos requisitos explícitos e implícitos da descrição da vaga para definir a estratégia de otimização." },
  { num: "02", icon: Layers, title: "Reestruturação Inteligente", desc: "Reorganizamos sua experiência para maximizar a correspondência semântica com a posição desejada." },
  { num: "03", icon: Cpu, title: "Otimização para ATS", desc: "Ajustamos formato, palavras-chave e estrutura para garantir compatibilidade com parsers automatizados." },
  { num: "04", icon: MessageSquare, title: "Apoio no Cadastro", desc: "Orientamos no preenchimento da plataforma e nas respostas estratégicas para cada etapa." },
];

const HowItWorksSection = () => {
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
          <p className="text-primary font-medium text-sm uppercase tracking-widest mb-4">Como Funciona</p>
          <h2 className="font-display text-3xl md:text-5xl font-bold">
            Processo em <span className="text-gradient">4 etapas</span>
          </h2>
        </motion.div>

        <div className="max-w-3xl mx-auto space-y-6">
          {steps.map((step, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, x: -20 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: i * 0.1 }}
              className="group flex gap-6 p-6 rounded-xl border border-border bg-card hover:border-glow hover:glow-subtle transition-all duration-300"
            >
              <div className="flex-shrink-0">
                <span className="font-display text-3xl font-bold text-text-tertiary group-hover:text-primary transition-colors">{step.num}</span>
              </div>
              <div>
                <div className="flex items-center gap-3 mb-2">
                  <step.icon className="w-5 h-5 text-primary" />
                  <h3 className="font-display font-semibold text-lg">{step.title}</h3>
                </div>
                <p className="text-text-secondary text-sm leading-relaxed">{step.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default HowItWorksSection;
