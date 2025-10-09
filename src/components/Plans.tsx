import { Check, Crown, MessageCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardFooter, CardHeader, CardTitle } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";

const Plans = () => {
  const handleWhatsAppClick = (plan: string) => {
    const message = `Olá! Tenho interesse no ${plan} da Full Force Academia`;
    window.open(`https://wa.me/5566999999999?text=${encodeURIComponent(message)}`, "_blank");
  };

  const plans = [
    {
      title: "Plano Trimestral",
      price: "R$ 594",
      monthly: "R$ 198/mês",
      isPopular: false,
      features: [
        "Acesso completo à academia",
        "Avaliação física inclusa",
        "Horário flexível (04h30 às 21h)",
        "Equipamentos modernos",
      ],
    },
    {
      title: "Plano Anual",
      subtitle: "O mais escolhido em Matupá",
      price: "R$ 1.428",
      monthly: "R$ 119/mês",
      dailyCost: "Menos de R$ 4 por dia",
      isPopular: true,
      features: [
        "Acesso completo à academia",
        "Matrícula grátis",
        "Avaliação física inclusa",
        "Acompanhamento próximo da equipe",
        "Horário flexível (04h30 às 21h)",
        "Melhor custo-benefício",
      ],
    },
    {
      title: "Plano Semestral",
      price: "R$ 948",
      monthly: "R$ 158/mês",
      isPopular: false,
      features: [
        "Acesso completo à academia",
        "Avaliação física inclusa",
        "Horário flexível (04h30 às 21h)",
        "Equipamentos modernos",
      ],
    },
  ];

  return (
    <section className="py-24 bg-gym-light-gray relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Escolha o plano certo para o seu resultado
          </h2>
        </div>

        <div className="grid md:grid-cols-3 gap-8 max-w-7xl mx-auto mb-12">
          {plans.map((plan, index) => (
            <Card 
              key={index}
              className={`relative transition-smooth hover:scale-105 ${
                plan.isPopular 
                  ? "shadow-yellow border-primary border-2 md:scale-105" 
                  : "shadow-card border-border"
              }`}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2">
                  <Badge className="bg-primary text-primary-foreground font-bold px-4 py-2 text-sm shadow-yellow">
                    <Crown className="w-4 h-4 mr-1" />
                    MAIS ESCOLHIDO
                  </Badge>
                </div>
              )}

              <CardHeader className="pt-8">
                <CardTitle className="text-2xl font-black text-foreground">
                  {plan.title}
                </CardTitle>
                {plan.subtitle && (
                  <CardDescription className="text-primary font-semibold text-base mt-1">
                    {plan.subtitle}
                  </CardDescription>
                )}
                <div className="mt-4">
                  <div className="text-4xl font-black text-foreground">{plan.price}</div>
                  <div className="text-muted-foreground text-sm mt-1">ou {plan.monthly}</div>
                  {plan.dailyCost && (
                    <div className="text-primary font-bold text-lg mt-2">🔥 {plan.dailyCost}</div>
                  )}
                </div>
              </CardHeader>

              <CardContent>
                <ul className="space-y-3">
                  {plan.features.map((feature, i) => (
                    <li key={i} className="flex items-start gap-2">
                      <Check className="w-5 h-5 text-primary flex-shrink-0 mt-0.5" />
                      <span className="text-sm text-foreground">{feature}</span>
                    </li>
                  ))}
                </ul>
              </CardContent>

              <CardFooter>
                <Button 
                  onClick={() => handleWhatsAppClick(plan.title)}
                  className={`w-full font-bold transition-smooth ${
                    plan.isPopular
                      ? "bg-primary hover:bg-primary/90 text-primary-foreground shadow-yellow"
                      : "bg-secondary hover:bg-secondary/90 text-secondary-foreground"
                  }`}
                  size="lg"
                >
                  <MessageCircle className="mr-2 h-5 w-5" />
                  {plan.isPopular ? "Quero o plano anual 💪" : "Quero este plano"}
                </Button>
              </CardFooter>
            </Card>
          ))}
        </div>

        <div className="text-center max-w-2xl mx-auto animate-slide-up">
          <p className="text-lg text-muted-foreground">
            A maioria dos nossos alunos escolhe o <strong className="text-primary">plano anual</strong> porque ele garante{" "}
            <strong className="text-foreground">constância e resultado</strong>. Manter o ritmo é o que transforma.
          </p>
        </div>
      </div>
    </section>
  );
};

export default Plans;
