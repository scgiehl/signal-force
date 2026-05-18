import { motion, useReducedMotion } from 'framer-motion';
import Backdrop from '../components/Backdrop';
import Spotlight from '../components/Spotlight';
import Logo from '../components/Logo';

export default function Holding() {
  const reduce = useReducedMotion();

  return (
    <div className="relative flex min-h-screen items-center justify-center overflow-hidden bg-ink-950">
      <Backdrop />
      <Spotlight />

      {/* faint radar sweep, same primitive as the hero, kept very subtle */}
      <div
        aria-hidden="true"
        className="pointer-events-none absolute left-1/2 top-1/2 z-0 h-[120vmin] w-[120vmin] -translate-x-1/2 -translate-y-1/2 opacity-[0.08]"
        style={{
          background:
            'conic-gradient(from 0deg, rgba(91,139,255,0) 0deg, rgba(91,139,255,0.45) 25deg, rgba(91,139,255,0) 50deg)',
          maskImage: 'radial-gradient(circle, black 0%, black 55%, transparent 75%)',
          WebkitMaskImage: 'radial-gradient(circle, black 0%, black 55%, transparent 75%)',
          animation: reduce ? undefined : 'sweep 14s linear infinite',
        }}
      />

      <motion.div
        initial={{ opacity: 0, y: 6 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 1.2, ease: [0.22, 1, 0.36, 1] }}
        className="relative z-10"
      >
        <Logo size={104} />
      </motion.div>
    </div>
  );
}
