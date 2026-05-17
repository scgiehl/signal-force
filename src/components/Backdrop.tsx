// Layered, fixed-position backdrop: graphite gradient + grid + slow noise + corner radial glow.
export default function Backdrop() {
  return (
    <div aria-hidden="true" className="pointer-events-none fixed inset-0 z-0 overflow-hidden">
      {/* base graphite gradient */}
      <div className="absolute inset-0 bg-gradient-to-b from-ink-950 via-ink-900 to-ink-950" />

      {/* dot grid (replaces line grid for a quieter "command surface") */}
      <div
        className="absolute inset-0 opacity-[0.55]"
        style={{
          backgroundImage:
            'radial-gradient(rgba(255,255,255,0.06) 1px, transparent 1px)',
          backgroundSize: '28px 28px',
          maskImage:
            'radial-gradient(ellipse at 50% 30%, black 0%, black 50%, transparent 90%)',
          WebkitMaskImage:
            'radial-gradient(ellipse at 50% 30%, black 0%, black 50%, transparent 90%)',
        }}
      />

      {/* signal-blue radial glow upper-center */}
      <div
        className="absolute -top-40 left-1/2 h-[720px] w-[1200px] -translate-x-1/2"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(61,110,255,0.18) 0%, rgba(7,9,13,0) 70%)',
          filter: 'blur(8px)',
        }}
      />

      {/* second, subtler glow lower-right */}
      <div
        className="absolute bottom-[-200px] right-[-200px] h-[680px] w-[680px]"
        style={{
          background:
            'radial-gradient(50% 50% at 50% 50%, rgba(45,90,220,0.18) 0%, rgba(7,9,13,0) 65%)',
        }}
      />

      {/* vignette */}
      <div
        className="absolute inset-0"
        style={{
          background:
            'radial-gradient(ellipse at center, transparent 50%, rgba(0,0,0,0.55) 100%)',
        }}
      />
    </div>
  );
}
