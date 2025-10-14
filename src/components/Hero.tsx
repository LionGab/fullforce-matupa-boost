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
      className="relative min-h-[85vh] md:min-h-screen flex items-center justify-center pt-24 pb-20 md:pt-28 md:pb-32 overflow-hidden"
      aria-label="Hero - Full Force Academia"
    >
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0">
        <img
          src="/images/Fachada/fullforce-facade-night-main.jpg"
          alt="Academia Full Force em Matupá MT - Fachada iluminada com equipamentos modernos e ambiente profissional para treino"
          className="w-full h-full object-cover object-center"
          loading="eager"
          fetchPriority="high"
        />
        {/* Two-layer gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/90 via-gym-dark/80 to-gym-dark/85 md:bg-gradient-to-r md:from-gym-dark/95 md:via-gym-dark/85 md:to-gym-dark/60" />
      </div>

      {/* Content - Optimized for conversion */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Headline - Conversacional e direto */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 md:mb-6 leading-[1.1] sm:leading-tight">
            <span className="text-primary block drop-shadow-[0_0_30px_rgba(255,204,0,0.5)] mb-2">
              Matupá treina na Full Force 💪
            </span>
          </h1>

          {/* Subtítulo - Benefício claro e direto */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-4 md:mb-5 font-bold leading-tight">
            A academia com <span className="text-white">acompanhamento real</span> e treinos todos os dias das <span className="text-primary font-black">04h30 às 21h</span>.
          </p>

          {/* Prova Social */}
          <p className="text-lg sm:text-xl md:text-2xl text-gray-200 mb-6 md:mb-8 leading-relaxed flex items-start gap-2 sm:gap-3">
            <span className="text-2xl sm:text-3xl flex-shrink-0">🏋️‍♂️</span>
            <span>
              Mais de <span className="text-primary font-black">650 alunos satisfeitos</span> já transformaram seus resultados aqui.
            </span>
          </p>

          {/* CTA Principal Único - Máxima Conversão */}
          <div className="mb-4 md:mb-5">
            <Button
              onClick={handleWhatsAppClick}
              size="xl"
              variant="premium"
              aria-label="Falar no WhatsApp - Primeira aula grátis"
              className="w-full sm:w-auto group relative overflow-hidden rounded-xl"
            >
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

              <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">💬 Fale no WhatsApp</span>
            </Button>
          </div>

          {/* Trust Badge - Redução de fricção */}
          <p className="text-sm sm:text-base text-gray-300 text-center sm:text-left leading-relaxed">
            <span className="font-bold text-white">Sem compromisso</span> — primeira aula <span className="text-success font-bold">100% gratuita!</span>
          </p>
        </div>
      </div>

      {/* Decorative Gradient - Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-12 sm:h-16 md:h-24 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
