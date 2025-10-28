import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const ProjetoVeraoFAQ = () => {
  const faqs = [
    {
      question: "Como funciona o pagamento do Plano Anual?",
      answer: "O Plano Anual custa R$ 119 para o ano inteiro. Você paga apenas R$ 1 no primeiro mês e depois R$ 119 que dá direito a 12 meses completos de academia. Comparado com o plano mensal de R$ 189, você economiza R$ 2.149 no ano."
    },
    {
      question: "Quando começa e termina o Projeto Verão 60 Dias?",
      answer: "O desafio começa em 1º de novembro de 2025 e vai até 31 de dezembro de 2025, totalizando 60 dias completos. As inscrições encerram em 31 de outubro."
    },
    {
      question: "Como funciona o ranking e os prêmios?",
      answer: "O ranking é baseado em pontos: 10 pontos por dia de treino + 5 pontos por foto de progresso + 2 pontos por engajamento. Todo segunda-feira publicamos o ranking atualizado. Os 3 primeiros colocados ganham: 1º lugar = 3 meses grátis (R$ 357), 2º lugar = 2 meses grátis (R$ 238), 3º lugar = 1 mês grátis (R$ 119)."
    },
    {
      question: "O que é o Grupo VIP do WhatsApp?",
      answer: "É um grupo exclusivo apenas para os 40 participantes do desafio. Lá você recebe conteúdo premium 3x por semana, motivação diária, acesso ao ranking comentado e faz parte de uma comunidade focada em resultados."
    },
    {
      question: "Sou iniciante, posso participar?",
      answer: "Com certeza! O Projeto Verão é para todos os níveis. Nossa equipe vai te orientar com treinos personalizados e o grupo VIP oferece suporte constante. Muitos iniciantes conseguem resultados incríveis nos primeiros 60 dias."
    },
    {
      question: "Preciso documentar meu progresso?",
      answer: "Sim. Parte da pontuação vem das fotos de progresso semanais. Isso não só ajuda no ranking, mas permite você acompanhar visualmente sua transformação. Temos local apropriado na academia para as fotos."
    },
    {
      question: "E se eu não conseguir treinar todos os dias?",
      answer: "Não tem problema! O ranking premia consistência, não perfeição. Se você treinar 4-5 vezes por semana e enviar fotos de progresso, já tem ótimas chances de pontuar bem. O importante é manter a regularidade."
    },
    {
      question: "Posso cancelar o Plano Anual depois?",
      answer: "O Plano Anual tem compromisso de 12 meses. Isso garante seu preço fixo de R$ 119 e sua participação completa no desafio. É esse compromisso que gera os resultados reais que você quer."
    }
  ];

  return (
    <section id="faq" className="bg-neutral-900 py-16 md:py-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-black text-white mb-4">
            Perguntas Frequentes
          </h2>
          <p className="text-gray-400 text-lg max-w-2xl mx-auto">
            Tire todas as suas dúvidas sobre o Projeto Verão 60 Dias
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          <Accordion type="single" collapsible className="space-y-4">
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-black border border-gray-800 rounded-lg px-6 data-[state=open]:border-error/50"
              >
                <AccordionTrigger className="text-left text-white hover:text-primary transition-colors">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-gray-400">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA após FAQ */}
          <div className="mt-12 bg-gradient-to-r from-error/10 to-primary/10 border border-error/30 p-8 rounded-xl text-center">
            <h3 className="text-2xl font-bold text-white mb-3">
              Ainda tem dúvidas?
            </h3>
            <p className="text-gray-400 mb-6">
              Fale direto com a gente pelo WhatsApp e tire todas as suas dúvidas antes de garantir sua vaga.
            </p>
            <a
              href="https://wa.me/5566999999999?text=Quero%20saber%20mais%20sobre%20o%20Projeto%20Verão%2060%20Dias"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 bg-success hover:bg-success/90 text-white font-bold px-8 py-4 rounded-lg transition-all"
            >
              <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Falar no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetoVeraoFAQ;
