import type { ReactNode } from "react";

type KickerProps = {
  children: ReactNode;
  className?: string;
};

export function Kicker({ children, className = "" }: KickerProps) {
  return <p className={`oma-kicker ${className}`}>{children}</p>;
}
