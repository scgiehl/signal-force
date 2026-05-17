import { motion, useReducedMotion } from 'framer-motion';
import { Cpu } from 'lucide-react';
import { engineInputs, engineOutputs } from '../lib/content';
import Section from '../components/Section';

// One-engine, many-reads diagram.
// Desktop: three-column SVG — inputs → engine block → outputs, with connecting lines.
// Mobile: stacked card layout with the same content.
export default function IntelligenceEngine() {
  return (
    <Section
      id="engine"
      code="ENG / ENGINE"
      eyebrow="The Intelligence Engine"
      title={
        <>
          The Signal Fusion Layer
          <span className="mt-3 block text-xl text-signal-400 md:text-2xl lg:text-3xl">
            An AI engine for federal market signal.
          </span>
        </>
      }
      intro={
        <>
          <span className="block">
            Signal Force reads across opportunity data, awards, agency priorities, funding movement, incumbent context, emerging technologies, news, company positioning, and relationship intelligence.
          </span>
          <span className="mt-5 block">
            Its AI engine structures the inputs, correlates the layers, and turns scattered information into target decks, BD playbooks, capture briefs, teaming maps, and decision-ready growth plans.
          </span>
        </>
      }
    >
      {/* Desktop diagram */}
      <div className="hidden lg:block">
        <EngineDiagram />
      </div>

      {/* Mobile stacked layout */}
      <div className="space-y-6 lg:hidden">
        <StackColumn label="Inputs" items={engineInputs} kind="input" />
        <div className="panel relative overflow-hidden p-6 text-center">
          <div className="mx-auto flex h-14 w-14 items-center justify-center rounded-md border border-signal-500/40 bg-signal-500/10 text-signal-400">
            <Cpu size={22} strokeWidth={1.5} />
          </div>
          <div className="mt-4 font-display text-lg leading-tight text-bone-50">
            Signal Force AI Intelligence Engine
          </div>
          <div className="mt-2 font-mono text-[10px] uppercase tracking-widest2 text-bone-400">
            Collect · Structure · Correlate · Forecast · Recommend
          </div>
        </div>
        <StackColumn label="Reads" items={engineOutputs} kind="output" />
      </div>
    </Section>
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

function EngineDiagram() {
  const reduce = useReducedMotion();

  // Viewport coordinates
  const W = 1200;
  const H = 640;
  const colInputX = 80;
  const colOutputX = W - 80;
  const engineX = W / 2;
  const engineY = H / 2;
  const engineW = 320;
  const engineH = 160;

  const inputYs = layoutY(engineInputs.length, 50, H - 50);
  const outputYs = layoutY(engineOutputs.length, 60, H - 60);

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
          maskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
          WebkitMaskImage: 'radial-gradient(ellipse at center, black, transparent 80%)',
        }}
      />

      {/* big glow behind engine */}
      <div
        aria-hidden
        className="pointer-events-none absolute left-1/2 top-1/2 h-[420px] w-[600px] -translate-x-1/2 -translate-y-1/2 rounded-full opacity-60"
        style={{
          background:
            'radial-gradient(closest-side, rgba(61,110,255,0.25) 0%, rgba(7,9,13,0) 70%)',
        }}
      />

      <svg viewBox={`0 0 ${W} ${H}`} className="relative block w-full" preserveAspectRatio="xMidYMid meet">
        <defs>
          <linearGradient id="line-in" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(255,255,255,0.04)" />
            <stop offset="100%" stopColor="rgba(91,139,255,0.55)" />
          </linearGradient>
          <linearGradient id="line-out" x1="0" y1="0" x2="1" y2="0">
            <stop offset="0%" stopColor="rgba(91,139,255,0.55)" />
            <stop offset="100%" stopColor="rgba(255,255,255,0.04)" />
          </linearGradient>
          <radialGradient id="engine-fill" cx="0.5" cy="0.5" r="0.7">
            <stop offset="0%" stopColor="rgba(61,110,255,0.22)" />
            <stop offset="60%" stopColor="rgba(20,30,55,0.85)" />
            <stop offset="100%" stopColor="rgba(13,18,28,0.95)" />
          </radialGradient>
          <filter id="soft-glow" x="-20%" y="-20%" width="140%" height="140%">
            <feGaussianBlur stdDeviation="4" />
          </filter>
        </defs>

        {/* INPUT LINES */}
        {inputYs.map((y, i) => {
          const path = curvePath(colInputX + 140, y, engineX - engineW / 2, engineY);
          return (
            <motion.path
              key={`in-line-${i}`}
              d={path}
              stroke="url(#line-in)"
              strokeWidth={1}
              fill="none"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.1, delay: 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}

        {/* OUTPUT LINES */}
        {outputYs.map((y, i) => {
          const path = curvePath(engineX + engineW / 2, engineY, colOutputX - 140, y);
          return (
            <motion.path
              key={`out-line-${i}`}
              d={path}
              stroke="url(#line-out)"
              strokeWidth={1}
              fill="none"
              initial={reduce ? false : { pathLength: 0, opacity: 0 }}
              whileInView={reduce ? undefined : { pathLength: 1, opacity: 1 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 1.1, delay: 0.6 + 0.05 * i, ease: [0.22, 1, 0.36, 1] }}
            />
          );
        })}

        {/* INPUT CHIPS */}
        {engineInputs.map((label, i) => {
          const y = inputYs[i];
          return (
            <g key={`in-${label}`}>
              <motion.g
                initial={reduce ? false : { opacity: 0, x: -10 }}
                whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
                viewport={{ once: true, margin: '-15% 0px' }}
                transition={{ duration: 0.5, delay: 0.04 * i }}
              >
                <rect x={colInputX - 70} y={y - 14} width="210" height="28" rx="4" fill="#13171e" stroke="rgba(255,255,255,0.08)" />
                <text
                  x={colInputX - 60}
                  y={y + 4}
                  fontFamily="JetBrains Mono, monospace"
                  fontSize="11"
                  fill="#cfd5e0"
                  letterSpacing="0.5"
                >
                  {label}
                </text>
                {/* dot at line origin */}
                <circle cx={colInputX + 140} cy={y} r={2.5} fill="#5b8bff" />
              </motion.g>
            </g>
          );
        })}

        {/* ENGINE BLOCK */}
        <motion.g
          initial={reduce ? false : { opacity: 0, scale: 0.94 }}
          whileInView={reduce ? undefined : { opacity: 1, scale: 1 }}
          viewport={{ once: true, margin: '-15% 0px' }}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* outer glow ring */}
          <rect
            x={engineX - engineW / 2 - 8}
            y={engineY - engineH / 2 - 8}
            width={engineW + 16}
            height={engineH + 16}
            rx="10"
            fill="none"
            stroke="rgba(91,139,255,0.18)"
            strokeWidth="1"
            filter="url(#soft-glow)"
          />
          {/* engine surface */}
          <rect
            x={engineX - engineW / 2}
            y={engineY - engineH / 2}
            width={engineW}
            height={engineH}
            rx="8"
            fill="url(#engine-fill)"
            stroke="rgba(91,139,255,0.45)"
            strokeWidth="1"
          />
          {/* corner brackets */}
          <CornerBracket x={engineX - engineW / 2} y={engineY - engineH / 2} corner="tl" />
          <CornerBracket x={engineX + engineW / 2} y={engineY - engineH / 2} corner="tr" />
          <CornerBracket x={engineX - engineW / 2} y={engineY + engineH / 2} corner="bl" />
          <CornerBracket x={engineX + engineW / 2} y={engineY + engineH / 2} corner="br" />

          {/* label */}
          <text
            x={engineX}
            y={engineY - 22}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="10"
            letterSpacing="3"
            fill="#5b8bff"
          >
            SIGNAL FORCE
          </text>
          <text
            x={engineX}
            y={engineY + 6}
            textAnchor="middle"
            fontFamily="Orbitron, sans-serif"
            fontSize="22"
            fontWeight="700"
            fill="#f4f6fa"
          >
            AI Intelligence Engine
          </text>
          <text
            x={engineX}
            y={engineY + 34}
            textAnchor="middle"
            fontFamily="JetBrains Mono, monospace"
            fontSize="9"
            letterSpacing="2"
            fill="#7e8595"
          >
            COLLECT · STRUCTURE · CORRELATE · FORECAST · RECOMMEND
          </text>

          {/* pulsing core dot */}
          <motion.circle
            cx={engineX}
            cy={engineY + 56}
            r="4"
            fill="#5b8bff"
            animate={reduce ? undefined : { opacity: [0.4, 1, 0.4], r: [3, 5, 3] }}
            transition={{ duration: 2.4, repeat: Infinity, ease: 'easeInOut' }}
          />
        </motion.g>

        {/* OUTPUT CHIPS */}
        {engineOutputs.map((label, i) => {
          const y = outputYs[i];
          return (
            <motion.g
              key={`out-${label}`}
              initial={reduce ? false : { opacity: 0, x: 10 }}
              whileInView={reduce ? undefined : { opacity: 1, x: 0 }}
              viewport={{ once: true, margin: '-15% 0px' }}
              transition={{ duration: 0.5, delay: 0.7 + 0.04 * i }}
            >
              <rect
                x={colOutputX - 140}
                y={y - 14}
                width="220"
                height="28"
                rx="4"
                fill="rgba(20,32,60,0.6)"
                stroke="rgba(91,139,255,0.35)"
              />
              <text
                x={colOutputX - 130}
                y={y + 4}
                fontFamily="JetBrains Mono, monospace"
                fontSize="11"
                fill="#e8ecf1"
                letterSpacing="0.5"
              >
                {label}
              </text>
              <circle cx={colOutputX - 140} cy={y} r={2.5} fill="#5b8bff" />
            </motion.g>
          );
        })}

        {/* column labels */}
        <text x={colInputX - 70} y={26} fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3" fill="#7e8595">
          INPUTS
        </text>
        <text x={colOutputX + 80} y={26} textAnchor="end" fontFamily="JetBrains Mono, monospace" fontSize="10" letterSpacing="3" fill="#7e8595">
          DECISION-READY READS
        </text>
      </svg>
    </div>
  );
}

function CornerBracket({ x, y, corner }: { x: number; y: number; corner: 'tl' | 'tr' | 'bl' | 'br' }) {
  const L = 10;
  const dx = corner === 'tl' || corner === 'bl' ? 1 : -1;
  const dy = corner === 'tl' || corner === 'tr' ? 1 : -1;
  return (
    <g stroke="#5b8bff" strokeWidth="1.5" fill="none">
      <line x1={x} y1={y} x2={x + dx * L} y2={y} />
      <line x1={x} y1={y} x2={x} y2={y + dy * L} />
    </g>
  );
}

function layoutY(count: number, top: number, bottom: number): number[] {
  if (count === 1) return [(top + bottom) / 2];
  const step = (bottom - top) / (count - 1);
  return Array.from({ length: count }, (_, i) => top + step * i);
}

function curvePath(x1: number, y1: number, x2: number, y2: number): string {
  // Smooth cubic bezier — control points pull toward horizontal at endpoints
  const dx = (x2 - x1) * 0.5;
  return `M ${x1} ${y1} C ${x1 + dx} ${y1}, ${x2 - dx} ${y2}, ${x2} ${y2}`;
}
