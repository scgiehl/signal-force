import { useEffect, useRef } from 'react';

// Cursor-aware spotlight. Renders a subtle blue radial that follows the pointer.
// Disabled on touch devices.
export default function Spotlight() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const isTouch = window.matchMedia('(hover: none)').matches;
    if (isTouch) return;
    let raf = 0;
    let targetX = window.innerWidth / 2;
    let targetY = window.innerHeight / 3;
    let x = targetX;
    let y = targetY;

    const handle = (e: PointerEvent) => {
      targetX = e.clientX;
      targetY = e.clientY;
    };

    const tick = () => {
      x += (targetX - x) * 0.08;
      y += (targetY - y) * 0.08;
      if (ref.current) {
        ref.current.style.transform = `translate3d(${x - 400}px, ${y - 400}px, 0)`;
      }
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('pointermove', handle);
    raf = requestAnimationFrame(tick);
    return () => {
      window.removeEventListener('pointermove', handle);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <div
      ref={ref}
      aria-hidden="true"
      className="pointer-events-none fixed left-0 top-0 z-[1] h-[800px] w-[800px] will-change-transform"
      style={{
        background:
          'radial-gradient(closest-side, rgba(91,139,255,0.10) 0%, rgba(91,139,255,0.04) 35%, transparent 70%)',
        mixBlendMode: 'plus-lighter',
      }}
    />
  );
}
