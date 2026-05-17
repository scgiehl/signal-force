import { Link } from 'react-router-dom';
import { ArrowUpRight, Cpu } from 'lucide-react';
import { reads } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

// Home-page capabilities section — reframed as "one engine, many reads."
// Not a SKU menu. The first card is the engine itself; the rest are
// the reads it produces.
export default function Capabilities() {
  return (
    <Section
      id="capabilities"
      code="03 / THE PLATFORM"
      eyebrow="Decision-Ready Intelligence"
      title={
        <>
          One AI engine.{' '}
          <span className="text-signal-400">Every read the BD team needs to make the call.</span>
        </>
      }
      intro="Signal Force is a single analytical engine, not a stack of products. It reads federal market data, agency priorities, opportunity signals, teaming context, and company positioning — then produces the brief the decision in front of you actually requires."
    >
      <div className="grid gap-4 md:grid-cols-2 lg:grid-cols-3">
        {/* Engine card — anchor */}
        <Reveal>
          <Link
            to="/capabilities"
            className="panel group relative flex h-full flex-col justify-between overflow-hidden bg-gradient-to-br from-signal-700/30 via-ink-800 to-ink-900 p-6 transition-all duration-300 hover:border-signal-500/50 hover:shadow-signal"
          >
            <div>
              <div className="flex items-center justify-between">
                <div className="flex h-10 w-10 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
                  <Cpu size={18} strokeWidth={1.5} />
                </div>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
                  ENG / ENGINE
                </span>
              </div>
              <h3 className="mt-5 font-display text-xl leading-tight text-bone-50">
                Signal Force AI Intelligence Engine
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-bone-300">
                Collect signals. Structure context. Compare the company against the market. Identify the decision. Generate the read.
              </p>
            </div>
            <div className="mt-6 inline-flex items-center gap-2 text-sm font-medium text-signal-400 group-hover:gap-3 transition-all">
              See the platform
              <ArrowUpRight size={16} />
            </div>
          </Link>
        </Reveal>

        {/* Read cards */}
        {reads.map((r, i) => (
          <Reveal key={r.code} delay={(i + 1) * 0.05}>
            <article className="panel group relative h-full overflow-hidden p-6 transition-all duration-300 hover:border-signal-500/30 hover:shadow-signal">
              <div className="flex items-center justify-between">
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
                  {r.code}
                </span>
                <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
                  Read
                </span>
              </div>

              <h3 className="mt-5 font-display text-lg leading-tight text-bone-50">{r.name}</h3>

              <div className="mt-4 space-y-3">
                <Row label="Decision" body={r.decision} />
                <Row label="Output" body={r.output} highlight />
              </div>
            </article>
          </Reveal>
        ))}
      </div>

      <div className="mt-10 flex justify-center">
        <Link to="/capabilities" className="btn-ghost">
          See the full platform
          <ArrowUpRight size={16} />
        </Link>
      </div>
    </Section>
  );
}

function Row({ label, body, highlight }: { label: string; body: string; highlight?: boolean }) {
  return (
    <div>
      <div className="text-[10px] uppercase tracking-widest2 text-bone-500">{label}</div>
      <p className={'mt-1 text-xs leading-relaxed ' + (highlight ? 'text-bone-200' : 'text-bone-400')}>
        {body}
      </p>
    </div>
  );
}
