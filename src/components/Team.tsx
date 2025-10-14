import { Card, CardContent } from "@/components/ui/card";
import { Badge } from "@/components/ui/badge";
import { Users, Award, Heart, Target } from "lucide-react";

/**
 * Team Section - Conheça Nossa Equipe
 * 
 * Estratégia: Humanizar a marca e criar conexão emocional
 * - Fotos reais da equipe
 * - Histórias inspiradoras
 * - Credenciais e qualificações
 * - Mobile-first com cards responsivos
 */

const Team = () => {
    const values = [
        {
            icon: Heart,
            title: "Acolhimento",
            description: "Aqui você é tratado como família, não como um número",
        },
        {
            icon: Target,
            title: "Resultados",
            description: "Comprometidos com sua evolução e conquistas reais",
        },
        {
            icon: Users,
            title: "Comunidade",
            description: "Mais de 650 alunos motivando uns aos outros",
        },
        {
            icon: Award,
            title: "Excelência",
            description: "Profissionais qualificados e equipamentos modernos",
        },
    ];

    return (
        <section className="relative py-16 md:py-24 bg-background overflow-hidden" id="equipe">
            {/* Background Pattern */}
            <div className="absolute inset-0 opacity-5">
                <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,_rgba(255,204,0,0.1),transparent_50%)]" />
            </div>

            <div className="container mx-auto px-4 relative z-10">
                {/* Section Header */}
                <div className="text-center mb-12 md:mb-16 animate-fade-in">
                    <Badge variant="primary" size="lg" className="mb-6">
                        <Users className="w-4 h-4 mr-2" />
                        Conheça Nossa Equipe
                    </Badge>

                    <h2 className="text-3xl sm:text-4xl md:text-5xl font-black mb-4 leading-tight">
                        Quem Te <span className="text-primary">Acompanha</span> na Jornada
                    </h2>

                    <p className="text-lg md:text-xl text-neutral-600 dark:text-neutral-400 max-w-2xl mx-auto leading-relaxed">
                        Profissionais apaixonados por transformar vidas através do fitness.
                        <span className="block mt-2 text-neutral-700 dark:text-neutral-300 font-semibold">
                            Seu sucesso é nossa missão.
                        </span>
                    </p>
                </div>

                {/* Equipe Sempre ao Seu Lado - Full Width Image Section */}
                <div className="max-w-6xl mx-auto mb-16">
                    <Card variant="elevated" className="overflow-hidden">
                        <div className="grid md:grid-cols-2 gap-0">
                            {/* Image Side */}
                            <div className="relative h-64 md:h-auto min-h-[400px] overflow-hidden bg-neutral-100 dark:bg-neutral-900">
                                <img
                                    src="/images/Equipe FullForce/equipeff3.jpg"
                                    alt="Equipe Full Force - Profissionais dedicados ao seu sucesso"
                                    className="w-full h-full object-cover object-center hover:scale-105 transition-transform duration-700"
                                    loading="lazy"
                                />
                                {/* Subtle overlay */}
                                <div className="absolute inset-0 bg-gradient-to-r from-black/20 to-transparent md:from-transparent md:to-black/10" />
                            </div>

                            {/* Content Side */}
                            <div className="p-8 md:p-12 flex flex-col justify-center bg-gradient-to-br from-layer-1 to-layer-2">
                                <div className="inline-flex items-center gap-2 mb-6">
                                    <div className="w-12 h-12 rounded-full bg-primary-subtle flex items-center justify-center">
                                        <Heart className="w-6 h-6 text-primary" />
                                    </div>
                                </div>

                                <h3 className="text-2xl md:text-3xl lg:text-4xl font-black mb-4 leading-tight">
                                    💬 Equipe sempre ao seu <span className="text-primary">lado</span>
                                </h3>

                                <p className="text-lg md:text-xl text-neutral-700 dark:text-neutral-300 mb-6 leading-relaxed">
                                    Não importa se você é <span className="font-bold text-neutral-900 dark:text-white">iniciante ou avançado</span>.
                                </p>

                                <p className="text-base md:text-lg text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    Nossa equipe está aqui para te <span className="text-primary font-bold">guiar</span>,
                                    <span className="text-primary font-bold"> motivar</span> e
                                    <span className="text-primary font-bold"> celebrar</span> cada conquista com você.
                                </p>

                                {/* Stats Row */}
                                <div className="grid grid-cols-3 gap-4 mt-8 pt-8 border-t border-neutral-200 dark:border-neutral-700">
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-primary">24h</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Suporte</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-primary">100%</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Dedicação</div>
                                    </div>
                                    <div className="text-center">
                                        <div className="text-2xl font-black text-primary">650+</div>
                                        <div className="text-xs text-neutral-500 dark:text-neutral-400 mt-1">Alunos</div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </Card>
                </div>

                {/* Values Grid */}
                <div className="max-w-6xl mx-auto mt-16">
                    <h3 className="text-2xl md:text-3xl font-black text-center mb-8 md:mb-12">
                        Nossos <span className="text-primary">Valores</span>
                    </h3>

                    <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
                        {values.map((value, index) => (
                            <Card
                                key={index}
                                variant="default"
                                className="text-center p-6 hover:shadow-elevated transition-smooth group"
                            >
                                <div className="inline-flex items-center justify-center w-14 h-14 rounded-full bg-primary-subtle mb-4 group-hover:scale-110 transition-transform">
                                    <value.icon className="w-7 h-7 text-primary" />
                                </div>
                                <h4 className="text-lg font-black mb-2">{value.title}</h4>
                                <p className="text-sm text-neutral-600 dark:text-neutral-400 leading-relaxed">
                                    {value.description}
                                </p>
                            </Card>
                        ))}
                    </div>
                </div>

                {/* CTA Section */}
                <div className="text-center mt-16 animate-fade-in">
                    <Card variant="glow" className="max-w-3xl mx-auto p-8 md:p-12">
                        <div className="space-y-4">
                            <h3 className="text-2xl md:text-3xl font-black">
                                Pronto para fazer parte dessa <span className="text-primary">família?</span>
                            </h3>
                            <p className="text-lg text-neutral-600 dark:text-neutral-300">
                                Nossa equipe está esperando por você. Venha conhecer!
                            </p>
                            <div className="flex items-center justify-center gap-4 text-sm text-neutral-500 dark:text-neutral-400 pt-4">
                                <span className="flex items-center gap-1">
                                    <Users className="w-4 h-4 text-primary" />
                                    650+ alunos
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Heart className="w-4 h-4 text-primary" />
                                    4.9★ avaliação
                                </span>
                                <span>•</span>
                                <span className="flex items-center gap-1">
                                    <Award className="w-4 h-4 text-primary" />
                                    15+ anos
                                </span>
                            </div>
                        </div>
                    </Card>
                </div>
            </div>
        </section>
    );
};

export default Team;
