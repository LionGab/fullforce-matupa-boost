import { Button } from "@/components/ui/button";
import { Calendar, Target, Trophy, MessageCircle } from "lucide-react";

const campaigns = [
  {
    icon: Target,
    tag: "DESAFIO",
    title: "90 Dias de Transformação",
    description: "Se em 90 dias você não tiver resultado, devolvemos seu dinheiro.",
    highlight: "Garantia Total",
    color: "from-orange-500 to-red-500",
  },
  {
    icon: Calendar,
    tag: "PROJETO VERÃO",
    title: "Faltam 70 Dias",
    description: "Quer entrar em forma e surpreender até você mesmo no verão?",
    highlight: "Tempo Limitado",
    color: "from-blue-500 to-cyan-500",
  },
  {
    icon: Trophy,
    tag: "VIRADA DE ANO",
    title: "Como Você Quer Chegar em 2026?",
    description: "Igual a hoje ou melhor que começou 2025? A escolha é sua.",
    highlight: "Novo Começo",
    color: "from-purple-500 to-pink-500",
  },
];

const Campaigns = () => {
  const whatsappNumber = "5566991100808";

  return (
    <section className="py-24 bg-brand-gray relative overflow-hidden">

      {/* Background pattern */}
      <div className="absolute inset-0 hero-pattern opacity-20" />

      <div className="container px-4 relative z-10">
        <div className="text-center max-w-3xl mx-auto mb-16">
          <h2 className="text-4xl md:text-6xl font-black mb-6">
            Campanhas <span className="text-gradient">Ativas</span>
          </h2>
          <p className="text-xl text-gray-300">
            Escolha o desafio perfeito para sua transformação. Cada campanha foi criada para resultados reais.
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {campaigns.map((campaign, index) => (
            <div
              key={index}
              className="group relative bg-brand-black border border-gray-700 rounded-2xl p-8 hover:border-primary/50 transition-all duration-300 overflow-hidden"
            >
              {/* Gradient accent */}
              <div className={`absolute top-0 left-0 right-0 h-1 bg-gradient-to-r ${campaign.color}`} />

              {/* Tag */}
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-primary/20 border border-primary/40 mb-6">
                <campaign.icon className="w-4 h-4 text-primary" />
                <span className="text-primary font-bold text-xs">{campaign.tag}</span>
              </div>

              {/* Content */}
              <h3 className="text-2xl font-bold mb-4 group-hover:text-primary transition-colors">
                {campaign.title}
              </h3>
              <p className="text-gray-400 mb-6 leading-relaxed">
                {campaign.description}
              </p>

              {/* Highlight */}
              <div className="mb-6 pb-6 border-b border-gray-700">
                <div className="text-primary font-bold text-sm mb-1">Destaque:</div>
                <div className="text-lg font-semibold">{campaign.highlight}</div>
              </div>

              {/* CTA */}
              <Button
                variant="premium"
                size="lg"
                className="w-full"
                asChild
              >
                <a
                  href={`https://wa.me/${whatsappNumber}?text=${encodeURIComponent(`Olá! Quero participar da campanha: ${campaign.title}`)}`}
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <MessageCircle className="w-4 h-4" />
                  💬 Quero essa oferta
                </a>
              </Button>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Campaigns;
