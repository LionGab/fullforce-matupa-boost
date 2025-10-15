import { Check, X, Star, Crown, Zap, Wind } from "lucide-react";
import { Button } from "@/components/ui/button";
import { Badge } from "@/components/ui/badge";
import { Card, CardContent, CardHeader } from "@/components/ui/card";

/**
 * Tabela de Comparação de Planos - Conversão Focada
 * 
 * Objetivo: Destacar visualmente os benefícios exclusivos do Plano Anual
 * Estratégia: Usar prova social, urgência e contraste visual para empurrar conversão
 * 
 * Features principais:
 * - Comparação lado a lado (Mobile: Stack vertical)
 * - Destaque visual para plano anual (borda dourada, badge)
 * - Lista de benefícios exclusivos com ícones
 * - CTA direto para WhatsApp com mensagem personalizada
 * - Urgência: "Últimas vagas de outubro"
 */

const PlansComparison = () => {
    const handleWhatsAppClick = (planType: string) => {
        // Tracking de conversão
        if (typeof window !== "undefined" && window.gtag) {
            window.gtag('event', 'click_whatsapp', {
                event_category: 'engagement',
                event_label: 'plans_comparison',
                plan_type: planType,
                value: 1
            });

            window.gtag('event', 'generate_lead', {
                currency: 'BRL',
                value: planType === 'Anual' ? 1428 : 189
            });

            if (planType === 'Anual') {
                window.gtag('event', 'begin_checkout', {
                    currency: 'BRL',
                    value: 1428,
                    items: [{
                        item_id: 'plano_anual_outubro_2025',
                        item_name: 'Plano Anual Full Force - Oferta Outubro',
                        price: 1428,
                        quantity: 1
                    }]
                });
            }
        }

        const messages = {
            Mensal: "Olá! Quero conhecer o Plano Mensal da Full Force Academia 💪",
            Anual: "Olá! Quero GARANTIR minha vaga no Plano Anual com 37% OFF até outubro! 🔥"
        };

        window.open(
            `https://wa.me/556699100808?text=${encodeURIComponent(messages[planType as keyof typeof messages])}`,
            "_blank",
            "noopener,noreferrer"
        );
    };

    // Benefícios comparativos
    const features = [
        {
            name: "Acesso à musculação completa",
            mensal: true,
            anual: true,
            icon: Check
        },
        {
            name: "Área de cardio equipada",
            mensal: true,
            anual: true,
            icon: Check
        },
        {
            name: "Avaliação física inicial",
            mensal: true,
            anual: true,
            icon: Check
        },
        {
            name: "Acesso 7 dias/semana",
            mensal: true,
            anual: true,
            icon: Check
        },
        {
            name: "Horário flexível (04h30 às 21h)",
            mensal: true,
            anual: true,
            icon: Check
        },
        {
            name: "Treino personalizado com acompanhamento",
            mensal: false,
            anual: true,
            icon: Star,
            highlight: true
        },
        {
            name: "Reavaliação física trimestral",
            mensal: false,
            anual: true,
            icon: Star,
            highlight: true
        },
        {
            name: "1 Convidado grátis por mês",
            mensal: false,
            anual: true,
            icon: Crown,
            highlight: true
        },
        {
            name: "Prioridade em eventos e desafios",
            mensal: false,
            anual: true,
            icon: Zap,
            highlight: true
        },
        {
            name: "Desconto em produtos e suplementos",
            mensal: false,
            anual: true,
            icon: Star,
            highlight: true
        },
        {
            name: "Economia de 37% no ano",
            mensal: false,
            anual: true,
            icon: Crown,
            highlight: true,
            emphasis: true
        },
    ];

    return (
        <section className="py-16 sm:py-20 md:py-24 lg:py-28 bg-neutral-950 relative overflow-hidden">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.15),transparent_60%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header com Urgência */}
                <div className="text-center mb-10 sm:mb-12 md:mb-16 animate-fade-in">
                    {/* Urgency Badge */}
                    <div className="inline-flex items-center gap-2 px-4 sm:px-6 py-2.5 sm:py-3 rounded-full bg-gradient-to-r from-red-500/20 via-orange-500/20 to-primary/20 border-2 border-primary/50 mb-4 sm:mb-6 shadow-glow-primary backdrop-blur-sm animate-pulse-subtle">
                        <span className="text-xl sm:text-2xl animate-bounce">⏰</span>
                        <span className="text-xs sm:text-sm md:text-base font-black text-primary drop-shadow-[0_2px_8px_rgba(255,204,0,0.6)]">
                            ÚLTIMAS VAGAS DE OUTUBRO - 37% OFF
                        </span>
                    </div>

                    <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-5xl font-black text-white mb-3 sm:mb-4 leading-tight">
                        Compare os Planos e <span className="text-primary">Economize Mais</span>
                    </h2>

                    <p className="text-sm sm:text-base md:text-lg lg:text-xl text-neutral-300 max-w-3xl mx-auto leading-relaxed">
                        Veja por que <span className="text-primary font-bold">+ de 650 alunos</span> escolheram o Plano Anual:
                        <br className="hidden sm:block" />
                        <span className="text-white font-semibold">Mais benefícios, mais economia, mais resultados.</span>
                    </p>
                </div>

                {/* Comparison Table - Desktop */}
                <div className="hidden lg:block max-w-6xl mx-auto">
                    <div className="grid grid-cols-3 gap-6">
                        {/* Header Column - Features List */}
                        <div className="space-y-3">
                            <div className="h-32 flex items-end pb-4">
                                <h3 className="text-xl font-bold text-neutral-400">O que você ganha:</h3>
                            </div>
                            {features.map((feature, index) => (
                                <div
                                    key={index}
                                    className={`h-16 flex items-center px-4 rounded-lg ${feature.highlight
                                        ? 'bg-primary/10 border-l-4 border-primary'
                                        : 'bg-neutral-900/50'
                                        }`}
                                >
                                    <span className={`text-sm font-medium ${feature.emphasis ? 'text-primary font-black' : 'text-neutral-300'
                                        }`}>
                                        {feature.name}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Plano Mensal Column */}
                        <Card variant="elevated" className="bg-neutral-900 border-neutral-800">
                            <CardHeader className="text-center pb-6 pt-8">
                                <h3 className="text-2xl font-black text-white mb-2">Plano Mensal</h3>
                                <div className="text-center py-2">
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-lg text-neutral-400 font-bold">R$</span>
                                        <span className="text-5xl font-black text-white">189</span>
                                        <span className="text-base text-neutral-400 font-medium">/mês</span>
                                    </div>
                                    <p className="text-neutral-400 text-xs mt-2">Sem fidelidade</p>
                                </div>
                            </CardHeader>
                            <CardContent className="space-y-3 px-4 pb-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="h-16 flex items-center justify-center">
                                        {feature.mensal ? (
                                            <Check className="w-6 h-6 text-green-500" />
                                        ) : (
                                            <X className="w-6 h-6 text-neutral-600" />
                                        )}
                                    </div>
                                ))}
                                <Button
                                    onClick={() => handleWhatsAppClick('Mensal')}
                                    variant="outline"
                                    className="w-full mt-6 border-neutral-700 hover:border-primary/50"
                                >
                                    Escolher Mensal
                                </Button>
                            </CardContent>
                        </Card>

                        {/* Plano Anual Column - Highlighted */}
                        <Card variant="glow" className="bg-neutral-900 border-primary/40 relative scale-105 shadow-glow-primary">
                            {/* "Mais Escolhido" Badge */}
                            <div className="absolute -top-4 left-1/2 -translate-x-1/2 z-20">
                                <Badge variant="primary" size="lg" className="text-sm font-black px-6 py-2 shadow-glow-primary">
                                    <Star className="w-5 h-5 fill-current mr-1.5" />
                                    MAIS ESCOLHIDO
                                </Badge>
                            </div>

                            <CardHeader className="text-center pb-6 pt-12">
                                <h3 className="text-2xl font-black text-primary mb-2">Plano Anual</h3>

                                {/* Discount Badge */}
                                <div className="inline-block mb-2">
                                    <div className="bg-gradient-to-r from-primary/30 to-orange-500/30 border border-primary/40 text-primary font-black px-4 py-1.5 rounded-lg text-sm shadow-glow-primary">
                                        🔥 37% OFF
                                    </div>
                                </div>

                                <div className="text-center py-2">
                                    {/* Original Price */}
                                    <div className="flex items-center justify-center gap-2 mb-1">
                                        <span className="text-lg text-neutral-500 line-through font-bold">
                                            R$ 189
                                        </span>
                                    </div>

                                    {/* Discounted Price */}
                                    <div className="flex items-baseline justify-center gap-1">
                                        <span className="text-lg text-neutral-400 font-bold">R$</span>
                                        <span className="text-5xl font-black text-primary drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]">
                                            119
                                        </span>
                                        <span className="text-base text-neutral-400 font-medium">/mês</span>
                                    </div>

                                    <p className="text-neutral-400 text-xs mt-1">12x de R$119 (Total: R$1.428)</p>
                                    <p className="text-primary font-bold text-sm mt-2">💰 Economize R$840 no ano!</p>
                                </div>
                            </CardHeader>

                            <CardContent className="space-y-3 px-4 pb-6">
                                {features.map((feature, index) => (
                                    <div key={index} className="h-16 flex items-center justify-center">
                                        {feature.anual ? (
                                            <Check className={`w-6 h-6 ${feature.highlight ? 'text-primary' : 'text-green-500'}`} />
                                        ) : (
                                            <X className="w-6 h-6 text-neutral-600" />
                                        )}
                                    </div>
                                ))}
                                <Button
                                    onClick={() => handleWhatsAppClick('Anual')}
                                    variant="premium"
                                    className="w-full mt-6"
                                >
                                    🔥 Garantir Minha Vaga
                                </Button>
                            </CardContent>
                        </Card>
                    </div>
                </div>

                {/* Comparison Cards - Mobile/Tablet */}
                <div className="lg:hidden space-y-6 max-w-2xl mx-auto">
                    {/* Plano Anual - Destaque primeiro */}
                    <Card variant="glow" className="bg-neutral-900 border-primary/40 relative shadow-glow-primary">
                        <div className="absolute -top-3 left-1/2 -translate-x-1/2 z-20">
                            <Badge variant="primary" size="lg" className="text-xs sm:text-sm font-black px-4 sm:px-6 py-2 shadow-glow-primary">
                                <Star className="w-4 h-4 sm:w-5 sm:h-5 fill-current mr-1 sm:mr-1.5" />
                                MAIS ESCOLHIDO
                            </Badge>
                        </div>

                        <CardHeader className="text-center pb-4 pt-10">
                            <h3 className="text-xl sm:text-2xl font-black text-primary mb-2">Plano Anual</h3>

                            <div className="inline-block mb-2">
                                <div className="bg-gradient-to-r from-primary/30 to-orange-500/30 border border-primary/40 text-primary font-black px-3 py-1.5 rounded-lg text-xs sm:text-sm shadow-glow-primary">
                                    🔥 37% OFF
                                </div>
                            </div>

                            <div className="text-center py-2">
                                <div className="flex items-center justify-center gap-2 mb-1">
                                    <span className="text-base sm:text-lg text-neutral-500 line-through font-bold">
                                        R$ 189
                                    </span>
                                </div>

                                <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                                    <span className="text-base sm:text-lg text-neutral-400 font-bold">R$</span>
                                    <span className="text-4xl sm:text-5xl font-black text-primary drop-shadow-[0_0_30px_rgba(255,204,0,0.5)]">
                                        119
                                    </span>
                                    <span className="text-sm sm:text-base text-neutral-400 font-medium">/mês</span>
                                </div>

                                <p className="text-neutral-400 text-xs mt-1">12x de R$119 (Total: R$1.428)</p>
                                <p className="text-primary font-bold text-xs sm:text-sm mt-2">💰 Economize R$840 no ano!</p>
                            </div>
                        </CardHeader>

                        <CardContent className="px-4 pb-4">
                            <div className="space-y-2 mb-4">
                                {features.filter(f => f.anual).map((feature, index) => {
                                    const IconComponent = feature.icon;
                                    return (
                                        <div key={index} className="flex items-start gap-2 group">
                                            <IconComponent className={`w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 ${feature.highlight ? 'text-primary' : 'text-green-500'
                                                }`} />
                                            <span className={`text-xs sm:text-sm font-medium leading-relaxed ${feature.emphasis
                                                ? 'text-primary font-black'
                                                : feature.highlight
                                                    ? 'text-white'
                                                    : 'text-neutral-300'
                                                }`}>
                                                {feature.name}
                                            </span>
                                        </div>
                                    );
                                })}
                            </div>

                            <Button
                                onClick={() => handleWhatsAppClick('Anual')}
                                variant="premium"
                                className="w-full text-sm sm:text-base"
                            >
                                🔥 Garantir Minha Vaga no Anual
                            </Button>
                        </CardContent>
                    </Card>

                    {/* Plano Mensal */}
                    <Card variant="elevated" className="bg-neutral-900 border-neutral-800">
                        <CardHeader className="text-center pb-4 pt-6">
                            <h3 className="text-xl sm:text-2xl font-black text-white mb-2">Plano Mensal</h3>

                            <div className="text-center py-2">
                                <div className="flex items-baseline justify-center gap-0.5 sm:gap-1">
                                    <span className="text-base sm:text-lg text-neutral-400 font-bold">R$</span>
                                    <span className="text-4xl sm:text-5xl font-black text-white">189</span>
                                    <span className="text-sm sm:text-base text-neutral-400 font-medium">/mês</span>
                                </div>
                                <p className="text-neutral-400 text-xs mt-2">Sem fidelidade</p>
                            </div>
                        </CardHeader>

                        <CardContent className="px-4 pb-4">
                            <div className="space-y-2 mb-4">
                                {features.filter(f => f.mensal).map((feature, index) => (
                                    <div key={index} className="flex items-start gap-2">
                                        <Check className="w-4 h-4 sm:w-5 sm:h-5 flex-shrink-0 mt-0.5 text-green-500" />
                                        <span className="text-xs sm:text-sm text-neutral-300 font-medium leading-relaxed">
                                            {feature.name}
                                        </span>
                                    </div>
                                ))}
                            </div>

                            <Button
                                onClick={() => handleWhatsAppClick('Mensal')}
                                variant="outline"
                                className="w-full border-neutral-700 hover:border-primary/50 text-sm sm:text-base"
                            >
                                Escolher Mensal
                            </Button>
                        </CardContent>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default PlansComparison;
