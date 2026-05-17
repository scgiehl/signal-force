import { useEffect, useState } from 'react';
import { Link, NavLink } from 'react-router-dom';
import { Menu, X } from 'lucide-react';
import { AnimatePresence, motion } from 'framer-motion';
import { nav, brand } from '../lib/content';
import Logo from './Logo';
import { cn } from '../lib/utils';

export default function Nav() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 16);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    return () => {
      document.body.style.overflow = '';
    };
  }, [open]);

  return (
    <>
      <header
        className={cn(
          'fixed inset-x-0 top-0 z-40 transition-all duration-300',
          scrolled ? 'border-b border-white/[0.06] bg-ink-950/80 backdrop-blur-xl' : 'border-b border-transparent',
        )}
      >
        <div className="container-x flex h-16 items-center justify-between gap-6">
          <Link to="/" className="group flex items-center gap-3" aria-label="Signal Force home">
            <Logo />
            <span className="hidden h-5 w-px bg-white/10 md:block" />
            <span className="hidden font-mono text-sm uppercase tracking-widest2 text-bone-400 md:block">
              {brand.status}
            </span>
          </Link>

          <nav className="hidden items-center gap-1 md:flex">
            {nav.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                end={item.to === '/'}
                className={({ isActive }) =>
                  cn(
                    'relative px-3 py-2 text-sm transition-colors',
                    isActive ? 'text-bone-50' : 'text-bone-300 hover:text-bone-50',
                  )
                }
              >
                {({ isActive }) => (
                  <>
                    {item.label}
                    {isActive && (
                      <motion.span
                        layoutId="nav-active"
                        className="absolute inset-x-2 -bottom-0.5 h-px bg-signal-400"
                        transition={{ type: 'spring', stiffness: 380, damping: 30 }}
                      />
                    )}
                  </>
                )}
              </NavLink>
            ))}
            <Link to="/access" className="btn-primary ml-3 px-4 py-2 text-xs">
              Request Access
            </Link>
          </nav>

          <button
            type="button"
            className="md:hidden inline-flex h-10 w-10 items-center justify-center rounded-md border border-white/10 text-bone-100"
            onClick={() => setOpen((v) => !v)}
            aria-label="Toggle menu"
            aria-expanded={open}
          >
            {open ? <X size={18} /> : <Menu size={18} />}
          </button>
        </div>
      </header>

      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            className="fixed inset-0 z-30 bg-ink-950/95 backdrop-blur-xl md:hidden"
          >
            <div className="container-x flex h-full flex-col pt-24">
              <nav className="flex flex-col gap-1">
                {nav.map((item, idx) => (
                  <motion.div
                    key={item.to}
                    initial={{ opacity: 0, x: -16 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: 0.05 + idx * 0.04 }}
                  >
                    <NavLink
                      to={item.to}
                      end={item.to === '/'}
                      onClick={() => setOpen(false)}
                      className={({ isActive }) =>
                        cn(
                          'flex items-center justify-between border-b border-white/[0.06] py-5 font-display text-2xl tracking-tight',
                          isActive ? 'text-bone-50' : 'text-bone-300',
                        )
                      }
                    >
                      <span>{item.label}</span>
                      <span className="font-mono text-xs text-bone-500">{String(idx + 1).padStart(2, '0')}</span>
                    </NavLink>
                  </motion.div>
                ))}
              </nav>
              <div className="mt-10">
                <Link to="/access" onClick={() => setOpen(false)} className="btn-primary w-full">
                  Request Early Access
                </Link>
              </div>
              <div className="mt-auto pb-8 font-mono text-sm uppercase tracking-widest2 text-bone-500">
                {brand.status}
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
}
