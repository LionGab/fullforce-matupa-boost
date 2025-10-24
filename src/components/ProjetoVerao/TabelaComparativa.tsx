import { Check, X } from "lucide-react";
import { Button } from "@/components/ui/button";

const TabelaComparativa = () => {
  const features = [
    { name: "Acesso ilimitado à academia", mensal: true, anual: true },
    { name: "Treinos personalizados", mensal: true, anual: true },
    { name: "Equipamentos profissionais", mensal: true, anual: true },
    { name: "Projeto Verão 60 Dias", mensal: false, anual: true },
    { name: "Grupo VIP WhatsApp", mensal: false, anual: true },
    { name: "Ranking semanal com prêmios", mensal: false, anual: true },
    { name: "Chance de ganhar até 3 meses grátis", mensal: false, anual: true },
    { name: "Conteúdo exclusivo 3x por semana", mensal: false, anual: true },
    { name: "Economia de R$ 2.149", mensal: false, anual: true },
  ];

  return (
    <section id="tabela-comparativa" className="bg-neutral-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Plano Mensal vs. Plano Anual
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Compare e veja por que o Plano Anual é a escolha inteligente
          </p>
        </div>

        <div className="max-w-5xl mx-auto">
          {/* Header da tabela */}
          <div className="grid grid-cols-3 gap-4 mb-6">
            <div className="col-span-1"></div>

            {/* Plano Mensal */}
            <div className="bg-neutral-800 border border-gray-700 p-6 rounded-xl text-center">
              <h3 className="text-xl font-bold text-white mb-2">Plano Mensal</h3>
              <div className="mb-4">
                <div className="text-3xl font-black text-white">R$ 189</div>
                <div className="text-gray-500 text-sm">/mês</div>
              </div>
              <div className="text-error font-bold text-sm">
                = R$ 2.268/ano
              </div>
            </div>

            {/* Plano Anual - Destaque */}
            <div className="bg-gradient-to-b from-error to-error/80 border-2 border-error p-6 rounded-xl text-center relative">
              <div className="absolute -top-3 left-1/2 transform -translate-x-1/2 bg-primary text-black text-xs font-bold px-4 py-1 rounded-full">
                MELHOR OFERTA
              </div>
              <h3 className="text-xl font-bold text-white mb-2">Plano Anual</h3>
              <div className="mb-4">
                <div className="text-3xl font-black text-white">R$ 119</div>
                <div className="text-white/80 text-sm">/ano inteiro</div>
              </div>
              <div className="bg-black/30 text-primary font-bold text-sm py-1 px-2 rounded">
                Economize R$ 2.149
              </div>
            </div>
          </div>

          {/* Linhas de comparação */}
          <div className="bg-black border border-gray-800 rounded-xl overflow-hidden">
            {features.map((feature, index) => (
              <div
                key={index}
                className={`grid grid-cols-3 gap-4 p-4 ${
                  index !== features.length - 1 ? 'border-b border-gray-800' : ''
                } ${index % 2 === 0 ? 'bg-neutral-900/50' : ''}`}
              >
                <div className="col-span-1 flex items-center">
                  <span className="text-white text-sm md:text-base">{feature.name}</span>
                </div>

                <div className="flex items-center justify-center">
                  {feature.mensal ? (
                    <Check className="w-6 h-6 text-gray-500" />
                  ) : (
                    <X className="w-6 h-6 text-gray-700" />
                  )}
                </div>

                <div className="flex items-center justify-center">
                  {feature.anual ? (
                    <Check className="w-6 h-6 text-primary" />
                  ) : (
                    <X className="w-6 h-6 text-gray-700" />
                  )}
                </div>
              </div>
            ))}
          </div>

          {/* CTA */}
          <div className="mt-8 text-center">
            <Button
              size="lg"
              className="bg-error hover:bg-error/90 text-white font-bold px-12 py-6 text-lg shadow-lg shadow-error/50"
              onClick={() => document.getElementById('formulario-inscricao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              Garantir Plano Anual Agora
            </Button>
            <p className="text-gray-500 text-sm mt-4">
              Apenas 40 vagas disponíveis • Inscrições até 31/10
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default TabelaComparativa;
