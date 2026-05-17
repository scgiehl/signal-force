import { useState } from 'react';
import { motion, useReducedMotion, AnimatePresence } from 'framer-motion';
import { Cpu } from 'lucide-react';
import {
  methodologyEngineInputs,
  methodologyEngineOutputs,
  methodologyCoreSteps,
  methodologyCycle,
} from '../lib/content';
import Section from '../components/Section';

export default function MethodologyEngine() {
  return (
    <Section
      id="methodology-engine"
      code="MC / METHODOLOGY CORE"
      eyebrow="The Analytical Core"
      title={
        <>
          Many signals.{' '}
          <span className="text-signal-400">One methodology core.</span>{' '}
          BD action out.
        </>
      }
      intro="The same engine that drives every Signal Force read also drives the methodology. Federal market data, mission demand, money, people, technology, and timing converge on a single analytical core. Collection, normalization, correlation, analysis, recommendation, and action flow through. A practical BD plan comes out."
    >
      <div className="hidden lg:block">
        <ConstellationDiagram />
      </div>

      <div className="space-y-6 lg:hidden">
        <StackColumn label="Inputs" items={methodologyEngineInputs} kind="input" />
        <div className="panel relative overflow-hidden p-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
            <Cpu size={22} strokeWidth={1.5} />
          </div>
          <div className="mt-4 font-display text-lg leading-tight text-bone-50">
            Signal Force Methodology Core
          </div>
          <div className="mt-3 grid grid-cols-3 gap-2">
            {methodologyCoreSteps.map((s, i) => (
              <div
                key={s}
                className="rounded border border-signal-500/30 bg-signal-500/[0.06] py-1.5 font-mono text-[10px] uppercase tracking-widest2 text-signal-400"
              >
                {String(i + 1).padStart(2, '0')} · {s}
              </div>
            ))}
          </div>
        </div>
        <StackColumn label="BD Action Outputs" items={methodologyEngineOutputs} kind="output" />
      </div>

      {/* Cycle stepper — compact, expandable. The mechanic behind the engine. */}
      <CycleStepper />
    </Section>
  );
}

function CycleStepper() {
  const [active, setActive] = useState(0);
  const step = methodologyCycle[active];

  return (
    <div className="mt-12">
      <div className="mb-5 flex items-center gap-3">
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
          IC / Intelligence Cycle
        </span>
        <span className="h-px flex-1 bg-white/10" />
        <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
          7 steps · Decision workflow
        </span>
      </div>

      <div className="panel relative overflow-hidden p-5 md:p-6">
        <div className="grid gap-2 sm:grid-cols-7">
          {methodologyCycle.map((s, i) => {
            const isActive = i === active;
            return (
              <button
                key={s.code}
                type="button"
                onClick={() => setActive(i)}
                onMouseEnter={() => setActive(i)}
                className={
                  'group relative flex flex-col items-start gap-1 rounded-md border px-3 py-3 text-left transition-all duration-200 ' +
                  (isActive
                    ? 'border-signal-500/50 bg-signal-500/10'
                    : 'border-white/[0.06] bg-ink-850/50 hover:border-white/15 hover:bg-ink-800/60')
                }
                aria-pressed={isActive}
              >
                <span
                  className={
                    'font-mono text-[10px] uppercase tracking-widest2 ' +
                    (isActive ? 'text-signal-400' : 'text-bone-500')
                  }
                >
                  {s.code}
                </span>
                <span
                  className={
                    'font-display text-xs leading-tight md:text-sm ' +
                    (isActive ? 'text-bone-50' : 'text-bone-200')
                  }
                >
                  {s.name}
                </span>
              </button>
            );
          })}
        </div>

        <AnimatePresence mode="wait">
          <motion.div
            key={step.code}
            initial={{ opacity: 0, y: 6 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -4 }}
            transition={{ duration: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="mt-5 rounded-md border border-white/[0.06] bg-ink-900/60 p-5"
          >
            <div className="flex items-baseline gap-3">
              <span className="font-mono text-xs text-signal-400">{step.code}</span>
              <h4 className="font-display text-base text-bone-50">{step.name}</h4>
            </div>
            <p className="mt-2 text-sm leading-relaxed text-bone-300">{step.body}</p>
          </motion.div>
        </AnimatePresence>
      </div>

      <div className="mt-4 flex items-center justify-center gap-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
        <span>Feedback closes the loop · The next cycle starts smarter</span>
      </div>
    </div>
  );
}

function StackColumn({ label, items, kind }: { label: string; items: string[]; kind: 'input' | 'output' }) {
  return (
    <div>
      <div className="label mb-3">{label}</div>
      <div className="grid grid-cols-2 gap-2">
        {items.map((it) => (
          <div
            key={it}
            className={
              'rounded-md border px-3 py-2 text-xs ' +
              (kind === 'input'
                ? 'border-white/[0.08] bg-ink-850/60 text-bone-200'
                : 'border-signal-500/30 bg-signal-500/[0.05] text-bone-100')
            }
          >
            {it}
          </div>
        ))}
      </div>
    </div>
  );
}

// Radial constellation: 16 signal inputs ringed around a hex methodology core,
// each converging inward. A continuously-rotating scanner arc sweeps the
// perimeter (SIGINT radar motif). BD action outputs render as a grid below
// the SVG so it's clear they're the result, not just a third column.
function ConstellationDiagram() {
  const reduce = useReducedMotion();

  const W = 1400;
  const H = 820;
  const cx = W / 2;
  const cy = H / 2 + 10;

  const coreR = 130;
  const ringR = 340;
  const labelR = 380;

  const inputs = methodologyEngineInputs;
  const n = inputs.length;

  return (
    <div className="panel relative overflow-hidden">
      {/* faint grid backdrop */}
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-30"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
          maskImage: 'radial-gradient(ellipse at center top, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center top, black, transparent 80%)',
        }}
      />

      {/* central radial glow */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-[45%] h-[520px] w-[520px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(closest-side, rgba(61,110,255,0.28) 0%, rgba(7,9,13,0) 70%)',
        }}
      />

      <svg
        viewBox={`0 0 ${W} ${H}`}
        className="relative block w-full"
        preserveAspectRatio="xMidYMid meet"
      >
        <defs>
          <linearGradient id="me-in-line" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0.55)" />
          </linearGradient>
          <radialGradient id="me-core-fill" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="rgba(61,110,255,0.28)" />
            <stop offset="60%" stopColor="rgba(20,30,55,0.85)" />
            <stop offset="100%" stopColor="rgba(13,18,28,0.95)" />
          </radialGradient>
          <linearGradient id="me-scanner" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(91,139,255,0)" />
            <stop offset="50%" stopColor="rgba(91,139,255,0.45)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0.9)" />
          </linearGradient>
          <radialGradient id="me-sweep-fill" cx="1" cy="0.5" r="0.5">
            <stop offset="0%" stopColor="rgba(91,139,255,0.20)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0)" />
          </radialGradient>
          <filter id="me-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* Concentric guide rings */}
        <circle cx={cx} cy={cy} r={ringR} fill="none" stroke="rgba(255,255,255,0.05)" strokeWidth="1" strokeDasharray="2 6" />
        <circle cx={cx} cy={cy} r={ringR - 70} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="1 6" />
        <circle cx={cx} cy={cy} r={ringR - 140} fill="none" stroke="rgba(255,255,255,0.04)" strokeWidth="1" strokeDasharray="1 8" />

        {/* Tick marks every 30 degrees */}
        {Array.from({ length: 12 }).map((_, i) => {
          const a = (i * 30 - 90) * (Math.PI / 180);
          const x1 = cx + Math.cos(a) * (ringR - 6);
          const y1 = cy + Math.sin(a) * (ringR - 6);
          const x2 = cx + Math.cos(a) * (ringR + 6);
          const y2 = cy + Math.sin(a) * (ringR + 6);
          return (
            <line key={`me-tick-${i}`} x1={x1} y1={y1} x2={x2} y2={y2} stroke="rgba(255,255,255,0.12)" strokeWidth="1" />
          );
        })}

        {/* Rotating radar sweep */}
        {!reduce && (
          <motion.g
            animate={{ rotate: 360 }}
            transition={{ duration: 14, repeat: Infinity, ease: 'linear' }}
            style={{ transformOrigin: `${cx}px ${cy}px`, transformBox: 'fill-box' as const }}
          >
            <path
              d={describeWedge(cx, cy, coreR + 12, ringR, 0, 70)}
              fill="url(#me-sweep-fill)"
              opacity="0.7"
            />
            <line
              x1={cx + coreR + 4}
              y1={cy}
              x2={cx + ringR}
              y2={cy}
              stroke="url(#me-scanner)"
              strokeWidth="1.5"
            />
          </motion.g>
        )}

        {/* Convergence lines from each input to core */}
        {inputs.map((_, i) => {
          const angle = (-90 + i * (360 / n)) * (Math.PI / 180);
          const x1 = cx + Math.cos(angle) * ringR;
          const y1 = cy + Math.sin(angle) * ringR;
          const x2 = cx + Math.cos(angle) * (coreR + 6);
          const y2 = cy + Math.sin(angle) * (coreR + 6);
          return (
            <motion.line
              key={`me-line-${i}`}
              x1={x1}
              y1={y1}
              x2={x2}
              y2={y2}
              stroke="url(#me-in-line)"
              strokeWidth={1}
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.9, delay: 0.04 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}

        {/* Hex core */}
        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.9 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, delay: 0.25 }}
        >
          {/* outer glow */}
          <polygon
            points={hexPoints(cx, cy, coreR + 14)}
            fill="none"
            stroke="rgba(91,139,255,0.2)"
            strokeWidth="1"
            filter="url(#me-glow)"
          />
          {/* main hex */}
          <polygon
            points={hexPoints(cx, cy, coreR)}
            fill="url(#me-core-fill)"
            stroke="rgba(91,139,255,0.5)"
            strokeWidth="1"
          />
          {/* inner hex frame */}
          <polygon
            points={hexPoints(cx, cy, coreR - 18)}
            fill="none"
            stroke="rgba(91,139,255,0.18)"
            strokeWidth="1"
            strokeDasharray="2 4"
          />

          {/* labels */}
          <text
            x={cx}
            y={cy - 56}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="3"
            fill="#5b8bff"
          >
            SIGNAL FORCE
          </text>
          <text
            x={cx}
            y={cy - 38}
            textAnchor="middle"
            fontFamily="Orbitron, sans-serif"
            fontSize="14"
            fontWeight="700"
            fill="#f4f6fa"
            letterSpacing="1"
          >
            METHODOLOGY CORE
          </text>

          {/* 6 processing phases stacked inside core */}
          {methodologyCoreSteps.map((step, i) => {
            const startY = cy - 18;
            const y = startY + i * 16;
            return (
              <g key={step}>
                <text
                  x={cx - 50}
                  y={y}
                  textAnchor="start"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="9"
                  letterSpacing="2"
                  fill="#7e8595"
                >
                  {String(i + 1).padStart(2, '0')}
                </text>
                <text
                  x={cx - 30}
                  y={y}
                  textAnchor="start"
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="10"
                  letterSpacing="2"
                  fill="#e8ecf1"
                >
                  {step}
                </text>
                <motion.circle
                  cx={cx + 50}
                  cy={y - 3}
                  r="2"
                  fill="#5b8bff"
                  animate={reduce ? undefined : { opacity: [0.25, 1, 0.25] }}
                  transition={{ duration: 2.4, repeat: Infinity, delay: i * 0.25, ease: 'easeInOut' }}
                />
              </g>
            );
          })}
        </motion.g>

        {/* Input nodes + chips */}
        {inputs.map((label, i) => {
          const angle = (-90 + i * (360 / n)) * (Math.PI / 180);
          const nx = cx + Math.cos(angle) * ringR;
          const ny = cy + Math.sin(angle) * ringR;
          const lx = cx + Math.cos(angle) * labelR;
          const ly = cy + Math.sin(angle) * labelR;

          const dx = Math.cos(angle);
          const anchor: 'start' | 'middle' | 'end' = dx > 0.2 ? 'start' : dx < -0.2 ? 'end' : 'middle';

          const chipW = label.length * 6.4 + 26;
          const chipX =
            anchor === 'middle'
              ? lx - chipW / 2
              : anchor === 'start'
              ? lx + 6
              : lx - chipW - 6;
          const textX =
            anchor === 'middle'
              ? lx
              : anchor === 'start'
              ? lx + 16
              : lx - 16;

          return (
            <motion.g
              key={`me-input-${i}`}
              initial={reduce ? false : { opacity: 0 }}
              whileInView={reduce ? undefined : { opacity: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.45, delay: 0.04 * i + 0.15 }}
            >
              <circle cx={nx} cy={ny} r="3" fill="#5b8bff" />
              <circle cx={nx} cy={ny} r="6" fill="none" stroke="rgba(91,139,255,0.25)" strokeWidth="1" />
              <rect
                x={chipX}
                y={ly - 11}
                width={chipW}
                height="22"
                rx="3"
                fill="rgba(13,18,24,0.85)"
                stroke="rgba(255,255,255,0.08)"
              />
              <text
                x={textX}
                y={ly + 4}
                textAnchor={anchor}
                fontFamily="JetBrains Mono, monospace"
                fontSize="10.5"
                letterSpacing="0.5"
                fill="#cfd5e0"
              >
                {label}
              </text>
            </motion.g>
          );
        })}

        {/* Frame caption */}
        <text
          x={40}
          y={36}
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          letterSpacing="3"
          fill="#7e8595"
        >
          SIGNAL CONSTELLATION · 16 INPUTS
        </text>
        <text
          x={W - 40}
          y={36}
          textAnchor="end"
          fontFamily="JetBrains Mono, monospace"
          fontSize="10"
          letterSpacing="3"
          fill="#7e8595"
        >
          FUSION · 6 PHASES
        </text>
      </svg>

      {/* Outputs strip — clearly the result, rendered after the radial */}
      <div className="border-t border-white/[0.06] bg-ink-900/40 p-6 md:p-7">
        <div className="mb-4 flex items-center gap-3">
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-signal-400">
            BD ACTION OUTPUTS · 9
          </span>
          <span className="h-px flex-1 bg-white/10" />
          <span className="font-mono text-[10px] uppercase tracking-widest2 text-bone-500">
            DECISION-READY
          </span>
        </div>
        <div className="grid grid-cols-3 gap-2">
          {methodologyEngineOutputs.map((o, i) => (
            <motion.div
              key={o}
              initial={{ opacity: 0, y: 6 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-10% 0px' }}
              transition={{ delay: 0.04 * i, duration: 0.4, ease: [0.22, 1, 0.36, 1] }}
              className="flex items-center gap-2 rounded-md border border-signal-500/30 bg-signal-500/[0.05] px-3 py-2.5 text-xs text-bone-100"
            >
              <span className="h-1.5 w-1.5 shrink-0 rounded-full bg-signal-400" />
              <span>{o}</span>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}

// Pointy-top hexagon vertices as a "x,y x,y ..." string for <polygon points>
function hexPoints(cx: number, cy: number, r: number): string {
  return Array.from({ length: 6 }, (_, i) => {
    const a = (-90 + i * 60) * (Math.PI / 180);
    return `${cx + r * Math.cos(a)},${cy + r * Math.sin(a)}`;
  }).join(' ');
}

// Pie-slice wedge from rInner to rOuter spanning startDeg → endDeg
// (degrees measured from +x axis, clockwise).
function describeWedge(
  cx: number,
  cy: number,
  rInner: number,
  rOuter: number,
  startDeg: number,
  endDeg: number,
): string {
  const a0 = (startDeg * Math.PI) / 180;
  const a1 = (endDeg * Math.PI) / 180;
  const x0o = cx + rOuter * Math.cos(a0);
  const y0o = cy + rOuter * Math.sin(a0);
  const x1o = cx + rOuter * Math.cos(a1);
  const y1o = cy + rOuter * Math.sin(a1);
  const x0i = cx + rInner * Math.cos(a0);
  const y0i = cy + rInner * Math.sin(a0);
  const x1i = cx + rInner * Math.cos(a1);
  const y1i = cy + rInner * Math.sin(a1);
  const largeArc = endDeg - startDeg <= 180 ? 0 : 1;
  return [
    `M ${x0o} ${y0o}`,
    `A ${rOuter} ${rOuter} 0 ${largeArc} 1 ${x1o} ${y1o}`,
    `L ${x1i} ${y1i}`,
    `A ${rInner} ${rInner} 0 ${largeArc} 0 ${x0i} ${y0i}`,
    'Z',
  ].join(' ');
}
