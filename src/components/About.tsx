import { Dumbbell, Users, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Ambiente Acolhedor",
    description: "Aqui, todo mundo te conhece pelo nome, não importa se você é iniciante ou avançado.",
  },
  {
    icon: Dumbbell,
    title: "Equipamentos Modernos",
    description: "Uma estrutura completa para você treinar com segurança e conforto.",
  },
  {
    icon: Clock,
    title: "Horário Flexível",
    description: "A gente se adapta à sua rotina, funcionando das 04h30 às 21h sem parar.",
  },
  {
    icon: Users,
    title: "Acompanhamento Próximo",
    description: "Suporte real da equipe para você atingir suas metas com a metodologia de treino certa.",
  },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-b from-background to-brand-gray/20">
      <div className="container px-4">
        <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6">
            Mais Que Uma Academia, <span className="text-gradient">Um Lugar Para Você se Sentir em Casa</span>
          </h2>
          <p className="text-lg md:text-xl text-muted-foreground px-4">
            Na Full Force, você encontra a estrutura moderna que merece, com o acolhimento de quem se importa com seu resultado.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-card border border-border rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(253,185,19,0.15)]"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-lg md:text-xl font-bold mb-2 md:mb-3 group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-muted-foreground leading-relaxed">
                {feature.description}
              </p>

              {/* Hover accent */}
              <div className="absolute bottom-0 left-0 right-0 h-1 bg-gradient-to-r from-transparent via-primary to-transparent opacity-0 group-hover:opacity-100 transition-opacity rounded-b-2xl" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default About;