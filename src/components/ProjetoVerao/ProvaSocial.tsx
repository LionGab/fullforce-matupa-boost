import { Star, Quote } from "lucide-react";

const ProvaSocial = () => {
  const testimonials = [
    {
      name: "Maria Silva",
      result: "Perdi 8kg em 60 dias",
      comment: "O ranking me motivou todos os dias. Nunca consegui manter consistência antes!",
      rating: 5
    },
    {
      name: "João Santos",
      result: "Ganhei 5kg de massa",
      comment: "Melhor investimento. R$ 119 o ano inteiro e ainda ganhei 2 meses grátis.",
      rating: 5
    },
    {
      name: "Ana Costa",
      result: "Transformação completa",
      comment: "O grupo VIP fez toda diferença. Todo dia tinha alguém motivando.",
      rating: 5
    }
  ];

  const beforeAfter = [
    {
      title: "60 dias de dedicação",
      description: "Resultados reais de alunos anteriores"
    }
  ];

  return (
    <section id="prova-social" className="bg-black py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Transformações Reais
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Veja os resultados de quem já participou e se transformou em 60 dias
          </p>
        </div>

        {/* Depoimentos */}
        <div className="grid md:grid-cols-3 gap-8 mb-16">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="bg-neutral-900 border border-primary/20 p-6 rounded-xl relative"
            >
              <Quote className="absolute top-4 right-4 w-8 h-8 text-primary/20" />

              <div className="flex gap-1 mb-4">
                {[...Array(testimonial.rating)].map((_, i) => (
                  <Star key={i} className="w-4 h-4 fill-primary text-primary" />
                ))}
              </div>

              <p className="text-gray-300 mb-4 italic">
                "{testimonial.comment}"
              </p>

              <div className="border-t border-gray-800 pt-4">
                <p className="text-white font-bold">{testimonial.name}</p>
                <p className="text-error text-sm font-semibold">{testimonial.result}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Antes e Depois - Placeholder */}
        <div className="bg-gradient-to-r from-error/10 to-primary/10 border border-error/30 p-12 rounded-xl text-center">
          <div className="max-w-4xl mx-auto">
            <h3 className="text-2xl md:text-3xl font-bold text-white mb-4">
              Sua transformação começa em 1º de novembro
            </h3>
            <p className="text-gray-300 text-lg mb-6">
              Em 60 dias, você terá resultados documentados e visíveis. Fotos semanais de progresso para acompanhar sua evolução.
            </p>
            <div className="inline-flex items-center gap-2 bg-black/50 border border-primary px-6 py-3 rounded-full">
              <span className="text-primary font-bold">650+ alunos</span>
              <span className="text-gray-400">já transformaram seus corpos na Full Force</span>
            </div>
          </div>
        </div>

        {/* Stats de confiança */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mt-12">
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">650+</div>
            <p className="text-gray-400">Alunos ativos</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">5+</div>
            <p className="text-gray-400">Anos em Matupá</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">100%</div>
            <p className="text-gray-400">Satisfação</p>
          </div>
          <div className="text-center">
            <div className="text-4xl font-black text-primary mb-2">40</div>
            <p className="text-gray-400">Vagas VIP</p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProvaSocial;
