export function Badge({ children, tone = 'default', className = '' }) {
  const baseStyles = 'inline-flex items-center rounded-full border px-2.5 py-0.5 text-xs font-semibold transition-colors';

  const toneStyles = {
    default: 'border-slate-200 bg-slate-100 text-slate-800 dark:border-white/10 dark:bg-white/5 dark:text-slate-300',
    success: 'border-emerald-200 bg-emerald-100 text-emerald-800 dark:border-emerald-400/20 dark:bg-emerald-500/10 dark:text-emerald-300',
    high: 'border-rose-200 bg-rose-100 text-rose-800 dark:border-rose-400/20 dark:bg-rose-500/10 dark:text-rose-300',
  };

  const selectedTone = toneStyles[tone] || toneStyles.default;

  return (
    <div className={`${baseStyles} ${selectedTone} ${className}`}>
      {children}
    </div>
  );
}