import { cn } from '../lib/utils';

type Props = {
  variant?: 'mark' | 'lockup';
  size?: number;
  className?: string;
};

// Silver SF lockup — the production brand mark.
// The PNG ships in /public/assets and is served under Vite's BASE_URL so it
// resolves correctly under the /signal-force/ deploy path on GitHub Pages.
const LOCKUP_ASPECT = 1264 / 484;

export default function Logo({ variant = 'lockup', size, className }: Props) {
  const height = size ?? (variant === 'mark' ? 34 : 43);

  return (
    <img
      src={`${import.meta.env.BASE_URL}assets/logo.png`}
      alt="Signal Force"
      width={height * (variant === 'mark' ? 1 : LOCKUP_ASPECT)}
      height={height}
      style={{ height }}
      draggable={false}
      className={cn('w-auto shrink-0 select-none', className)}
    />
  );
}
