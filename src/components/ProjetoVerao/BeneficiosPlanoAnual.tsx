import { Wallet, Heart, Users, Target } from "lucide-react";

const BeneficiosPlanoAnual = () => {
  const benefits = [
    {
      icon: Wallet,
      title: "Economia Brutal",
      description: "R$ 2.149 economizados comparado ao plano mensal de R$ 189. São 12 meses por menos que o preço de 1 mês.",
      stats: "94% de desconto"
    },
    {
      icon: Heart,
      title: "Motivação Garantida",
      description: "Ranking semanal publicado, grupo VIP motivado e chance real de ganhar até 3 meses grátis. Você não vai desistir.",
      stats: "60 dias de desafio"
    },
    {
      icon: Users,
      title: "Comunidade Exclusiva",
      description: "Grupo VIP no WhatsApp com conteúdo premium 3x por semana, suporte diário e galera focada nos mesmos objetivos.",
      stats: "Apenas 40 pessoas"
    },
    {
      icon: Target,
      title: "Consistência Premiada",
      description: "Sistema de pontos que recompensa presença e progresso. Os 3 mais consistentes ganham créditos reais na academia.",
      stats: "Prêmios até R$ 357"
    }
  ];

  return (
    <section id="beneficios" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Por Que Escolher o Plano Anual?
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            4 razões para tomar a decisão mais inteligente da sua vida fitness
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {benefits.map((benefit, index) => {
            const Icon = benefit.icon;
            return (
              <div
                key={index}
                className="bg-neutral-900 border border-primary/20 p-8 rounded-xl hover:border-primary/50 transition-all group"
              >
                <div className="flex items-start gap-4">
                  <div className="bg-primary/10 w-14 h-14 rounded-lg flex items-center justify-center flex-shrink-0 group-hover:bg-primary/20 transition-all">
                    <Icon className="w-7 h-7 text-primary" />
                  </div>

                  <div className="flex-1">
                    <h3 className="text-2xl font-bold text-white mb-2">
                      {benefit.title}
                    </h3>

                    <p className="text-gray-400 mb-4">
                      {benefit.description}
                    </p>

                    <div className="inline-flex items-center gap-2 bg-error/10 border border-error/30 px-4 py-2 rounded-full">
                      <span className="text-sm font-bold text-error">{benefit.stats}</span>
                    </div>
                  </div>
                </div>
              </div>
            );
          })}
        </div>

        {/* Seção de garantia/segurança */}
        <div className="mt-16 max-w-4xl mx-auto">
          <div className="bg-gradient-to-r from-primary/10 via-primary/5 to-transparent border border-primary/30 p-8 rounded-xl">
            <div className="flex flex-col md:flex-row items-center gap-6">
              <div className="bg-primary/20 w-20 h-20 rounded-full flex items-center justify-center flex-shrink-0">
                <svg className="w-10 h-10 text-primary" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M2.166 4.999A11.954 11.954 0 0010 1.944 11.954 11.954 0 0017.834 5c.11.65.166 1.32.166 2.001 0 5.225-3.34 9.67-8 11.317C5.34 16.67 2 12.225 2 7c0-.682.057-1.35.166-2.001zm11.541 3.708a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                </svg>
              </div>

              <div className="text-center md:text-left flex-1">
                <h3 className="text-2xl font-bold text-white mb-2">
                  Pagamento Seguro e Protegido
                </h3>
                <p className="text-gray-400">
                  Seus dados estão protegidos. Ambiente seguro e criptografado. Mais de 650 alunos confiam na Full Force Academia.
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Call to action */}
        <div className="mt-12 text-center">
          <p className="text-gray-500 text-sm mb-4">
            Primeiro mês por apenas <span className="text-primary font-bold">R$ 1</span> e depois R$ 119/ano
          </p>
          <p className="text-2xl font-bold text-white">
            Você tá pagando <span className="text-error">R$ 189/mês</span> achando que é normal?
          </p>
        </div>
      </div>
    </section>
  );
};

export default BeneficiosPlanoAnual;
