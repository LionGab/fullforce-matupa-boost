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
      quote: "Perdi 8kg em 3 meses e ganhei outra disposição. O acompanhamento aqui é diferente.",
    },
    {
      name: "Ana P.",
      age: 28,
      location: "Bairro Jardim",
      image: testimonialAna,
      quote: "A equipe me acolheu desde o primeiro dia. Em 6 meses conquistei a confiança que me faltava. Vale cada dia.",
    },
  ];

  return (
    <section className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Quem treina na Full Force{" "}
            <span className="absolute -top-3 right-3 bg-yellow-400 text-black text-xs font-extrabold px-2 py-1 rounded-full">Mais escolhido</span>
          </h2>
        </div>

        <div className="grid md:grid-cols-2 gap-8 max-w-6xl mx-auto">
          {testimonials.map((testimonial, index) => (
            <Card 
              key={index}
              className="bg-gym-gray border-gym-gray hover:border-primary transition-smooth group"
            >
              <CardContent className="p-8">
                <Quote className="w-12 h-12 text-primary mb-6 opacity-50" />
                
                <p className="text-3xl font-bold">R$ 900</p>
<p className="text-sm text-gray-400">(ou R$ 75 por mês)</p>
                  "{testimonial.quote}"
                </p>

                <div className="flex items-center gap-4">
                  <img 
                    src={testimonial.image}
                    alt={testimonial.name}
                    className="w-16 h-16 rounded-full object-cover border-2 border-primary"
                  />
                  <div>
                    <p className="font-bold text-white text-lg">{testimonial.name}</p>
                    <p className="text-gray-400">{testimonial.age} anos · {testimonial.location}</p>
                  </div>
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
