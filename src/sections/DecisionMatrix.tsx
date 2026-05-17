import { ArrowRight } from 'lucide-react';
import { decisionMatrix } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function DecisionMatrix() {
  return (
    <Section
      id="decision-matrix"
      code="DX / DECISION INDEX"
      eyebrow="Decision → Read"
      title={
        <>
          Every read is anchored to a decision the BD team has to make.{' '}
          <span className="text-signal-400">Not the other way around.</span>
        </>
      }
      intro="If the decision changes, the read changes. If the decision is already obvious, no read needed. The engine is sized to the call, not to the calendar."
    >
      <div className="overflow-hidden rounded-lg border border-white/[0.06]">
        {/* header row */}
        <div className="grid grid-cols-12 bg-ink-850/70 font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
          <div className="col-span-7 px-5 py-4 md:col-span-7">Decision the BD team has to make</div>
          <div className="col-span-5 px-5 py-4 md:col-span-5">Read Signal Force produces</div>
        </div>

        {/* rows */}
        <div className="divide-y divide-white/[0.06]">
          {decisionMatrix.map((row, i) => (
            <Reveal key={row.decision} delay={i * 0.04}>
              <div className="group grid grid-cols-12 bg-ink-900/40 transition-colors hover:bg-ink-800/60">
                <div className="col-span-7 flex items-start gap-3 px-5 py-5 md:col-span-7">
                  <span className="mt-1.5 inline-block h-1.5 w-1.5 shrink-0 rounded-full bg-bone-500 group-hover:bg-signal-400 transition-colors" />
                  <span className="text-sm text-bone-200 md:text-base">{row.decision}</span>
                </div>
                <div className="col-span-5 flex items-center gap-3 px-5 py-5 md:col-span-5">
                  <ArrowRight size={14} className="shrink-0 text-bone-500 group-hover:text-signal-400 transition-colors" />
                  <span className="font-display text-sm text-bone-50 md:text-base">{row.read}</span>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </Section>
  );
}
