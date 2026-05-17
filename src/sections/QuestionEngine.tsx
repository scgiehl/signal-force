import { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Radio, Search } from 'lucide-react';
import Section from '../components/Section';

type Mode = 'pir' | 'rfi';

const PIRS = [
  'Track NGA modernization and AI demand over the next 12 months.',
  'Monitor recompetes in NAICS 541512 and 541330 across target agencies.',
  'Watch post-award movement for selected primes.',
  'Identify agencies increasing spend in cloud, cyber, data, and DevSecOps.',
  'Track BD and capture leadership changes across target companies.',
];

const RFIS = [
  'Should we pursue this sources sought?',
  'Who is the incumbent and where are they vulnerable?',
  'Which prime should we approach for this opportunity?',
  'What is the fastest relationship path into this agency?',
  'What does this award tell us about future work?',
  'What should we do this week?',
];

export default function QuestionEngine() {
  const [mode, setMode] = useState<Mode>('pir');
  const items = mode === 'pir' ? PIRS : RFIS;
  const Icon = mode === 'pir' ? Radio : Search;

  return (
    <Section
      id="question-engine"
      code="QE / QUESTION ENGINE"
      eyebrow="Standing requirements + ad-hoc requests"
      title={
        <>
          Customers do not just receive intelligence.{' '}
          <span className="text-signal-400">They task it.</span>
        </>
      }
      intro="Two lanes feed every customer's intelligence base. Standing Priority Intelligence Requirements set during onboarding for ongoing collection. Ad-hoc Requests for Intelligence answered when a BD team needs a decision. Together they form the Question Engine."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        <div className="lg:col-span-5">
          <div className="space-y-3">
            <LaneCard
              active={mode === 'pir'}
              onClick={() => setMode('pir')}
              code="PIR"
              title="Standing PIRs"
              blurb="Ongoing collection and monitoring against long-term questions. Reviewed quarterly. Each PIR drives a collection plan, scheduled analytical review, and inclusion in routine intelligence products."
              icon={Radio}
            />
            <LaneCard
              active={mode === 'rfi'}
              onClick={() => setMode('rfi')}
              code="RFI"
              title="Ad-hoc RFIs"
              blurb="Specific questions answered when a BD team needs a decision. Combination of automated analysis against the intelligence base and operator-led research. Premium tiers get 48-72 hour turnaround on substantive RFIs."
              icon={Search}
            />
          </div>
        </div>

        <div className="lg:col-span-7">
          <div className="panel relative h-full overflow-hidden p-7">
            <div className="flex items-center gap-3">
              <div className="flex h-10 w-10 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
                <Icon size={18} strokeWidth={1.5} />
              </div>
              <div>
                <div className="label">Example questions</div>
                <h3 className="font-display text-lg text-bone-50">
                  {mode === 'pir' ? 'Standing PIRs' : 'Ad-hoc RFIs'}
                </h3>
              </div>
            </div>

            <AnimatePresence mode="wait">
              <motion.ul
                key={mode}
                initial={{ opacity: 0, y: 12 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: -8 }}
                transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
                className="mt-6 space-y-3"
              >
                {items.map((q, i) => (
                  <motion.li
                    key={q}
                    initial={{ opacity: 0, x: -10 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                    className="flex items-start gap-3 border-l border-signal-500/30 pl-4 font-mono text-xs leading-relaxed text-bone-200 md:text-sm"
                  >
                    <span className="mt-0.5 text-signal-400">»</span>
                    <span>{q}</span>
                  </motion.li>
                ))}
              </motion.ul>
            </AnimatePresence>
          </div>
        </div>
      </div>
    </Section>
  );
}

function LaneCard({
  active,
  onClick,
  code,
  title,
  blurb,
  icon: Icon,
}: {
  active: boolean;
  onClick: () => void;
  code: string;
  title: string;
  blurb: string;
  icon: typeof Radio;
}) {
  return (
    <button
      type="button"
      onClick={onClick}
      className={
        'group relative block w-full overflow-hidden rounded-lg border p-5 text-left transition-all duration-300 ' +
        (active
          ? 'border-signal-500/40 bg-ink-800/80 shadow-signal'
          : 'border-white/[0.06] bg-ink-850/40 hover:border-white/15 hover:bg-ink-800/60')
      }
      aria-pressed={active}
    >
      {active && (
        <motion.span
          layoutId="qe-pill"
          className="absolute inset-y-0 left-0 w-1 bg-signal-500"
          transition={{ type: 'spring', stiffness: 380, damping: 30 }}
        />
      )}
      <div className="flex items-start gap-4">
        <div
          className={
            'flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-colors ' +
            (active
              ? 'border-signal-500/50 bg-signal-500/10 text-signal-400'
              : 'border-white/10 bg-white/[0.02] text-bone-300')
          }
        >
          <Icon size={18} strokeWidth={1.5} />
        </div>
        <div className="min-w-0 flex-1">
          <div className="mb-1 flex items-center gap-3">
            <span className="font-mono text-sm uppercase tracking-widest2 text-bone-500">{code}</span>
            <h3 className="font-display text-lg text-bone-50">{title}</h3>
          </div>
          <p className="text-sm leading-relaxed text-bone-300">{blurb}</p>
        </div>
      </div>
    </button>
  );
}
