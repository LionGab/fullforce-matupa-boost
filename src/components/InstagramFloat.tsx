import { Instagram } from "lucide-react";

const InstagramFloat = () => (
  <a
    href="https://www.instagram.com/fullforceacademia/"
    target="_blank"
    rel="noopener noreferrer"
    className="
      fixed bottom-6 right-24 
      z-50 rounded-full 
      p-4 shadow-yellow 
      bg-gradient-to-tr from-[#feda75] via-[#d62976] to-[#962fbf]
      hover:scale-110 transition-transform duration-300 
      flex items-center justify-center 
      animate-float-in
    "
    aria-label="Abrir Instagram Full Force"
  >
    <Instagram className="w-6 h-6 text-white drop-shadow-md" />
  </a>
);

export default InstagramFloat;
