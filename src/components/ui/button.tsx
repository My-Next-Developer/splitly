import Link from "next/link";
import type { ComponentProps } from "react";

type ButtonProps = ComponentProps<typeof Link> & {
  variant?: "primary" | "secondary";
};

export function Button({
  className,
  variant = "primary",
  ...props
}: ButtonProps) {
  const baseClass =
    "inline-flex min-h-10 items-center justify-center rounded-control px-4 py-2 text-label transition-colors focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-primary";

  const variantClass =
    variant === "primary"
      ? "bg-primary text-white hover:bg-primary-hover"
      : "border border-border bg-surface text-foreground hover:bg-surface-muted";

  return (
    <Link
      className={[baseClass, variantClass, className].filter(Boolean).join(" ")}
      {...props}
    />
  );
}
