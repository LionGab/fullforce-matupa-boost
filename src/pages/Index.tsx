import Header from "@/components/Header";
import Hero from "@/components/Hero";
import PlansComparison from "@/components/PlansComparison";
import Benefits from "@/components/Benefits";
import Testimonials from "@/components/Testimonials";
import FAQ from "@/components/FAQ";
import FinalCTA from "@/components/FinalCTA";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import ReactivationBanner from "@/components/ReactivationBanner";
import InstagramFloat from "@/components/InstagramFloat";

const Index = () => {
  return (
    <div className="min-h-screen">
      <Header />
      <ReactivationBanner />
      <WhatsAppFloat />
      <InstagramFloat />

      <main>
        <Hero />
        <PlansComparison />
        <Benefits />
        <FinalCTA />
        <Testimonials />
        <FAQ />
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
