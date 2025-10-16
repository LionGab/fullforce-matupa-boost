import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface LogoResponsiveProps {
    variant?: "header" | "hero" | "footer" | "symbol" | "full";
    className?: string;
    size?: "sm" | "md" | "lg" | "xl";
    withGlow?: boolean;
}

/**
 * LogoResponsive - Sistema de logo adaptável
 * 
 * Estratégia: Logo que se adapta ao contexto, tema e dispositivo
 * - Diferentes variações para diferentes contextos
 * - Suporte a dark/light mode
 * - Responsividade otimizada
 * - Efeitos visuais opcionais
 */

const LogoResponsive = ({
    variant = "full",
    className = "",
    size = "md",
    withGlow = false
}: LogoResponsiveProps) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);

    // Aguarda hidratação para evitar mismatch
    useEffect(() => {
        setMounted(true);
    }, []);

    // Configuração de tamanhos responsivos
    const sizeClasses = {
        sm: "h-6 sm:h-8",           // 24px → 32px
        md: "h-8 sm:h-10 md:h-12",  // 32px → 40px → 48px  
        lg: "h-12 sm:h-14 md:h-16", // 48px → 56px → 64px
        xl: "h-16 sm:h-20 md:h-24"  // 64px → 80px → 96px
    };

    // Seleção da logo baseada no tema e variante
    const getLogoSrc = () => {
        const isDark = mounted ? (resolvedTheme === 'dark') : true;

        switch (variant) {
            case "symbol":
                return isDark ? "/logo-symbol-yellow.jpg" : "/logo-symbol-only.jpg";

            case "hero":
                return "/logo-full-yellow.jpg"; // Sempre amarela no hero para destaque

            case "header":
                return isDark ? "/logo-full-white.jpg" : "/logo-full-dark.jpg";

            case "footer":
                return "/logo-full-yellow.jpg"; // Amarela no footer para identificação

            case "full":
            default:
                return isDark ? "/logo-full-white.jpg" : "/logo-full-dark.jpg";
        }
    };

    // Classes base da logo
    const baseClasses = `
    ${sizeClasses[size]} 
    w-auto 
    object-contain 
    transition-all 
    duration-300 
    ${className}
  `.trim();

    // Efeito glow para hero e CTAs
    const glowEffect = withGlow ? (
        <div className="absolute inset-0 blur-xl opacity-30 bg-primary/40 animate-pulse-subtle" />
    ) : null;

    return (
        <div className={`relative inline-block ${withGlow ? 'group' : ''}`}>
            {glowEffect}
            <img
                src={getLogoSrc()}
                alt="Full Force Academia - A academia que faz Matupá se mover"
                className={baseClasses}
                loading={variant === "hero" ? "eager" : "lazy"}
                fetchPriority={variant === "hero" ? "high" : "auto"}
                onError={(e) => {
                    // Fallback para logo principal em caso de erro
                    (e.target as HTMLImageElement).src = "/logo.jpg";
                }}
            />
        </div>
    );
};

export default LogoResponsive;