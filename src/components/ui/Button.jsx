const baseStyles =
  'inline-flex items-center justify-center gap-2 rounded-xl px-3.5 py-2 text-sm font-medium transition focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-cyan-400/70 focus-visible:ring-offset-2 focus-visible:ring-offset-slate-100 dark:focus-visible:ring-offset-slate-950 disabled:cursor-not-allowed disabled:opacity-50';

const variants = {
  primary: 'bg-cyan-500 text-slate-950 hover:bg-cyan-400',
  secondary: 'border border-slate-300/80 bg-white/90 text-slate-800 hover:bg-white dark:border-white/10 dark:bg-white/6 dark:text-slate-100 dark:hover:bg-white/10',
  ghost: 'text-slate-700 hover:bg-slate-200/70 dark:text-slate-300 dark:hover:bg-white/6',
  danger: 'bg-rose-500/15 text-rose-100 hover:bg-rose-500/25 border border-rose-400/20',
};

export function Button({ as: Component = 'button', variant = 'secondary', className = '', children, ...props }) {
  return (
    <Component className={`${baseStyles} ${variants[variant] ?? variants.secondary} ${className}`} {...props}>
      {children}
    </Component>
  );
}
