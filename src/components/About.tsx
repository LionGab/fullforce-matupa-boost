import { Dumbbell, Users, Clock, Heart } from "lucide-react";

const features = [
  {
    icon: Heart,
    title: "Sem Julgamento. Só Apoio Real.",
    description: "Do primeiro dia ao seu melhor shape, você vai sentir que pertence. Nossa equipe conhece cada aluno, cada meta, cada conquista.",
  },
  {
    icon: Dumbbell,
    title: "Estrutura Que Você Merece",
    description: "Aparelhos modernos, espaço amplo e ambiente climatizado. Treine com segurança, conforto e a certeza de ter o melhor.",
  },
  {
    icon: Clock,
    title: "A Gente Se Adapta à Sua Rotina",
    description: "Das 04h30 às 21h sem fechar no almoço. Seja de manhã cedo ou depois do trabalho, a Full Force está aberta pra você.",
  },
  {
    icon: Users,
    title: "Você Não Treina Sozinho Aqui",
    description: "Metodologia individualizada + Suporte constante da equipe. Cada treino é pensado para o SEU corpo e o SEU objetivo.",
  },
];

const About = () => {
  return (
    <section className="py-16 md:py-24 bg-neutral-950">
      <div className="container px-4">
        <div className="max-w-3xl mx-auto mb-12 md:mb-16">
          <h2 className="text-left text-3xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 text-white">
            Mais Que Uma Academia: <span className="text-primary">O Lugar Onde Sua Transformação Começa de Verdade</span>
          </h2>
          <p className="text-base md:text-lg lg:text-xl text-neutral-300 px-4 leading-relaxed">
            A Full Force não é só sobre equipamentos modernos ou estrutura impecável. É sobre <strong className="text-white">PESSOAS</strong>.
            <br /><br />
            Somos a única academia de Matupá onde você é tratado pelo nome, acompanhado de perto e motivado todos os dias por uma equipe que realmente liga para o SEU progresso.
            <br /><br />
            Aqui, iniciantes se sentem seguros. Avançados encontram o desafio que precisam. E todos fazem parte de uma comunidade que empurra você para frente.
          </p>
        </div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8 max-w-7xl mx-auto">
          {features.map((feature, index) => (
            <div
              key={index}
              className="group relative bg-neutral-900 border border-neutral-800 rounded-2xl p-6 md:p-8 hover:border-primary/50 transition-all duration-300 hover:shadow-[0_0_30px_rgba(255,204,0,0.3)]"
            >
              {/* Icon */}
              <div className="mb-4 md:mb-6">
                <div className="inline-flex p-3 md:p-4 rounded-xl bg-primary/10 group-hover:bg-primary/20 transition-colors">
                  <feature.icon className="w-6 h-6 md:w-8 md:h-8 text-primary" />
                </div>
              </div>

              {/* Content */}
              <h3 className="text-base md:text-lg lg:text-xl font-bold mb-2 md:mb-3 text-white group-hover:text-primary transition-colors">
                {feature.title}
              </h3>
              <p className="text-sm md:text-base text-neutral-400 leading-relaxed">
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
