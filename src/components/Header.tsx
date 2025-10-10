import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import logo from "@/assets/logo.jpg";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5566999100808?text=Olá! Quero conhecer os planos da Full Force Academia", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gym-dark/95 backdrop-blur-sm border-b border-gym-gray">
      <div className="container mx-auto px-4 h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <img 
            src={logo} 
            alt="Full Force Academia" 
            className="h-12 w-auto object-contain"
          />
        </div>
        
        <Button 
          onClick={handleWhatsAppClick}
          className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-smooth shadow-yellow hover:scale-105"
          size="lg"
        >
          <MessageCircle className="mr-2 h-5 w-5" />
          <span className="hidden sm:inline">Falar no WhatsApp</span>
          <span className="sm:hidden">WhatsApp</span>
        </Button>
      </div>
    </header>
  );
};

export default Header;
