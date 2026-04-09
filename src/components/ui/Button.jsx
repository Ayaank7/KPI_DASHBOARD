export function Button({ variant = 'primary', className = '', ...props }) {
  const baseStyles = "inline-flex items-center justify-center gap-2 rounded-lg px-4 py-2 text-sm font-medium transition-all duration-200 focus:outline-none focus:ring-2 focus:ring-cyan-500/40 focus:ring-offset-1 dark:focus:ring-offset-slate-900";
  
  const variants = {
    primary: "bg-cyan-500 text-white shadow-sm hover:bg-cyan-600 dark:bg-cyan-500/90 dark:hover:bg-cyan-400",
    secondary: "border border-slate-200 bg-white text-slate-700 shadow-sm hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:bg-white/10",
    ghost: "text-slate-600 hover:bg-slate-100 dark:text-slate-400 dark:hover:bg-white/5 dark:hover:text-slate-200"
  };

  return (
    <button 
      className={`${baseStyles} ${variants[variant] || variants.primary} ${className}`} 
      {...props} 
    />
  );
}