import Header from "@/components/Header";
import Hero from "@/components/Hero";
import Plans from "@/components/Plans";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FinalCTA from "@/components/FinalCTA";
import InstagramFloat from "@/components/InstagramFloat";
import ScrollProgress from "@/components/ScrollProgress";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";

const Index = () => {
  return (
    <div className="min-h-screen">
      <StructuredData />
      <GoogleAnalytics />
      <PerformanceOptimizer />
      <a href="#main-content" className="skip-to-content">
        Pular para o conteúdo principal
      </a>
      <ScrollProgress />
      <Header />
      <InstagramFloat />

      <main id="main-content">
        <Hero />
        <Benefits />
        <Plans />
        <Testimonials />
        <FinalCTA />
      </main>

      {/* Footer */}
      <footer className="bg-gym-dark text-white py-8">
        <div className="container mx-auto px-4 text-center">
          <p className="text-gray-400">
            © 2025 Full Force Academia. Todos os direitos reservados.
          </p>
          <p className="text-sm text-gray-500 mt-2">
            Matupá, Mato Grosso
          </p>
        </div>
      </footer>
    </div>
  );
};

export default Index;