import { Minus } from 'lucide-react';
import { antiPositioning } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function AntiPositioning() {
  return (
    <Section
      id="positioning"
      code="01 / POSITIONING"
      eyebrow="Where Signal Force fits"
      title={
        <>
          Not a database. Not a newsletter. Not a CRM.{' '}
          <span className="text-signal-400">An intelligence engine.</span>
        </>
      }
      intro="Three categories of tooling shape federal BD today. Each answers part of the question. None answer the part that matters: given everything moving right now, what should I do next week, and why?"
    >
      <div className="grid gap-px overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.04] md:grid-cols-3">
        {antiPositioning.map((a, i) => (
          <Reveal key={a.them} delay={i * 0.08} className="bg-ink-850/80 p-7">
            <div className="flex items-center gap-2 text-bone-500">
              <Minus size={14} />
              <span className="font-mono text-sm uppercase tracking-widest2">Category {i + 1}</span>
            </div>
            <h3 className="mt-4 font-display text-xl text-bone-100">{a.them}</h3>
            <p className="mt-2 font-mono text-[11px] uppercase tracking-widest2 text-bone-500">{a.examples}</p>
            <p className="mt-5 text-sm leading-relaxed text-bone-300">They {a.they}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.3} className="mt-10">
        <div className="panel relative overflow-hidden p-8">
          <div className="mb-6 flex flex-wrap items-center justify-end gap-x-2 font-mono text-sm uppercase tracking-widest2 text-signal-400">
            <span>Signal Force ·</span>
            <span className="text-bone-300">The synthesis layer</span>
          </div>
          <div className="grid items-center gap-6 md:grid-cols-12">
            <div className="md:col-span-1">
              <div className="flex h-12 w-12 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 font-mono text-signal-400">+</div>
            </div>
            <div className="md:col-span-11">
              <p className="text-pretty text-lg leading-relaxed text-bone-100 md:text-xl">
                Signal Force synthesizes across the three. It reads the data, weighs the analysis, accounts for what is already decided, and produces the briefing a BD director can act on Monday.
              </p>
            </div>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
