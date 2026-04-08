import { memo } from 'react';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const dayOrder = ['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'];

function heatColor(value, max) {
  const intensity = max === 0 ? 0 : value / max;
  if (intensity > 0.82) return 'bg-cyan-400/95';
  if (intensity > 0.68) return 'bg-sky-400/90';
  if (intensity > 0.5) return 'bg-amber-400/85';
  if (intensity > 0.32) return 'bg-slate-500/70';
  return 'bg-slate-800/80';
}

export function HeatmapChart({ data }) {
  const maxValue = Math.max(...data.map((item) => item.value));

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Peak hour heatmap</CardTitle>
          <CardDescription>Revenue intensity by day and hour; empty slots stay visibly cool.</CardDescription>
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="space-y-4">
          <div className="grid grid-cols-[56px_repeat(24,minmax(0,1fr))] gap-1 text-[10px] uppercase tracking-[0.24em] text-slate-500">
            <div />
            {Array.from({ length: 24 }, (_, hour) => (
              <div key={hour} className="text-center">
                {String(hour).padStart(2, '0')}
              </div>
            ))}
          </div>

          <div className="space-y-1">
            {dayOrder.map((day) => {
              const dayCells = data.filter((cell) => cell.day === day);

              return (
                <div key={day} className="grid grid-cols-[56px_repeat(24,minmax(0,1fr))] gap-1">
                  <div className="flex h-8 items-center justify-start text-xs font-medium text-slate-400">{day}</div>
                  {dayCells.map((cell) => (
                    <div key={`${cell.day}-${cell.hour}`} title={`${cell.day} ${cell.hour} · ${cell.value}`} className={`h-8 rounded-lg border border-white/5 ${heatColor(cell.value, maxValue)} transition hover:-translate-y-0.5 hover:border-cyan-300/50 hover:shadow-lg`} />
                  ))}
                </div>
              );
            })}
          </div>

          <div className="flex items-center justify-between gap-4 text-xs text-slate-400">
            <span>Cool</span>
            <div className="flex flex-1 items-center gap-2">
              <div className="h-2 flex-1 rounded-full bg-gradient-to-r from-slate-800 via-amber-400/70 to-cyan-400" />
            </div>
            <span>Hot</span>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
