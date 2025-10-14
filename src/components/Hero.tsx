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
      className="relative min-h-screen flex items-center justify-center pt-20 pb-16 md:pt-28 md:pb-32 overflow-hidden"
      aria-label="Hero - Full Force Academia"
    >
      {/* Background Image with Overlay - Optimized for LCP */}
      <div className="absolute inset-0 z-0 bg-gym-dark">
        {/* Fallback background enquanto imagem carrega */}
        {!imageLoaded && !imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gym-dark via-black to-gym-dark animate-pulse" />
        )}

        {/* Background Image Principal */}
        {!imageError && (
          <img
            src={HERO_IMAGE.src}
            alt={HERO_IMAGE.alt}
            className={`w-full h-full object-cover object-center transition-opacity duration-700 ${imageLoaded ? 'opacity-100' : 'opacity-0'
              }`}
            loading="eager"
            fetchPriority="high"
            decoding="async"
            onLoad={() => setImageLoaded(true)}
            onError={() => setImageError(true)}
          />
        )}

        {/* Fallback caso imagem não carregue */}
        {imageError && (
          <div className="absolute inset-0 bg-gradient-to-br from-gym-dark via-black to-gym-dark">
            <div className="absolute inset-0 opacity-10 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.2),transparent_70%)]" />
          </div>
        )}

        {/* Two-layer gradient overlay for depth and readability */}
        <div className="absolute inset-0 bg-gradient-to-b from-gym-dark/90 via-gym-dark/80 to-gym-dark/85 md:bg-gradient-to-r md:from-gym-dark/95 md:via-gym-dark/85 md:to-gym-dark/60" />
      </div>

      {/* Content - Optimized for conversion */}
      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        <div className="max-w-3xl animate-fade-in">
          {/* Headline - Autoridade e pertencimento local */}
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-black text-white mb-5 md:mb-6 leading-[1.1] sm:leading-tight">
            <span className="block mb-1">Full Force — A academia onde</span>
            <span className="text-primary block drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]">
              Matupá Treina Aqui.
            </span>
          </h1>

          {/* Subtítulo - Prova Social + Diferencial + Info Chave */}
          <p className="text-xl sm:text-2xl md:text-3xl text-gray-100 mb-8 md:mb-10 font-bold leading-tight">
            Mais de <span className="text-primary font-black">650 alunos</span>.
            <span className="block sm:inline sm:ml-1 mt-2 sm:mt-0">
              Acompanhamento de verdade e treinos das <span className="text-white font-black">04h30 às 21h</span>.
            </span>
          </p>

          {/* CTA Principal Único - Máxima Conversão */}
          <div className="mb-5">
            <Button
              onClick={handleWhatsAppClick}
              size="lg"
              aria-label="Agendar aula grátis via WhatsApp - Sem compromisso"
              className="w-full sm:w-auto bg-primary hover:bg-primary/90 text-primary-foreground font-black text-lg sm:text-xl px-8 py-7 sm:px-10 sm:py-8 h-auto transition-smooth shadow-yellow hover:scale-105 active:scale-95 animate-pulse-glow group relative overflow-hidden rounded-xl"
            >
              {/* Ripple effect on hover */}
              <span className="absolute inset-0 bg-white/20 rounded-xl scale-0 group-hover:scale-100 transition-transform duration-500 ease-out" />

              <MessageCircle className="mr-3 h-6 w-6 sm:h-7 sm:w-7 relative z-10 group-hover:rotate-12 transition-transform" />
              <span className="relative z-10">🎁 Aula Grátis — Reserve Agora</span>
            </Button>
          </div>

          {/* Trust Badge - Redução de fricção */}
          <p className="text-sm sm:text-base text-gray-300 flex items-center gap-2 justify-center sm:justify-start">
            <span className="text-green-400 text-lg">✓</span>
            <span className="font-medium">Sem compromisso • Alto valor, zero risco</span>
          </p>
        </div>
      </div>

      {/* CTA Fixo Mobile - Conversão sempre visível */}
      <div className="fixed bottom-0 left-0 right-0 z-[60] md:hidden bg-gradient-to-t from-gym-dark via-gym-dark/95 to-transparent pt-6 pb-4 px-4 pointer-events-none">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          aria-label="Agendar aula grátis via WhatsApp"
          className="w-full bg-primary hover:bg-primary/90 text-primary-foreground font-black text-base px-6 py-6 h-auto shadow-yellow hover:scale-[1.02] active:scale-95 transition-smooth animate-pulse-glow pointer-events-auto"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          🎁 Quero Minha Aula Grátis
        </Button>
      </div>

      {/* Decorative Gradient - Smooth transition to next section */}
      <div className="absolute bottom-0 left-0 right-0 h-16 sm:h-24 md:h-32 bg-gradient-to-t from-background to-transparent z-10 pointer-events-none" />
    </section>
  );
};

export default Hero;
