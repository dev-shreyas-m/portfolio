import type { ReactNode } from "react";
import { cn } from "@/lib/utils";

interface SectionProps {
  id: string;
  eyebrow: string;
  title: ReactNode;
  description?: ReactNode;
  children: ReactNode;
  className?: string;
}

export const Section = ({ id, eyebrow, title, description, children, className }: SectionProps) => (
  <section id={id} className={cn("section-pad", className)}>
    <div className="container-page">
      <header className="mb-10 max-w-2xl">
        <span className="eyebrow">{eyebrow}</span>
        <h2 className="mt-3 text-3xl font-semibold tracking-tight md:text-4xl">{title}</h2>
        {description && (
          <p className="mt-3 text-base leading-relaxed text-muted-foreground">{description}</p>
        )}
      </header>
      {children}
    </div>
  </section>
);
