import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymHero from "@/assets/gym-hero.png";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/556699100808?text=Olá! Quero minha aula grátis na Full Force Academia", "_blank");
  };

  return (
   <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-28 pb-10 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src={gymHero}
          alt="Full Force Academia Equipment"
          className="w-full h-full object-cover"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/90 to-gym-dark/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            Full Force — A academia de{" "}
            <span className="text-primary">Matupá, MT</span>
          </h1>
          
          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl">
            Treinos das 04h30 às 21h · 1 semana grátis para novos e ex-alunos
          </p>
          
          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            Aqui você não treina sozinho. Nossa equipe te acompanha de perto em cada etapa.
          </p>

          <Button 
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto transition-smooth shadow-yellow hover:scale-105 animate-pulse-glow"
          >
            <MessageCircle className="mr-3 h-6 w-6" />
            Aula Grátis — Reserve Agora
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
