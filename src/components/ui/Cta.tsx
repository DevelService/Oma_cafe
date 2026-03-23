import Link from "next/link";
import type { ReactNode } from "react";

type Variant = "primary" | "light" | "nav" | "onDark";
type Size = "sm" | "md" | "pill";

type SharedProps = {
  children: ReactNode;
  className?: string;
  variant?: Variant;
  size?: Size;
};

type CtaLinkProps = SharedProps & {
  href: string;
};

type CtaAnchorProps = SharedProps & {
  href: string;
  target?: "_blank" | "_self" | "_parent" | "_top";
  rel?: string;
};

const baseClass =
  "font-cta inline-block rounded-full uppercase transition-colors hover:-translate-y-0.5";

const variantClasses: Record<Variant, string> = {
  primary: "bg-(--oma-cocoa) text-(--oma-paper)",
  light:
    "border border-(--oma-green)/40 bg-(--oma-paper)/72 hover:bg-(--oma-cream-soft) hover:opacity-100",
  nav: "border border-(--oma-green)/20 bg-(--oma-paper)/70 hover:bg-(--oma-cream-soft) hover:opacity-100",
  onDark: "border border-(--oma-paper)/50 bg-(--oma-paper)/10 text-(--oma-paper)",
};

const sizeClasses: Record<Size, string> = {
  sm: "px-3 py-1.5 text-sm font-semibold",
  md: "px-6 py-3 text-sm font-bold",
  pill: "px-5 py-2.5 text-sm font-semibold",
};

function getClassName(variant: Variant, size: Size, className = "") {
  return `${baseClass} ${variantClasses[variant]} ${sizeClasses[size]} ${className}`.trim();
}

export function CtaLink({
  href,
  children,
  className,
  variant = "primary",
  size = "md",
}: CtaLinkProps) {
  return (
    <Link href={href} className={getClassName(variant, size, className)}>
      {children}
    </Link>
  );
}

export function CtaAnchor({
  href,
  children,
  target,
  rel,
  className,
  variant = "primary",
  size = "md",
}: CtaAnchorProps) {
  return (
    <a href={href} target={target} rel={rel} className={getClassName(variant, size, className)}>
      {children}
    </a>
  );
}
