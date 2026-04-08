export function Toggle({ checked, onChange, label, description, className = '' }) {
  return (
    <button
      type="button"
      onClick={() => onChange(!checked)}
      className={`flex w-full items-center justify-between gap-4 rounded-2xl border border-slate-300/80 bg-white/90 px-4 py-3 text-left transition hover:bg-white dark:border-white/10 dark:bg-white/5 dark:hover:bg-white/8 ${className}`}
      aria-pressed={checked}
    >
      <span>
        <span className="block text-sm font-medium text-slate-900 dark:text-slate-100">{label}</span>
        {description ? <span className="mt-1 block text-xs text-slate-600 dark:text-slate-400">{description}</span> : null}
      </span>

      <span
        className={`relative h-6 w-11 rounded-full border transition ${
          checked ? 'border-cyan-400/50 bg-cyan-400/25' : 'border-slate-300 bg-slate-200 dark:border-white/10 dark:bg-slate-800'
        }`}
      >
        <span
          className={`absolute top-0.5 h-5 w-5 rounded-full bg-white shadow transition-transform ${
            checked ? 'translate-x-5' : 'translate-x-0.5'
          }`}
        />
      </span>
    </button>
  );
}
