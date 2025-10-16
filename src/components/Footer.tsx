import { Instagram, Facebook, MessageCircle } from "lucide-react";
import LogoResponsive from "@/components/LogoResponsive";

const Footer = () => {
  const currentYear = new Date().getFullYear();
  const whatsappNumber = "5566999999999";
  const instagram = "@fullforceacademia";

  return (
    <footer className="bg-brand-black border-t border-primary/20">
      <div className="container px-4 py-12">
        <div className="grid md:grid-cols-4 gap-8 mb-8">
          {/* Brand */}
          <div className="md:col-span-2">
            <div className="mb-4">
              <LogoResponsive 
                variant="footer" 
                size="md"
                className="mb-2"
              />
            </div>
            <p className="text-gray-400 mb-4 max-w-md leading-relaxed text-sm md:text-base">
              💪 <strong className="text-white">Full Force Academia — Matupá, MT</strong>
              <br /><br />
              Transformando corpos e vidas. Mais que músculos, construímos confiança.
              <br /><br />
              <span className="text-primary font-semibold">Venha fazer parte da nossa comunidade de +650 alunos transformados.</span>
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray hover:bg-primary/20 border border-gray-700 hover:border-primary/50 flex items-center justify-center transition-all group"
                aria-label="Instagram Full Force Academia"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray hover:bg-primary/20 border border-gray-700 hover:border-primary/50 flex items-center justify-center transition-all group"
                aria-label="WhatsApp Full Force Academia"
              >
                <MessageCircle className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="font-bold mb-4">Links Rápidos</h4>
            <ul className="space-y-2">
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Início
                </a>
              </li>
              <li>
                <a href="#planos" className="text-gray-400 hover:text-primary transition-colors">
                  Planos
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Campanhas
                </a>
              </li>
              <li>
                <a href="#" className="text-gray-400 hover:text-primary transition-colors">
                  Galeria
                </a>
              </li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h4 className="font-bold mb-4">📞 Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li className="flex items-start gap-2">
                <span>📍</span>
                <span>Rua 09, Nº 203 — Centro<br />Matupá - MT, 78525-000</span>
              </li>
              <li className="flex items-center gap-2">
                <span>📱</span>
                <span>(66) 99910-0808</span>
              </li>
              <li className="flex items-center gap-2 text-white font-semibold">
                <span>⏰</span>
                <span>Seg-Sex: 04:30 - 21:00</span>
              </li>
              <li className="flex items-center gap-2 text-white font-semibold">
                <span></span>
                <span>Sáb: 06:00 - 12:00</span>
              </li>
              <li className="text-sm text-primary font-bold">✅ Sem fechar no almoço</li>
            </ul>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="pt-8 border-t border-gray-800 flex flex-col md:flex-row justify-between items-center gap-4">
          <p className="text-gray-400 text-sm text-center md:text-left">
            © {currentYear} Full Force Academia. Todos os direitos reservados.
          </p>
          <div className="flex gap-6 text-sm text-gray-400">
            <a href="#" className="hover:text-primary transition-colors">
              Política de Privacidade
            </a>
            <a href="#" className="hover:text-primary transition-colors">
              Termos de Uso
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;