import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Cpu, Users, Crosshair, Sparkles } from 'lucide-react';
import { methodologyLayers } from '../lib/content';
import Section from '../components/Section';

const ICONS = [CircleDollarSign, Cpu, Users, Crosshair] as const;

export default function MethodologyLayers() {
  const [active, setActive] = useState(0);
  const layer = methodologyLayers[active];

  return (
    <Section
      id="four-layer"
      code="04L / FOUR-LAYER MODEL"
      eyebrow="The Analytical Model"
      title={
        <>
          Any single layer is commodity.{' '}
          <span className="text-signal-400">The cross-correlation is the IP.</span>
        </>
      }
      intro="A contract award by itself is just an award. Signal Force treats it as a clue — it may reveal customer intent, funding direction, incumbent strength, teaming vulnerability, technology demand, relationship movement, and the next likely pursuit. The four layers cross-correlate to produce the read."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Layer selector */}
        <div className="lg:col-span-5">
          <div className="space-y-3">
            {methodologyLayers.map((l, i) => {
              const Icon = ICONS[i];
              const isActive = i === active;
              return (
                <button
                  key={l.code}
                  type="button"
                  onClick={() => setActive(i)}
                  onMouseEnter={() => setActive(i)}
                  className={
                    'group relative block w-full overflow-hidden rounded-lg border p-5 text-left transition-all duration-300 ' +
                    (isActive
                      ? 'border-signal-500/40 bg-ink-800/80 shadow-signal'
                      : 'border-white/[0.06] bg-ink-850/40 hover:border-white/15 hover:bg-ink-800/60')
                  }
                  aria-pressed={isActive}
                >
                  {isActive && (
                    <motion.span
                      layoutId="ml-pill"
                      className="absolute inset-y-0 left-0 w-1 bg-signal-500"
                      transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                    />
                  )}
                  <div className="flex items-start gap-4">
                    <div
                      className={
                        'flex h-10 w-10 shrink-0 items-center justify-center rounded-md border transition-colors ' +
                        (isActive
                          ? 'border-signal-500/50 bg-signal-500/10 text-signal-400'
                          : 'border-white/10 bg-white/[0.02] text-bone-300')
                      }
                    >
                      <Icon size={18} strokeWidth={1.5} />
                    </div>
                    <div className="min-w-0 flex-1">
                      <div className="mb-1 flex items-center gap-3">
                        <span className="font-mono text-sm uppercase tracking-widest2 text-bone-500">
                          {l.code}
                        </span>
                        <h3 className="font-display text-lg text-bone-50">{l.name}</h3>
                      </div>
                      <p className="text-sm leading-relaxed text-bone-300">{l.tagline}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active layer detail */}
        <div className="lg:col-span-7">
          <div className="panel relative h-full overflow-hidden p-7">
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '32px 32px',
                maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
              }}
            />

            <motion.div
              key={layer.code}
              initial={{ opacity: 0, y: 14 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.45, ease: [0.22, 1, 0.36, 1] }}
              className="relative"
            >
              <div className="flex items-center gap-3">
                <span className="font-mono text-xs text-signal-400">{layer.code}</span>
                <span className="h-px w-8 bg-white/10" />
                <span className="eyebrow">Layer detail</span>
              </div>

              <h3 className="mt-4 h-display text-3xl md:text-4xl">{layer.name}</h3>
              <p className="mt-3 max-w-xl text-sm uppercase tracking-widest2 text-signal-400">
                {layer.tagline}
              </p>

              <div className="mt-7">
                <div className="label mb-3">What it reads</div>
                <div className="flex flex-wrap gap-2">
                  {layer.reads.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              <div className="mt-7 grid gap-5 md:grid-cols-2">
                <div className="rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
                  <div className="label mb-2">Why it matters</div>
                  <p className="text-sm leading-relaxed text-bone-200">{layer.why}</p>
                </div>
                <div className="rounded-md border border-signal-500/25 bg-signal-500/[0.04] p-5">
                  <div className="flex items-center gap-2">
                    <Sparkles size={14} className="text-signal-400" />
                    <div className="label text-signal-400">How AI helps</div>
                  </div>
                  <p className="mt-2 text-sm leading-relaxed text-bone-100">{layer.ai}</p>
                </div>
              </div>
            </motion.div>
          </div>
        </div>
      </div>

      {/* Synthesis */}
      <div className="mt-12">
        <div className="panel relative overflow-hidden p-8 md:p-10">
          <div
            aria-hidden
            className="pointer-events-none absolute -left-32 -top-32 h-[420px] w-[420px] rounded-full opacity-50"
            style={{
              background: 'radial-gradient(closest-side, rgba(61,110,255,0.28) 0%, rgba(7,9,13,0) 70%)',
            }}
          />
          <div className="relative grid items-center gap-8 md:grid-cols-12">
            <div className="md:col-span-5">
              <div className="label">Synthesis</div>
              <h3 className="mt-4 h-display text-2xl leading-tight md:text-3xl">
                Market + Funding + Technology + Mission ={' '}
                <span className="text-signal-400">Decision-Ready Intelligence</span>
              </h3>
            </div>
            <div className="md:col-span-7">
              <p className="text-base leading-relaxed text-bone-200 md:text-lg">
                Signal Force does not treat these layers as separate research categories. It cross-correlates them. The value is not knowing that an opportunity exists. The value is knowing whether the timing, customer need, funding, incumbent posture, relationship path, and company fit justify action.
              </p>
              <SynthesisDiagram />
            </div>
          </div>

          {/* Synthesis readout — sample of what cross-correlation produces */}
          <div className="relative mt-10 border-t border-white/[0.06] pt-8">
            <div className="mb-5 flex items-center gap-3">
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
                Synthesis Readout
              </span>
              <span className="h-px flex-1 bg-white/10" />
              <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
                Decision-Ready · Sample
              </span>
            </div>
            <div className="grid gap-3 sm:grid-cols-2 lg:grid-cols-4">
              <div className="rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
                <div className="label text-[11px]">Decision Posture</div>
                <div className="mt-2 font-display text-base text-bone-50">Shape and Team</div>
              </div>
              <div className="rounded-md border border-signal-500/30 bg-signal-500/[0.05] p-5">
                <div className="label text-[11px] text-signal-400">Confidence</div>
                <div className="mt-2 inline-flex items-center gap-2">
                  <span className="h-1.5 w-1.5 rounded-full bg-signal-400" />
                  <span className="font-display text-base text-signal-400">Moderate</span>
                </div>
              </div>
              <div className="rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
                <div className="label text-[11px]">Action Path</div>
                <p className="mt-2 text-sm leading-relaxed text-bone-100">
                  Build the partner path before solicitation release.
                </p>
              </div>
              <div className="rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
                <div className="label text-[11px]">Watch Item</div>
                <p className="mt-2 text-sm leading-relaxed text-bone-100">
                  Incumbent movement and funding timing.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SynthesisDiagram() {
  const labels = ['MARKET', 'FUNDING', 'TECHNOLOGY', 'MISSION'];
  return (
    <div className="mt-8 rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
      <svg viewBox="0 0 600 160" className="block w-full">
        <defs>
          <linearGradient id="ml-conv" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(91,139,255,0.0)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0.7)" />
          </linearGradient>
        </defs>
        {labels.map((l, i) => {
          const x = 60 + i * 140;
          return (
            <g key={l}>
              <line x1={x} y1="40" x2="540" y2="120" stroke="url(#ml-conv)" strokeWidth={1.2} />
              <circle cx={x} cy="40" r="6" fill="#5b8bff" stroke="#5b8bff" strokeWidth={1} />
              <text
                x={x}
                y="22"
                textAnchor="middle"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="2"
                fill="#cfd5e0"
              >
                {l}
              </text>
            </g>
          );
        })}
        <circle cx="540" cy="120" r="16" fill="rgba(61,110,255,0.18)" stroke="#3d6eff" strokeWidth="1.2" />
        <circle cx="540" cy="120" r="5" fill="#5b8bff" />
        <text x="540" y="148" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fill="#cfd5e0">
          DECISION-READY
        </text>
      </svg>
    </div>
  );
}
