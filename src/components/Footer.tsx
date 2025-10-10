import { Instagram, Facebook, MessageCircle } from "lucide-react";

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
            <h3 className="text-2xl font-black mb-4">
              Full<span className="text-primary">Force</span>
            </h3>
            <p className="text-gray-400 mb-4 max-w-md">
              A academia mais moderna de Matupá/MT. Transformando vidas através do movimento, 
              com estrutura de primeira e uma comunidade que te apoia em cada passo.
            </p>
            <div className="flex gap-4">
              <a
                href={`https://instagram.com/${instagram.replace('@', '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray hover:bg-primary/20 border border-gray-700 hover:border-primary/50 flex items-center justify-center transition-all group"
              >
                <Instagram className="w-5 h-5 text-gray-400 group-hover:text-primary transition-colors" />
              </a>
              <a
                href={`https://wa.me/${whatsappNumber}`}
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-lg bg-brand-gray hover:bg-primary/20 border border-gray-700 hover:border-primary/50 flex items-center justify-center transition-all group"
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
            <h4 className="font-bold mb-4">Contato</h4>
            <ul className="space-y-2 text-gray-400">
              <li>Matupá, Mato Grosso</li>
              <li>(66) 99999-9999</li>
              <li className="text-sm">Seg - Sáb: 04:30 - 21:00</li>
              <li className="text-sm text-primary">Sem intervalo</li>
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