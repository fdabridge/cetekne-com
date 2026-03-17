import { clsx } from "clsx";
import { HTMLAttributes } from "react";

type BadgeVariant = "default" | "accent" | "success" | "outline";

interface BadgeProps extends HTMLAttributes<HTMLSpanElement> {
  variant?: BadgeVariant;
}

const variantStyles: Record<BadgeVariant, string> = {
  default: "bg-surface text-text-primary",
  accent: "bg-accent/10 text-accent",
  success: "bg-success/10 text-success",
  outline: "border border-border text-text-muted",
};

export function Badge({
  variant = "default",
  className,
  children,
  ...props
}: BadgeProps) {
  return (
    <span
      className={clsx(
        "inline-flex items-center rounded-full px-2.5 py-0.5 text-xs font-medium",
        variantStyles[variant],
        className
      )}
      {...props}
    >
      {children}
    </span>
  );
}

