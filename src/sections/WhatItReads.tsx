import {
  LineChart,
  Building2,
  Swords,
  Users2,
  Newspaper,
  Target,
  BookOpenCheck,
  Banknote,
  Timer,
} from 'lucide-react';
import { whatItReads } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

const ICONS = [
  LineChart,
  Building2,
  Swords,
  Users2,
  Newspaper,
  Target,
  BookOpenCheck,
  Banknote,
  Timer,
] as const;

export default function WhatItReads() {
  return (
    <Section
      id="what-it-reads"
      code="IN / INGEST"
      eyebrow="What Signal Force Reads"
      title={
        <>
          The federal market is not one dataset.{' '}
          <span className="text-signal-400">It is a moving system.</span>
        </>
      }
      intro="Signal Force is built to ingest the raw material of federal growth - thousands of lines of opportunity data, award history, agency documents, budget references, company records, news signals, relationship context, and user supplied files. It structures that information into intelligence layers, connects it across market, mission, money, people, timing, and capability, then weighs each signal against the decision the BD team needs to make."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {whatItReads.map((w, i) => {
          const Icon = ICONS[i] ?? LineChart;
          return (
            <Reveal key={w.code} delay={(i % 3) * 0.08} once={false}>
              <article className="panel group relative h-full overflow-hidden p-6 transition-colors duration-300 hover:border-signal-500/30">
                <div className="flex items-start justify-between">
                  <div className="flex h-10 w-10 items-center justify-center rounded-md border border-white/10 bg-white/[0.02] text-bone-300 transition-colors group-hover:border-signal-500/40 group-hover:bg-signal-500/10 group-hover:text-signal-400">
                    <Icon size={18} strokeWidth={1.5} />
                  </div>
                  <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500 group-hover:text-signal-400 transition-colors">
                    {w.code}
                  </span>
                </div>
                <h3 className="mt-5 font-display text-lg leading-tight text-bone-50">{w.title}</h3>
                <p className="mt-3 text-sm leading-relaxed text-bone-300">{w.body}</p>
              </article>
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
