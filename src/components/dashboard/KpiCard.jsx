import { memo } from 'react';
import { Badge } from '../ui/Badge';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';
import { AlertTriangleIcon, ArrowDownIcon, ArrowUpIcon, SparkIcon } from '../ui/Icons';
import { SparklineChart } from '../charts/SparklineChart';

function trendClass(isFavorable) {
  return isFavorable 
    ? 'text-emerald-300 bg-emerald-500/10 border-emerald-400/20' 
    : 'text-rose-300 bg-rose-500/10 border-rose-400/20';
}

export const KpiCard = memo(function KpiCard({ metric }) {
  const sparklineData = metric.sparkline.map((value, index) => ({ value, index }));
  
  const isFavorable = metric.trendDirection === metric.direction;

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div className="min-w-0">
          <CardTitle className="flex items-center gap-2 text-sm font-medium text-slate-300">
            <SparkIcon className="h-4 w-4 text-cyan-300" />
            {metric.label}
          </CardTitle>
          <CardDescription>{metric.domain}</CardDescription>
        </div>

        <Badge tone={metric.alertBreached ? 'high' : 'success'} className={trendClass(isFavorable)}>
          <span className="inline-flex items-center gap-1.5">
            {metric.trendDirection === 'up' ? <ArrowUpIcon className="h-3.5 w-3.5" /> : <ArrowDownIcon className="h-3.5 w-3.5" />}
            {metric.trendLabel}
          </span>
        </Badge>
      </CardHeader>

      <CardBody className="grid gap-4 pt-4 sm:grid-cols-[minmax(0,1fr)_120px] sm:items-end">
        <div>
          <p className="text-3xl font-semibold tracking-tight text-slate-50">{metric.formattedValue}</p>
          <div className="mt-3 flex flex-wrap items-center gap-2 text-xs">
            <Badge tone={metric.alertBreached ? 'high' : 'success'}>{metric.benchmarkLabel}</Badge>
            {metric.alertBreached && (
              <span className="inline-flex items-center gap-1 rounded-full border border-rose-400/20 bg-rose-500/10 px-2.5 py-1 text-rose-100">
                <AlertTriangleIcon className="h-3.5 w-3.5" />
                Threshold breached
              </span>
            )}
          </div>
        </div>

        <div className="h-14 rounded-2xl border border-white/5 bg-white/5 p-2">
          <SparklineChart data={sparklineData} />
        </div>
      </CardBody>
    </Card>
  );
});