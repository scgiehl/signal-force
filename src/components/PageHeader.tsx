import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import { todayCode } from '../lib/utils';

type Props = {
  code: string;
  eyebrow: string;
  title: ReactNode;
  intro?: ReactNode;
};

export default function PageHeader({ code, eyebrow, title, intro }: Props) {
  return (
    <header className="relative isolate overflow-hidden border-b border-white/[0.06] pt-28 lg:pt-32">
      {/* faint signal glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[600px] w-[1100px] -translate-x-1/2 opacity-60"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(61,110,255,0.18) 0%, rgba(7,9,13,0) 70%)',
        }}
      />
      {/* meta strip */}
      <div className="container-x">
        <div className="flex items-center justify-between border-b border-white/[0.06] py-4 font-mono text-sm uppercase tracking-widest2 text-bone-500">
          <div className="flex items-center gap-3">
            <span className="text-signal-400">{code}</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span className="hidden text-bone-300 sm:block">{eyebrow}</span>
          </div>
          <div className="flex items-center gap-3">
            <span className="hidden sm:block">Doc · Signal Force</span>
            <span className="hidden h-3 w-px bg-white/15 sm:block" />
            <span>{todayCode()}</span>
          </div>
        </div>
      </div>

      <div className="container-x py-16 lg:py-24">
        <motion.div
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, ease: [0.22, 1, 0.36, 1] }}
          className="max-w-4xl"
        >
          <span className="eyebrow">{eyebrow}</span>
          <h1 className="mt-5 h-display text-balance text-4xl leading-[1.05] md:text-6xl">{title}</h1>
          {intro && (
            <div className="mt-6 max-w-3xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
              {intro}
            </div>
          )}
        </motion.div>
      </div>
    </header>
  );
}
