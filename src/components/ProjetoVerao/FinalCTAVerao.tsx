import { Button } from "@/components/ui/button";
import { Clock, TrendingUp, Trophy } from "lucide-react";

const FinalCTAVerao = () => {
  return (
    <section id="final-cta" className="bg-gradient-to-b from-black via-error/10 to-black py-16 md:py-24 border-y border-error/20">
      <div className="container mx-auto px-4">
        <div className="max-w-4xl mx-auto text-center">
          {/* Urgência */}
          <div className="inline-flex items-center gap-2 bg-error/20 border border-error px-6 py-3 rounded-full mb-8">
            <Clock className="w-5 h-5 text-error animate-pulse" />
            <span className="text-error font-bold">Últimos dias para garantir sua vaga</span>
          </div>

          {/* Headline */}
          <h2 className="text-4xl md:text-5xl lg:text-6xl font-black text-white mb-6 leading-tight">
            Você Vai Ficar de Fora?
          </h2>

          <p className="text-xl md:text-2xl text-gray-300 mb-8">
            Enquanto você pensa, <span className="text-error font-bold">outras 40 pessoas</span> já garantiram suas vagas no desafio mais transformador de Matupá.
          </p>

          {/* Value props em destaque */}
          <div className="grid md:grid-cols-3 gap-6 mb-12">
            <div className="bg-black/50 border border-primary/30 p-6 rounded-xl">
              <Trophy className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-white mb-2">R$ 357</div>
              <p className="text-gray-400 text-sm">em prêmios para os 3 primeiros</p>
            </div>

            <div className="bg-black/50 border border-primary/30 p-6 rounded-xl">
              <TrendingUp className="w-10 h-10 text-primary mx-auto mb-3" />
              <div className="text-3xl font-black text-white mb-2">60 dias</div>
              <p className="text-gray-400 text-sm">para transformar seu corpo</p>
            </div>

            <div className="bg-black/50 border border-primary/30 p-6 rounded-xl">
              <svg className="w-10 h-10 text-primary mx-auto mb-3" fill="currentColor" viewBox="0 0 20 20">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm1-11a1 1 0 10-2 0v2H7a1 1 0 100 2h2v2a1 1 0 102 0v-2h2a1 1 0 100-2h-2V7z" clipRule="evenodd" />
              </svg>
              <div className="text-3xl font-black text-white mb-2">R$ 2.149</div>
              <p className="text-gray-400 text-sm">de economia no ano</p>
            </div>
          </div>

          {/* Comparação rápida */}
          <div className="bg-neutral-900 border border-gray-800 p-8 rounded-xl mb-8">
            <div className="grid md:grid-cols-2 gap-8 text-left">
              <div>
                <h3 className="text-error font-bold mb-4 text-lg">❌ Se você NÃO entrar:</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Vai pagar R$ 189/mês (R$ 2.268/ano)</li>
                  <li>• Sem motivação de grupo</li>
                  <li>• Sem chance de ganhar prêmios</li>
                  <li>• Risco de desistir em janeiro</li>
                </ul>
              </div>

              <div>
                <h3 className="text-primary font-bold mb-4 text-lg">✅ Se você entrar:</h3>
                <ul className="space-y-2 text-gray-400">
                  <li>• Paga apenas R$ 119 o ano inteiro</li>
                  <li>• Grupo VIP motivando você todo dia</li>
                  <li>• Chance real de ganhar 3 meses grátis</li>
                  <li>• Resultado garantido em 60 dias</li>
                </ul>
              </div>
            </div>
          </div>

          {/* CTA Principal */}
          <div className="space-y-4">
            <Button
              size="lg"
              className="bg-error hover:bg-error/90 text-white font-black px-16 py-8 text-xl shadow-2xl shadow-error/50 hover:scale-105 transition-all"
              onClick={() => document.getElementById('formulario-inscricao')?.scrollIntoView({ behavior: 'smooth' })}
            >
              GARANTIR MEU ANUAL R$ 119 AGORA
            </Button>

            <p className="text-gray-500 text-sm">
              🔒 Ambiente seguro e protegido • 40 vagas limitadas
            </p>

            <p className="text-primary font-bold text-lg">
              Inscrições encerram em 31 de outubro
            </p>
          </div>

          {/* Benefício final */}
          <div className="mt-12 bg-gradient-to-r from-primary/10 to-transparent border border-primary/30 p-6 rounded-xl">
            <p className="text-white text-lg">
              <span className="font-black text-primary">BÔNUS:</span> Se você vencer o desafio e ganhar 3 meses grátis,
              seu investimento de R$ 119 praticamente <span className="text-primary font-bold">sai de GRAÇA</span>.
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FinalCTAVerao;
