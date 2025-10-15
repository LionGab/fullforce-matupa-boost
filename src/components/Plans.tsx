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
        "CrossFit e Funcional",
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
      savings: "Você paga R$1428 em vez de R$2268",
      isPopular: true,
      isBestValue: true,
      urgency: "Oferta Especial Plano Anual com 37% OFF válido até 31 de Outubro",
      features: [
        "Tudo do Semestral",
        "+ Avaliações mensais",
        "+ Acompanhamento nutricional",
        "+ 2 convidados grátis/mês",
        "+ Prioridade em eventos",
        "20% OFF em produtos",
      ],
      buttonText: "🔥 Garantir Desconto de 37%",
      badge: "MAIS ESCOLHIDO",
      guarantee: "✓ Garantia de 7 dias | ✓ Cancele quando quiser",
    },
  ];

  return (
    <section className="relative py-20 md:py-32 bg-neutral-50 dark:bg-gradient-to-b dark:from-background dark:via-gym-dark/30 dark:to-background overflow-hidden">
      {/* Background Pattern - Subtle depth */}
      <div className="absolute inset-0 opacity-5 dark:opacity-5">
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.1),transparent_50%)]" />
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-primary-subtle border border-primary/20 mb-6 shadow-subtle">
            <Star className="w-4 h-4 text-primary" />
            <span className="text-sm font-bold text-primary">680+ Alunos</span>
          </div>

          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-neutral-900 dark:text-foreground mb-4 leading-tight">
            Escolha Seu <span className="text-primary">Plano</span>
          </h2>

          <p className="text-lg md:text-xl text-neutral-600 dark:text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Invista na sua saúde. Quanto mais tempo você se compromete,
            <br className="hidden sm:block" />
            <span className="text-neutral-900 dark:text-foreground font-semibold">mais economia e resultados.</span>
          </p>
        </div>

        {/* Plans Grid - Mobile First, 2 cards only */}
        <div className="grid md:grid-cols-2 gap-6 md:gap-8 max-w-5xl mx-auto mb-16">
          {plans.map((plan, index) => (
            <Card
              key={index}
              variant={plan.isPopular ? "glow" : "elevated"}
              className={`relative overflow-hidden group bg-white dark:bg-card ${plan.isPopular
                ? "md:scale-105 hover:scale-110"
                : "hover:scale-105"
                }`}
            >
              {/* Badge "MAIS ESCOLHIDO" */}
              {plan.badge && (
                <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                  <Badge
                    variant="primary"
                    size="lg"
                    className="animate-bounce-subtle"
                  >
                    <Star className="w-4 h-4 fill-current mr-1" />
                    {plan.badge}
                  </Badge>
                </div>
              )}

              {/* Urgency Banner (apenas no Anual) */}
              {plan.urgency && (
                <div className="bg-gradient-to-r from-red-600/90 to-orange-600/90 px-4 py-3 text-center">
                  <p className="text-white text-sm font-bold flex items-center justify-center gap-2">
                    <span className="animate-pulse">🔥</span>
                    {plan.urgency}
                  </p>
                </div>
              )}

              <CardHeader className="pt-10 pb-6 space-y-4">
                {/* Plan Title */}
                <div className="text-center">
                  <h3 className="text-3xl font-black text-neutral-900 dark:text-foreground mb-2">
                    {plan.title}
                  </h3>
                  <p className="text-neutral-600 dark:text-muted-foreground font-medium">
                    {plan.subtitle}
                  </p>
                </div>

                {/* Price Display */}
                <div className="text-center py-6">
                  {/* Original Price (tachado) */}
                  {plan.originalPrice && (
                    <div className="flex items-center justify-center gap-3 mb-2">
                      <span className="text-2xl text-neutral-500 dark:text-muted-foreground line-through font-bold">
                        R$ {plan.originalPrice}
                      </span>
                      <TrendingDown className="w-5 h-5 text-red-500" />
                    </div>
                  )}

                  {/* Discount Badge */}
                  {plan.discount && (
                    <div className="inline-block mb-3">
                      <div className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-black px-4 py-2 rounded-lg text-sm shadow-lg">
                        🔥 {plan.discount}
                      </div>
                    </div>
                  )}

                  {/* Main Price */}
                  <div className="flex items-baseline justify-center gap-1">
                    <span className="text-2xl text-neutral-600 dark:text-muted-foreground font-bold">R$</span>
                    <span className={`font-black leading-none ${plan.isPopular
                      ? "text-7xl md:text-8xl text-primary drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]"
                      : "text-6xl md:text-7xl text-neutral-900 dark:text-foreground"
                      }`}>
                      {plan.price}
                    </span>
                    <span className="text-xl text-neutral-600 dark:text-muted-foreground font-medium">
                      {plan.period}
                    </span>
                  </div>

                  {/* Installment Info */}
                  <p className="text-neutral-600 dark:text-muted-foreground text-sm mt-3 font-medium">
                    {plan.installment}
                  </p>

                  {/* Savings Info (apenas Anual) */}
                  {plan.savings && (
                    <div className="mt-4 pt-4 border-t border-primary/20">
                      <p className="text-primary font-bold text-base">
                        💰 {plan.savings}
                      </p>
                    </div>
                  )}
                </div>
              </CardHeader>

              {/* Features List */}
              <CardContent className="px-6 pb-6">
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-3 group/item">
                      <Check className={`w-5 h-5 flex-shrink-0 mt-0.5 ${plan.isPopular ? "text-primary" : "text-green-500"
                        }`} />
                      <span className="text-sm text-neutral-700 dark:text-foreground font-medium leading-relaxed group-hover/item:text-primary transition-colors">
                        {feature}
                      </span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              {/* CTA Button */}
              <CardFooter className="px-6 pb-6">
                <Button
                  onClick={() => handleWhatsAppClick(plan.title)}
                  size="lg"
                  variant={plan.isPopular ? "premium" : "success"}
                  className="w-full"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {plan.buttonText}
                </Button>

                {/* Guarantee (apenas Anual) */}
                {plan.guarantee && (
                  <p className="text-xs text-neutral-600 dark:text-muted-foreground text-center mt-3 font-medium">
                    {plan.guarantee}
                  </p>
                )}
              </CardFooter>
            </Card>
          ))}
        </div>

        {/* Why Annual Plan - Persuasion Section */}
        <div className="max-w-4xl mx-auto animate-slide-up">
          <Card variant="glow" className="overflow-hidden bg-white dark:bg-card">
            <CardContent className="p-8 md:p-12">
              <div className="text-center mb-8">
                <Badge variant="primary" size="lg" className="mb-4">
                  <Crown className="w-5 h-5 mr-2" />
                  Por que escolher o Anual?
                </Badge>

                <h3 className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-foreground mb-4 leading-tight">
                  💡 Por Que a Maioria Escolhe o Plano Anual?
                </h3>
              </div>

              <div className="space-y-6 text-center">
                <p className="text-lg text-neutral-700 dark:text-foreground/80 leading-relaxed">
                  Porque <span className="text-neutral-900 dark:text-foreground font-bold">resultado não acontece em 30 dias</span>.
                  Acontece quando você cria o <span className="text-primary font-black">HÁBITO</span>,
                  quando você não desiste, quando você tem uma equipe ao seu lado empurrando você para frente.
                </p>

                <div className="py-6 px-6 bg-neutral-100 dark:bg-layer-1 rounded-xl border border-primary/20 shadow-card">
                  <p className="text-xl md:text-2xl text-neutral-900 dark:text-foreground font-bold mb-2">
                    O plano anual é o compromisso que <span className="text-primary font-black">650+ alunos</span> fizeram com eles mesmos.
                  </p>
                  <p className="text-2xl md:text-3xl font-black text-primary mt-4">
                    E funcionou. ✓
                  </p>
                </div>

                <p className="text-2xl md:text-3xl font-black text-neutral-900 dark:text-foreground pt-4">
                  Agora é sua vez. 💪
                </p>

                {/* Social Proof Mini */}
                <div className="flex items-center justify-center gap-8 pt-6 border-t border-neutral-200 dark:border-border">
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">4.9★</div>
                    <div className="text-xs text-neutral-600 dark:text-muted-foreground font-medium">Avaliação</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">650+</div>
                    <div className="text-xs text-neutral-600 dark:text-muted-foreground font-medium">Alunos</div>
                  </div>
                  <div className="text-center">
                    <div className="text-3xl font-black text-primary">37%</div>
                    <div className="text-xs text-neutral-600 dark:text-muted-foreground font-medium">Economia</div>
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
