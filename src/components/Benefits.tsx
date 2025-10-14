import { Heart, Dumbbell, Clock, Users, Trophy, Sparkles } from "lucide-react";
import gymEquipment from "@/assets/gym-equipment.jpg";
import gymCardio from "@/assets/gym-cardio.jpg";

const Benefits = () => {
  const benefits = [
    {
      icon: Heart,
      title: "💪 Resultados reais com treinos personalizados",
      description: "Cada pessoa é única. Por isso criamos treinos que se adaptam ao seu objetivo e ritmo, seja você iniciante ou avançado.",
      image: gymEquipment,
      imageAlt: "Treinos Personalizados - Full Force Academia",
      imagePosition: "left" as const,
    },
    {
      icon: Users,
      title: "💬 Equipe sempre ao seu lado",
      description: "Não importa se você é iniciante ou avançado. Nossa equipe está aqui para te guiar, motivar e celebrar cada conquista com você.",
      image: gymCardio,
      imageAlt: "Equipe Full Force - Suporte e Motivação",
      imagePosition: "right" as const,
    },
    {
      icon: Clock,
      title: "🕓 Academia completa e moderna",
      description: "Abertos das 04h30 às 21h, todos os dias. Equipamentos de ponta, espaço amplo e ambiente climatizado. Sem desculpas para não cuidar de você.",
      image: gymEquipment,
      imageAlt: "Academia Completa e Moderna - Full Force",
      imagePosition: "left" as const,
    },
    {
      icon: Sparkles,
      title: "🏠 Ambiente limpo e acolhedor",
      description: "Climatizado, organizado e pensado nos mínimos detalhes para você se sentir confortável e motivado em cada treino.",
      image: gymCardio,
      imageAlt: "Ambiente Acolhedor - Full Force Academia",
      imagePosition: "right" as const,
    },
    {
      icon: Dumbbell,
      title: "🧘 Espaço pensado para o seu conforto",
      description: "Vestiários amplos, estacionamento gratuito, bebedouros, e tudo que você precisa para treinar com tranquilidade e foco.",
      image: gymEquipment,
      imageAlt: "Estrutura Completa - Full Force Academia",
      imagePosition: "left" as const,
    },
    {
      icon: Trophy,
      title: "🎯 Planos flexíveis para o seu ritmo",
      description: "Sem fidelidade, sem taxas escondidas. Você escolhe o plano que cabe no seu bolso e na sua rotina. Cancele quando quiser.",
      image: gymCardio,
      imageAlt: "Flexibilidade e Conforto - Full Force Academia",
      imagePosition: "right" as const,
    },
  ];

  return (
    <section className="py-24 bg-gym-light-gray">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Por que a Full Force é{" "}
            <span className="text-primary">diferente?</span>
          </h2>
          <p className="text-xl max-w-2xl mx-auto text-muted-foreground mt-4">
            Mais que equipamentos e horários. Aqui você encontra motivação, apoio e resultados reais.
          </p>
        </div>

        {/* Asymmetric Layout with Alternating Images */}
        <div className="max-w-6xl mx-auto space-y-16">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className={`flex flex-col ${
                benefit.imagePosition === "left" ? "md:flex-row" : "md:flex-row-reverse"
              } gap-8 items-center group animate-slide-up`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Image */}
              <div className="w-full md:w-1/2 relative overflow-hidden rounded-2xl shadow-elevated group-hover:shadow-yellow transition-smooth">
                <img
                  src={benefit.image}
                  alt={benefit.imageAlt}
                  className="w-full h-80 object-cover transition-smooth group-hover:scale-110"
                  loading="lazy"
                />
                {/* Gold Overlay */}
                <div className="absolute inset-0 bg-gradient-to-br from-primary/15 via-transparent to-gym-dark/40 opacity-80 group-hover:opacity-60 transition-smooth" />
              </div>

              {/* Content */}
              <div className="w-full md:w-1/2 bg-card p-8 rounded-2xl shadow-card group-hover:shadow-elevated transition-smooth border-t-4 border-primary/50 group-hover:border-primary">
                <div className="inline-flex items-center justify-center w-16 h-16 rounded-xl bg-primary/10 mb-4 group-hover:bg-primary/20 transition-smooth group-hover:scale-110 group-hover:rotate-6">
                  <benefit.icon className="w-8 h-8 text-primary" />
                </div>

                <h3 className="text-2xl font-black text-foreground mb-4 group-hover:text-primary transition-smooth">
                  {benefit.title}
                </h3>

                <p className="text-muted-foreground text-lg leading-relaxed">
                  {benefit.description}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Benefits;
