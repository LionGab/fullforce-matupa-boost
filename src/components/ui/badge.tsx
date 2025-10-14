import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Badge Component with Design System Variants
 * 
 * Variants:
 * - default: Neutro (cinza)
 * - primary: Amarelo com glow
 * - success: Verde
 * - warning: Laranja
 * - error: Vermelho
 * - info: Azul
 * - outline: Transparente com borda
 */

const badgeVariants = cva(
  "inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-smooth focus:outline-none focus:ring-2 focus:ring-ring focus:ring-offset-2",
  {
    variants: {
      variant: {
        // Default - Neutro
        default: "border-transparent bg-neutral-100 dark:bg-neutral-800 text-neutral-900 dark:text-neutral-100 shadow-subtle",

        // Primary - Amarelo com glow
        primary: "border-transparent bg-primary text-black font-black shadow-glow-primary hover:scale-105",

        // Success - Verde
        success: "border-transparent bg-success text-success-foreground shadow-card hover:shadow-elevated",

        // Warning - Laranja
        warning: "border-transparent bg-warning text-warning-foreground shadow-card hover:shadow-elevated",

        // Error - Vermelho
        error: "border-transparent bg-error text-error-foreground shadow-card hover:shadow-elevated",

        // Info - Azul
        info: "border-transparent bg-info text-info-foreground shadow-card hover:shadow-elevated",

        // Outline - Transparente com borda
        outline: "border-2 border-current bg-transparent text-foreground hover:bg-accent/10",

        // Outline Primary - Borda amarela
        "outline-primary": "border-2 border-primary bg-transparent text-primary hover:bg-primary/10",

        // Subtle variants
        "primary-subtle": "border-transparent bg-primary-subtle dark:bg-primary-subtle text-primary font-bold",
        "success-subtle": "border-transparent bg-success-subtle dark:bg-success-subtle text-success font-semibold",
        "warning-subtle": "border-transparent bg-warning-subtle dark:bg-warning-subtle text-warning font-semibold",
        "error-subtle": "border-transparent bg-error-subtle dark:bg-error-subtle text-error font-semibold",
        "info-subtle": "border-transparent bg-info-subtle dark:bg-info-subtle text-info font-semibold",

        // Legacy (shadcn/ui - mantido para compatibilidade)
        secondary: "border-transparent bg-secondary text-secondary-foreground hover:bg-secondary/80",
        destructive: "border-transparent bg-destructive text-destructive-foreground hover:bg-destructive/80",
      },
      size: {
        default: "px-2.5 py-0.5 text-xs",
        sm: "px-2 py-0.25 text-[10px]",
        lg: "px-3 py-1 text-sm",
        xl: "px-4 py-1.5 text-base font-bold",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface BadgeProps extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof badgeVariants> { }

function Badge({ className, variant, size, ...props }: BadgeProps) {
  return <div className={cn(badgeVariants({ variant, size }), className)} {...props} />;
}

export { Badge, badgeVariants };
