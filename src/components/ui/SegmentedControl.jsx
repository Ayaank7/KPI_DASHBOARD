export function SegmentedControl({ options, value, onChange, className = '' }) {
  return (
    <div
      className={`inline-flex rounded-2xl border border-slate-300/80 bg-white/90 p-1 dark:border-white/10 dark:bg-white/5 ${className}`}
      role="tablist"
      aria-label="Toggle options"
    >
      {options.map((option) => {
        const active = option.value === value;

        return (
          <button
            key={option.value}
            type="button"
            role="tab"
            aria-selected={active}
            onClick={() => onChange(option.value)}
            className={`rounded-xl px-3 py-1.5 text-sm font-medium transition ${
              active ? 'bg-cyan-400 text-slate-950 shadow-sm' : 'text-slate-700 hover:text-slate-900 dark:text-slate-300 dark:hover:text-white'
            }`}
          >
            {option.label}
          </button>
        );
      })}
    </div>
  );
}
