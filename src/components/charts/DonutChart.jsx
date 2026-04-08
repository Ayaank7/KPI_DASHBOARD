import { memo } from 'react';
import { Cell, Legend, Pie, PieChart, ResponsiveContainer, Tooltip } from 'recharts';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const COLORS = ['#22d3ee', '#38bdf8', '#f59e0b', '#a78bfa'];

const tooltipStyle = {
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.18)',
  background: 'rgba(15, 23, 42, 0.95)',
  boxShadow: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
};

export function DonutChart({ data }) {
  const total = data.reduce((sum, item) => sum + item.value, 0);

  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Channel mix</CardTitle>
          <CardDescription>Revenue distribution by fulfillment channel.</CardDescription>
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="relative h-80 w-full">
          <ResponsiveContainer width="100%" height="100%">
            <PieChart>
              <Tooltip contentStyle={tooltipStyle} formatter={(value, name, entry) => [`${Math.round((value / total) * 100)}%`, entry.payload.name]} />
              <Pie data={data} innerRadius={68} outerRadius={110} paddingAngle={3} dataKey="value" stroke="rgba(15, 23, 42, 0.8)">
                {data.map((entry, index) => (
                  <Cell key={entry.name} fill={COLORS[index % COLORS.length]} />
                ))}
              </Pie>
              <Legend verticalAlign="bottom" iconType="circle" formatter={(value) => <span style={{ color: '#cbd5e1' }}>{value}</span>} />
            </PieChart>
          </ResponsiveContainer>

          <div className="pointer-events-none absolute inset-0 flex items-center justify-center">
            <div className="text-center">
              <p className="text-2xl font-semibold text-slate-50">{Math.round(total / 1000)}k</p>
              <p className="text-xs uppercase tracking-[0.24em] text-slate-400">Daily mix</p>
            </div>
          </div>
        </div>
      </CardBody>
    </Card>
  );
}
