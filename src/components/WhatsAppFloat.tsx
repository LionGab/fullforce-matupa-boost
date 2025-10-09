import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Track event for analytics (Google Tag / GTM)
    if (typeof window !== "undefined" && (window as any).gtag) {
      window.dataLayer?.push({ event: "click_whatsapp", placement: "floating_button" });
window.open("https://wa.me/556699100808?text=Olá! Quero conhecer a Full Force Academia 💪", "_blank");

    }

    // Open WhatsApp chat
    window.open(
      "https://wa.me/556699100808?text=Olá! Quero conhecer a Full Force Academia 💪",
      "_blank"
    );
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 bg-green-500 hover:bg-green-600 text-white shadow-lg hover:scale-110 transition-transform"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppFloat;
