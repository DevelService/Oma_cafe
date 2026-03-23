import type { ReactNode } from "react";

type ShellSectionProps = {
  children: ReactNode;
  className?: string;
};

export function ShellSection({ children, className = "" }: ShellSectionProps) {
  return (
    <div className={`oma-shell rounded-4xl border border-(--oma-green)/20 p-6 sm:p-8 ${className}`}>
      {children}
    </div>
  );
}
