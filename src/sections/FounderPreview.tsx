import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import { founder } from '../lib/content';
import Section from '../components/Section';
import Reveal from '../components/Reveal';

export default function FounderPreview() {
  return (
    <Section id="founder-preview" className="!py-28">
      <div className="grid items-center gap-12 lg:grid-cols-12">
        <Reveal className="lg:col-span-5">
          <div className="relative">
            {/* image frame */}
            <div className="relative overflow-hidden rounded-lg border border-white/[0.08] bg-ink-850 shadow-panel">
              {/* signal corner brackets */}
              <Corner pos="tl" />
              <Corner pos="tr" />
              <Corner pos="bl" />
              <Corner pos="br" />

              <img
                src={`${import.meta.env.BASE_URL}assets/founder.png`}
                alt="Sean Giehl, Founder of Signal Force"
                className="block aspect-[4/5] w-full object-cover object-center lg:aspect-auto"
                loading="lazy"
              />

              {/* bottom caption strip */}
              <div className="absolute inset-x-0 bottom-0 flex items-center justify-between border-t border-white/10 bg-gradient-to-t from-ink-950/95 to-ink-950/40 px-5 py-3 backdrop-blur-sm">
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

            {/* credential tags below image */}
            <div className="mt-5 flex flex-wrap gap-2">
              {founder.credentials.map((c) => (
                <span key={c} className="tag">
                  {c}
                </span>
              ))}
            </div>
          </div>
        </Reveal>

        <Reveal delay={0.15} className="lg:col-span-7">
          <div className="mb-5 flex items-center gap-3">
            <span className="font-mono text-sm uppercase tracking-widest2 text-signal-400">07 / FOUNDER</span>
            <span className="h-px w-8 bg-white/10" />
            <span className="eyebrow">{founder.eyebrow}</span>
          </div>
          <h2 className="h-display text-balance text-3xl leading-[1.25] md:text-4xl lg:text-[44px]">
            {founder.title}
          </h2>
          <p className="mt-7 text-base leading-relaxed text-bone-300 md:text-lg">{founder.paragraphs[0]}</p>
          <p className="mt-5 text-base leading-relaxed text-bone-300 md:text-lg">{founder.paragraphs[1]}</p>

          <div className="mt-8">
            <Link
              to="/founder"
              className="group inline-flex items-center gap-2 text-sm font-medium text-signal-400 hover:text-signal-400/80"
            >
              Read the full founder profile
              <ArrowUpRight size={16} className="transition-transform group-hover:-translate-y-0.5 group-hover:translate-x-0.5" />
            </Link>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}

function Corner({ pos }: { pos: 'tl' | 'tr' | 'bl' | 'br' }) {
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
