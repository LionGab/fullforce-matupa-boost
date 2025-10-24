import { useState } from "react";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Trophy, Users, Calendar, Gift } from "lucide-react";

const ProjetoVeraoHero = () => {
  const [formData, setFormData] = useState({
    nome: "",
    whatsapp: "",
    email: ""
  });

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const message = `Quero garantir meu Plano Anual R$ 119 + Projeto Verão 60 Dias!\n\nNome: ${formData.nome}\nWhatsApp: ${formData.whatsapp}\nEmail: ${formData.email}`;
    window.open(`https://wa.me/5566999999999?text=${encodeURIComponent(message)}`, '_blank');
  };

  return (
    <section id="hero-projeto-verao" className="relative bg-black text-white overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-black via-neutral-900 to-error/20 opacity-90" />
      <div className="absolute inset-0 bg-[url('/noise.png')] opacity-5" />

      <div className="container relative z-10 mx-auto px-4 py-16 md:py-24">
        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Coluna Esquerda - Copy */}
          <div className="space-y-8">
            {/* Badge de urgência */}
            <div className="inline-flex items-center gap-2 bg-error/20 border border-error px-4 py-2 rounded-full">
              <Calendar className="w-4 h-4 text-error" />
              <span className="text-sm font-semibold text-error">Inscrições até 31 de Outubro</span>
            </div>

            {/* Headline */}
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-black leading-tight">
              <span className="text-white">Projeto Verão</span>
              <br />
              <span className="text-error">60 Dias</span>
            </h1>

            {/* Subheadline */}
            <p className="text-xl md:text-2xl text-gray-300 font-light">
              Transforme seu corpo, compete pelo prêmio e pague apenas{" "}
              <span className="text-primary font-bold">R$ 119/ano</span>
            </p>

            {/* Value bullets */}
            <div className="space-y-4">
              <div className="flex items-start gap-3">
                <Trophy className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Prêmios de até 3 meses grátis</h3>
                  <p className="text-gray-400 text-sm">Ranking semanal com prêmios reais em crédito</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Users className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Grupo VIP exclusivo</h3>
                  <p className="text-gray-400 text-sm">Comunidade motivada + conteúdo premium</p>
                </div>
              </div>

              <div className="flex items-start gap-3">
                <Gift className="w-6 h-6 text-primary flex-shrink-0 mt-1" />
                <div>
                  <h3 className="font-bold text-lg">Economia de R$ 2.149</h3>
                  <p className="text-gray-400 text-sm">vs. plano mensal de R$ 189 (12 meses)</p>
                </div>
              </div>
            </div>

            {/* Preço âncora */}
            <div className="bg-neutral-900 border border-error/30 p-6 rounded-lg">
              <div className="flex items-baseline gap-3 mb-2">
                <span className="text-gray-500 line-through text-2xl">R$ 2.268/ano</span>
                <span className="bg-error text-white text-sm font-bold px-3 py-1 rounded">94% OFF</span>
              </div>
              <div className="flex items-baseline gap-2">
                <span className="text-5xl font-black text-primary">R$ 119</span>
                <span className="text-gray-400 text-xl">/ano</span>
              </div>
              <p className="text-gray-500 text-sm mt-2">Primeiro mês por apenas R$ 1</p>
            </div>

            {/* CTA Mobile - Visível apenas em mobile */}
            <div className="lg:hidden">
              <Button
                size="lg"
                className="w-full bg-error hover:bg-error/90 text-white font-bold py-6 text-lg shadow-lg shadow-error/50"
                onClick={() => document.getElementById('formulario-inscricao')?.scrollIntoView({ behavior: 'smooth' })}
              >
                Garantir Meu Anual Agora
              </Button>
            </div>
          </div>

          {/* Coluna Direita - Formulário */}
          <div
            id="formulario-inscricao"
            className="bg-neutral-900 border border-primary/30 p-8 rounded-xl shadow-2xl shadow-primary/20"
          >
            <div className="mb-6">
              <h2 className="text-2xl font-bold mb-2">Garanta sua vaga VIP</h2>
              <p className="text-gray-400">Apenas 40 vagas disponíveis</p>
            </div>

            <form onSubmit={handleSubmit} className="space-y-4">
              <div>
                <label htmlFor="nome" className="block text-sm font-medium mb-2">
                  Nome completo
                </label>
                <Input
                  id="nome"
                  type="text"
                  required
                  value={formData.nome}
                  onChange={(e) => setFormData({ ...formData, nome: e.target.value })}
                  placeholder="Seu nome"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="whatsapp" className="block text-sm font-medium mb-2">
                  WhatsApp
                </label>
                <Input
                  id="whatsapp"
                  type="tel"
                  required
                  value={formData.whatsapp}
                  onChange={(e) => setFormData({ ...formData, whatsapp: e.target.value })}
                  placeholder="(66) 99999-9999"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <div>
                <label htmlFor="email" className="block text-sm font-medium mb-2">
                  E-mail
                </label>
                <Input
                  id="email"
                  type="email"
                  required
                  value={formData.email}
                  onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                  placeholder="seu@email.com"
                  className="bg-neutral-800 border-neutral-700 text-white"
                />
              </div>

              <Button
                type="submit"
                size="lg"
                className="w-full bg-error hover:bg-error/90 text-white font-bold py-6 text-lg shadow-lg shadow-error/50"
              >
                Garantir Meu Anual Agora
              </Button>

              <div className="flex items-center gap-2 text-xs text-gray-500 mt-4">
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 20 20">
                  <path fillRule="evenodd" d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z" clipRule="evenodd" />
                </svg>
                <span>Seus dados estão seguros e protegidos</span>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ProjetoVeraoHero;
