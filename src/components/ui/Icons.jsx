const iconProps = {
  fill: 'none',
  viewBox: '0 0 24 24',
  strokeWidth: 1.9,
  stroke: 'currentColor',
  strokeLinecap: 'round',
  strokeLinejoin: 'round',
};

function createIcon(path) {
  return function Icon({ className = 'h-5 w-5', title }) {
    return (
      <svg aria-hidden={title ? undefined : true} role={title ? 'img' : 'presentation'} className={className} {...iconProps}>
        {title ? <title>{title}</title> : null}
        {path}
      </svg>
    );
  };
}

export const MenuIcon = createIcon(<path d="M4 6h16M4 12h16M4 18h16" />);
export const SunIcon = createIcon(<path d="M12 3v2m0 14v2m9-9h-2M5 12H3m13.95 6.95-1.41-1.41M7.46 7.46 6.05 6.05m0 11.9 1.41-1.41M17.95 6.05l-1.41 1.41M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />);
export const MoonIcon = createIcon(<path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79Z" />);
export const ChevronRightIcon = createIcon(<path d="m9 18 6-6-6-6" />);
export const ChevronDownIcon = createIcon(<path d="m6 9 6 6 6-6" />);
export const BellIcon = createIcon(<path d="M15 17H9m8-2V10a5 5 0 0 0-10 0v5l-2 2h14l-2-2Zm-5 5a2 2 0 0 0 2-2h-4a2 2 0 0 0 2 2Z" />);
export const AlertTriangleIcon = createIcon(<path d="m10.29 3.86-8.21 14A2 2 0 0 0 3.82 21h16.36a2 2 0 0 0 1.74-3.14l-8.21-14a2 2 0 0 0-3.42 0ZM12 9v4m0 4h.01" />);
export const ArrowUpIcon = createIcon(<path d="m6 14 6-6 6 6M12 8v12" />);
export const ArrowDownIcon = createIcon(<path d="m6 10 6 6 6-6M12 4v12" />);
export const TargetIcon = createIcon(<path d="M12 2v4m0 12v4M4 12H0m24 0h-4M7.05 7.05 4.22 4.22m15.56 15.56-2.83-2.83M7.05 16.95 4.22 19.78m15.56-15.56-2.83 2.83M12 8a4 4 0 1 1 0 8 4 4 0 0 1 0-8Z" />);
export const SparkIcon = createIcon(<path d="m5 19 5-9 4 4 5-11" />);
export const ShieldCheckIcon = createIcon(<path d="M12 2 4 5v6c0 5 3.5 9.7 8 11 4.5-1.3 8-6 8-11V5l-8-3Zm-1 10 2 2 4-4" />);
export const RefreshIcon = createIcon(<path d="M20 11a8 8 0 1 0 2 5h-2a6 6 0 1 1-1.76-4.24L16 14h6V8l-2.06 2.06A8 8 0 0 0 20 11Z" />);
