import HeroSection from "@/components/HeroSection";
import ProblemSection from "@/components/ProblemSection";
import HowItWorksSection from "@/components/HowItWorksSection";
import DifferentialsSection from "@/components/DifferentialsSection";
import AuthoritySection from "@/components/AuthoritySection";
import FinalCTASection from "@/components/FinalCTASection";

const Index = () => {
  return (
    <main className="bg-background text-foreground overflow-x-hidden">
      <HeroSection />
      <ProblemSection />
      <HowItWorksSection />
      <DifferentialsSection />
      <AuthoritySection />
      <FinalCTASection />
      
      {/* Footer */}
      <footer className="border-t border-border py-8">
        <div className="container px-6 text-center">
          <p className="text-text-tertiary text-sm">
            © {new Date().getFullYear()} — Otimização estratégica de currículos para ATS
          </p>
        </div>
      </footer>
    </main>
  );
};

export default Index;
