import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium ring-offset-background transition-smooth focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        // CTA Principal (Yellow)
        default: "bg-primary text-primary-foreground hover:bg-primary-hover active:bg-primary-active shadow-card hover:shadow-elevated active:shadow-subtle transition-smooth",

        // Premium (Gradient + Glow + Pulse)
        premium: "bg-gradient-to-r from-primary via-yellow-400 to-primary text-black font-black shadow-glow-primary hover:shadow-floating animate-pulse-glow hover:scale-105 active:scale-95 transition-smooth",

        // Success (Green)
        success: "bg-success text-success-foreground hover:bg-success-hover active:brightness-90 shadow-card hover:shadow-elevated transition-smooth",

        // Warning (Orange)
        warning: "bg-warning text-warning-foreground hover:bg-warning-hover active:brightness-90 shadow-card hover:shadow-elevated transition-smooth",

        // Destructive (Red)
        destructive: "bg-error text-error-foreground hover:bg-error-hover active:brightness-90 shadow-card hover:shadow-elevated transition-smooth",

        // Outline Primary (Border Yellow)
        "outline-primary": "border-2 border-primary text-primary bg-transparent hover:bg-primary hover:text-black active:bg-primary-hover transition-smooth",

        // Ghost Primary (Transparent com hover amarelo)
        "ghost-primary": "text-primary bg-transparent hover:bg-primary/10 hover:text-primary active:bg-primary/20 transition-smooth",

        // Legacy variants (mantidos para compatibilidade)
        outline: "border border-input bg-background hover:bg-accent hover:text-accent-foreground transition-smooth",
        secondary: "bg-secondary text-secondary-foreground hover:bg-secondary/80 active:bg-secondary/90 transition-smooth",
        ghost: "hover:bg-accent hover:text-accent-foreground active:bg-accent/80 transition-smooth",
        link: "text-primary underline-offset-4 hover:underline transition-smooth",
      },
      size: {
        default: "h-10 px-4 py-2",
        sm: "h-9 rounded-md px-3 text-xs",
        lg: "h-11 rounded-md px-8 text-base",
        xl: "h-14 rounded-lg px-10 text-lg font-bold",
        icon: "h-10 w-10",
      },
    },
    defaultVariants: {
      variant: "default",
      size: "default",
    },
  },
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
  VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return <Comp className={cn(buttonVariants({ variant, size, className }))} ref={ref} {...props} />;
  },
);
Button.displayName = "Button";

export { Button, buttonVariants };
