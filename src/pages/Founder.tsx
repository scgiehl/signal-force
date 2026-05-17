import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import PageHeader from '../components/PageHeader';
import Reveal from '../components/Reveal';
import { founder } from '../lib/content';

export default function Founder() {
  return (
    <>
      <PageHeader
        code="07 / FOUNDER"
        eyebrow={founder.eyebrow}
        title={
          <>
            From signals intelligence to <span className="text-signal-400">growth intelligence.</span>
          </>
        }
        intro="The platform is being built by the operator who needs it. Signal Force is the productization of an 18-year career spent reading the federal market, building relationships, and turning fragmented information into action."
      />

      {/* portrait + bio body */}
      <section className="relative py-20 lg:py-28">
        <div className="container-x grid gap-14 lg:grid-cols-12">
          {/* portrait column */}
          <Reveal className="lg:col-span-5">
            <div className="relative lg:sticky lg:top-28">
              <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-ink-850 shadow-panel">
                {/* corner brackets */}
                {(['tl', 'tr', 'bl', 'br'] as const).map((p) => (
                  <Bracket key={p} pos={p} />
                ))}

                <img
                  src={`${import.meta.env.BASE_URL}assets/founder.png`}
                  alt="Sean Giehl, Founder of Signal Force"
                  className="block aspect-[4/5] w-full object-cover object-center lg:aspect-auto"
                />

                {/* caption strip */}
                <div className="absolute inset-x-0 bottom-0 border-t border-white/10 bg-gradient-to-t from-ink-950/95 to-ink-950/30 px-5 py-3 backdrop-blur-sm">
                  <div className="flex items-center justify-between">
                    <div>
                      <div className="font-mono text-sm uppercase tracking-widest2 text-bone-400">
                        {founder.role}
                      </div>
                      <div className="font-display text-base text-bone-50">{founder.name}</div>
                    </div>
                    <div className="font-mono text-sm uppercase tracking-widest2 text-signal-400">
                      MOS · 2651
                    </div>
                  </div>
                </div>
              </div>

              {/* credentials */}
              <div className="mt-5 rounded-lg border border-white/[0.06] bg-ink-850/60 p-5">
                <div className="label">Credentials</div>
                <div className="mt-3 flex flex-wrap gap-2">
                  {founder.credentials.map((c) => (
                    <span key={c} className="tag">
                      {c}
                    </span>
                  ))}
                </div>
              </div>

              {/* file metadata */}
              <div className="mt-3 rounded-lg border border-white/[0.06] bg-ink-850/60 p-5 font-mono text-[11px] text-bone-300">
                <Row label="ROLE" value={founder.role} />
                <Row label="DOMAIN" value="GovCon · IC · National Defense" />
                <Row label="EXPERIENCE" value="18 YRS" />
                <Row label="DISCIPLINE" value="SIGINT · BD · Growth" last />
              </div>
            </div>
          </Reveal>

          {/* narrative column */}
          <Reveal delay={0.1} className="lg:col-span-7">
            <div className="prose-like space-y-7 text-pretty text-base leading-relaxed text-bone-200 md:text-lg">
              <p>{founder.paragraphs[0]}</p>
              <p>{founder.paragraphs[1]}</p>

              {/* highlight pull quote */}
              <figure className="relative my-12 border-l-2 border-signal-500 pl-6">
                <blockquote className="h-display text-2xl leading-tight text-bone-50 md:text-3xl">
                  <span className="text-signal-400">Signal Force</span> was built from that experience.
                </blockquote>
              </figure>

              {founder.paragraphsAfter.map((p, i) => (
                <p key={i}>{p}</p>
              ))}
            </div>

            {/* career signal blocks */}
            <div className="mt-14 grid gap-4 sm:grid-cols-3">
              <SignalBlock code="01" label="Service" body="USMC Signals Intelligence. OEF deployment experience." />
              <SignalBlock code="02" label="Industry" body="18 years across cleared GovCon — engineering, BD, and growth." />
              <SignalBlock code="03" label="Discipline" body="Reading the environment. Mapping the network. Moving with precision." />
            </div>

            {/* CTA */}
            <div className="mt-14">
              <Link to="/access" className="btn-primary">
                Talk through a use case
                <ArrowRight size={16} />
              </Link>
            </div>
          </Reveal>
        </div>
      </section>
    </>
  );
}

function Bracket({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
  const positions: Record<typeof pos, string> = {
    tl: 'top-3 left-3 border-l-2 border-t-2',
    tr: 'top-3 right-3 border-r-2 border-t-2',
    bl: 'bottom-3 left-3 border-l-2 border-b-2',
    br: 'bottom-3 right-3 border-r-2 border-b-2',
  };
  return (
    <span
      aria-hidden
      className={`pointer-events-none absolute z-10 h-4 w-4 border-signal-400/70 ${positions[pos]}`}
    />
  );
}

function Row({ label, value, last }: { label: string; value: string; last?: boolean }) {
  return (
    <div className={`flex items-center justify-between py-1.5 ${last ? '' : 'border-b border-white/[0.06]'}`}>
      <span className="text-bone-500">{label}</span>
      <span className="text-bone-100">{value}</span>
    </div>
  );
}

function SignalBlock({ code, label, body }: { code: string; label: string; body: string }) {
  return (
    <div className="panel p-5">
      <div className="flex items-center gap-2">
        <span className="font-mono text-sm uppercase tracking-widest2 text-signal-400">{code}</span>
        <span className="font-mono text-sm uppercase tracking-widest2 text-bone-500">{label}</span>
      </div>
      <p className="mt-3 text-sm leading-relaxed text-bone-300">{body}</p>
    </div>
  );
}
