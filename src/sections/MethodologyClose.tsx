import { Link } from 'react-router-dom';
import { ArrowRight } from 'lucide-react';
import Reveal from '../components/Reveal';

export default function MethodologyClose() {
  return (
    <section id="methodology-close" className="relative py-24 lg:py-32">
      <div className="container-x">
        <Reveal>
          <div className="panel relative overflow-hidden p-10 md:p-16">
            <div
              aria-hidden
              className="pointer-events-none absolute -right-40 -top-40 h-[560px] w-[560px] rounded-full opacity-50"
              style={{
                background:
                  'radial-gradient(closest-side, rgba(61,110,255,0.3) 0%, rgba(7,9,13,0) 70%)',
              }}
            />

            <div className="relative grid gap-10 md:grid-cols-12">
              <div className="md:col-span-5">
                <div className="label">Closing</div>
                <h2 className="mt-4 h-display text-3xl leading-[1.1] md:text-5xl">
                  The methodology{' '}
                  <span className="text-signal-400">is the advantage.</span>
                </h2>
              </div>

              <div className="md:col-span-7">
                <p className="text-base leading-relaxed text-bone-200 md:text-lg">
                  Signal Force is built around a simple belief: better GovCon growth comes from better signal discipline. The teams that win are not always the teams with the most data. They are the teams that see the pattern earlier, understand the customer better, know who to engage, and move before the market is obvious.
                </p>

                <figure className="mt-10 border-l-2 border-signal-500 pl-6">
                  <blockquote className="h-display text-lg leading-snug text-bone-50 md:text-xl">
                    Raw signal in. Decision-ready action out. The methodology is the product.
                  </blockquote>
                </figure>

                <div className="mt-10 flex flex-wrap gap-3">
                  <Link to="/access" className="btn-primary">
                    Request a sample brief
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/capabilities" className="btn-ghost">
                    Explore the platform
                    <ArrowRight size={16} />
                  </Link>
                  <Link to="/access" className="btn-ghost">
                    Join early access
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
