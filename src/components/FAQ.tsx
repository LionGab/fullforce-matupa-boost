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
      question: "Preciso ter experiência prévia para treinar na Full Force?",
      answer:
        "Não! Atendemos desde iniciantes até atletas avançados. Nossa equipe de profissionais qualificados vai montar um treino personalizado para o seu nível e objetivos, garantindo evolução segura e progressiva.",
    },
    {
      question: "Qual a diferença entre o plano mensal e anual?",
      answer:
        "O plano anual oferece uma economia de até 25% comparado ao mensal, além de garantir seu valor por 12 meses sem reajustes. É a melhor opção para quem quer se comprometer com a transformação e economizar!",
    },
    {
      question: "Quais são os horários de funcionamento?",
      answer:
        "Funcionamos de segunda a sexta das 04h30 às 21h, sem fechar no almoço! Aos sábados, estamos abertos das 06h às 12h. Horários flexíveis para se adaptar à sua rotina.",
    },
    {
      question: "A academia oferece acompanhamento nutricional?",
      answer:
        "Sim! Temos parcerias com nutricionistas especializados em nutrição esportiva. Entre em contato pelo WhatsApp para saber mais sobre nossos pacotes de consultoria nutricional.",
    },
    {
      question: "Posso fazer uma aula experimental antes de me matricular?",
      answer:
        "Com certeza! Oferecemos uma aula experimental gratuita para você conhecer nossa estrutura, equipe e metodologia. Entre em contato pelo WhatsApp para agendar sua visita.",
    },
    {
      question: "Quais modalidades estão inclusas nos planos?",
      answer:
        "Nossos planos incluem acesso completo à musculação, treino funcional, área de cardio e todas as nossas instalações. Consulte nosso time sobre aulas específicas e modalidades extras.",
    },
    {
      question: "Vocês trabalham com treinamento personalizado?",
      answer:
        "Sim! Oferecemos treinos personalizados com acompanhamento individual de um profissional dedicado. É ideal para quem busca resultados mais rápidos e atenção exclusiva. Fale conosco para valores e disponibilidade.",
    },
    {
      question: "Posso cancelar meu plano a qualquer momento?",
      answer:
        "Os planos mensais podem ser cancelados com 30 dias de antecedência. Para planos anuais, consulte nossos termos de fidelidade. Estamos sempre dispostos a conversar e encontrar a melhor solução para você!",
    },
  ];

  return (
    <section className="py-24 bg-background">
      <div className="container mx-auto px-4">
        <div className="max-w-3xl mx-auto">
          {/* Header */}
          <div className="text-center mb-16">
            <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 mb-6">
              <HelpCircle className="w-8 h-8 text-primary" />
            </div>
            <h2 className="text-4xl md:text-5xl font-black mb-4">
              Dúvidas <span className="text-primary">Frequentes</span>
            </h2>
            <p className="text-xl text-muted-foreground max-w-2xl mx-auto">
              Tire suas dúvidas sobre planos, horários e nossa metodologia. Não
              encontrou a resposta? Fale conosco no WhatsApp! 💬
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
          <div className="mt-12 text-center p-8 bg-gradient-to-r from-primary/10 via-primary/5 to-primary/10 rounded-2xl border-2 border-primary/20">
            <p className="text-lg font-semibold text-foreground mb-2">
              Ainda com dúvidas? 🤔
            </p>
            <p className="text-muted-foreground">
              Nossa equipe está pronta para te atender pelo{" "}
              <a
                href="https://wa.me/5566999100808?text=Olá! Tenho dúvidas sobre os planos da Full Force"
                target="_blank"
                rel="noopener noreferrer"
                className="link-animated font-bold text-primary"
              >
                WhatsApp
              </a>
              !
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default FAQ;
