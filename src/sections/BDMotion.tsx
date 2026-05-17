import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ChevronRight, Trophy, Handshake } from 'lucide-react';
import { bdMotion, bdPlanModules } from '../lib/content';
import Section from '../components/Section';

type Lane = 'pre' | 'post';

export default function BDMotion() {
  const [lane, setLane] = useState<Lane>('pre');
  const data = lane === 'pre' ? bdMotion.preAward : bdMotion.postAward;
  const Icon = lane === 'pre' ? Handshake : Trophy;

  return (
    <Section
      id="bd-motion"
      code="BDM / BD MOTION"
      eyebrow="Pre-award. Post-award. Same signal discipline."
      title={
        <>
          Most teams stop tracking after award.{' '}
          <span className="text-signal-400">Signal Force treats award as a new signal.</span>
        </>
      }
      intro="Signal Force supports both lanes of GovCon BD. Pre-award capture: read the market, qualify the opportunity, build the team. Post-award teaming: read the winners, find the gap, move first."
    >
      {/* Lane toggle */}
      <div className="mb-8 inline-flex rounded-md border border-white/10 bg-ink-900/60 p-1">
        <ToggleButton active={lane === 'pre'} onClick={() => setLane('pre')}>
          PA / Pre-Award
        </ToggleButton>
        <ToggleButton active={lane === 'post'} onClick={() => setLane('post')}>
          PW / Post-Award
        </ToggleButton>
      </div>

      <AnimatePresence mode="wait">
        <motion.div
          key={lane}
          initial={{ opacity: 0, y: 16 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -8 }}
          transition={{ duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
          className="grid gap-6 md:grid-cols-2"
        >
          <div className="panel relative overflow-hidden p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="label">{data.code}</div>
                <h3 className="font-display text-lg text-bone-50">{data.name}</h3>
              </div>
            </div>
            <div className="mt-6 label mb-3">Signal Force helps teams understand</div>
            <ul className="space-y-2.5">
              {data.questions.map((q) => (
                <li
                  key={q}
                  className="flex items-start gap-3 border-l border-signal-500/30 pl-4 font-mono text-xs leading-relaxed text-bone-300"
                >
                  <span className="mt-0.5 text-signal-400">»</span>
                  <span>{q}</span>
                </li>
              ))}
            </ul>
          </div>

          <div className="panel relative overflow-hidden p-7">
            <div className="label">Outputs</div>
            <h3 className="mt-2 font-display text-lg text-bone-50">What the team walks away with</h3>
            <ul className="mt-6 space-y-3">
              {data.outputs.map((o) => (
                <li
                  key={o}
                  className="flex items-center gap-3 rounded-md border border-signal-500/25 bg-signal-500/[0.04] px-4 py-3 text-sm text-bone-100"
                >
                  <ChevronRight size={14} className="text-signal-400" />
                  <span>{o}</span>
                </li>
              ))}
            </ul>
          </div>
        </motion.div>
      </AnimatePresence>

      {/* Master BD Plan modules — what assembles from the motion above */}
      <PlanModules />
    </Section>
  );
}

function PlanModules() {
  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
          BDP / Master BD Plan
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
          15 modules · Sourced · Dated
        </span>
      </div>

      <div className="panel relative overflow-hidden p-5 md:p-6">
        <div className="grid items-start gap-6 md:grid-cols-12">
          <div className="md:col-span-4">
            <h3 className="h-display text-xl leading-tight md:text-2xl">
              The goal is not to know more.{' '}
              <span className="text-signal-400">The goal is to know what to do next.</span>
            </h3>
            <p className="mt-3 text-sm leading-relaxed text-bone-300">
              Signals from both lanes assemble into a plan. Every module is sourced, calibrated, and tied to a recommended action.
            </p>
          </div>

          <div className="md:col-span-8">
            <div className="grid gap-px overflow-hidden rounded-md border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 lg:grid-cols-3">
              {bdPlanModules.map((m) => (
                <div
                  key={m.code}
                  className="group flex items-center justify-between bg-ink-850/80 px-4 py-3 transition-colors hover:bg-ink-800/80"
                >
                  <div className="flex items-center gap-3 min-w-0">
                    <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500 group-hover:text-signal-400 transition-colors shrink-0">
                      {m.code}
                    </span>
                    <span className="font-display text-xs text-bone-100 md:text-sm truncate">
                      {m.name}
                    </span>
                  </div>
                  <span className="h-1 w-1 rounded-full bg-bone-600 transition-colors group-hover:bg-signal-400" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
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
