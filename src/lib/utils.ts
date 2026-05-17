export function cn(...classes: Array<string | false | null | undefined>): string {
  return classes.filter(Boolean).join(' ');
}

export function pad2(n: number): string {
  return n.toString().padStart(2, '0');
}

export function todayCode(): string {
  const d = new Date();
  return `${d.getUTCFullYear()}.${pad2(d.getUTCMonth() + 1)}.${pad2(d.getUTCDate())}`;
}
