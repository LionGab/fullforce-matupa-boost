import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";

const WhatsAppFloat = () => {
  const handleWhatsAppClick = () => {
    // Track event for analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', 'click_whatsapp', {
        'event_category': 'engagement',
        'event_label': 'floating_button'
      });
    }
    
    window.open("https://wa.me/5566999999999?text=Olá! Quero conhecer a Full Force Academia", "_blank");
  };

  return (
    <Button
      onClick={handleWhatsAppClick}
      size="lg"
      className="fixed bottom-6 right-6 z-50 rounded-full w-16 h-16 p-0 bg-primary hover:bg-primary/90 text-primary-foreground shadow-yellow hover:scale-110 transition-smooth animate-pulse-glow"
      aria-label="Falar no WhatsApp"
    >
      <MessageCircle className="w-7 h-7" />
    </Button>
  );
};

export default WhatsAppFloat;
