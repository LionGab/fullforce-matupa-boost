import { MessageCircle, Users, Star, Clock } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";
import TypingAnimation from "./TypingAnimation";

const Hero = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/556699100808?text=Olá! Quero minha aula grátis na Full Force Academia", "_blank");
  };

  return (
    <section className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-28 md:pb-32 overflow-hidden">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Fachada/fullforce-facade-night-main.jpg"
          alt="Fachada iluminada da Full Force Academia em Matupá - MT à noite"
          className="w-full h-full object-cover object-center"
          loading="eager"
        />
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/90 via-gym-dark/80 to-gym-dark/85 md:bg-gradient-to-r md:from-gym-dark/95 md:via-gym-dark/85 md:to-gym-dark/60" />
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Headline - Mobile First */}
          <h1 className="text-3xl sm:text-4xl md:text-6xl lg:text-7xl font-black text-white mb-4 md:mb-6 leading-[1.1] sm:leading-tight">
            <TypingAnimation
              text="Transforme Seu Corpo em 12 Semanas"
              speed={60}
              delay={300}
            />
            <br />
            <span className="text-primary text-2xl sm:text-3xl md:text-5xl lg:text-6xl block mt-2 md:mt-0">A Academia Nº1 de Matupá com +700 Alunos Transformados</span>
          </h1>

          {/* Social Proof Badges - Mobile First Optimized */}
          <div className="flex flex-col sm:flex-row sm:flex-wrap gap-3 sm:gap-4 mb-5 md:mb-6">
            {/* Badge 1: Alunos */}
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Users className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">
                  <AnimatedCounter end={700} suffix="+" />
                </div>
                <div className="text-xs sm:text-sm text-gray-300 font-semibold">Alunos Transformados</div>
              </div>
            </div>

            {/* Badge 2: Avaliação */}
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Star className="w-7 h-7 sm:w-8 sm:h-8 text-primary fill-primary flex-shrink-0" />
              <div>
                <div className="text-2xl sm:text-3xl font-black text-white">4.9★</div>
                <div className="text-xs sm:text-sm text-gray-300 font-semibold">Nota dos Alunos</div>
              </div>
            </div>

            {/* Badge 3: Horário */}
            <div className="flex items-center gap-3 px-4 py-3 sm:px-6 sm:py-4 rounded-xl bg-gym-dark/80 backdrop-blur-md border-2 border-primary/30 shadow-yellow transition-smooth hover:scale-105 hover:border-primary/60">
              <Clock className="w-7 h-7 sm:w-8 sm:h-8 text-primary flex-shrink-0" />
              <div>
                <div className="text-xl sm:text-2xl font-black text-white">04h30-21h</div>
                <div className="text-xs sm:text-sm text-gray-300 font-semibold">Horário Estendido</div>
              </div>
            </div>
          </div>

          {/* Promo Banner - Mobile Optimized */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-300 mb-3 md:mb-4 max-w-2xl font-semibold leading-relaxed">
            🎁 PROMOÇÃO ESPECIAL: 1 Semana Grátis para Novos Alunos e Ex-Alunos
          </p>

          {/* Description - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Equipamentos de ponta + Acompanhamento personalizado + Ambiente que motiva<br className="hidden sm:block" />
            <strong className="text-gray-300 block mt-1 sm:inline sm:mt-0">Aqui você não treina sozinho. Toda a equipe trabalha para o SEU resultado.</strong>
          </p>

          {/* CTA Button - Mobile First */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-bold text-base sm:text-lg px-6 py-5 sm:px-8 sm:py-6 h-auto transition-smooth shadow-yellow hover:scale-105 animate-pulse-glow group relative overflow-hidden"
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-white/20 rounded-lg scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
            <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 relative z-10" />
            <span className="relative z-10">🔥 Quero Minha Semana Grátis Agora</span>
          </Button>
        </div>
      </div>

      {/* Decorative Element - Mobile Adjusted */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
