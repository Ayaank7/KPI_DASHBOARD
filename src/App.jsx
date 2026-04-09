import { useEffect, useMemo, useState } from 'react';
import { BarTargetChart } from './components/charts/BarTargetChart';
import { DonutChart } from './components/charts/DonutChart';
import { HeatmapChart } from './components/charts/HeatmapChart';
import { RevenueLineChart } from './components/charts/RevenueLineChart';
import { ScatterMenuChart } from './components/charts/ScatterMenuChart';
import { AlertPanel } from './components/dashboard/AlertPanel';
import { Header } from './components/dashboard/Header';
import { KpiCard } from './components/dashboard/KpiCard';
import { Sidebar } from './components/dashboard/Sidebar';
import { Badge } from './components/ui/Badge';
import { Button } from './components/ui/Button';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from './components/ui/Card';
import { DOMAIN_ORDER, buildDashboardViewModel, generateDashboardData } from './data/mockData';
import { useLiveUpdates } from './hooks/useLiveUpdates';
import { useDashboardStore } from './store/useDashboardStore';

function formatTimestamp(isoString) {
  return new Intl.DateTimeFormat('en-US', {
    weekday: 'short',
    month: 'short',
    day: 'numeric',
    hour: 'numeric',
    minute: '2-digit',
  }).format(new Date(isoString));
}

export default function App() {
  const baseData = useMemo(() => generateDashboardData(), []);
  const [pulse, syncNow] = useLiveUpdates(8000);
  const [mobileNavOpen, setMobileNavOpen] = useState(false);

  const selectedDomain = useDashboardStore((state) => state.selectedDomain);
  const timeFilter = useDashboardStore((state) => state.timeFilter);
  const role = useDashboardStore((state) => state.role);
  const theme = useDashboardStore((state) => state.theme);
  const alertSimulationEnabled = useDashboardStore((state) => state.alertSimulationEnabled);
  const dismissedAlertIds = useDashboardStore((state) => state.dismissedAlertIds);
  const setSelectedDomain = useDashboardStore((state) => state.setSelectedDomain);
  const setTimeFilter = useDashboardStore((state) => state.setTimeFilter);
  const setRole = useDashboardStore((state) => state.setRole);
  const toggleTheme = useDashboardStore((state) => state.toggleTheme);
  const toggleAlertSimulation = useDashboardStore((state) => state.toggleAlertSimulation);
  const dismissAlert = useDashboardStore((state) => state.dismissAlert);
  const clearDismissedAlerts = useDashboardStore((state) => state.clearDismissedAlerts);

  useEffect(() => {
    document.documentElement.classList.toggle('dark', theme === 'dark');
    document.documentElement.dataset.theme = theme;
    document.documentElement.style.colorScheme = theme;
  }, [theme]);

  const viewModel = useMemo(
    () =>
      buildDashboardViewModel(baseData, {
        selectedDomain,
        timeFilter,
        role,
        alertSimulationEnabled,
        dismissedAlertIds,
        pulse,
      }),
    [alertSimulationEnabled, baseData, dismissedAlertIds, pulse, role, selectedDomain, timeFilter],
  );

  const handleDomainChange = (domain) => {
    setSelectedDomain(domain);
    setMobileNavOpen(false);
  };

const insights = useMemo(() => [
    {
      label: 'Revenue focus',
      value: viewModel.headlineMetrics.revenue.formattedValue,
      note: `${viewModel.timeFilter} total vs target: ${viewModel.windowMetrics.gap >= 0 ? '+' : ''}${new Intl.NumberFormat('en-IN', { style: 'currency', currency: 'INR', maximumFractionDigits: 0 }).format(viewModel.windowMetrics.gap)}`,
    },
    {
      label: 'Operations',
      value: viewModel.headlineMetrics.operations.formattedValue,
      note: 'Service level and staffing coverage',
    },
    {
      label: 'Customer',
      value: viewModel.headlineMetrics.customer.formattedValue,
      note: 'NPS and repeat behavior',
    },
    {
      label: 'ROI',
      value: viewModel.headlineMetrics.roi.formattedValue,
      note: 'Marketing efficiency and payback',
    },
  ], [viewModel]);

  return (
    <div className="relative min-h-screen lg:pl-[290px]">
      <Sidebar
        domains={DOMAIN_ORDER}
        selectedDomain={selectedDomain}
        onSelect={handleDomainChange}
        open={mobileNavOpen}
        onClose={() => setMobileNavOpen(false)}
      />

      <div className="min-h-screen">
        <Header
          title={`${viewModel.selectedDomainDefinition.label} intelligence`}
          subtitle={`${viewModel.selectedDomainDefinition.description} ${viewModel.role === 'Owner' ? 'Owner view prioritizes margin and ROI.' : 'Manager view highlights operations and guest experience.'}`}
          timeFilter={timeFilter}
          onTimeFilterChange={setTimeFilter}
          role={role}
          onRoleChange={setRole}
          theme={theme}
          onThemeToggle={toggleTheme}
          onSync={syncNow}
          onMenuClick={() => setMobileNavOpen(true)}
        />

        <main className="px-4 py-6 sm:px-6 lg:px-8">
          <section className="grid gap-4 xl:grid-cols-[1.4fr_0.9fr]">
            <Card className="overflow-hidden">
              <CardHeader>
                <div>
                  <Badge tone="success">Selected domain</Badge>
                  <CardTitle className="mt-3 text-2xl sm:text-3xl">{viewModel.selectedDomainDefinition.label}</CardTitle>
                  <CardDescription className="mt-2 max-w-2xl text-base leading-7">
                    {viewModel.selectedDomainDefinition.description}
                  </CardDescription>
                </div>
                <div className="hidden rounded-2xl border border-white/10 bg-white/5 px-4 py-3 text-right lg:block">
                  <p className="text-xs uppercase tracking-[0.24em] text-slate-500">Updated</p>
                  <p className="mt-1 text-sm font-medium text-slate-100">{formatTimestamp(baseData.generatedAt)}</p>
                </div>
              </CardHeader>

              <CardBody className="pt-4">
                <div className="grid gap-3 sm:grid-cols-2 xl:grid-cols-4">
                  {insights.map((item) => (
                    <div key={item.label} className="rounded-2xl border border-white/10 bg-white/5 p-4">
                      <p className="text-xs uppercase tracking-[0.24em] text-slate-500">{item.label}</p>
                      <p className="mt-3 text-2xl font-semibold text-white">{item.value}</p>
                      <p className="mt-2 text-sm leading-6 text-slate-400">{item.note}</p>
                    </div>
                  ))}
                </div>
              </CardBody>
            </Card>

            <Card className="overflow-hidden">
              <CardHeader>
                <div>
                  <CardTitle>Operating snapshot</CardTitle>
                  <CardDescription>Context-aware cues based on the current role and time filter.</CardDescription>
                </div>
              </CardHeader>
              <CardBody className="space-y-4 pt-4">
                <div className="rounded-2xl border border-white/10 bg-gradient-to-br from-cyan-500/10 to-transparent p-4">
                  <p className="text-xs uppercase tracking-[0.24em] text-cyan-200/70">Role</p>
                  <p className="mt-2 text-lg font-semibold text-white">{role}</p>
                  <p className="mt-2 text-sm leading-6 text-slate-300">
                    {role === 'Owner'
                      ? 'Owner mode emphasizes margin, ROI, and forecast confidence.'
                      : 'Manager mode emphasizes throughput, staffing, and guest experience.'}
                  </p>
                </div>

                <div className="grid grid-cols-2 gap-3 text-sm">
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Window</p>
                    <p className="mt-2 font-medium text-slate-100">{viewModel.timeFilter}</p>
                  </div>
                  <div className="rounded-2xl border border-white/10 bg-white/5 p-4">
                    <p className="text-xs uppercase tracking-[0.22em] text-slate-500">Alerts</p>
                    <p className="mt-2 font-medium text-slate-100">{viewModel.alerts.length} active</p>
                  </div>
                </div>

                <Button variant="secondary" className="w-full justify-center" onClick={clearDismissedAlerts}>
                  Reset dismissed alerts
                </Button>
              </CardBody>
            </Card>
          </section>

          <section className="mt-6 grid gap-4 sm:grid-cols-2 xl:grid-cols-4">
            {viewModel.currentKpis.map((metric) => (
              <KpiCard key={metric.key} metric={metric} />
            ))}
          </section>

          <section className="mt-6 grid gap-4 xl:grid-cols-[1.6fr_0.9fr]">
            <div className="space-y-4">
              <RevenueLineChart data={viewModel.revenueTrend} />

              <div className="grid gap-4 lg:grid-cols-2">
                <BarTargetChart data={viewModel.dailyVsTarget} />
                <DonutChart data={viewModel.channelMix} />
              </div>

              <div className="grid gap-4 lg:grid-cols-2">
                <ScatterMenuChart data={viewModel.menuScatter} />
                <HeatmapChart data={viewModel.heatmap} />
              </div>
            </div>

            <div className="space-y-4 xl:sticky xl:top-[148px] xl:self-start">
              <AlertPanel
                alerts={viewModel.alerts}
                simulationEnabled={alertSimulationEnabled}
                onToggleSimulation={toggleAlertSimulation}
                onDismissAll={clearDismissedAlerts}
                onDismissAlert={dismissAlert}
              />

              <Card>
                <CardHeader>
                  <div>
                    <CardTitle>Why this view matters</CardTitle>
                    <CardDescription>Quick operational guidance for the selected domain.</CardDescription>
                  </div>
                </CardHeader>
                <CardBody className="space-y-3 pt-4 text-sm leading-6 text-slate-300">
                  {viewModel.selectedDomainDefinition.label === 'Revenue' ? (
                    <p>Focus on high-traffic periods and basket value. Small pricing changes can materially change the day.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'Operations' ? (
                    <p>Service-level drift usually shows up first in lunch and dinner peaks. Keep a close eye on wait time and table turnover.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'Orders & Menu' ? (
                    <p>Watch which items cluster in the high-margin/high-popularity quadrant and push those harder across channels.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'Staff' ? (
                    <p>Labor efficiency and shift fill rate should move together. If they diverge, scheduling is probably the issue.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'Customer' ? (
                    <p>Use complaint rate and NPS together. A rising complaint trend can quietly depress repeat visits before you see it in revenue.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'Inventory' ? (
                    <p>Low stockouts with high waste usually means replenishment is too aggressive. Tune order cadence before the weekend rush.</p>
                  ) : null}
                  {viewModel.selectedDomainDefinition.label === 'ROI' ? (
                    <p>Owner mode should prioritize payback and contribution margin. Campaigns with great ROAS but weak payback can still be wrong.</p>
                  ) : null}
                </CardBody>
              </Card>
            </div>
          </section>
        </main>
      </div>
    </div>
  );
}
