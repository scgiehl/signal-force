import { Link } from 'react-router-dom';
import { ArrowUpRight } from 'lucide-react';
import Logo from './Logo';
import { brand, nav } from '../lib/content';
import { todayCode } from '../lib/utils';

export default function Footer() {
  return (
    <footer className="relative z-10 border-t border-white/[0.06] bg-ink-950/80 backdrop-blur-xl">
      <div className="container-x py-16">
        <div className="grid gap-10 lg:grid-cols-12">
          <div className="lg:col-span-5">
            <Logo />
            <p className="mt-6 max-w-md text-sm leading-relaxed text-bone-300">
              {brand.shortDescription}
            </p>
            <div className="mt-6 flex flex-wrap gap-2">
              <span className="tag">{brand.pillars}</span>
              <span className="tag-signal">{brand.status}</span>
            </div>
          </div>

          <div className="lg:col-span-4">
            <div className="label">Site</div>
            <ul className="mt-4 space-y-2.5 text-sm">
              {nav.map((n) => (
                <li key={n.to}>
                  <Link
                    to={n.to}
                    className="group inline-flex items-center gap-2 text-bone-200 transition-colors hover:text-bone-50"
                  >
                    <span>{n.label}</span>
                    <ArrowUpRight
                      size={14}
                      className="opacity-0 transition-opacity group-hover:opacity-100"
                    />
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:col-span-3">
            <div className="label">Transmission</div>
            <div className="mt-4 space-y-2 font-mono text-xs text-bone-300">
              <div className="flex justify-between border-b border-white/[0.06] py-1.5">
                <span className="text-bone-500">DATE</span>
                <span>{todayCode()}</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] py-1.5">
                <span className="text-bone-500">PHASE</span>
                <span>EARLY ACCESS</span>
              </div>
              <div className="flex justify-between border-b border-white/[0.06] py-1.5">
                <span className="text-bone-500">BUILT BY</span>
                <span>OPERATOR</span>
              </div>
              <div className="flex justify-between py-1.5">
                <span className="text-bone-500">CLASSIFY</span>
                <span className="text-signal-400">UNCLASSIFIED</span>
              </div>
            </div>
          </div>
        </div>

        <div className="hairline mt-12" />
        <div className="mt-6 flex flex-col items-start justify-between gap-4 text-xs text-bone-500 md:flex-row md:items-center">
          <div className="font-mono uppercase tracking-widest2">
            © {new Date().getFullYear()} Signal Force · {brand.classification}
          </div>
          <div className="font-mono">An operator-built platform for federal contracting growth.</div>
        </div>
      </div>
    </footer>
  );
}
