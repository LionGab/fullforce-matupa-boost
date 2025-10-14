import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialJoao from "@/assets/testimonial-joao.jpg";
import testimonialAna from "@/assets/testimonial-ana.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João S.",
      age: 46,
      location: "Bairro Centro",
      image: testimonialJoao,
      quote: "Perdi 8kg em 3 meses e recuperei a energia que eu pensava que tinha perdido. O que mais me impressiona aqui não são só os equipamentos, mas o ACOMPANHAMENTO. A equipe realmente se importa. Eles me corrigem, me motivam, me ajudam a melhorar. Hoje eu acordo mais disposto, durmo melhor e me sinto 10 anos mais jovem.",
      rating: 5,
    },
    {
      name: "Ana P.",
      age: 28,
      location: "Bairro Jardim",
      image: testimonialAna,
      quote: "A Full Force me devolveu a autoconfiança que eu tinha perdido. Quando cheguei aqui, estava 15kg acima do peso e sem vontade nenhuma. A equipe me acolheu desde o primeiro dia, sem julgar, só apoiando. Em 6 meses eu não só perdi o peso, eu conquistei um corpo que eu nem sabia que era possível. E mais importante: conquistei a confiança de me olhar no espelho e gostar. Vale cada dia, cada treino, cada gota de suor.",
      rating: 5,
    },
  ];

  const stats = [
    { number: "4.9★", label: "Avaliação média dos alunos" },
    { number: "700+", label: "Alunos ativos transformados" },
    { number: "96.5%", label: "Índice de satisfação real" },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-foreground mb-4">
            Quem Treina na Full Force{" "}
            <span className="text-primary">Não Só Muda o Corpo. Muda de Vida.</span>
          </h2>
        </div>

        {/* Stats */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 max-w-4xl mx-auto mb-16">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center p-6 bg-card rounded-2xl border border-border hover:border-primary/50 transition-smooth"
            >
              <div className="text-4xl md:text-5xl font-black text-primary mb-2">
                {stat.number}
              </div>
              <div className="text-lg text-muted-foreground">
                {stat.label}
              </div>
            </div>
          ))}
        </div>

        {/* Testimonials */}
        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card
              key={index}
              className="shadow-card hover:shadow-yellow transition-smooth"
            >
              <CardContent className="p-8">
                <div className="flex items-start gap-4 mb-4">
                  <img
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-lg text-foreground">
                      {testimonial.name}
                    </h3>
                    <p className="text-sm text-muted-foreground">
                      {testimonial.age} anos • {testimonial.location}
                    </p>
                  </div>
                </div>

                <div className="flex gap-1 mb-4">
                  {Array.from({ length: testimonial.rating }).map((_, i) => (
                    <span key={i} className="text-primary text-xl">⭐</span>
                  ))}
                </div>

                <div className="relative">
                  <Quote className="absolute -top-2 -left-2 w-8 h-8 text-primary/20" />
                  <p className="text-foreground text-lg leading-relaxed pl-6">
                    {testimonial.quote}
                  </p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
