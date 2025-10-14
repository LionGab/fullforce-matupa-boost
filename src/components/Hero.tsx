import { MessageCircle, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import gymHero from "@/assets/gym-hero.png";
import AnimatedCounter from "./AnimatedCounter";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/556699100808?text=Olá! Quero minha aula grátis na Full Force Academia", "_blank");
  };

  return (
    <section className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-28 pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src={gymHero}
          alt="Full Force Academia Equipment"
          className="w-full h-full object-cover"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-r from-gym-dark via-gym-dark/90 to-gym-dark/70" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          <h1 className="text-4xl md:text-6xl lg:text-7xl font-black text-white mb-6 leading-tight">
            <TypingAnimation
              text="Full Force — A academia de "
              speed={60}
              delay={300}
            />
            <span className="text-primary">Matupá, MT</span>
          </h1>

          {/* Social Proof Badges - Enhanced */}
          <div className="flex flex-wrap gap-4 mb-6">
            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Users className="w-8 h-8 text-primary" />
              <div>
                <div className="text-3xl font-black text-white">
                  <AnimatedCounter end={680} suffix="+" />
                </div>
                <div className="text-sm text-gray-300 font-semibold">Alunos Ativos</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Star className="w-8 h-8 text-primary fill-primary" />
              <div>
                <div className="text-3xl font-black text-white">4.9★</div>
                <div className="text-sm text-gray-300 font-semibold">Avaliação</div>
              </div>
            </div>

            <div className="flex items-center gap-3 px-6 py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Clock className="w-8 h-8 text-primary" />
              <div>
                <div className="text-2xl font-black text-white">04h30-21h</div>
                <div className="text-sm text-gray-300 font-semibold">Horário</div>
              </div>
            </div>
          </div>

          <p className="text-xl md:text-2xl text-gray-300 mb-4 max-w-2xl font-semibold">
            🎁 1 semana grátis para novos e ex-alunos
          </p>

          <p className="text-lg md:text-xl text-gray-400 mb-8 max-w-2xl">
            Aqui você não treina sozinho. Nossa equipe te acompanha de perto em cada etapa.
          </p>

          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-lg px-8 py-6 h-auto transition-smooth shadow-yellow hover:scale-105 animate-pulse-glow group relative overflow-hidden"
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
            <MessageCircle className="mr-3 h-6 w-6 relative z-10" />
            <span className="relative z-10">🔥 Aula Grátis — Reserve Agora</span>
          </Button>
        </div>
      </div>

      {/* Decorative Element */}
      <div className="absolute bottom-0 left-0 right-0 h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
