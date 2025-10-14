import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

/**
 * WhatsApp Floating Button - Optimized for Mobile & Desktop
 * 
 * Estratégia: CTA sempre visível com design moderno e acessível
 * - Mobile: Botão fixo na base (fullwidth) similar à referência
 * - Desktop: Botão circular flutuante no canto
 * - Shadows elevadas para hierarquia visual
 * - Animações sutis e profissionais
 */

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Track event for analytics (Google Tag / GTM)
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer?.push({
        event: "click_whatsapp",
        placement: "floating_button",
        action: "contact_cta"
      });
    }

    // Open WhatsApp chat with pre-filled message
    window.open(
      "https://wa.me/556699100808?text=Olá! Quero conhecer a Full Force Academia 💪",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <>
      {/* MOBILE VERSION - Fixed Bottom Bar (como na referência) */}
      <div className="fixed bottom-0 left-0 right-0 z-50 md:hidden px-4 pb-4 pt-2 bg-gradient-to-t from-background via-background/95 to-transparent pointer-events-none">
        <Button
          onClick={handleWhatsAppClick}
          size="lg"
          variant="premium"
          className="w-full pointer-events-auto h-14 rounded-xl shadow-floating hover:shadow-glow-primary text-base font-black group relative overflow-hidden"
          aria-label="Falar no WhatsApp - Aula Grátis"
        >
          {/* Animated background gradient */}
          <span className="absolute inset-0 bg-gradient-to-r from-primary via-yellow-300 to-primary bg-[length:200%_100%] group-hover:bg-[position:100%_0] transition-all duration-500" />

          {/* Content */}
          <span className="relative z-10 flex items-center justify-center gap-3">
            <MessageCircle className="w-6 h-6" />
            <span>💬 Fale no WhatsApp</span>
          </span>
        </Button>
      </div>

      {/* DESKTOP VERSION - Floating Circular Button */}
      <div className="fixed bottom-6 right-6 z-50 hidden md:block group">
        {/* Tooltip */}
        <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-all duration-300 pointer-events-none transform translate-x-2 group-hover:translate-x-0">
          <div className="bg-gym-dark text-white px-5 py-3 rounded-xl shadow-overlay whitespace-nowrap border border-primary/30">
            <p className="font-bold text-sm">💬 Fale com a gente!</p>
            <p className="text-xs text-neutral-300 mt-0.5">Resposta rápida garantida</p>
          </div>
        </div>

        {/* Main Button */}
        <button
          onClick={handleWhatsAppClick}
          className="relative w-16 h-16 rounded-full bg-gradient-to-br from-green-400 to-green-600 text-white shadow-floating hover:shadow-glow-success hover:scale-110 active:scale-95 transition-all duration-300 flex items-center justify-center group-hover:rotate-12"
          aria-label="Falar no WhatsApp"
        >
          {/* Pulse Ring Effect */}
          <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />

          {/* Icon */}
          <MessageCircle className="w-8 h-8 relative z-10 group-hover:scale-110 transition-transform" />
        </button>

        {/* Notification Badge */}
        <div className="absolute -top-1 -right-1 w-6 h-6 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-black shadow-elevated border-2 border-white dark:border-gym-dark animate-pulse-subtle">
          1
        </div>
      </div>
    </>
  );
};

export default WhatsAppFloat;
