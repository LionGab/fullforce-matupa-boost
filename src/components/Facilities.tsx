import { Badge } from "@/components/ui/badge";
import { Card } from "@/components/ui/card";
import { Baby, Home, Wind } from "lucide-react";

/**
 * Facilities Section - Estrutura e Diferenciais da Academia
 * 
 * Estratégia: Mostrar os diferenciais de infraestrutura que fazem diferença
 * no dia a dia do aluno
 * - Espaço Kids (diferencial competitivo para pais)
 * - Conforto e comodidade (vestiários, estacionamento)
 * - Ambiente premium (climatização, limpeza)
 */

interface Facility {
    icon: React.ElementType;
    title: string;
    description: string;
    image: string;
    imageAlt: string;
    badge: string;
    gradient: string;
}

const facilities: Facility[] = [
    {
        icon: Baby,
        title: "Espaço Kids Full Force",
        description: "Enquanto você treina, seus filhos se divertem em segurança. Espaço colorido, monitorado e pensado para a diversão dos pequenos.",
        image: "/images/interior/gemini-2.5-flash-image-preview_cross_processing_vintage_film_photography_of_high-end_fitness_gym_interior_photography_modern_arch-0.jpg",
        imageAlt: "Espaço Kids Full Force - Área infantil colorida e segura com TV e tatame",
        badge: "Diferencial",
        gradient: "from-blue-500/20 to-pink-500/20"
    },
    {
        icon: Wind,
        title: "Espaço pensado para o seu conforto",
        description: "Vestiários amplos, estacionamento gratuito, bebedouros, e tudo que você precisa para treinar com tranquilidade e foco.",
        image: "/images/interior/gemini-2.5-flash-image-preview_cross_processing_vintage_film_photography_of_high-end_fitness_gym_interior_photography_modern_arch-0 (3).jpg",
        imageAlt: "Interior Full Force - Equipamentos modernos em ambiente climatizado e organizado",
        badge: "Comodidade",
        gradient: "from-primary/20 to-orange-500/20"
    },
    {
        icon: Home,
        title: "Ambiente limpo e acolhedor",
        description: "Climatizado, organizado e pensado nos mínimos detalhes para você se sentir confortável e motivado em cada treino.",
        image: "/images/interior/gemini-2.5-flash-image-preview_cross_processing_vintage_film_photography_of_high-end_fitness_gym_interior_photography_modern_arch-0 (2).jpg",
        imageAlt: "Área de musculação Full Force - Ambiente premium com iluminação moderna",
        badge: "Premium",
        gradient: "from-success/20 to-emerald-500/20"
    }
];

const Facilities = () => {
    return (
        <section
            id="facilities"
            className="py-16 md:py-20 lg:py-24 relative overflow-hidden bg-gradient-to-b from-layer-0 to-layer-1"
            aria-labelledby="facilities-heading"
        >
            {/* Decorative Elements */}
            <div className="absolute top-0 right-0 w-96 h-96 bg-primary/5 rounded-full blur-3xl -z-10" />
            <div className="absolute bottom-0 left-0 w-96 h-96 bg-success/5 rounded-full blur-3xl -z-10" />

            <div className="container mx-auto px-4 sm:px-6">
                {/* Section Header */}
                <div className="text-center max-w-3xl mx-auto mb-12 md:mb-16 animate-fade-in">
                    <Badge
                        variant="primary"
                        size="lg"
                        className="mb-4 md:mb-6"
                    >
                        🏠 Nossa Estrutura
                    </Badge>

                    <h2
                        id="facilities-heading"
                        className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black mb-4 md:mb-6 leading-tight"
                    >
                        Mais do que uma academia.{" "}
                        <span className="text-primary">Um espaço para você.</span>
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-300 leading-relaxed">
                        Pensamos em cada detalhe para que você tenha a melhor experiência,
                        do estacionamento ao último exercício.
                    </p>
                </div>

                {/* Facilities Grid */}
                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8 max-w-7xl mx-auto">
                    {facilities.map((facility, index) => {
                        const Icon = facility.icon;

                        return (
                            <Card
                                key={index}
                                variant="elevated"
                                className="group overflow-hidden hover:shadow-floating transition-all duration-500 animate-scale-in"
                                style={{ animationDelay: `${index * 100}ms` }}
                            >
                                {/* Image Container with Overlay */}
                                <div className="relative h-64 overflow-hidden">
                                    <img
                                        src={facility.image}
                                        alt={facility.imageAlt}
                                        className="w-full h-full object-cover object-center group-hover:scale-110 transition-transform duration-700"
                                        loading="lazy"
                                    />

                                    {/* Gradient Overlay */}
                                    <div className={`absolute inset-0 bg-gradient-to-t ${facility.gradient} opacity-60 group-hover:opacity-40 transition-opacity duration-500`} />

                                    {/* Badge on Image */}
                                    <div className="absolute top-4 right-4 z-10">
                                        <Badge variant="outline" className="bg-white/90 dark:bg-neutral-900/90 backdrop-blur-sm">
                                            {facility.badge}
                                        </Badge>
                                    </div>

                                    {/* Icon Circle */}
                                    <div className="absolute bottom-4 left-4 z-10">
                                        <div className="w-12 h-12 rounded-full bg-white dark:bg-neutral-900 shadow-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300">
                                            <Icon className="w-6 h-6 text-primary" />
                                        </div>
                                    </div>
                                </div>

                                {/* Content */}
                                <div className="p-6 md:p-8 bg-gradient-to-br from-layer-1 to-layer-2">
                                    <h3 className="text-xl md:text-2xl font-black mb-3 group-hover:text-primary transition-colors duration-300">
                                        {facility.title}
                                    </h3>

                                    <p className="text-base text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                        {facility.description}
                                    </p>
                                </div>
                            </Card>
                        );
                    })}
                </div>

                {/* Bottom CTA */}
                <div className="text-center mt-12 md:mt-16 animate-fade-in">
                    <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 font-bold">
                        💡 Venha conhecer pessoalmente.{" "}
                        <span className="text-primary">Você vai se surpreender!</span>
                    </p>
                </div>
            </div>
        </section>
    );
};

export default Facilities;
