import { MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import ThemeToggle from "@/components/ThemeToggle";
import LogoResponsive from "@/components/LogoResponsive";

const Header = () => {
  const handleWhatsAppClick = () => {
    window.open("https://wa.me/5566999100808?text=Olá! Quero conhecer os planos da Full Force Academia", "_blank");
  };

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-gym-dark/95 backdrop-blur-sm border-b border-gym-gray">
      <div className="container mx-auto px-3 sm:px-4 h-16 sm:h-20 flex items-center justify-between">
        <div className="flex items-center gap-3">
          <LogoResponsive
            variant="header"
            size="sm"
            mobileSymbolOnly={true}
            className="cursor-pointer active:scale-95 sm:hover:scale-105 transition-transform"
          />
        </div>

        <div className="flex items-center gap-2 sm:gap-3">
          <ThemeToggle />
          <Button
            onClick={handleWhatsAppClick}
            className="bg-primary hover:bg-primary/90 text-primary-foreground font-bold transition-smooth shadow-yellow active:scale-95 sm:hover:scale-105 btn-ripple"
            size="sm"
          >
            <MessageCircle className="mr-1 sm:mr-2 h-4 w-4 sm:h-5 sm:w-5" />
            <span className="hidden sm:inline">Falar no WhatsApp</span>
            <span className="sm:hidden text-xs">WhatsApp</span>
          </Button>
        </div>
      </div>
    </header>
  );
};

export default Header;
