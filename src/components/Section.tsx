import { ReactNode } from 'react';
import { cn } from '../lib/utils';

type Props = {
  id?: string;
  eyebrow?: string;
  code?: string;
  title?: ReactNode;
  intro?: ReactNode;
  children: ReactNode;
  className?: string;
  align?: 'left' | 'center';
};

export default function Section({ id, eyebrow, code, title, intro, children, className, align = 'left' }: Props) {
  return (
    <section id={id} className={cn('relative py-24 lg:py-32', className)}>
      <div className="container-x">
        {(eyebrow || code || title || intro) && (
          <div className={cn('mb-14 max-w-3xl', align === 'center' && 'mx-auto text-center')}>
            {(eyebrow || code) && (
              <div className={cn('mb-5 flex items-center gap-3', align === 'center' && 'justify-center')}>
                {code && <span className="font-mono text-sm uppercase tracking-widest2 text-signal-400">{code}</span>}
                {code && eyebrow && <span className="h-px w-8 bg-white/10" />}
                {eyebrow && <span className="eyebrow">{eyebrow}</span>}
              </div>
            )}
            {title && (
              <h2 className="h-display text-balance text-3xl leading-[1.1] md:text-4xl lg:text-5xl">{title}</h2>
            )}
            {intro && (
              <p className={cn('mt-6 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg', align === 'center' && 'mx-auto')}>{intro}</p>
            )}
          </div>
        )}
        {children}
      </div>
    </section>
  );
}
