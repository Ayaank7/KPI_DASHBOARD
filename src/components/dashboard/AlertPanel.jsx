import { Badge } from '../ui/Badge';
import { Button } from '../ui/Button';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { AlertTriangleIcon, BellIcon, ShieldCheckIcon } from '../ui/Icons';
import { Toggle } from '../ui/Toggle';

const severityTone = {
  low: 'low',
  medium: 'medium',
  high: 'high',
};

export function AlertPanel({ alerts, simulationEnabled, onToggleSimulation, onDismissAll, onDismissAlert }) {
  const highAlerts = alerts.filter((a) => a.severity === 'high').length;
  const mediumAlerts = alerts.filter((a) => a.severity === 'medium').length;
  const lowAlerts = alerts.filter((a) => a.severity === 'low').length;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle className="flex items-center gap-2">
            <BellIcon className="h-4 w-4 text-cyan-300" />
            Smart alerts
          </CardTitle>
          <CardDescription>Severity-based alerts with recommended actions and persistence.</CardDescription>
        </div>

        <Badge tone={alerts.length ? 'high' : 'success'}>
          <span className="inline-flex items-center gap-1.5">
            <ShieldCheckIcon className="h-3.5 w-3.5" />
            {alerts.length} active
          </span>
        </Badge>
      </CardHeader>

      <CardBody className="space-y-4 pt-4">
        <Toggle
          checked={simulationEnabled}
          onChange={onToggleSimulation}
          label="Simulate alerts"
          description="Generate live-like operational warnings from the synthetic data model."
        />

        {alerts.length > 0 ? (
          <div className="space-y-3">
            <div className="flex items-center justify-between gap-3">
              <p className="text-xs uppercase tracking-[0.26em] text-slate-500">Current alerts</p>
              <Button variant="ghost" onClick={onDismissAll} className="text-xs">
                Clear all
              </Button>
            </div>

            {/* Alert summary */}
            {alerts.length > 5 && (
              <div className="grid gap-2 rounded-xl bg-white/5 p-3 sm:grid-cols-3">
                {highAlerts > 0 && (
                  <div className="flex items-center gap-2 rounded border border-rose-400/20 bg-rose-500/8 px-3 py-2">
                    <span className="text-xs font-medium text-rose-200">{highAlerts} High</span>
                  </div>
                )}
                {mediumAlerts > 0 && (
                  <div className="flex items-center gap-2 rounded border border-amber-400/20 bg-amber-500/8 px-3 py-2">
                    <span className="text-xs font-medium text-amber-200">{mediumAlerts} Medium</span>
                  </div>
                )}
                {lowAlerts > 0 && (
                  <div className="flex items-center gap-2 rounded border border-blue-400/20 bg-blue-500/8 px-3 py-2">
                    <span className="text-xs font-medium text-blue-200">{lowAlerts} Low</span>
                  </div>
                )}
              </div>
            )}

            {/* Scrollable alerts container */}
            <div className="space-y-3 max-h-96 overflow-y-auto pr-2 scrollbar-thin scrollbar-track-slate-900 scrollbar-thumb-slate-700 hover:scrollbar-thumb-slate-600">
              {alerts.map((alert) => (
                <article key={alert.id} className="rounded-2xl border border-white/8 bg-white/5 p-4">
                  <div className="flex flex-wrap items-start justify-between gap-3">
                    <div className="space-y-2">
                      <div className="flex items-center gap-2">
                        <Badge tone={severityTone[alert.severity] ?? 'low'}>{alert.severity}</Badge>
                        <span className="text-xs uppercase tracking-[0.24em] text-slate-500">{alert.domain}</span>
                      </div>
                      <h4 className="text-sm font-semibold text-slate-50">{alert.title}</h4>
                      <p className="text-sm leading-6 text-slate-300">{alert.message}</p>
                    </div>

                    <Button variant="ghost" onClick={() => onDismissAlert(alert.id)} className="text-xs">
                      Dismiss
                    </Button>
                  </div>

                  <div className="mt-4 flex items-start gap-2 rounded-xl border border-cyan-400/10 bg-cyan-500/8 p-3 text-sm text-slate-200">
                    <AlertTriangleIcon className="mt-0.5 h-4 w-4 shrink-0 text-cyan-300" />
                    <span>{alert.action}</span>
                  </div>
                </article>
              ))}
            </div>
          </div>
        ) : (
          <div className="rounded-2xl border border-dashed border-white/10 bg-white/4 p-6 text-center">
            <p className="text-sm font-medium text-slate-100">No active alerts</p>
            <p className="mt-2 text-sm leading-6 text-slate-400">
              Alerts will appear here when KPI thresholds are breached or simulation is enabled.
            </p>
          </div>
        )}
      </CardBody>
    </Card>
  );
}
