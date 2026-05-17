import { useCases } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function UseCases() {
  return (
    <Section
      id="use-cases"
      code="05 / USE CASES"
      eyebrow="Built for specific roles"
      title={
        <>
          Operator-grade intelligence{' '}
          <span className="text-signal-400">for the people actually making the call.</span>
        </>
      }
      intro="Signal Force is built for specific human roles, not abstract decision-makers. Each persona has distinct intelligence requirements, distinct decision rhythms, and a distinct definition of what useful looks like."
    >
      <div className="grid gap-4 md:grid-cols-2">
        {useCases.map((u, i) => (
          <Reveal key={u.code} delay={i * 0.06}>
            <article className="panel relative h-full overflow-hidden p-6 transition-colors hover:border-white/15">
              <div className="flex flex-col items-start gap-2">
                <span className="tag-signal">{u.code}</span>
                <span className="font-mono text-sm uppercase tracking-widest2 text-bone-500">
                  → {u.output}
                </span>
              </div>
              <h3 className="mt-5 font-display text-lg text-bone-50">{u.role}</h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">{u.scenario}</p>

              {/* corner ornament */}
              <div className="pointer-events-none absolute bottom-3 right-3 font-mono text-[9px] uppercase tracking-widest2 text-bone-600">
                ∎
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
