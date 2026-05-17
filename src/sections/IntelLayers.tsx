import { useState } from 'react';
import { motion } from 'framer-motion';
import { CircleDollarSign, Cpu, Users, Crosshair } from 'lucide-react';
import { intelLayers } from '../lib/content';
import Section from '../components/Section';

const ICONS = [CircleDollarSign, Cpu, Users, Crosshair] as const;

export default function IntelLayers() {
  const [active, setActive] = useState(0);
  const layer = intelLayers[active];

  return (
    <Section
      id="layers"
      code="02 / FOUR-LAYER MODEL"
      eyebrow="The Analytical Model"
      title={
        <>
          Any single layer is commodity.{' '}
          <span className="text-signal-400">The cross-correlation is the IP.</span>
        </>
      }
      intro="Signal Force synthesizes across four layers. A single award notice becomes a signal about customer intent, the winner's positioning, teaming vulnerabilities, talent flow, and the next award in the same domain."
    >
      <div className="grid gap-8 lg:grid-cols-12">
        {/* Layer selector — left column */}
        <div className="lg:col-span-5">
          <div className="space-y-3">
            {intelLayers.map((l, i) => {
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
                      layoutId="layer-pill"
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
                      <p className="text-sm leading-relaxed text-bone-300">{l.blurb}</p>
                    </div>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Active layer detail — right column */}
        <div className="lg:col-span-7">
          <div className="panel relative h-full overflow-hidden p-7">
            {/* faint grid backdrop */}
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
              <p className="mt-4 max-w-xl text-base leading-relaxed text-bone-300">{layer.detail}</p>

              <div className="mt-8">
                <div className="label mb-3">Signal sources</div>
                <div className="flex flex-wrap gap-2">
                  {layer.signals.map((s) => (
                    <span key={s} className="tag">
                      {s}
                    </span>
                  ))}
                </div>
              </div>

              {/* Synthesis diagram */}
              <SynthesisDiagram active={active} />
            </motion.div>
          </div>
        </div>
      </div>
    </Section>
  );
}

function SynthesisDiagram({ active }: { active: number }) {
  // Four nodes arranged horizontally; the active one glows, lines converge to the synthesis node.
  const labels = ['Money', 'Capability', 'People', 'Mission'];
  return (
    <div className="mt-10 rounded-md border border-white/[0.06] bg-ink-900/60 p-5">
      <div className="label mb-4">Synthesis</div>
      <svg viewBox="0 0 600 160" className="block w-full">
        <defs>
          <linearGradient id="conv-grad" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(91,139,255,0.0)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0.7)" />
          </linearGradient>
        </defs>
        {labels.map((l, i) => {
          const x = 60 + i * 130;
          const isOn = i === active;
          return (
            <g key={l}>
              <line
                x1={x}
                y1="40"
                x2="540"
                y2="120"
                stroke={isOn ? 'url(#conv-grad)' : 'rgba(255,255,255,0.07)'}
                strokeWidth={isOn ? 1.5 : 1}
              />
              <circle
                cx={x}
                cy="40"
                r={isOn ? 8 : 5}
                fill={isOn ? '#5b8bff' : '#1c222c'}
                stroke={isOn ? '#5b8bff' : 'rgba(255,255,255,0.2)'}
                strokeWidth={1}
              />
              <text
                x={x}
                y="22"
                textAnchor="middle"
                fontSize="9"
                fontFamily="JetBrains Mono, monospace"
                letterSpacing="2"
                fill={isOn ? '#cfd5e0' : '#7e8595'}
              >
                {l.toUpperCase()}
              </text>
            </g>
          );
        })}
        {/* synthesis target */}
        <circle cx="540" cy="120" r="14" fill="rgba(61,110,255,0.15)" stroke="#3d6eff" strokeWidth="1.2" />
        <circle cx="540" cy="120" r="4" fill="#5b8bff" />
        <text x="540" y="148" textAnchor="middle" fontSize="9" fontFamily="JetBrains Mono, monospace" letterSpacing="2" fill="#cfd5e0">
          SYNTHESIS
        </text>
      </svg>
    </div>
  );
}
