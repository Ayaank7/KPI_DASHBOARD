export function Card({ as: Component = 'div', className = '', children, ...props }) {
  return (
    <Component className={`surface ${className}`} {...props}>
      {children}
    </Component>
  );
}

export function CardHeader({ className = '', children }) {
  return <div className={`flex items-start justify-between gap-4 px-5 pt-5 ${className}`}>{children}</div>;
}

export function CardBody({ className = '', children }) {
  return <div className={`px-5 pb-5 ${className}`}>{children}</div>;
}

export function CardTitle({ className = '', children }) {
  return <h3 className={`text-base font-semibold tracking-tight text-slate-900 dark:text-slate-50 ${className}`}>{children}</h3>;
}

export function CardDescription({ className = '', children }) {
  return <p className={`mt-1 text-sm text-slate-600 dark:text-slate-400 ${className}`}>{children}</p>;
}
