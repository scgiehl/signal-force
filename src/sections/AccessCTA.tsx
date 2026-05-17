import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { brand } from '../lib/content';
import Reveal from '../components/Reveal';

export default function AccessCTA() {
  return (
    <section id="access" className="relative py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="panel relative overflow-hidden p-10 md:p-14">
            {/* glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -right-40 -top-40 h-[500px] w-[500px] rounded-full opacity-50"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(61,110,255,0.35) 0%, rgba(7,9,13,0) 70%)',
              }}
            />
            {/* grid */}
            <div
              aria-hidden
              className="pointer-events-none absolute inset-0 opacity-30"
              style={{
                backgroundImage:
                  'linear-gradient(rgba(255,255,255,0.04) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.04) 1px, transparent 1px)',
                backgroundSize: '40px 40px',
                maskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
                WebkitMaskImage: 'radial-gradient(ellipse at top right, black, transparent 70%)',
              }}
            />

            <div className="relative grid items-end gap-10 md:grid-cols-12">
              <div className="md:col-span-7">
                <div className="mb-5 flex items-center gap-3">
                  <span className="font-mono text-sm uppercase tracking-widest2 text-signal-400">
                    08 / ACCESS
                  </span>
                  <span className="h-px w-8 bg-white/10" />
                  <span className="eyebrow">Build Phase · {brand.status}</span>
                </div>
                <h2 className="h-display text-balance text-3xl leading-[1.05] md:text-5xl">
                  Signal Force is being built in the open.{' '}
                  <span className="text-signal-400">Get on the early access list.</span>
                </h2>
                <p className="mt-5 max-w-xl text-base leading-relaxed text-bone-300 md:text-lg">
                  Early access partners get first reads on the methodology, first looks at the briefs, and a direct line to the operator building it.
                </p>
              </div>
              <div className="md:col-span-5 md:text-right">
                <div className="flex flex-col gap-3 md:items-end">
                  <Link to="/access" className="btn-primary">
                    Request Early Access
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/methodology" className="btn-ghost">
                    Talk through a use case
                  </Link>
                  <div className="mt-2 font-mono text-sm uppercase tracking-widest2 text-bone-500">
                    No spam. No demos. Operator-to-operator.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
