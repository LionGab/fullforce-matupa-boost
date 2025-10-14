import { Heart, Dumbbell, Clock, Users, Trophy, Sparkles } from "lucide-react";
import { Card } from "@/components/ui/card";

/**
 * Benefits Section - Por que a Full Force é diferente?
 * 
 * Estratégia: Mostrar benefícios tangíveis e diferenciais competitivos
 * - Layout alternado (image left/right) para dinamismo visual
 * - Cards com shadow system aprimorado
 * - Ícones grandes com background sutil
 * - Hover states com microinterações
 * - Mobile-first com stack vertical
 */

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "💪 Resultados reais com treinos personalizados",
      description: "Cada pessoa é única. Por isso criamos treinos que se adaptam ao seu objetivo e ritmo, seja você iniciante ou avançado.",
      image: "/images/interior/fullforce-treadmills.jpg",
      imageAlt: "Treinos Personalizados - Full Force Academia",
      imagePosition: "left" as const,
    },
    {
      icon: Users,
      title: "💬 Equipe sempre ao seu lado",
      description: "Não importa se você é iniciante ou avançado. Nossa equipe está aqui para te guiar, motivar e celebrar cada conquista com você.",
      image: "/images/Equipe FullForce/equipeff3.jpg",
      imageAlt: "Equipe Full Force - Suporte e Motivação",
      imagePosition: "right" as const,
    },
    {
      icon: Clock,
      title: "🕓 Academia completa e moderna",
      description: "Abertos das 04h30 às 21h, todos os dias. Equipamentos de ponta, espaço amplo e ambiente climatizado. Sem desculpas para não cuidar de você.",
      image: "/images/Fachada/ffgym2.jpg",
      imageAlt: "Academia Completa e Moderna - Full Force",
      imagePosition: "left" as const,
    },
    {
      icon: Sparkles,
      title: "🏠 Ambiente limpo e acolhedor",
      description: "Climatizado, organizado e pensado nos mínimos detalhes para você se sentir confortável e motivado em cada treino.",
      image: "/images/Fachada/fullforce-facade-sunset.jpg",
      imageAlt: "Ambiente Acolhedor - Full Force Academia",
      imagePosition: "right" as const,
    },
    {
      icon: Dumbbell,
      title: "🧘 Espaço pensado para o seu conforto",
      description: "Vestiários amplos, estacionamento gratuito, bebedouros, e tudo que você precisa para treinar com tranquilidade e foco.",
      image: "/images/interior/Halteres-2.jpg",
      imageAlt: "Estrutura Completa - Full Force Academia",
      imagePosition: "left" as const,
    },
    {
      icon: Trophy,
      title: "🎯 Planos flexíveis para o seu ritmo",
      description: "Sem fidelidade, sem taxas escondidas. Você escolhe o plano que cabe no seu bolso e na sua rotina. Cancele quando quiser.",
      image: "/images/Fachada/fffrente.jpg",
      imageAlt: "Flexibilidade e Conforto - Full Force Academia",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section className="py-16 md:py-24 bg-layer-0" id="beneficios">
      <div className="container mx-auto px-4">
        {/* Section Header */}
        <div className="text-center mb-12 md:mb-16 animate-fade-in">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-black text-foreground mb-4 leading-tight">
            Por que a Full Force é{" "}
            <span className="text-primary">diferente?</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto leading-relaxed">
            Mais que equipamentos e horários. Aqui você encontra motivação, apoio e resultados reais.
          </p>
        </div>

        {/* Benefits Grid - Alternating Layout */}
        <div className="max-w-6xl mx-auto space-y-8 md:space-y-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="elevated"
              className={`overflow-hidden group animate-slide-up`}
              style={{ animationDelay: `${index * 0.08}s` }}
            >
              <div
                className={`flex flex-col ${benefit.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-0`}
              >
                {/* Image Side */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                  <div className="aspect-[4/3] md:aspect-auto md:h-full">
                    <img
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-gym-dark/30 opacity-80 group-hover:opacity-60 transition-smooth" />
                  </div>
                </div>

                {/* Content Side */}
                <div className="w-full md:w-1/2 p-6 md:p-10 flex flex-col justify-center bg-gradient-to-br from-layer-1 to-layer-2">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-16 h-16 md:w-20 md:h-20 rounded-2xl bg-primary-subtle mb-6 group-hover:bg-primary/20 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                    <benefit.icon className="w-8 h-8 md:w-10 md:h-10 text-primary" />
                  </div>

                  {/* Title */}
                  <h3 className="text-xl md:text-2xl lg:text-3xl font-black text-foreground mb-4 leading-tight group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>

                  {/* Description */}
                  <p className="text-base md:text-lg text-muted-foreground leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Accent Line */}
                  <div className="mt-6 w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full group-hover:w-32 transition-all duration-500" />
                </div>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
