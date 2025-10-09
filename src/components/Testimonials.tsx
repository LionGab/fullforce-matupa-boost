import { Quote } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import testimonialJoao from "@/assets/testimonial-joao.jpg";
import testimonialAna from "@/assets/testimonial-ana.jpg";

const Testimonials = () => {
  const testimonials = [
    {
      name: "João C.",
      age: 46,
      image: testimonialJoao,
      quote: "Eu não tinha mais disposição pra nada. Na Full Force, perdi 12kg e hoje tenho a energia que não tinha aos 30. Virou minha segunda casa.",
    },
    {
      name: "Ana P.",
      age: 22,
      image: testimonialAna,
      quote: "Eu tinha vergonha de treinar. A equipe me acolheu e em 6 meses consegui a definição que sempre quis e uma nova confiança.",
    },
  ];

  return (
    <section className="py-24 bg-gym-dark relative overflow-hidden">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16 animate-fade-in">
          <h2 className="text-4xl md:text-5xl font-black text-white mb-4">
            Quem treina na Full Force{" "}
            <span className="text-primary">transforma resultados</span>
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
                
                <p className="text-lg text-white mb-6 leading-relaxed">
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
                    <p className="text-gray-400">{testimonial.age} anos</p>
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
