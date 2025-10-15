import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { HelpCircle } from "lucide-react";

const FAQ = () => {
  const faqs = [
    {
      question: "Posso transferir meu plano anual para outra pessoa?",
      answer:
        "Sim! Caso precise transferir seu plano anual, entre em contato com nossa equipe pelo WhatsApp. Analisamos cada caso individualmente para encontrar a melhor solução, sem burocracia.",
    },
    {
      question: "Tem desconto para casal no plano anual?",
      answer:
        "Sim! Oferecemos condições especiais para casais que fecham o plano anual juntos. Fale conosco pelo WhatsApp para conhecer as vantagens exclusivas e economizar ainda mais!",
    },
    {
      question: "Como funciona a pausa do plano anual?",
      answer:
        "Entendemos que imprevistos acontecem. Você pode solicitar 1 pausa de até 30 dias por ano (mediante apresentação de atestado médico). Entre em contato com nossa equipe para mais detalhes sobre as condições.",
    },
    {
      question: "Posso parcelar o valor do plano anual?",
      answer:
        "Sim! O plano anual pode ser parcelado em até 12x de R$119 no cartão de crédito, sem juros. Você também pode optar pelo pagamento à vista com condições especiais. Fale conosco para conhecer todas as opções!",
    },
    {
      question: "O que acontece se eu precisar cancelar o plano anual?",
      answer:
        "O plano anual tem fidelidade de 12 meses, mas sempre buscamos a melhor solução para nossos alunos. Em casos específicos (mudança de cidade, problemas de saúde), avaliamos individualmente. Consulte nossos termos completos pelo WhatsApp.",
    },
    {
      question: "Qual a diferença entre o plano mensal e anual?",
      answer:
        "O plano anual oferece economia de 37% (R$119/mês vs R$189/mês), além de benefícios exclusivos: treino personalizado, reavaliações trimestrais, 1 convidado grátis/mês, prioridade em eventos e descontos em produtos. É a escolha de quem quer resultados reais e economizar!",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer:
        "Funcionamos de segunda a sexta das 04h30 às 21h, sem fechar no almoço! Aos sábados, estamos abertos das 06h às 12h. Horários flexíveis para se adaptar à sua rotina, seja você madrugador ou noturno.",
    },
    {
      question: "Preciso ter experiência prévia para treinar na Full Force?",
      answer:
        "Não! Atendemos desde iniciantes até atletas avançados. Nossa equipe de profissionais qualificados vai montar um treino personalizado para o seu nível e objetivos, garantindo evolução segura e progressiva. No plano anual, o acompanhamento é ainda mais próximo!",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-12 sm:mb-16">
            <div className="inline-flex items-center justify-center w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-primary/10 mb-4 sm:mb-6">
              <HelpCircle className="w-7 h-7 sm:w-8 sm:h-8 text-primary" />
            </div>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-3 sm:mb-4">
              Perguntas sobre o <span className="text-primary">Plano Anual</span>
            </h2>
            <p className="text-base sm:text-lg md:text-xl text-muted-foreground max-w-2xl mx-auto">
              Dúvidas sobre pagamento, transferência e condições especiais do Plano Anual.
              <br className="hidden sm:block" />
              <span className="text-white font-semibold">Não encontrou a resposta? Fale conosco no WhatsApp! 💬</span>
            </p>
          </div>

          {/* Accordion */}
          <Accordion
            type="single"
            collapsible
            className="space-y-4"
          >
            {faqs.map((faq, index) => (
              <AccordionItem
                key={index}
                value={`item-${index}`}
                className="bg-card border-2 border-border rounded-2xl px-6 shadow-card hover:shadow-yellow transition-smooth hover:border-primary/30"
              >
                <AccordionTrigger className="text-left text-lg font-bold hover:text-primary transition-smooth py-6 hover:no-underline">
                  {faq.question}
                </AccordionTrigger>
                <AccordionContent className="text-muted-foreground text-base leading-relaxed pb-6">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>

          {/* CTA Footer */}
          <div className="mt-10 sm:mt-12 text-center p-6 sm:p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
            <p className="text-base sm:text-lg font-semibold text-foreground mb-2">
              Ainda com dúvidas sobre o Plano Anual? 🤔
            </p>
            <p className="text-sm sm:text-base text-muted-foreground mb-4">
              Nossa equipe está pronta para te atender e explicar todas as vantagens!
            </p>
            <a
              href="https://wa.me/556699100808?text=Olá! Tenho dúvidas sobre o Plano Anual da Full Force 💪"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-block px-6 py-3 bg-primary text-black font-black rounded-lg hover:scale-105 transition-transform shadow-glow-primary"
            >
              💬 Tirar Dúvidas no WhatsApp
            </a>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
