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
  message: "Olá! Quero GARANTIR minha vaga no Plano Anual com 37% OFF até outubro! 🔥",
  url: "https://wa.me/556699100808?text=Olá!%20Quero%20GARANTIR%20minha%20vaga%20no%20Plano%20Anual%20com%2037%25%20OFF%20até%20outubro!%20🔥"
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
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: ANALYTICS_CONFIG.event,
        placement: ANALYTICS_CONFIG.placement,
        action: ANALYTICS_CONFIG.action
      });

      window.gtag('event', 'click_whatsapp', {
        event_category: 'engagement',
        event_label: 'hero_cta',
        plan_type: 'aula_gratis',
        value: 1
      });

      window.gtag('event', 'generate_lead', {
        currency: 'BRL',
        value: 189
      });
    }

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
      className="relative min-h-[85vh] sm:min-h-[90vh] md:min-h-screen flex items-center justify-center pt-16 sm:pt-20 pb-20 sm:pb-24 md:pt-28 md:pb-32 overflow-hidden"
      aria-label="Hero - Full Force Academia"
    >
      {/* Background Image - Mobile Optimized */}
      <div className="absolute inset-0 z-0">
        {/* Mobile background (smaller, optimized image) */}
        <picture>
          <source
            media="(max-width: 768px)"
            srcSet="/images/Fachada/fachada1.jpg"
          />
          <source
            media="(min-width: 769px)"
            srcSet="/images/Fachada/fachada1.jpg"
          />
          <img
            src="/images/Fachada/fachada1.jpg"
            alt="Full Force Academia - Espaço moderno de treinamento"
            className="w-full h-full object-cover object-center"
            loading="eager"
            fetchPriority="high"
          />
        </picture>

        {/* Optimized overlay layers - More transparent on mobile */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-950/70 via-neutral-950/60 to-neutral-950/75 md:from-neutral-950/85 md:via-neutral-950/75 md:to-neutral-950/85" />

        {/* Subtle radial gradient - Lighter on mobile */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_30%,_rgba(0,0,0,0.4)_100%)] md:bg-[radial-gradient(ellipse_at_center,_transparent_20%,_rgba(0,0,0,0.6)_100%)]" />

        {/* Primary accent glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/10 via-transparent to-transparent md:from-primary/8" />
      </div>      {/* Content - Mobile First, Centered */}
      <div className="container mx-auto px-4 sm:px-6 md:px-8 lg:px-12 relative z-10">
        <div className="max-w-4xl mx-auto text-center animate-fade-in">

          {/* Main Headline - Mobile Optimized */}
          <h1 className="text-[2rem] sm:text-[2.5rem] md:text-5xl lg:text-6xl xl:text-7xl font-black text-white mb-4 sm:mb-5 md:mb-8 leading-[1.1] tracking-tight px-2 drop-shadow-[0_2px_10px_rgba(0,0,0,0.8)]">
            Matupá treina na{" "}
            <span className="text-primary drop-shadow-[0_0_20px_rgba(255,204,0,0.8)] sm:drop-shadow-[0_0_30px_rgba(255,204,0,0.7)] inline-block">
              Full Force 💪
            </span>
            <br className="hidden sm:block" />
            <span className="text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl block mt-2 sm:mt-2 text-primary font-bold drop-shadow-[0_0_15px_rgba(255,204,0,0.8)]">
              Últimas vagas de outubro! 🔥
            </span>
          </h1>

          {/* Subtítulo - Mobile Optimized */}
          <p className="text-sm sm:text-base md:text-lg lg:text-xl xl:text-2xl text-white mb-6 sm:mb-8 md:mb-10 leading-relaxed max-w-3xl mx-auto font-semibold px-2 drop-shadow-[0_2px_8px_rgba(0,0,0,0.9)]">
            A academia com{" "}
            <span className="text-white font-bold">acompanhamento real</span>{" "}
            e treinos todos os dias das{" "}
            <span className="text-primary font-black">04h30 às 21h</span>.
          </p>

          {/* Prova Social - Mobile Optimized */}
          <div className="mb-6 sm:mb-8 md:mb-10 inline-flex items-center justify-center gap-2 sm:gap-3 bg-neutral-900/95 backdrop-blur-md px-3 sm:px-4 md:px-6 py-2.5 sm:py-3 md:py-4 rounded-xl sm:rounded-2xl border-2 border-primary/70 shadow-[0_0_25px_rgba(255,204,0,0.4)]">
            <span className="text-xl sm:text-2xl md:text-3xl lg:text-4xl flex-shrink-0">🏋️‍♂️</span>
            <p className="text-xs sm:text-sm md:text-base lg:text-lg xl:text-xl text-white leading-tight text-left font-semibold">
              Mais de{" "}
              <span className="text-primary font-black text-base sm:text-lg md:text-xl lg:text-2xl xl:text-3xl block sm:inline">
                650 Alunos
              </span>
              {" "}
              <span className="text-white font-bold block sm:inline">
                Já Começaram.
              </span>
              <br />
              <span className="text-sm sm:text-base md:text-lg lg:text-xl text-white font-bold block mt-1">
                Falta Só Você.
              </span>
            </p>
          </div>

          {/* CTA Principal - Mobile Optimized */}
          <div className="mb-5 sm:mb-6 md:mb-8 px-2">
            <Button
              onClick={handleWhatsAppClick}
              size="xl"
              variant="premium"
              aria-label="Falar no WhatsApp agora"
              className="w-full sm:w-auto sm:max-w-md text-base sm:text-base md:text-lg lg:text-xl px-6 sm:px-8 md:px-10 lg:px-12 py-4 sm:py-5 md:py-6 lg:py-7 rounded-xl sm:rounded-xl md:rounded-2xl group relative overflow-hidden shadow-[0_0_30px_rgba(255,204,0,0.6)] hover:shadow-[0_0_40px_rgba(255,204,0,0.8)] transition-all duration-300 hover:scale-105 active:scale-95"
            >
              <MessageCircle className="mr-2 sm:mr-2.5 md:mr-3 h-5 w-5 sm:h-5 sm:w-5 md:h-6 md:w-6 lg:h-7 lg:w-7 relative z-10 group-hover:scale-110 transition-transform" />
              <span className="relative z-10 font-black">💬 Fale no WhatsApp</span>
            </Button>
          </div>

          {/* Trust Badge - Mobile Optimized */}
          <p className="text-xs sm:text-sm md:text-base lg:text-lg text-neutral-300 leading-relaxed max-w-md mx-auto px-3 sm:px-4 drop-shadow-[0_2px_10px_rgba(0,0,0,0.95)]">
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
