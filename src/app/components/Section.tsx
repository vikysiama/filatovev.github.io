import { ReactNode } from "react";

interface SectionProps {
  title: string;
  subtitle?: string;
  children: ReactNode;
  dark?: boolean;
  id?: string;
}

export function Section({ title, subtitle, children, dark = false, id }: SectionProps) {
  return (
    <section 
      id={id}
      className={`py-20 px-6 ${dark ? 'bg-gray-900 text-white' : 'bg-white text-gray-900'}`}
    >
      <div className="max-w-[1200px] mx-auto">
        <div className="mb-12 text-center">
          <h2 className="text-4xl md:text-5xl font-bold mb-4">
            {title}
          </h2>
          {subtitle && (
            <p className={`text-xl ${dark ? 'text-gray-300' : 'text-gray-600'}`}>
              {subtitle}
            </p>
          )}
        </div>
        <div className="space-y-6">
          {children}
        </div>
      </div>
    </section>
  );
}