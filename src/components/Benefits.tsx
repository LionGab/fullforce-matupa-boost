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
      image: "/images/interior/gym-cardio.jpg",
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
      image: "/images/interior/gym-weights-rack.jpg",
      imageAlt: "Academia Completa e Moderna - Full Force",
      imagePosition: "left" as const,
    },
    {
      icon: Sparkles,
      title: "🏠 Ambiente limpo e acolhedor",
      description: "Climatizado, organizado e pensado nos mínimos detalhes para você se sentir confortável e motivado em cada treino.",
      image: "/images/interior/gym-interior-modern.jpg",
      imageAlt: "Ambiente Acolhedor - Full Force Academia",
      imagePosition: "right" as const,
    },
    {
      icon: Dumbbell,
      title: "💪 Equipamentos de alta qualidade",
      description: "Vestiários amplos, estacionamento gratuito, bebedouros e tudo o que você precisa para treinar com tranquilidade e foco.",
      image: "/images/interior/gym-weights.jpg",
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
    <section className="py-12 sm:py-16 md:py-20 lg:py-24 bg-neutral-900 relative overflow-hidden" id="beneficios">
      {/* Background Image with Transparency - Multiple Layers */}
      <div className="absolute inset-0 z-0">
        {/* Main background image */}
        <div className="absolute inset-0">
          <img
            src="/images/Imagens%20Adicionais/fullforce-weights.jpg"
            alt="Full Force Academia - Equipamentos Premium"
            className="w-full h-full object-cover object-center opacity-15"
            loading="lazy"
          />
        </div>

        {/* Dark overlay for readability */}
        <div className="absolute inset-0 bg-neutral-900/85" />

        {/* Gradient overlay - darker on edges */}
        <div className="absolute inset-0 bg-gradient-to-b from-neutral-900/95 via-neutral-900/80 to-neutral-900/95" />

        {/* Radial gradient for spotlight effect */}
        <div className="absolute inset-0 bg-[radial-gradient(ellipse_at_center,_transparent_0%,_rgba(0,0,0,0.5)_100%)]" />

        {/* Yellow accent glow */}
        <div className="absolute inset-0 bg-gradient-to-t from-primary/5 via-transparent to-transparent" />
      </div>

      <div className="container mx-auto px-4 sm:px-6 relative z-10">
        {/* Section Header */}
        <div className="text-center mb-8 sm:mb-10 md:mb-12 lg:mb-16 animate-fade-in">
          <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight px-2">
            Por que a Full Force é{" "}
            <span className="text-primary">diferente?</span>
          </h2>
          <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-2xl mx-auto leading-relaxed px-4">
            Mais que equipamentos e horários. Aqui você encontra motivação, apoio e resultados reais.
          </p>
        </div>

        {/* Benefits Grid - Mobile-First Optimized */}
        <div className="max-w-6xl mx-auto space-y-6 sm:space-y-8 md:space-y-10 lg:space-y-12">
          {benefits.map((benefit, index) => (
            <Card
              key={index}
              variant="elevated"
              className="overflow-hidden group animate-slide-up bg-neutral-950 border-neutral-800"
              style={{ animationDelay: `${index * 0.05}s` }}
            >
              <div
                className={`flex flex-col ${benefit.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
                  } gap-0`}
              >
                {/* Image Side - Mobile Optimized */}
                <div className="w-full md:w-1/2 relative overflow-hidden bg-neutral-950">
                  <div className="aspect-[16/10] sm:aspect-[4/3] md:aspect-auto md:h-full min-h-[200px] sm:min-h-[250px] md:min-h-[300px]">
                    <img
                      src={benefit.image}
                      alt={benefit.imageAlt}
                      className="w-full h-full object-cover object-center transition-transform duration-700 group-hover:scale-105"
                      loading="lazy"
                    />
                    {/* Gradient Overlay */}
                    <div className="absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-neutral-950/50 opacity-80 group-hover:opacity-60 transition-smooth" />
                  </div>
                </div>

                {/* Content Side - Mobile Optimized */}
                <div className="w-full md:w-1/2 p-5 sm:p-6 md:p-8 lg:p-10 flex flex-col justify-center bg-neutral-950">
                  {/* Icon Container */}
                  <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 md:w-18 md:h-18 lg:w-20 lg:h-20 rounded-xl sm:rounded-2xl bg-primary/10 mb-4 sm:mb-5 md:mb-6 group-hover:bg-primary/20 transition-smooth group-hover:scale-105 group-hover:rotate-3">
                    <benefit.icon className="w-7 h-7 sm:w-8 sm:h-8 md:w-9 md:h-9 lg:w-10 lg:h-10 text-primary" />
                  </div>

                  {/* Title - Mobile Optimized */}
                  <h3 className="text-base sm:text-lg md:text-xl lg:text-2xl font-black text-white mb-3 sm:mb-4 leading-tight group-hover:text-primary transition-smooth">
                    {benefit.title}
                  </h3>

                  {/* Description - Mobile Optimized */}
                  <p className="text-sm sm:text-base md:text-base lg:text-lg text-neutral-300 leading-relaxed">
                    {benefit.description}
                  </p>

                  {/* Decorative Accent Line */}
                  <div className="mt-4 sm:mt-5 md:mt-6 w-16 sm:w-20 h-1 bg-gradient-to-r from-primary to-transparent rounded-full group-hover:w-24 sm:group-hover:w-32 transition-all duration-500" />
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
