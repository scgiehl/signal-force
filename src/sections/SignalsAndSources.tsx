import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Banknote,
  Building2,
  Crosshair,
  Cpu,
  Swords,
  Users2,
  Target,
  Newspaper,
  Database,
  Briefcase,
  BookOpenCheck,
  type LucideIcon,
} from 'lucide-react';
import { signalCategories, sourceCategories } from '../lib/content';
import Section from '../components/Section';

type Lane = 'signals' | 'sources';

const SIGNAL_ICONS = [Banknote, Building2, Crosshair, Cpu, Swords, Users2, Target, Newspaper] as const;
const SOURCE_ICONS = [Database, Building2, Newspaper, Briefcase, Users2, BookOpenCheck] as const;

export default function SignalsAndSources() {
  const [lane, setLane] = useState<Lane>('signals');

  return (
    <Section
      id="signals-and-sources"
      code="IN / INPUTS"
      eyebrow="What it weighs · What it ingests"
      title={
        <>
          The federal market is a moving system.{' '}
          <span className="text-signal-400">Signal Force reads it from many directions.</span>
        </>
      }
      intro="Two views on the same input layer. Signal categories are what Signal Force weighs against the decision. Sources are where the raw material comes from — public records, customer language, market behavior, relationship context, and operator judgment."
    >
      <div className="mb-8 inline-flex rounded-md border border-white/10 bg-ink-900/60 p-1">
        <ToggleButton active={lane === 'signals'} onClick={() => setLane('signals')}>
          What it weighs · 8
        </ToggleButton>
        <ToggleButton active={lane === 'sources'} onClick={() => setLane('sources')}>
          What it ingests · 6
        </ToggleButton>
      </div>

      <AnimatePresence mode="wait">
        {lane === 'signals' ? (
          <motion.div
            key="signals"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-4"
          >
            {signalCategories.map((s, i) => {
              const Icon = SIGNAL_ICONS[i] ?? Crosshair;
              return (
                <ItemCard
                  key={s.code}
                  index={i}
                  code={s.code}
                  title={s.name}
                  body={s.body}
                  Icon={Icon}
                />
              );
            })}
          </motion.div>
        ) : (
          <motion.div
            key="sources"
            initial={{ opacity: 0, y: 12 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -8 }}
            transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
            className="grid gap-4 md:grid-cols-2 lg:grid-cols-3"
          >
            {sourceCategories.map((s, i) => {
              const Icon = SOURCE_ICONS[i] ?? Database;
              return (
                <ItemCard
                  key={s.code}
                  index={i}
                  code={s.code}
                  title={s.name}
                  body={s.body}
                  Icon={Icon}
                />
              );
            })}
          </motion.div>
        )}
      </AnimatePresence>

      {lane === 'sources' && (
        <div className="mt-8 rounded-md border border-white/[0.06] bg-ink-900/60 p-5 font-mono text-xs uppercase tracking-widest2 text-bone-400">
          <span className="text-signal-400">Note ·</span> Source language is deliberate. Signal Force is{' '}
          <span className="text-bone-200">designed to ingest</span> these categories and{' '}
          <span className="text-bone-200">incorporates them when available</span>. Not every source is integrated today; the methodology is built so each can be added without changing the analytical core.
        </div>
      )}
    </Section>
  );
}

function ToggleButton({
  active,
  onClick,
  children,
}: {
  active: boolean;
  onClick: () => void;
  children: React.ReactNode;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'rounded px-4 py-2 font-mono text-xs uppercase tracking-widest2 transition-all ' +
        (active
          ? 'bg-signal-500/15 text-signal-400 shadow-[inset_0_0_0_1px_rgba(91,139,255,0.35)]'
          : 'text-bone-400 hover:text-bone-100')
      }
    >
      {children}
    </button>
  );
}

function ItemCard({
  index,
  code,
  title,
  body,
  Icon,
}: {
  index: number;
  code: string;
  title: string;
  body: string;
  Icon: LucideIcon;
}) {
  return (
    <motion.article
      initial={{ opacity: 0, y: 8 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ delay: index * 0.03, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
      className="panel group relative h-full overflow-hidden p-5 transition-colors duration-300 hover:border-signal-500/30"
    >
      <div className="flex items-start justify-between">
        <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-bone-300 transition-colors group-hover:border-signal-500/40 group-hover:bg-signal-500/10 group-hover:text-signal-400">
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500 group-hover:text-signal-400 transition-colors">
          {code}
        </span>
      </div>
      <h3 className="mt-5 font-display text-base leading-tight text-bone-50">{title}</h3>
      <p className="mt-3 text-sm leading-relaxed text-bone-300">{body}</p>
    </motion.article>
  );
}
