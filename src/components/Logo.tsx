import { cn } from '../lib/utils';

type Props = {
  variant?: 'mark' | 'lockup';
  size?: number;
  className?: string;
};

// Custom-drawn Signal Force "S / lightning" mark.
// Geometry: a vertical bar with a notched "S" stroke shaped like a SIGINT lightning bolt.
export default function Logo({ variant = 'lockup', size = 28, className }: Props) {
  const mark = (
    <svg
      width={size}
      height={size}
      viewBox="0 0 64 64"
      fill="none"
      className={cn('shrink-0', className)}
      aria-hidden="true"
    >
      <defs>
        <linearGradient id="sf-mark-grad" x1="0" y1="0" x2="64" y2="64">
          <stop offset="0%" stopColor="#5b8bff" />
          <stop offset="100%" stopColor="#2856f0" />
        </linearGradient>
      </defs>
      {/* outer S frame */}
      <path
        d="M50 10H26a12 12 0 0 0-12 12v2a8 8 0 0 0 8 8h16"
        stroke="url(#sf-mark-grad)"
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      <path
        d="M14 54h24a12 12 0 0 0 12-12v-2a8 8 0 0 0-8-8H26"
        stroke="url(#sf-mark-grad)"
        strokeWidth="3.5"
        strokeLinecap="square"
      />
      {/* lightning bolt cutting across */}
      <path
        d="M38 14 24 32h10L26 50l16-18H32l6-18z"
        fill="url(#sf-mark-grad)"
      />
    </svg>
  );

  if (variant === 'mark') return mark;

  return (
    <div className={cn('flex items-center gap-2.5', className)}>
      {mark}
      <div className="flex flex-col leading-none">
        <span className="font-display text-[13px] font-bold tracking-widest2 text-bone-50">SIGNAL</span>
        <span className="font-display text-[13px] font-bold tracking-widest2 text-signal-400">FORCE</span>
      </div>
    </div>
  );
}
