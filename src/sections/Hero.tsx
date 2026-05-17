import { Link } from 'react-router-dom';
import { motion, useReducedMotion } from 'framer-motion';
import { ArrowRight, ChevronRight } from 'lucide-react';
import { brand } from '../lib/content';
import { todayCode } from '../lib/utils';

const ROTATING = [
  'see what is next',
  'move first',
  'win more',
];

export default function Hero() {
  const reduce = useReducedMotion();

  return (
    <section className="relative isolate flex min-h-[88vh] items-center overflow-hidden pt-24">
      {/* faint radar sweep behind hero */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[1200px] w-[1200px] -translate-x-1/2 -translate-y-1/2 opacity-[0.18]"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(91,139,255,0) 0deg, rgba(91,139,255,0.35) 30deg, rgba(91,139,255,0) 60deg)',
          animation: reduce ? 'none' : 'sweep 14s linear infinite',
          mask: 'radial-gradient(closest-side, black 30%, transparent 80%)',
          WebkitMask: 'radial-gradient(closest-side, black 30%, transparent 80%)',
        }}
      />
      {/* concentric rings */}
      <svg
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 -z-10 h-[900px] w-[900px] -translate-x-1/2 -translate-y-1/2 opacity-30"
        viewBox="0 0 900 900"
      >
        {[120, 220, 320, 420].map((r) => (
          <circle key={r} cx="450" cy="450" r={r} fill="none" stroke="rgba(255,255,255,0.06)" />
        ))}
        <circle cx="450" cy="450" r="60" fill="none" stroke="rgba(91,139,255,0.4)" strokeDasharray="4 6" />
      </svg>

      <div className="container-x relative z-10">
        <div className="grid items-center gap-14 lg:grid-cols-12">
          <div className="lg:col-span-8">
            {/* console header */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: -8 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5 }}
              className="mb-8 flex flex-wrap items-center gap-3 font-mono text-sm uppercase tracking-widest2 text-bone-400"
            >
              <span className="flex items-center gap-2">
                <span className="relative inline-flex h-2 w-2">
                  <span className="absolute inset-0 animate-ping rounded-full bg-signal-400 opacity-60" />
                  <span className="relative inline-flex h-2 w-2 rounded-full bg-signal-400" />
                </span>
                Transmission · {todayCode()}
              </span>
              <span className="h-3 w-px bg-white/15" />
              <span className="text-bone-300">{brand.status}</span>
              <span className="h-3 w-px bg-white/15" />
              <span>Operator-designed + Intelligence-driven</span>
            </motion.div>

            {/* headline */}
            <motion.h1
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, ease: [0.22, 1, 0.36, 1] }}
              className="h-display text-balance text-4xl leading-[1.05] tracking-tight md:text-6xl lg:text-[78px]"
            >
              Federal market noise{' '}
              <span className="text-bone-400">into</span>{' '}
              <span className="bg-gradient-to-r from-signal-400 via-signal-500 to-signal-400 bg-clip-text text-transparent">
                actionable growth intelligence.
              </span>
            </motion.h1>

            {/* rotating sub */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
              className="mt-7 max-w-2xl text-pretty text-base leading-relaxed text-bone-300 md:text-lg"
            >
              Signal Force is the AI-powered intelligence service for GovCon growth.
              Built for teams that need to <RotatingWord words={ROTATING} />.
              Federal market data, relationship context, and BD methodology fused into decision-ready intelligence.
            </motion.div>

            {/* CTAs */}
            <motion.div
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
              className="mt-10 flex flex-wrap items-center gap-3"
            >
              <Link to="/access" className="btn-primary">
                Request Early Access
                <ArrowRight size={16} />
              </Link>
              <Link to="/methodology" className="btn-ghost">
                See the Methodology
                <ChevronRight size={16} />
              </Link>
            </motion.div>

            {/* thesis question */}
            <motion.figure
              initial={reduce ? false : { opacity: 0, y: 16 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.8, delay: 0.5, ease: [0.22, 1, 0.36, 1] }}
              className="mt-14 max-w-2xl"
            >
              <div className="flex items-start gap-4">
                <span className="mt-1 inline-block h-10 w-px bg-signal-500/60" />
                <div>
                  <div className="label mb-2 text-signal-400/80">The Question That Drives Every Page</div>
                  <blockquote className="font-display text-lg leading-snug text-bone-100 md:text-xl">
                    “{brand.thesisQuestion}”
                  </blockquote>
                </div>
              </div>
            </motion.figure>
          </div>

          {/* console panel on the right */}
          <motion.div
            initial={reduce ? false : { opacity: 0, scale: 0.96 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 1, delay: 0.3, ease: [0.22, 1, 0.36, 1] }}
            className="lg:col-span-4"
          >
            <SignalPanel />
          </motion.div>
        </div>
      </div>

      {/* bottom marquee strip */}
      <Marquee />
    </section>
  );
}

function RotatingWord({ words }: { words: string[] }) {
  const longest = words.reduce((a, b) => (a.length > b.length ? a : b));
  return (
    <span className="inline-grid align-baseline">
      {/* invisible sizer + visible words share grid-area 1/1 so all sit on the
          same natural baseline as the surrounding text */}
      <span className="invisible whitespace-nowrap [grid-area:1/1]">{longest}</span>
      {words.map((w, i) => (
        <motion.span
          key={w}
          className="whitespace-nowrap font-semibold text-signal-400 [grid-area:1/1]"
          initial={{ opacity: 0 }}
          animate={{
            opacity: [0, 1, 1, 0],
          }}
          transition={{
            duration: words.length * 2.4,
            times: [
              i / words.length,
              (i + 0.1) / words.length,
              (i + 0.85) / words.length,
              (i + 1) / words.length,
            ],
            repeat: Infinity,
            ease: 'easeInOut',
          }}
        >
          {w}
        </motion.span>
      ))}
    </span>
  );
}

function SignalPanel() {
  return (
    <div className="panel scanlines overflow-hidden p-5">
      <div className="flex items-center justify-between border-b border-white/[0.06] pb-3">
        <div className="flex items-center gap-2 font-mono text-sm uppercase tracking-widest2 text-bone-400">
          <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-signal-400" />
          Signal Console
        </div>
        <div className="flex gap-1">
          <span className="h-1.5 w-1.5 rounded-full bg-bone-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-bone-500/60" />
          <span className="h-1.5 w-1.5 rounded-full bg-signal-500" />
        </div>
      </div>

      <div className="mt-4 space-y-3 font-mono text-[11px] leading-relaxed text-bone-300">
        <FeedRow label="L-01 MONEY" value="NGA / Maven · recompete window opens Q4 2026" tone="signal" />
        <FeedRow label="L-02 CAPABILITY" value="Two cleared GEOINT subs added past performance" />
        <FeedRow label="L-03 PEOPLE" value="Capture lead at SAIC moved to Leidos · day 14" tone="amber" />
        <FeedRow label="L-04 MISSION" value="NGA industry day · 4 modernization themes flagged" />
        <FeedRow label="SYNTHESIS" value="Recommend prime outreach: 3 named targets" tone="signal" />
      </div>

      <div className="hairline my-5" />

      <div className="grid grid-cols-2 gap-3">
        <Stat label="SOURCES" value="42+" />
        <Stat label="LAYERS" value="4" />
        <Stat label="REPORTS" value="5" />
        <Stat label="CYCLE" value="7-STEP" />
      </div>
    </div>
  );
}

function FeedRow({ label, value, tone }: { label: string; value: string; tone?: 'signal' | 'amber' }) {
  const dotColor =
    tone === 'signal'
      ? 'bg-signal-400'
      : tone === 'amber'
      ? 'bg-amber-400'
      : 'bg-bone-500';
  return (
    <div className="flex items-start gap-3">
      <span className={`mt-1.5 h-1.5 w-1.5 shrink-0 rounded-full ${dotColor}`} />
      <div className="min-w-0 flex-1">
        <div className="text-[9px] uppercase tracking-widest2 text-bone-500">{label}</div>
        <div className="truncate text-bone-100">{value}</div>
      </div>
    </div>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded border border-white/[0.06] bg-ink-900/60 px-3 py-2.5">
      <div className="text-[9px] uppercase tracking-widest2 text-bone-500">{label}</div>
      <div className="mt-0.5 font-display text-base text-bone-50">{value}</div>
    </div>
  );
}

function Marquee() {
  const tokens = [
    'Money', 'Capability', 'People', 'Mission',
    'Agency Fit', 'Prime Teaming', 'Opportunity Qualification',
    'Market Signal', 'BD Action Plan',
    'PIRs', 'RFIs', 'SIGINT Cycle',
    'Operator-built', 'Cleared experience',
  ];
  const row = [...tokens, ...tokens];
  return (
    <div className="pointer-events-none absolute inset-x-0 bottom-0 z-10 border-y border-white/[0.05] bg-ink-950/80 backdrop-blur-sm">
      <div className="relative overflow-hidden">
        <div className="flex w-max animate-ticker gap-10 py-3 font-mono text-sm uppercase tracking-widest2 text-bone-500">
          {row.map((t, i) => (
            <span key={i} className="flex items-center gap-10">
              <span>{t}</span>
              <span className="h-px w-6 bg-white/10" />
            </span>
          ))}
        </div>
      </div>
    </div>
  );
}
