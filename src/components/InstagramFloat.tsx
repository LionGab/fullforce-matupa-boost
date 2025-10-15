import { Instagram, MessageCircle } from "lucide-react";

const InstagramFloat = () => {
  const handleWhatsAppClick = () => {
    window.open(
      "https://wa.me/5566999100808?text=Olá! Quero conhecer a Full Force Academia 🏋️",
      "_blank",
      "noopener,noreferrer"
    );
  };

  return (
    <div className="fixed bottom-6 right-6 z-50 flex flex-col gap-3 animate-float-in">
      {/* WhatsApp Float */}
      <button
        onClick={handleWhatsAppClick}
        className="
          rounded-full p-4 shadow-glow-primary
          bg-gradient-to-br from-primary to-yellow-500
          hover:scale-110 hover:rotate-12 transition-all duration-300
          flex items-center justify-center
          group relative
        "
        aria-label="Falar no WhatsApp Full Force"
      >
        <MessageCircle className="w-6 h-6 text-black drop-shadow-md group-hover:scale-110 transition-transform" />

        {/* Tooltip */}
        <span className="
          absolute right-full mr-3 px-3 py-2 
          bg-neutral-900 text-white text-sm font-bold rounded-lg
          opacity-0 group-hover:opacity-100 transition-opacity
          whitespace-nowrap shadow-lg border border-primary/30
        ">
          💬 Fale Conosco
        </span>
      </button>

      {/* Instagram Float */}
      <a
        href="https://www.instagram.com/fullforceacademia/"
        target="_blank"
        rel="noopener noreferrer"
        className="
          rounded-full p-4 shadow-lg
          bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]
          hover:scale-110 hover:rotate-12 transition-all duration-300
          flex items-center justify-center
          group relative
        "
        aria-label="Abrir Instagram Full Force"
      >
        <Instagram className="w-6 h-6 text-white drop-shadow-md group-hover:scale-110 transition-transform" />

        {/* Tooltip */}
        <span className="
          absolute right-full mr-3 px-3 py-2
          bg-neutral-900 text-white text-sm font-bold rounded-lg
          opacity-0 group-hover:opacity-100 transition-opacity
          whitespace-nowrap shadow-lg border border-[#d62976]/30
        ">
          📸 @fullforceacademia
        </span>
      </a>
    </div>
  );
};

export default InstagramFloat;
