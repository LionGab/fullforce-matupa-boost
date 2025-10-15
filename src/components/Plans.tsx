import { Check, Crown, MessageCircle, Star, TrendingDown } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardFooter, CardHeader } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

/**
 * Plans Section - Conversão de vendas
 * 
 * Design inspirado em: Profissional com acolhimento
 * - Cards com profundidade (bordas sutis + sombras duplas)
 * - Hierarquia clara (preço em destaque, benefícios organizados)
 * - Sistema de cores funcional (amarelo = CTA, verde = sucesso)
 * - Microinterações e garantias para reduzir fricção
 */

const Plans = () => {
  const handleWhatsAppClick = (plan: string) => {
    // Track conversion event
    if (typeof window !== "undefined" && window.gtag) {
      window.dataLayer = window.dataLayer || [];
      window.dataLayer.push({
        event: "click_plan",
        plan_type: plan,
        placement: "plans_section"
      });
    }

    const message = `Olá! Tenho interesse no ${plan} da Full Force Academia`;
    window.open(
      `https://wa.me/5566999100808?text=${encodeURIComponent(message)}`,
      "_blank",
      "noopener,noreferrer"
    );
  };

  const plans = [
    {
      title: "Mensal",
      subtitle: "Flexibilidade total",
      price: "189",
      period: "/mês",
      installment: "Pago mensalmente",
      isPopular: false,
      isBestValue: false,
      features: [
        "Musculação completa",
        "Área de cardio",
        "Avaliação física",
        "Acesso 7 dias/semana",
        "Sem fidelidade",
      ],
      buttonText: "Começar Agora",
      badge: null,
    },
    {
      title: "Anual",
      subtitle: "Máxima economia e resultados",
      price: "119",
      period: "/mês",
      installment: "12x de R$119 (Total: R$1428)",
      originalPrice: "189",
      discount: "37% OFF",
      savings: "Você paga R$1.428,00 em vez de R$2.268,00",
      isPopular: true,
      isBestValue: true,
      urgency: "Oferta especial: 37% OFF até 31/10",
      features: [
        "Tudo do Mensal",
        "+ Treino personalizado",
        "+ 1 Convidado grátis/mês",
        "+ Prioridade em eventos",
        "+ Desconto em produtos",
      ],
      buttonText: "🔥 Garantir Desconto de 37%",
      badge: "MAIS ESCOLHIDO",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-neutral-950 overflow-hidden">
      {/* Background Pattern - Subtle depth */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-subtle border border-primary/20 mb-6 shadow-subtle">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">650+ Alunos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-white mb-4 leading-tight">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed">
            Invista na sua saúde. Quanto mais tempo você se compromete,
            <br className="hidden sm:block" />
            <span className="text-white font-semibold">mais economia e resultados.</span>
          </p>
        </div>

        {/* Plans Grid - Mobile First, 2 cards only */}
        <div className="grid md:grid-cols-2 gap-4 sm:gap-6 md:gap-8 max-w-5xl mx-auto mb-12 md:mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.isPopular ? "glow" : "elevated"}
              className={`relative overflow-hidden group bg-neutral-900 border-neutral-800 ${plan.isPopular
                ? "md:scale-105 hover:scale-110 border-primary/30"
                : "hover:scale-105"
                }`}
            >
              {/* Badge "MAIS ESCOLHIDO" */}
              {plan.badge && (
                <div className="absolute -top-2 sm:-top-3 left-1/2 -translate-x-1/2 z-20">
                  <Badge
                    variant="primary"
                    size="lg"
                    className="animate-bounce-subtle text-xs sm:text-sm"
                  >
                    <Star className="w-3 h-3 sm:w-4 sm:h-4 fill-current mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Urgency Banner (apenas no Anual) */}
              <div className="bg-gradient-to-r from-yellow-500/10 to-orange-400/10 
  border-b border-yellow-400/30 px-3 sm:px-4 py-1 sm:py-2 
  text-center rounded-t-xl shadow-inner backdrop-blur-sm">

  <p className="text-yellow-400 text-[11px] sm:text-xs md:text-sm 
    font-semibold flex items-center justify-center gap-2 tracking-wide 
    drop-shadow-[0_1px_1px_rgba(0,0,0,0.4)]">
    <span className="animate-pulse">🔥</span>
    <span>Oferta especial: <b>37% OFF</b> até 31/10</span>
  </p>
</div>

)}

              <CardHeader className="pt-8 sm:pt-10 pb-4 sm:pb-6 space-y-3 sm:space-y-4">
                {/* Plan Title */}
                <div className="text-center">
                  <h3 className="text-2xl sm:text-3xl font-black text-white mb-1 sm:mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-sm sm:text-base text-neutral-400 font-medium">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-center py-4 sm:py-6">
                  {/* Original Price (tachado) */}
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center gap-2 sm:gap-3 mb-2">
                      <span className="text-xl sm:text-2xl text-neutral-500 line-through font-bold">
                        R$ {plan.originalPrice}
                      </span>
                      <TrendingDown className="w-4 h-4 sm:w-5 sm:h-5 text-red-500" />
                    </div>
                  )}

                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="inline-block mb-2 sm:mb-3">
                      <div className="bg-gradient-to-r from-primary/30 to-orange-500/30 border border-primary/40 text-primary font-black px-3 sm:px-4 py-1.5 sm:py-2 rounded-lg text-xs sm:text-sm shadow-glow-primary">
                        🔥 {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Main Price */}
                  <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                    <span className="text-xl sm:text-2xl text-neutral-400 font-bold">R$</span>
                    <span className={`font-black leading-none ${plan.isPopular
                      ? "text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-primary drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]"
                      : "text-5xl sm:text-6xl md:text-7xl text-white"
                      }`}>
                      {plan.price}
                    </span>
                    <span className="text-base sm:text-lg md:text-xl text-neutral-400 font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Installment Info */}
                  <p className="text-neutral-400 text-xs sm:text-sm mt-2 sm:mt-3 font-medium px-2">
                    {plan.installment}
                  </p>

                  {/* Savings Info (apenas Anual) */}
                  {plan.savings && (
                    <div className="mt-3 sm:mt-4 pt-3 sm:pt-4 border-t border-primary/20 px-2">
                      <p className="text-primary font-bold text-sm sm:text-base leading-snug">
                        💰 {plan.savings}
                      </p>
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Features List */}
              <CardContent className="px-4 sm:px-6 pb-4 sm:pb-6">
                <ul className="space-y-2 sm:space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2 sm:gap-3 group/item">
                      <Check className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${plan.isPopular ? "text-primary" : "text-green-500"
                        }`} />
                      <span className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed group-hover/item:text-primary transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* CTA Button */}
              <CardFooter className="px-4 sm:px-6 pb-4 sm:pb-6">
                <Button
                  onClick={() => handleWhatsAppClick(plan.title)}
                  size="lg"
                  variant={plan.isPopular ? "premium" : "success"}
                  className="w-full text-sm sm:text-base py-3 sm:py-4"
                >
                  <MessageCircle className="mr-2 h-4 w-4 sm:h-5 sm:w-5" />
                  <span className="truncate">{plan.buttonText}</span>
                </Button>

                {/* Guarantee (apenas Anual) */}
                {plan.guarantee && (
                  <p className="text-xs text-neutral-400 text-center mt-2 sm:mt-3 font-medium leading-snug">
                    {plan.guarantee}
                  </p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Why Annual Plan - Persuasion Section */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card variant="glow" className="overflow-hidden bg-neutral-900 border-primary/30">
            <CardContent className="p-6 sm:p-6 md:p-10">
              <div className="text-center mb-4 sm:mb-6">
                <Badge variant="primary" size="lg" className="mb-3 sm:mb-4 text-xs sm:text-sm">
                  <Crown className="w-4 h-4 sm:w-5 sm:h-5 mr-1 sm:mr-2" />
                  Por que escolher o Anual?
                </Badge>

                <h3 className="text-xl sm:text-2xl md:text-3xl font-black text-white mb-3 sm:mb-4 leading-tight px-2">
                  💡 Por Que a Maioria Escolhe o Plano Anual?
                </h3>
              </div>

              <div className="space-y-4 sm:space-y-6 text-center">
                <p className="text-base sm:text-lg text-neutral-300 leading-relaxed px-2">
                  Porque <span className="text-white font-bold">resultado não acontece em 30 dias</span>.
                  Acontece quando você cria o <span className="text-primary font-black">HÁBITO</span>,
                  quando você não desiste, quando você tem uma equipe ao seu lado empurrando você para frente.
                </p>

                <div className="py-4 sm:py-6 px-4 sm:px-6 bg-neutral-950 rounded-xl border border-primary/20 shadow-card">
                  <p className="text-lg sm:text-xl md:text-2xl text-white font-bold mb-2 leading-snug">
                    O plano anual é o compromisso que <span className="text-primary font-black">650+ alunos</span> fizeram com eles mesmos.
                  </p>
                  <p className="text-xl sm:text-2xl md:text-3xl font-black text-primary mt-3 sm:mt-4">
                    E funcionou. ✓
                  </p>
                </div>

                <p className="text-xl sm:text-2xl md:text-3xl font-black text-white pt-3 sm:pt-4">
                  Agora é sua vez. 💪
                </p>

                {/* Social Proof Mini */}
                <div className="flex flex-col sm:flex-row items-center justify-center gap-4 sm:gap-6 md:gap-8 pt-4 sm:pt-6 border-t border-neutral-800">
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl sm:text-3xl font-black text-primary">4.9★</div>
                    <div className="text-xs text-neutral-400 font-medium mt-1">Avaliação</div>
                  </div>
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl sm:text-3xl font-black text-primary">650+</div>
                    <div className="text-xs text-neutral-400 font-medium mt-1">Alunos</div>
                  </div>
                  <div className="text-center min-w-[80px]">
                    <div className="text-2xl sm:text-3xl font-black text-primary">37%</div>
                    <div className="text-xs text-neutral-400 font-medium mt-1">Economia</div>
                  </div>
                </div>
              </div>
            </CardContent>
          </Card>
        </div>
      </div>
    </section>
  );
};

export default Plans;
