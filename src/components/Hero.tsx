import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useState, useEffect } from "react";

/**
 * Hero Section - Primeira impressão e conversão principal
 * 
 * Estratégia: Máxima conversão com foco único em agendamento de aula grátis
 * - CTA único e direto (sem competição)
 * - Prova social integrada ao subtítulo (650+ alunos)
 * - Autoridade local clara ("onde Matupá Treina Aqui")
 * - Mobile-first com CTA fixo na base
 * - Imagem de background otimizada com fallback
 */

// Constantes de configuração
const WHATSAPP_CONFIG = {
  number: "556699100808",
  message: "Olá! Quero minha aula grátis na Full Force Academia 🏋️",
  url: "https://wa.me/556699100808?text=Olá!%20Quero%20minha%20aula%20grátis%20na%20Full%20Force%20Academia%20🏋️"
} as const;

const ANALYTICS_CONFIG = {
  event: "click_whatsapp",
  placement: "hero_cta",
  action: "aula_gratis"
} as const;

const HERO_IMAGE = {
  src: "/images/Fachada/fullforce-facade-night-main.jpg",
  alt: "Academia Full Force em Matupá MT - Fachada iluminada com equipamentos modernos e ambiente profissional para treino"
} as const;

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);
  const [imageError, setImageError] = useState(false);

  /**
   * Handler para conversão via WhatsApp
   * Inclui tracking de analytics e abertura em nova aba
   */
  const handleWhatsAppClick = () => {
    // Track conversion event for Google Analytics / GTM
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: ANALYTICS_CONFIG.event,
        placement: ANALYTICS_CONFIG.placement,
        action: ANALYTICS_CONFIG.action
      });
    }

    // Open WhatsApp with pre-filled message
    window.open(WHATSAPP_CONFIG.url, "_blank", "noopener,noreferrer");
  };

  // Preload da imagem para garantir carregamento
  useEffect(() => {
    const img = new Image();
    img.src = HERO_IMAGE.src;
    img.onload = () => setImageLoaded(true);
    img.onerror = () => setImageError(true);
  }, []);

  return (
    <section
      className="relative min-h-[90vh] md:min-h-screen flex items-center justify-center pt-20 pb-24 md:pt-28 md:pb-32 overflow-hidden"
      aria-label="Hero - Full Force Academia"
    >
      {/* Background Image with Dark Overlay - Enhanced with transparency */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <img
            src="/images/equipment/fullforce-space.jpg"
            alt="Full Force Academia - Espaço moderno de treinamento"
            className="w-full h-full object-cover object-center scale-105 animate-subtle-zoom"
            loading="eager"
            fetchPriority="high"
          />
        </div>

        {/* Layered Overlays for depth and transparency */}
        {/* Base dark overlay */}
        <div className="absolute inset-0 bg-neutral-950/85" />

        {/* Gradient overlay - darker on edges, lighter in center */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/90 via-neutral-950/70 to-neutral-950/95" />

        {/* Radial gradient for spotlight effect on center */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.4)_100%)]" />

        {/* Yellow accent glow from bottom */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      {/* Animated Pattern Overlay */}
      <div className="absolute inset-0 z-0 opacity-10">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.2),transparent_70%)] animate-pulse-slow" />
      </div>      {/* Content - Mobile First, Centered */}
      <div className="container mx-auto px-6 sm:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">

          {/* Main Headline - Matupá treina na Full Force */}
          <h1 className="text-[2.5rem] sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-6 md:mb-8 leading-[1.05] tracking-tight px-2">
            Matupá treina na{" "}
            <span className="text-primary drop-shadow-[0_0_40px_rgba(255,204,0,0.6)] inline-block">
              Full Force 💪
            </span>
          </h1>

          {/* Subtítulo - Proposta de Valor Clara */}
          <p className="text-base sm:text-lg md:text-xl lg:text-2xl text-neutral-300 mb-6 md:mb-8 leading-relaxed max-w-3xl mx-auto font-medium px-2">
            A academia com{" "}
            <span className="text-white font-bold">acompanhamento real</span>{" "}
            e treinos todos os dias das{" "}
            <span className="text-primary font-black">04h30 às 21h</span>.
          </p>

          {/* Prova Social - Destaque para 700+ alunos */}
          <div className="mb-8 md:mb-10 inline-flex items-center justify-center gap-2 sm:gap-3 bg-neutral-900/60 backdrop-blur-sm px-4 sm:px-6 py-3 sm:py-4 rounded-xl sm:rounded-2xl border border-primary/20 shadow-glow-primary">
            <span className="text-2xl sm:text-3xl md:text-4xl flex-shrink-0">🏋️‍♂️</span>
            <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-200 leading-tight text-left">
              Mais de{" "}
              <span className="text-primary font-black text-lg sm:text-xl md:text-2xl lg:text-3xl block sm:inline">
                700 Alunos
              </span>
              {" "}
              <span className="text-white font-bold block sm:inline">
                Já Começaram.
              </span>
              <br />
              <span className="text-base sm:text-lg md:text-xl text-white font-bold block mt-1">
                Falta Só Você.
              </span>
            </p>
          </div>

          {/* CTA Principal - WhatsApp (Único e Marcante) */}
          <div className="mb-6 md:mb-8 px-2">
            <Button
              onClick={handleWhatsAppClick}
              size="xl"
              variant="premium"
              aria-label="Falar no WhatsApp agora"
              className="w-full sm:w-auto text-base sm:text-lg md:text-xl px-6 sm:px-10 md:px-12 py-5 sm:py-6 md:py-7 rounded-xl sm:rounded-2xl group relative overflow-hidden shadow-floating hover:shadow-glow-primary transition-all duration-300"
            >
              <MessageCircle className="mr-2 sm:mr-3 h-5 w-5 sm:h-6 sm:w-6 md:h-7 md:w-7 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10 font-black">💬 Fale no WhatsApp</span>
            </Button>
          </div>

          {/* Trust Badge - Sem compromisso */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-400 leading-relaxed max-w-md mx-auto px-4">
            <span className="font-bold text-white">Sem compromisso</span> — primeira aula{" "}
            <span className="text-success font-bold">100% gratuita!</span>
          </p>
        </div>
      </div>      {/* Decorative Gradient - Smooth transition */}
      <div className="absolute bottom-0 left-0 right-0 h-16 md:h-24 bg-gradient-to-t from-neutral-950 to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
