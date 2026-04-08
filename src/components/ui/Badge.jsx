const tones = {
  low: 'border-sky-400/20 bg-sky-500/10 text-sky-200',
  medium: 'border-amber-400/20 bg-amber-500/10 text-amber-100',
  high: 'border-rose-400/20 bg-rose-500/10 text-rose-100',
  success: 'border-emerald-400/20 bg-emerald-500/10 text-emerald-100',
  neutral: 'border-slate-300/80 bg-white/90 text-slate-700 dark:border-white/10 dark:bg-white/5 dark:text-slate-200',
};

export function Badge({ tone = 'neutral', className = '', children }) {
  return <span className={`inline-flex items-center rounded-full border px-2.5 py-1 text-xs font-medium ${tones[tone] ?? tones.neutral} ${className}`}>{children}</span>;
}
