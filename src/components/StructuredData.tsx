import { useEffect } from 'react';

const organizationSchema = {
    "@context": "https://schema.org",
    "@type": "HealthAndBeautyBusiness",
    "@id": "https://fullforceacademia.com.br/#organization",
    "name": "Full Force Academia",
    "alternateName": "Full Force Matupá",
    "url": "https://fullforceacademia.com.br",
    "logo": "https://fullforceacademia.com.br/logo.png",
    "image": [
        "https://fullforceacademia.com.br/images/fachada.jpg",
        "https://fullforceacademia.com.br/images/interior.jpg"
    ],
    "description": "A maior academia de Matupá-MT com mais de 650 alunos. Equipamentos profissionais, treinos personalizados e ambiente motivador.",
    "telephone": "+55-66-99910-0808",
    "priceRange": "$$",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Brasil",
        "addressLocality": "Matupá",
        "addressRegion": "MT",
        "postalCode": "78525-000",
        "addressCountry": "BR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -10.1837,
        "longitude": -54.9364
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "04:30",
            "closes": "21:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Saturday"],
            "opens": "06:00",
            "closes": "18:00"
        },
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Sunday"],
            "opens": "08:00",
            "closes": "12:00"
        }
    ],
    "aggregateRating": {
        "@type": "AggregateRating",
        "ratingValue": "4.9",
        "reviewCount": "650",
        "bestRating": "5",
        "worstRating": "1"
    },
    "sameAs": [
        "https://www.instagram.com/fullforceacademia",
        "https://www.facebook.com/fullforceacademia"
    ]
};

const localBusinessSchema = {
    "@context": "https://schema.org",
    "@type": "LocalBusiness",
    "name": "Full Force Academia Matupá",
    "image": "https://fullforceacademia.com.br/images/fachada.jpg",
    "@id": "https://fullforceacademia.com.br/#localbusiness",
    "url": "https://fullforceacademia.com.br",
    "telephone": "+55-66-99910-0808",
    "address": {
        "@type": "PostalAddress",
        "streetAddress": "Avenida Brasil",
        "addressLocality": "Matupá",
        "addressRegion": "MT",
        "postalCode": "78525-000",
        "addressCountry": "BR"
    },
    "geo": {
        "@type": "GeoCoordinates",
        "latitude": -10.1837,
        "longitude": -54.9364
    },
    "openingHoursSpecification": [
        {
            "@type": "OpeningHoursSpecification",
            "dayOfWeek": ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday"],
            "opens": "04:30",
            "closes": "21:00"
        }
    ],
    "priceRange": "$$"
};

const offerSchema = {
    "@context": "https://schema.org",
    "@type": "Offer",
    "name": "Plano Anual Full Force Academia 2025/2026",
    "description": "Plano anual com 37% de desconto. Acesso ilimitado, treinos personalizados e acompanhamento profissional.",
    "price": "1428.00",
    "priceCurrency": "BRL",
    "availability": "https://schema.org/InStock",
    "validThrough": "2025-10-31T23:59:59-03:00",
    "priceValidUntil": "2025-10-31",
    "url": "https://fullforceacademia.com.br/#planos",
    "seller": {
        "@type": "Organization",
        "name": "Full Force Academia"
    },
    "eligibleRegion": {
        "@type": "Place",
        "name": "Matupá, MT, Brasil"
    }
};

const breadcrumbSchema = {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    "itemListElement": [
        {
            "@type": "ListItem",
            "position": 1,
            "name": "Home",
            "item": "https://fullforceacademia.com.br"
        },
        {
            "@type": "ListItem",
            "position": 2,
            "name": "Planos",
            "item": "https://fullforceacademia.com.br/#planos"
        },
        {
            "@type": "ListItem",
            "position": 3,
            "name": "Plano Anual 2025/2026",
            "item": "https://fullforceacademia.com.br/#plano-anual"
        }
    ]
};

const faqSchema = {
    "@context": "https://schema.org",
    "@type": "FAQPage",
    "mainEntity": [
        {
            "@type": "Question",
            "name": "Qual o melhor plano da Full Force Academia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "O Plano Anual é o mais escolhido por oferecer 37% de desconto, treinos personalizados e acompanhamento profissional contínuo. Com investimento de R$1.428,00 ao ano (12x de R$119), você economiza mais de R$800 comparado ao plano mensal."
            }
        },
        {
            "@type": "Question",
            "name": "Quais os horários de funcionamento da Full Force?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Funcionamos de segunda a sexta das 04h30 às 21h, sábados das 06h às 18h e domingos das 08h às 12h. Horários flexíveis para você treinar quando quiser."
            }
        },
        {
            "@type": "Question",
            "name": "A Full Force oferece treino personalizado?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "Sim! Todos os alunos do plano anual recebem avaliação física completa e treino personalizado de acordo com seus objetivos. Nossa equipe de profissionais está sempre disponível para ajustar e orientar."
            }
        },
        {
            "@type": "Question",
            "name": "Como faço para me matricular na Full Force Academia?",
            "acceptedAnswer": {
                "@type": "Answer",
                "text": "É simples! Clique em qualquer botão 'Fale no WhatsApp' em nosso site e nossa equipe responderá em minutos para tirar suas dúvidas e ajudar na matrícula. Você também pode visitar nossa unidade em Matupá-MT."
            }
        }
    ]
};

const StructuredData = () => {
    useEffect(() => {
        const schemas = [
            organizationSchema,
            localBusinessSchema,
            offerSchema,
            breadcrumbSchema,
            faqSchema
        ];

        schemas.forEach((schema, index) => {
            const scriptId = `structured-data-${index}`;
            let script = document.getElementById(scriptId) as HTMLScriptElement;

            if (!script) {
                script = document.createElement('script');
                script.id = scriptId;
                script.type = 'application/ld+json';
                document.head.appendChild(script);
            }

            script.textContent = JSON.stringify(schema);
        });

        return () => {
            schemas.forEach((_, index) => {
                const script = document.getElementById(`structured-data-${index}`);
                if (script) {
                    script.remove();
                }
            });
        };
    }, []);

    return null;
};

export default StructuredData;
