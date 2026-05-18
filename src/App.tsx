import { Route, Routes, useLocation, type Location } from 'react-router-dom';
import { motion } from 'framer-motion';
import { useEffect, useState } from 'react';
import Nav from './components/Nav';
import Footer from './components/Footer';
import Backdrop from './components/Backdrop';
import Spotlight from './components/Spotlight';
import ErrorBoundary from './components/ErrorBoundary';
import Home from './pages/Home';
import Capabilities from './pages/Capabilities';
import Methodology from './pages/Methodology';
import Founder from './pages/Founder';
import Access from './pages/Access';
import Holding from './pages/Holding';
import { HOLDING_MODE } from './lib/flags';

function ScrollToTop({ pathname }: { pathname: string }) {
  useEffect(() => {
    window.scrollTo({ top: 0, behavior: 'auto' });
  }, [pathname]);
  return null;
}

// Holds the location currently being rendered. When the URL changes, we play
// the exit animation first, then swap the displayed location and play enter.
// This prevents the old (exiting) page and the new (entering) page from
// briefly co-existing — which previously caused framer-motion / observer
// collisions and a blank screen on navigation.
function AnimatedRoutes() {
  const location = useLocation();
  const [displayed, setDisplayed] = useState<Location>(location);
  const [stage, setStage] = useState<'in' | 'out'>('in');

  useEffect(() => {
    if (location.pathname !== displayed.pathname) {
      setStage('out');
    }
  }, [location.pathname, displayed.pathname]);

  return (
    <>
      <ScrollToTop pathname={displayed.pathname} />
      <motion.div
        initial={{ opacity: 0, y: 8 }}
        animate={stage === 'in' ? { opacity: 1, y: 0 } : { opacity: 0, y: -8 }}
        transition={{ duration: 0.35, ease: [0.22, 1, 0.36, 1] }}
        onAnimationComplete={() => {
          if (stage === 'out') {
            setDisplayed(location);
            setStage('in');
          }
        }}
      >
        <Routes location={displayed}>
          <Route path="/" element={<Home />} />
          <Route path="/capabilities" element={<Capabilities />} />
          <Route path="/methodology" element={<Methodology />} />
          <Route path="/founder" element={<Founder />} />
          <Route path="/access" element={<Access />} />
          <Route path="*" element={<Home />} />
        </Routes>
      </motion.div>
    </>
  );
}

export default function App() {
  if (HOLDING_MODE) {
    return <Holding />;
  }

  return (
    <div className="relative min-h-screen overflow-hidden bg-ink-950">
      <Backdrop />
      <Spotlight />
      <Nav />
      <main className="relative z-10">
        <ErrorBoundary>
          <AnimatedRoutes />
        </ErrorBoundary>
      </main>
      <Footer />
    </div>
  );
}
