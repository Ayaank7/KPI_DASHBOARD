import { Button } from '../ui/Button';
import { SegmentedControl } from '../ui/SegmentedControl';
import { MoonIcon, MenuIcon, RefreshIcon, SunIcon } from '../ui/Icons';

const timeOptions = [
  { label: 'Today', value: 'Today' },
  { label: 'Week', value: 'Week' },
  { label: 'Month', value: 'Month' },
];

const roleOptions = [
  { label: 'Manager', value: 'Manager' },
  { label: 'Owner', value: 'Owner' },
];

export function Header({
  title,
  subtitle,
  timeFilter,
  onTimeFilterChange,
  role,
  onRoleChange,
  theme,
  onThemeToggle,
  onSync,
  onMenuClick,
}) {
  return (
    <header className="sticky top-0 z-30 border-b border-slate-300/70 bg-white/70 backdrop-blur-xl dark:border-white/10 dark:bg-slate-950/80">
      <div className="flex flex-col gap-4 px-4 py-4 sm:px-6 lg:px-8">
        <div className="flex flex-wrap items-start justify-between gap-3">
          <div className="flex items-start gap-3">
            <Button variant="ghost" className="lg:hidden" onClick={onMenuClick} aria-label="Open navigation">
              <MenuIcon className="h-5 w-5" />
            </Button>

            <div>
              <p className="text-xs uppercase tracking-[0.28em] text-cyan-700 dark:text-cyan-200/70">Food & Hospitality KPI Intelligence</p>
              <h1 className="mt-2 text-2xl font-semibold tracking-tight text-slate-900 dark:text-white sm:text-3xl">{title}</h1>
              <p className="mt-2 max-w-2xl text-sm leading-6 text-slate-600 dark:text-slate-400">{subtitle}</p>
            </div>
          </div>

          <div className="flex flex-wrap items-center gap-2">
            <Button variant="secondary" onClick={onThemeToggle} aria-label="Toggle theme">
              {theme === 'dark' ? <SunIcon className="h-4 w-4" /> : <MoonIcon className="h-4 w-4" />}
              <span className="hidden sm:inline">{theme === 'dark' ? 'Light mode' : 'Dark mode'}</span>
            </Button>
            <Button variant="secondary" onClick={onSync}>
              <RefreshIcon className="h-4 w-4" />
              Sync
            </Button>
          </div>
        </div>

        <div className="flex flex-col gap-3 lg:flex-row lg:items-center lg:justify-between">
          <SegmentedControl options={timeOptions} value={timeFilter} onChange={onTimeFilterChange} />
          <SegmentedControl options={roleOptions} value={role} onChange={onRoleChange} />
        </div>
      </div>
    </header>
  );
}
