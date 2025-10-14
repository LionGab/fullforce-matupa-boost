import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Track event for analytics (Google Tag / GTM)
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer?.push({ event: "click_whatsapp", placement: "floating_button" });
    }

    // Open WhatsApp chat
    window.open(
      "https://wa.me/556699100808?text=Olá! Quero conhecer a Full Force Academia 💪",
      "_blank"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 group md:block hidden">
      {/* Tooltip */}
      <div className="absolute right-20 top-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none">
        <div className="bg-gym-dark text-white px-4 py-2 rounded-lg shadow-xl whitespace-nowrap border-2 border-primary/50">
          <p className="font-bold">💬 Fale com a gente!</p>
        </div>
      </div>

      {/* Botão Principal */}
      <Button
        onClick={handleWhatsAppClick}
        size="lg"
        className="relative rounded-full w-16 h-16 p-0 bg-green-500 hover:bg-green-600 text-white shadow-2xl hover:scale-110 transition-all duration-300 animate-bounce"
        aria-label="Falar no WhatsApp"
        style={{ animationDuration: "2s" }}
      >
        {/* Pulse ring effect */}
        <span className="absolute inset-0 rounded-full bg-green-500 opacity-75 animate-ping" />

        {/* Icon */}
        <MessageCircle className="w-8 h-8 relative z-10" />
      </Button>

      {/* Badge de notificação */}
      <div className="absolute -top-1 -right-1 w-5 h-5 bg-red-500 rounded-full flex items-center justify-center text-white text-xs font-bold animate-pulse border-2 border-white">
        1
      </div>
    </div>
  );
};

export default WhatsAppFloat;
