import * as React from "react";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

/**
 * Card Component with Design System Variants
 * 
 * Variants:
 * - flat: Sem sombra
 * - default: Sombra padrão (card)
 * - elevated: Sombra elevada com hover flutuante
 * - outlined: Apenas borda, sem sombra
 * - gradient: Background com gradiente
 * - glow: Efeito de brilho (primário)
 */

const cardVariants = cva(
  "rounded-lg text-card-foreground transition-smooth",
  {
    variants: {
      variant: {
        // Flat - Sem sombra
        flat: "bg-card border border-border shadow-flat",

        // Default - Sombra padrão
        default: "bg-card border border-border shadow-card hover:shadow-elevated",

        // Elevated - Destaque com sombra elevada
        elevated: "bg-card border border-border shadow-elevated hover:shadow-floating hover:-translate-y-1",

        // Outlined - Apenas borda
        outlined: "bg-card border-2 border-border shadow-flat hover:border-primary/30",

        // Gradient - Background gradiente
        gradient: "border border-border shadow-card hover:shadow-elevated bg-gradient-to-br from-layer-1 to-layer-2",

        // Glow - Com efeito de brilho primário
        glow: "bg-card border-2 border-primary/30 shadow-glow-primary hover:shadow-floating hover:border-primary/50",

        // Glow Success - Com efeito de brilho verde
        "glow-success": "bg-card border-2 border-success/30 shadow-glow-success hover:shadow-floating hover:border-success/50",

        // Glow Warning - Com efeito de brilho laranja
        "glow-warning": "bg-card border-2 border-warning/30 shadow-glow-warning hover:shadow-floating hover:border-warning/50",
      },
    },
    defaultVariants: {
      variant: "default",
    },
  },
);

export interface CardProps
  extends React.HTMLAttributes<HTMLDivElement>,
  VariantProps<typeof cardVariants> { }

const Card = React.forwardRef<HTMLDivElement, CardProps>(
  ({ className, variant, ...props }, ref) => (
    <div
      ref={ref}
      className={cn(cardVariants({ variant, className }))}
      {...props}
    />
  ),
);
Card.displayName = "Card";

const CardHeader = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex flex-col space-y-1.5 p-6", className)} {...props} />
  ),
);
CardHeader.displayName = "CardHeader";

const CardTitle = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLHeadingElement>>(
  ({ className, ...props }, ref) => (
    <h3 ref={ref} className={cn("text-2xl font-semibold leading-none tracking-tight", className)} {...props} />
  ),
);
CardTitle.displayName = "CardTitle";

const CardDescription = React.forwardRef<HTMLParagraphElement, React.HTMLAttributes<HTMLParagraphElement>>(
  ({ className, ...props }, ref) => (
    <p ref={ref} className={cn("text-sm text-muted-foreground", className)} {...props} />
  ),
);
CardDescription.displayName = "CardDescription";

const CardContent = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => <div ref={ref} className={cn("p-6 pt-0", className)} {...props} />,
);
CardContent.displayName = "CardContent";

const CardFooter = React.forwardRef<HTMLDivElement, React.HTMLAttributes<HTMLDivElement>>(
  ({ className, ...props }, ref) => (
    <div ref={ref} className={cn("flex items-center p-6 pt-0", className)} {...props} />
  ),
);
CardFooter.displayName = "CardFooter";

export { Card, CardHeader, CardFooter, CardTitle, CardDescription, CardContent };
