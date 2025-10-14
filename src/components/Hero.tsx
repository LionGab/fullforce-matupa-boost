import { MessageCircle, Users } from "lucide-react";
import { Button } from "@/components/ui/button";
import AnimatedCounter from "./AnimatedCounter";

const Hero = () => {
  const handleWhatsAppClick = () => {
    // Track event for analytics (Google Tag / GTM)
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_whatsapp",
        placement: "hero_cta",
        action: "aula_gratis"
      });
    }

    window.open("https://wa.me/556699100808?text=Olá! Quero minha aula grátis na Full Force Academia 🏋️", "_blank");
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
            <span className="block">Full Force — A academia de</span>
            <span className="text-primary block">Matupá, MT</span>
          </h1>

          {/* Social Proof Badge Principal */}
          <div className="mb-5 md:mb-6">
            <div className="inline-flex items-center gap-3 px-6 py-4 rounded-2xl bg-gradient-to-r from-primary/20 to-primary/10 backdrop-blur-md border-2 border-primary shadow-yellow">
              <Users className="w-10 h-10 text-primary flex-shrink-0" />
              <div>
                <div className="text-4xl sm:text-5xl font-black text-white">
                  <AnimatedCounter end={650} suffix="+" />
                </div>
                <div className="text-sm sm:text-base text-gray-200 font-bold">Alunos transformados</div>
              </div>
            </div>
          </div>

          {/* Promo Banner - Urgência com Desconto */}
          <div className="mb-4 md:mb-5 p-4 sm:p-5 rounded-xl bg-gradient-to-r from-red-600/90 to-orange-600/90 backdrop-blur-md border-2 border-red-400/50 shadow-2xl animate-pulse-subtle">
            <p className="text-xl sm:text-2xl md:text-3xl text-white mb-2 font-black leading-tight">
              🔥 Plano Anual com 37% OFF
            </p>
            <p className="text-base sm:text-lg text-red-50 font-bold">
              ⏰ Promoção válida até 31 de Outubro
            </p>
          </div>

          {/* Description - Mobile Optimized */}
          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-3 md:mb-4 max-w-2xl leading-relaxed">
            🎁 <strong className="text-white">BÔNUS:</strong> 1 Semana Grátis para Novos Alunos e Ex-Alunos
          </p>
          <p className="text-base sm:text-lg md:text-xl text-gray-400 mb-6 md:mb-8 max-w-2xl leading-relaxed">
            Equipamentos de ponta + Acompanhamento personalizado + Ambiente que motiva<br className="hidden sm:block" />
            <strong className="text-gray-300 block mt-1 sm:inline sm:mt-0">Aqui você não treina sozinho. Toda a equipe trabalha para o SEU resultado.</strong>
          </p>

          {/* CTA Button - Otimizado para Conversão */}
          <Button
            onClick={handleWhatsAppClick}
            size="lg"
            className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg sm:text-xl px-8 py-7 sm:px-10 sm:py-8 h-auto transition-smooth shadow-yellow hover:scale-105 animate-pulse-glow group relative overflow-hidden rounded-xl"
          >
            {/* Ripple effect background */}
            <span className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />
            <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7 relative z-10" />
            <span className="relative z-10">🔥 Quero Minha Aula Grátis — Reserve Agora</span>
          </Button>

          {/* Trust Badge */}
          <p className="text-sm sm:text-base text-gray-400 mt-4 flex items-center gap-2">
            <span className="text-green-400">✓</span> Sem compromisso • Teste grátis por 1 semana
          </p>
        </div>
      </div>

      {/* Decorative Element - Mobile Adjusted */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10" />
    </section>
  );
};

export default Hero;
