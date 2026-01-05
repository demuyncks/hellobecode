import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";

import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap text-base font-semibold ring-offset-background transition-all duration-200 focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0 font-display",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground border-3 border-primary shadow-cartoon hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-cartoon-lg active:translate-x-[2px] active:translate-y-[2px] active:shadow-none",
        destructive: "bg-destructive text-destructive-foreground border-3 border-destructive/80 shadow-cartoon hover:translate-x-[-2px] hover:translate-y-[-2px]",
        outline: "border-3 border-border bg-background text-foreground shadow-cartoon hover:bg-muted hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-cartoon-lg",
        secondary: "bg-secondary text-secondary-foreground border-3 border-secondary/80 shadow-cartoon hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-cartoon-lg",
        ghost: "hover:bg-muted hover:text-foreground",
        link: "text-primary underline-offset-4 hover:underline",
        hero: "bg-gradient-to-r from-secondary to-accent text-secondary-foreground border-3 border-secondary/50 shadow-cartoon-lg hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_hsl(25,40%,70%)] active:translate-x-[2px] active:translate-y-[2px] active:shadow-cartoon",
        cta: "bg-gradient-to-r from-primary to-primary/80 text-primary-foreground border-3 border-primary/50 shadow-cartoon-lg hover:translate-x-[-3px] hover:translate-y-[-3px] hover:shadow-[8px_8px_0px_hsl(25,40%,70%)] font-bold",
        glass: "bg-card/80 backdrop-blur-sm border-3 border-border text-foreground shadow-soft hover:bg-card hover:translate-y-[-2px]",
        sketch: "bg-card text-foreground border-3 border-border hover:border-primary shadow-cartoon hover:translate-x-[-2px] hover:translate-y-[-2px] hover:shadow-cartoon-lg",
      },
      size: {
        default: "h-11 px-6 py-2 rounded-[20px_4px_20px_4px/4px_20px_4px_20px]",
        sm: "h-9 px-4 rounded-[15px_3px_15px_3px/3px_15px_3px_15px] text-sm",
        lg: "h-13 px-8 rounded-[25px_5px_25px_5px/5px_25px_5px_25px] text-lg",
        xl: "h-14 px-10 rounded-[30px_6px_30px_6px/6px_30px_6px_30px] text-xl",
        icon: "h-10 w-10 rounded-[15px_4px_15px_4px/4px_15px_4px_15px]",
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