import { positioningSources } from '../lib/content';
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
          The intelligence layer above the{' '}
          <span className="text-signal-400">GovCon growth stack.</span>
        </>
      }
    >
      <Reveal>
        <div className="max-w-3xl space-y-4 text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
          <p>
            Federal BD teams already work across a fragmented stack of portals, databases, news feeds, capture tools, proposal systems, relationship networks, spreadsheets, and institutional knowledge.
          </p>
          <p>
            Each source tells part of the story. Federal data shows market movement. News explains timing and narrative. Capture tools support pursuit execution. Relationship intelligence shows who matters. Contract history reveals money and incumbents. Technology trends show where demand is forming. Agency priorities explain the mission behind the movement.
          </p>
        </div>
      </Reveal>

      <div className="mt-10 grid gap-px overflow-hidden rounded-lg border border-white/[0.06] bg-white/[0.04] sm:grid-cols-2 md:grid-cols-3">
        {positioningSources.map((source, i) => (
          <Reveal key={source.label} delay={i * 0.06} className="bg-ink-850/80 p-6">
            <div className="flex items-center gap-2 text-bone-500">
              <span className="font-mono text-xs uppercase tracking-widest2">
                {String(i + 1).padStart(2, '0')}
              </span>
              <span className="h-px w-6 bg-white/10" />
              <span className="font-mono text-xs uppercase tracking-widest2 text-bone-500">Source</span>
            </div>
            <h3 className="mt-4 font-display text-lg leading-tight text-bone-100">{source.label}</h3>
            <p className="mt-2 text-sm leading-relaxed text-bone-400">{source.detail}</p>
          </Reveal>
        ))}
      </div>

      <Reveal delay={0.25} className="mt-10">
        <p className="max-w-3xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg">
          <span className="font-semibold text-signal-400">Signal Force</span> connects those pieces into <span className="font-semibold text-bone-100">one</span> decision-ready report.
        </p>
      </Reveal>

      <Reveal delay={0.35} className="mt-8">
        <div className="panel relative overflow-hidden p-8">
          <div className="md:absolute md:inset-y-6 md:left-6 md:w-20 lg:w-24">
            <LayerStack />
          </div>

          <div className="md:pl-28 lg:pl-32">
            <div className="mb-6 flex flex-wrap items-center justify-end gap-x-2 font-mono text-sm uppercase tracking-widest2 text-signal-400">
              <span>Signal Force ·</span>
              <span className="text-bone-300">Synthesis Layer</span>
            </div>
            <p className="text-pretty text-lg leading-relaxed text-bone-100 md:text-xl">
              It reads the market, weighs the signals, maps the people layer, accounts for company positioning, and produces the briefing a BD director can act on Monday.
            </p>
            <p className="mt-4 font-mono text-xs uppercase tracking-widest2 text-bone-500">
              Scattered inputs in · Decision-ready direction out
            </p>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}

function LayerStack() {
  const layers = [0, 1, 2, 3, 4, 5];
  return (
    <div
      aria-hidden="true"
      className="relative flex h-full min-h-[160px] w-full flex-col justify-end gap-1.5 overflow-hidden rounded-md border border-signal-500/25 bg-signal-500/[0.04] p-2"
    >
      <div className="pointer-events-none absolute inset-0 bg-gradient-to-t from-signal-500/15 via-transparent to-transparent" />
      {layers.map((i) => (
        <div
          key={i}
          className="relative h-4 animate-stack overflow-hidden rounded-sm border border-signal-400/40 bg-gradient-to-r from-signal-500/35 via-signal-500/15 to-signal-400/5 shadow-[0_0_18px_-6px_rgba(91,139,255,0.55)]"
          style={{
            animationDelay: `${i * 0.45}s`,
          }}
        >
          <span className="absolute inset-y-0 left-0 w-1 bg-signal-400" />
          <span className="absolute inset-y-1/2 left-3 right-2 h-px bg-white/10" />
        </div>
      ))}
    </div>
  );
}
