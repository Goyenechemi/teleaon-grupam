import * as React from "react";
import { cn } from "@/lib/utils";

/**
 * ShadCN-style Input.
 * Styled to match the original HTML: borderless except for the bottom
 * border, transparent background, with the animated focus underline
 * handled by the parent `.input-wrapper` class.
 */
const Input = React.forwardRef<HTMLInputElement, React.InputHTMLAttributes<HTMLInputElement>>(
  ({ className, type, ...props }, ref) => {
    return (
      <input
        type={type}
        className={cn(
          "w-full border-b border-outline bg-transparent py-2",
          "focus:outline-none font-body-md text-body-md text-on-background",
          "placeholder:text-secondary/60 transition-colors",
          className
        )}
        ref={ref}
        {...props}
      />
    );
  }
);
Input.displayName = "Input";

export { Input };
