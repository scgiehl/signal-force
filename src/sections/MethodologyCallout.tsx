import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import { capabilitiesAnchor } from '../lib/content';
import Reveal from '../components/Reveal';

export default function MethodologyCallout() {
  return (
    <section id="methodology-callout" className="relative py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="panel relative overflow-hidden p-10 md:p-14">
            {/* glow */}
            <div
              aria-hidden
              className="pointer-events-none absolute -left-40 -top-40 h-[520px] w-[520px] rounded-full opacity-50"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(61,110,255,0.3) 0%, rgba(7,9,13,0) 70%)',
              }}
            />

            <div className="relative grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="label">Methodology</div>
                <h2 className="mt-4 h-display text-3xl leading-[1.1] md:text-4xl">
                  One engine.{' '}
                  <span className="text-signal-400">One methodology.</span>{' '}
                  Different output formats.
                </h2>
              </div>

              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-bone-200 md:text-lg">
                  Signal Force runs the same core process every time: collect the signals, structure the context, compare the company against the market, identify the decision, generate the read, convert intelligence into action.
                </p>
                <p className="mt-4 text-base leading-relaxed text-bone-300 md:text-lg">
                  The output changes because the decision changes. The methodology does not. Same four-layer model. Same seven-step intelligence cycle. Every read.
                </p>

                {/* anchor pull quote */}
                <figure className="mt-10 border-l-2 border-signal-500 pl-6">
                  <blockquote className="h-display text-lg leading-snug text-bone-50 md:text-xl">
                    {capabilitiesAnchor}
                  </blockquote>
                </figure>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/methodology" className="btn-ghost">
                    See the methodology
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/access" className="btn-primary">
                    Request a sample read
                    <ArrowRight size={16} />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </Reveal>
      </div>
    </section>
  );
}
