import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card } from '../ui/Card';
import { ChevronRightIcon, TargetIcon } from '../ui/Icons';

const domainMeta = {
  Revenue: { tone: 'sky', note: 'Top line, basket size, and margin quality.' },
  Operations: { tone: 'emerald', note: 'Throughput, wait time, and staffing efficiency.' },
  'Orders & Menu': { tone: 'amber', note: 'Order mix, conversion, and menu engineering.' },
  Staff: { tone: 'violet', note: 'Coverage, labor control, and team productivity.' },
  Customer: { tone: 'rose', note: 'Experience, loyalty, and service quality.' },
  Inventory: { tone: 'cyan', note: 'Waste, stock pressure, and replenishment.' },
  ROI: { tone: 'lime', note: 'Campaign payback and contribution efficiency.' },
};

export function Sidebar({ domains, selectedDomain, onSelect, open, onClose }) {
  return (
    <>
      <div
        className={`fixed inset-0 z-40 bg-slate-900/30 backdrop-blur-sm transition dark:bg-slate-950/70 lg:hidden ${open ? 'opacity-100' : 'pointer-events-none opacity-0'}`}
        onClick={onClose}
      />

      <aside
        className={`fixed inset-y-0 left-0 z-50 w-[290px] transform border-r border-slate-300/70 bg-white/92 px-4 py-5 backdrop-blur-xl transition duration-300 dark:border-white/10 dark:bg-slate-950/95 lg:translate-x-0 ${open ? 'translate-x-0' : '-translate-x-full'}`}
      >
        <div className="flex h-full flex-col gap-5 overflow-y-auto scrollbar-thin">
          <div className="flex items-center justify-between gap-3">
            <div>
              <div className="flex items-center gap-2">
                <span className="inline-flex h-10 w-10 items-center justify-center rounded-2xl bg-cyan-400 text-slate-950 shadow-lg shadow-cyan-500/20">
                  <TargetIcon className="h-5 w-5" />
                </span>
                <div>
                  <p className="text-sm font-semibold tracking-wide text-slate-900 dark:text-slate-50">KPI Intelligence</p>
                  <p className="text-xs text-slate-600 dark:text-slate-400">Food & Hospitality</p>
                </div>
              </div>
            </div>

            <Button variant="ghost" className="lg:hidden" onClick={onClose} aria-label="Close navigation">
              ×
            </Button>
          </div>

          <Card className="p-4 bg-slate-50 border-slate-200 dark:bg-white/5 dark:border-white/10">
            <Badge tone="success" className="mb-3">Live operational view</Badge>
            <p className="text-sm leading-6 text-slate-700 dark:text-slate-300">
              Monitor the health of revenue, service, labor, customer experience, and ROI in one operating cockpit.
            </p>
          </Card>

          <nav className="space-y-2">
            {domains.map((domain) => {
              const active = domain === selectedDomain;
              const meta = domainMeta[domain] ?? { note: '' };

              return (
                <button
                  key={domain}
                  type="button"
                  onClick={() => onSelect(domain)}
                  className={`group flex w-full items-center justify-between rounded-2xl border px-4 py-3 text-left transition ${
                    active
                      ? 'border-cyan-300 bg-cyan-50 text-cyan-950 shadow-sm dark:border-cyan-500/30 dark:bg-cyan-500/10 dark:text-white dark:shadow-cyan-500/10'
                      : 'border-slate-200 bg-white text-slate-700 hover:border-slate-300 hover:bg-slate-50 dark:border-white/10 dark:bg-white/5 dark:text-slate-200 dark:hover:border-white/15 dark:hover:bg-white/8'
                  }`}
                >
                  <span>
                    <span className="block text-sm font-semibold">{domain}</span>
                    <span className={`mt-1 block text-xs leading-5 transition ${
                      active 
                        ? 'text-cyan-700 dark:text-cyan-100/70' 
                        : 'text-slate-500 group-hover:text-slate-700 dark:text-slate-400 dark:group-hover:text-slate-300'
                    }`}>
                      {meta.note}
                    </span>
                  </span>
                  <ChevronRightIcon className={`h-4 w-4 transition ${
                    active 
                      ? 'text-cyan-600 dark:text-cyan-300' 
                      : 'text-slate-400 dark:text-slate-500'
                  }`} />
                </button>
              );
            })}
          </nav>

          <div className="mt-auto rounded-3xl border border-slate-200 bg-gradient-to-br from-cyan-100/50 to-slate-50 p-4 dark:border-white/10 dark:from-cyan-500/15 dark:to-slate-900">
            <p className="text-xs uppercase tracking-[0.28em] text-cyan-800 dark:text-cyan-200/80">Daily focus</p>
            <p className="mt-2 text-sm leading-6 text-slate-700 dark:text-slate-200">
              Sharpest insight today: look at lunch and dinner coverage where revenue spikes are most sensitive to staffing.
            </p>
          </div>
        </div>
      </aside>
    </>
  );
}