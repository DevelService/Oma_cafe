import type { ReactNode } from "react";

type PageContainerProps = {
  children: ReactNode;
  className?: string;
};

export function PageContainer({ children, className = "" }: PageContainerProps) {
  return <section className={`mx-auto w-full max-w-6xl ${className}`}>{children}</section>;
}
