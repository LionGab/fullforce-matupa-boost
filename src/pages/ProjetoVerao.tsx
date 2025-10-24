import { Helmet } from "react-helmet";
import StructuredData from "@/components/StructuredData";
import GoogleAnalytics from "@/components/GoogleAnalytics";
import PerformanceOptimizer from "@/components/PerformanceOptimizer";
import ScrollProgress from "@/components/ScrollProgress";
import WhatsAppFloat from "@/components/WhatsAppFloat";
import InstagramFloat from "@/components/InstagramFloat";

// Projeto Verão components
import ProjetoVeraoHero from "@/components/ProjetoVerao/ProjetoVeraoHero";
import CountdownBar from "@/components/ProjetoVerao/CountdownBar";
import ComoFunciona from "@/components/ProjetoVerao/ComoFunciona";
import ProvaSocial from "@/components/ProjetoVerao/ProvaSocial";
import TabelaComparativa from "@/components/ProjetoVerao/TabelaComparativa";
import BeneficiosPlanoAnual from "@/components/ProjetoVerao/BeneficiosPlanoAnual";
import ProjetoVeraoFAQ from "@/components/ProjetoVerao/ProjetoVeraoFAQ";
import FinalCTAVerao from "@/components/ProjetoVerao/FinalCTAVerao";
import ProjetoVeraoStructuredData from "@/components/ProjetoVerao/ProjetoVeraoStructuredData";

const ProjetoVerao = () => {
  return (
    <>
      <Helmet>
        <title>Projeto Verão 60 Dias - Plano Anual Full Force Academia | R$ 119/mês</title>
        <meta
          name="description"
          content="Garanta seu Plano Anual por R$ 119/mês na Full Force Academia e participe do Projeto Verão 60 Dias. Ranking semanal, prêmios de até 3 meses grátis e grupo VIP exclusivo. Inscrições até 31/10!"
        />
        <meta
          name="keywords"
          content="projeto verão, plano anual academia matupá, full force academia, desafio 60 dias, academia matupá, prêmios academia"
        />

        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://fullforceacademia.com.br/projetofimdeano" />
        <meta property="og:title" content="Projeto Verão 60 Dias - Plano Anual R$ 119/mês | Full Force" />
        <meta property="og:description" content="Transforme seu corpo em 60 dias! Plano Anual por R$ 119/mês com ranking, prêmios e grupo VIP. Vagas limitadas até 31/10!" />

        {/* Canonical URL */}
        <link rel="canonical" href="https://fullforceacademia.com.br/projetofimdeano" />
      </Helmet>

      <div className="min-h-screen bg-neutral-950">
        <StructuredData />
        <ProjetoVeraoStructuredData />
        <GoogleAnalytics />
        <PerformanceOptimizer />

        <a href="#main-content" className="skip-to-content">
          Pular para o conteúdo principal
        </a>

        <ScrollProgress />
        <CountdownBar />
        <WhatsAppFloat />
        <InstagramFloat />

        <main id="main-content">
          {/* Hero com CTA primário */}
          <ProjetoVeraoHero />

          {/* Como funciona o desafio */}
          <ComoFunciona />

          {/* Prova social - Depoimentos e antes/depois */}
          <ProvaSocial />

          {/* Tabela comparativa Mensal vs Anual */}
          <TabelaComparativa />

          {/* Benefícios do plano anual */}
          <BeneficiosPlanoAnual />

          {/* FAQ */}
          <ProjetoVeraoFAQ />

          {/* CTA Final */}
          <FinalCTAVerao />
        </main>

        {/* Footer */}
        <footer className="bg-black text-white py-8 border-t border-error/20">
          <div className="container mx-auto px-4">
            <div className="text-center space-y-4">
              <p className="text-gray-400">
                © 2025 Full Force Academia. Todos os direitos reservados.
              </p>
              <p className="text-sm text-gray-500">
                Matupá, Mato Grosso
              </p>
              <div className="text-xs text-gray-600 max-w-2xl mx-auto pt-4 border-t border-gray-800">
                <p>
                  * Os resultados podem variar de pessoa para pessoa. As transformações apresentadas são reais e foram alcançadas através de consistência, disciplina e acompanhamento profissional.
                </p>
              </div>
            </div>
          </div>
        </footer>
      </div>
    </>
  );
};

export default ProjetoVerao;
