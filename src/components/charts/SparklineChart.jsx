import { memo } from 'react';
import { Line, LineChart, ResponsiveContainer, Tooltip } from 'recharts';

export const SparklineChart = memo(function SparklineChart({ data, stroke = '#22d3ee' }) {
  return (
    <ResponsiveContainer width="100%" height="100%">
      <LineChart data={data}>
        <Tooltip
          cursor={false}
          contentStyle={{
            borderRadius: '14px',
            border: '1px solid rgba(148, 163, 184, 0.18)',
            background: 'rgba(15, 23, 42, 0.92)',
            boxShadow: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
          }}
          formatter={(value) => [value, 'Value']}
        />
        <Line type="monotone" dataKey="value" stroke={stroke} strokeWidth={2.4} dot={false} />
      </LineChart>
    </ResponsiveContainer>
  );
});
