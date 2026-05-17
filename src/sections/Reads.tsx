import { reads } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function Reads() {
  return (
    <Section
      id="reads"
      code="R / READS"
      eyebrow="The Outputs"
      title={
        <>
          Same engine. Different reads.{' '}
          <span className="text-signal-400">All decision-ready.</span>
        </>
      }
      intro="Every read is a workflow the engine runs, not a separate product. Each one is built around a real BD decision — what to chase, who to talk to, when to move, when to wait."
    >
      <div className="space-y-4">
        {reads.map((r, i) => (
          <Reveal key={r.code} delay={i * 0.05}>
            <article className="panel group relative overflow-hidden p-6 md:p-8 transition-colors duration-300 hover:border-signal-500/30">
              <div className="grid gap-6 md:grid-cols-12">
                {/* code + name */}
                <header className="md:col-span-3">
                  <div className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">{r.code}</div>
                  <h3 className="mt-2 font-display text-xl leading-tight text-bone-50">{r.name}</h3>
                </header>

                {/* triplet — decision / analyzes / output */}
                <div className="grid gap-5 md:col-span-9 md:grid-cols-3">
                  <Block label="Decision" body={r.decision} />
                  <Block label="Signal Force analyzes" body={r.analyzes} />
                  <Block label="You walk away with" body={r.output} highlight />
                </div>
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}

function Block({ label, body, highlight }: { label: string; body: string; highlight?: boolean }) {
  return (
    <div className="relative">
      <div className="label">{label}</div>
      <p
        className={
          'mt-2 text-sm leading-relaxed ' + (highlight ? 'text-bone-100' : 'text-bone-300')
        }
      >
        {body}
      </p>
      {highlight && (
        <span
          aria-hidden
          className="absolute -left-3 top-0 hidden h-full w-px bg-gradient-to-b from-signal-500/0 via-signal-500/60 to-signal-500/0 md:block"
        />
      )}
    </div>
  );
}
