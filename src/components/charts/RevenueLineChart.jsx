import { memo } from 'react';
import {
  CartesianGrid,
  Line,
  LineChart,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const tooltipStyle = {
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.18)',
  background: 'rgba(15, 23, 42, 0.95)',
  boxShadow: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
};

export const RevenueLineChart = memo(function RevenueLineChart({ data }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Revenue trend</CardTitle>
          <CardDescription>Daily actual revenue against target for the selected window.</CardDescription>
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="h-80 w-full">
          <ResponsiveContainer width="99%" height="100%">
            <LineChart data={data} margin={{ top: 10, right: 8, left: -18, bottom: 0 }}>
              <defs>
                <linearGradient id="revenueLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#22d3ee" stopOpacity={1} />
                  <stop offset="100%" stopColor="#0ea5e9" stopOpacity={0.2} />
                </linearGradient>
                <linearGradient id="targetLine" x1="0" y1="0" x2="0" y2="1">
                  <stop offset="0%" stopColor="#cbd5e1" stopOpacity={0.95} />
                  <stop offset="100%" stopColor="#64748b" stopOpacity={0.12} />
                </linearGradient>
              </defs>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.13)" strokeDasharray="4 4" vertical={false} />
              <XAxis dataKey="name" tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} minTickGap={18} />
              
              {/* MODIFIED: Fixed hardcoded $ to ₹ */}
              <YAxis tickLine={false} axisLine={false} tick={{ fill: '#94a3b8', fontSize: 12 }} width={72} tickFormatter={(value) => `₹${Math.round(value / 1000)}k`} />
              
              <Tooltip
                contentStyle={tooltipStyle}
                labelStyle={{ color: '#e2e8f0' }}
                // MODIFIED: Changed en-US to en-IN for Indian comma formatting
                formatter={(value, name) => [new Intl.NumberFormat('en-IN', { maximumFractionDigits: 0 }).format(value), name === 'revenue' ? 'Revenue' : 'Target']}
              />
              
              {/* MODIFIED: Added isAnimationActive={false} to prevent animation lag on live updates */}
              <Line type="monotone" dataKey="revenue" stroke="url(#revenueLine)" strokeWidth={3.2} dot={false} activeDot={{ r: 5 }} isAnimationActive={false} />
              <Line type="monotone" dataKey="target" stroke="url(#targetLine)" strokeWidth={2.2} strokeDasharray="6 6" dot={false} isAnimationActive={false} />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
});