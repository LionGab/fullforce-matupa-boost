import { Calendar, TrendingUp, Trophy, Users } from "lucide-react";

const ComoFunciona = () => {
  const steps = [
    {
      icon: Calendar,
      title: "1. Inscreva-se até 31/10",
      description: "Garanta seu Plano Anual por R$ 119 e entre no grupo VIP exclusivo do desafio.",
      highlight: "Apenas 40 vagas disponíveis"
    },
    {
      icon: TrendingUp,
      title: "2. Desafio de 60 dias",
      description: "De 1º de novembro a 31 de dezembro. Treinos consistentes e progresso documentado.",
      highlight: "Ranking atualizado toda segunda-feira"
    },
    {
      icon: Trophy,
      title: "3. Ganhe prêmios reais",
      description: "Os 3 primeiros colocados ganham créditos: 3, 2 ou 1 mês grátis na academia.",
      highlight: "Se vencer, sai de GRAÇA"
    },
    {
      icon: Users,
      title: "4. Grupo VIP no WhatsApp",
      description: "Comunidade motivada, conteúdo exclusivo 3x por semana e acompanhamento diário.",
      highlight: "Suporte e motivação constante"
    }
  ];

  return (
    <section id="como-funciona" className="bg-neutral-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Como Funciona o Desafio
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            4 passos simples para transformar seu corpo e concorrer a prêmios reais
          </p>
        </div>

        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-8">
          {steps.map((step, index) => {
            const Icon = step.icon;
            return (
              <div
                key={index}
                className="bg-black border border-error/20 p-6 rounded-xl hover:border-error/50 transition-all group"
              >
                <div className="bg-error/10 w-16 h-16 rounded-full flex items-center justify-center mb-4 group-hover:bg-error/20 transition-all">
                  <Icon className="w-8 h-8 text-error" />
                </div>

                <h3 className="text-xl font-bold text-white mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-400 mb-4">
                  {step.description}
                </p>

                <div className="inline-flex items-center gap-2 bg-primary/10 border border-primary/30 px-3 py-1 rounded-full">
                  <span className="text-xs font-semibold text-primary">{step.highlight}</span>
                </div>
              </div>
            );
          })}
        </div>

        {/* Fórmula de pontuação */}
        <div className="mt-16 bg-gradient-to-r from-error/10 via-error/5 to-transparent border border-error/30 p-8 rounded-xl">
          <h3 className="text-2xl font-bold text-white mb-4">Sistema de Pontuação</h3>
          <div className="grid md:grid-cols-3 gap-6 text-white">
            <div>
              <div className="text-4xl font-black text-primary mb-2">10pts</div>
              <p className="text-gray-300">Por dia de treino</p>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">5pts</div>
              <p className="text-gray-300">Por foto de progresso</p>
            </div>
            <div>
              <div className="text-4xl font-black text-primary mb-2">2pts</div>
              <p className="text-gray-300">Por engajamento</p>
            </div>
          </div>
          <p className="text-gray-500 text-sm mt-6">
            Fórmula: Pontos = (Dias treinados × 10) + (Fotos de progresso × 5) + (Engagement × 2)
          </p>
        </div>
      </div>
    </section>
  );
};

export default ComoFunciona;
