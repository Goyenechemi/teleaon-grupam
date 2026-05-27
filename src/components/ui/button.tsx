import * as React from "react";
import { Slot } from "@radix-ui/react-slot";
import { cva, type VariantProps } from "class-variance-authority";
import { cn } from "@/lib/utils";

const buttonVariants = cva(
  "inline-flex items-center justify-center whitespace-nowrap font-label-sm text-label-sm uppercase tracking-wider transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-primary disabled:pointer-events-none disabled:opacity-50 btn-interactive",
  {
    variants: {
      variant: {
        /** Filled — primary background */
        primary:
          "bg-primary text-on-primary hover:bg-primary-container",
        /** Outlined — transparent with primary border */
        outline:
          "bg-background text-primary border border-primary hover:bg-surface-container",
        /** Ghost — no background, used for back navigation */
        ghost:
          "text-secondary hover:text-primary bg-transparent",
      },
      size: {
        default: "px-8 py-3",
        lg: "px-8 py-4",
        sm: "px-6 py-3",
        icon: "p-2",
      },
    },
    defaultVariants: {
      variant: "primary",
      size: "default",
    },
  }
);

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement>,
    VariantProps<typeof buttonVariants> {
  asChild?: boolean;
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return (
      <Comp
        className={cn(buttonVariants({ variant, size, className }))}
        ref={ref}
        {...props}
      />
    );
  }
);
Button.displayName = "Button";

export { Button, buttonVariants };
