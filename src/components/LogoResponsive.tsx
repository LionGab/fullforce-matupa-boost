import { useTheme } from "next-themes";
import { useState, useEffect } from "react";

interface LogoResponsiveProps {
    variant?: "header" | "hero" | "footer" | "symbol" | "full";
    className?: string;
    size?: "xs" | "sm" | "md" | "lg" | "xl";
    withGlow?: boolean;
    mobileSymbolOnly?: boolean; // Nova prop para usar apenas símbolo no mobile
}

/**
 * LogoResponsive - Sistema de logo adaptável MOBILE-FIRST
 * 
 * Estratégia Mobile-First:
 * - Símbolos compactos em telas pequenas (< 640px)
 * - Logo completa apenas em telas maiores
 * - Performance otimizada para 3G/4G
 * - Touch-friendly com hover states
 * - Carregamento prioritário para elementos críticos
 */

const LogoResponsive = ({
    variant = "full",
    className = "",
    size = "md",
    withGlow = false,
    mobileSymbolOnly = false
}: LogoResponsiveProps) => {
    const { theme, resolvedTheme } = useTheme();
    const [mounted, setMounted] = useState(false);
    const [isMobile, setIsMobile] = useState(false);

    // Detecta mobile e aguarda hidratação
    useEffect(() => {
        setMounted(true);
        const checkMobile = () => {
            setIsMobile(window.innerWidth < 640); // Tailwind sm breakpoint
        };

        checkMobile();
        window.addEventListener('resize', checkMobile);
        return () => window.removeEventListener('resize', checkMobile);
    }, []);

    // Configuração de tamanhos responsivos MOBILE-FIRST
    const sizeClasses = {
        xs: "h-4 sm:h-6",                    // 16px → 24px (micro)
        sm: "h-6 sm:h-8 md:h-10",            // 24px → 32px → 40px (compacto)  
        md: "h-8 sm:h-10 md:h-12 lg:h-14",   // 32px → 40px → 48px → 56px (padrão)
        lg: "h-10 sm:h-12 md:h-16 lg:h-20",  // 40px → 48px → 64px → 80px (destaque)
        xl: "h-12 sm:h-16 md:h-20 lg:h-24"   // 48px → 64px → 80px → 96px (hero)
    };

    // Seleção da logo baseada no tema, variante e dispositivo MOBILE-FIRST
    const getLogoSrc = () => {
        const isDark = mounted ? (resolvedTheme === 'dark') : true;

        // No mobile, usar símbolo quando especificado
        if (isMobile && (mobileSymbolOnly || variant === "header")) {
            return isDark ? "/logo-symbol-yellow.jpg" : "/logo-symbol-only.jpg";
        }

        switch (variant) {
            case "symbol":
                return isDark ? "/logo-symbol-yellow.jpg" : "/logo-symbol-only.jpg";

            case "hero":
                // No mobile hero, usar logo completa amarela mesmo sendo mobile
                return "/logo-full-yellow.jpg";

            case "header":
                // Header mobile = símbolo, header desktop = logo completa
                return isMobile
                    ? (isDark ? "/logo-symbol-yellow.jpg" : "/logo-symbol-only.jpg")
                    : (isDark ? "/logo-full-white.jpg" : "/logo-full-dark.jpg");

            case "footer":
                return "/logo-full-yellow.jpg";

            case "full":
            default:
                return isDark ? "/logo-full-white.jpg" : "/logo-full-dark.jpg";
        }
    };

    // Classes base da logo MOBILE-OPTIMIZED
    const baseClasses = `
        ${sizeClasses[size]} 
        w-auto 
        object-contain 
        transition-all 
        duration-300 
        ${isMobile ? 'active:scale-95 logo-mobile-touch mobile-transform' : 'hover:scale-105'}
        ${withGlow && !isMobile ? 'group-hover:scale-110' : ''}
        ${className}
    `.trim();

    // Efeito glow otimizado para performance mobile
    const glowEffect = withGlow && !isMobile ? (
        <div className="absolute inset-0 blur-xl opacity-30 bg-primary/40 animate-pulse-subtle" />
    ) : null;

    return (
        <div className={`relative inline-block ${withGlow && !isMobile ? 'group' : ''}`}>
            {glowEffect}
            <img
                src={getLogoSrc()}
                alt={isMobile && variant === "header"
                    ? "Full Force Academia"
                    : "Full Force Academia - A academia que faz Matupá se mover"
                }
                className={baseClasses}
                loading={variant === "hero" ? "eager" : "lazy"}
                fetchPriority={variant === "hero" ? "high" : "auto"}
                onError={(e) => {
                    // Fallback hierárquico mobile-first
                    const target = e.target as HTMLImageElement;
                    if (!target.src.includes('logo.jpg')) {
                        target.src = isMobile ? "/logo-symbol-yellow.jpg" : "/logo.jpg";
                    }
                }}
                // Touch optimization para mobile
                style={isMobile ? {
                    touchAction: 'manipulation',
                    WebkitTapHighlightColor: 'transparent'
                } : {}}
            />
        </div>
    );
};

export default LogoResponsive;