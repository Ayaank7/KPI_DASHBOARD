import { memo } from 'react';
import { Bar, BarChart, CartesianGrid, ResponsiveContainer, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const tooltipStyle = {
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.18)',
  background: 'rgba(15, 23, 42, 0.95)',
  boxShadow: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
};

export function BarTargetChart({ data }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Daily vs target</CardTitle>
          <CardDescription>Spot variance to plan across the selected time filter.</CardDescription>
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="h-80 w-full">
          <ResponsiveContainer width="99%" height="100%">
            <BarChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.13)" strokeDasharray="4 4" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} minTickGap={20} />
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} width={72} tickFormatter={(value) => `$${Math.round(value / 1000)}k`} />
              <Tooltip contentStyle={tooltipStyle} labelStyle={{ color: '#e2e8f0' }} formatter={(value, name) => [new Intl.NumberFormat('en-US', { maximumFractionDigits: 0 }).format(value), name === 'revenue' ? 'Revenue' : 'Target']} />
              <Bar dataKey="target" radius={[12, 12, 4, 4]} fill="rgba(148, 163, 184, 0.35)" />
              <Bar dataKey="revenue" radius={[12, 12, 4, 4]} fill="#22d3ee" />
            </BarChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
}
