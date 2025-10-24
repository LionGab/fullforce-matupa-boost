import { Helmet } from "react-helmet";

const ProjetoVeraoStructuredData = () => {
  const structuredData = {
    "@context": "https://schema.org",
    "@type": "Event",
    "name": "Projeto Verão 60 Dias - Full Force Academia",
    "description": "Desafio de transformação corporal de 60 dias com ranking semanal, prêmios de até 3 meses grátis e grupo VIP exclusivo. Plano Anual por R$ 119.",
    "startDate": "2025-11-01T06:00:00-04:00",
    "endDate": "2025-12-31T22:00:00-04:00",
    "eventStatus": "https://schema.org/EventScheduled",
    "eventAttendanceMode": "https://schema.org/OfflineEventAttendanceMode",
    "location": {
      "@type": "Place",
      "name": "Full Force Academia",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Matupá",
        "addressRegion": "MT",
        "addressCountry": "BR"
      }
    },
    "offers": {
      "@type": "Offer",
      "name": "Plano Anual + Projeto Verão 60 Dias",
      "price": "119",
      "priceCurrency": "BRL",
      "availability": "https://schema.org/LimitedAvailability",
      "validFrom": "2025-10-24T00:00:00-04:00",
      "validThrough": "2025-10-31T23:59:59-04:00",
      "url": "https://fullforceacademia.com.br/projetofimdeano",
      "itemOffered": {
        "@type": "MembershipProgramMembership",
        "name": "Plano Anual Full Force Academia",
        "description": "Acesso ilimitado por 12 meses + Projeto Verão 60 Dias"
      }
    },
    "organizer": {
      "@type": "LocalBusiness",
      "@id": "https://fullforceacademia.com.br/#organization",
      "name": "Full Force Academia",
      "url": "https://fullforceacademia.com.br",
      "telephone": "+55-66-99999-9999",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Matupá",
        "addressRegion": "MT",
        "addressCountry": "BR"
      }
    },
    "performer": {
      "@type": "Organization",
      "name": "Full Force Academia",
      "sameAs": [
        "https://instagram.com/fullforceacademia"
      ]
    }
  };

  const offerData = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Plano Anual Academia - Projeto Verão 60 Dias",
    "description": "Plano Anual por R$ 119 com participação no desafio Projeto Verão 60 Dias. Economia de R$ 2.149 comparado ao plano mensal.",
    "price": "119",
    "priceCurrency": "BRL",
    "priceValidUntil": "2025-10-31",
    "availability": "https://schema.org/LimitedAvailability",
    "itemOffered": {
      "@type": "Service",
      "name": "Academia - Plano Anual",
      "provider": {
        "@type": "LocalBusiness",
        "name": "Full Force Academia",
        "address": {
          "@type": "PostalAddress",
          "addressLocality": "Matupá",
          "addressRegion": "MT",
          "addressCountry": "BR"
        }
      }
    },
    "seller": {
      "@type": "Organization",
      "name": "Full Force Academia"
    }
  };

  return (
    <Helmet>
      <script type="application/ld+json">
        {JSON.stringify(structuredData)}
      </script>
      <script type="application/ld+json">
        {JSON.stringify(offerData)}
      </script>
    </Helmet>
  );
};

export default ProjetoVeraoStructuredData;
