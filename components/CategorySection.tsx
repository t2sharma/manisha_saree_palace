import { ReactNode } from "react";

interface Props {
  title: string;
  eyebrow?: string;
  description?: string;
  children: ReactNode;
}

export const CategorySection = ({ title, eyebrow, description, children }: Props) => {
  return (
    <section className="section-wrapper">
      <div className="section-inner space-y-8">
        <header className="max-w-2xl space-y-2">
          {eyebrow && (
            <p className="text-xs font-semibold uppercase tracking-[0.28em] text-maroon/70">
              {eyebrow}
            </p>
          )}
          <h2 className="font-heading text-2xl md:text-3xl text-maroon">
            {title}
          </h2>
          {description && (
            <p className="text-sm text-maroon/90">{description}</p>
          )}
        </header>
        {children}
      </div>
    </section>
  );
};
