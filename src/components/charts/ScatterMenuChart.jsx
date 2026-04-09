import { memo } from 'react';
import { CartesianGrid, Label, ReferenceLine, ResponsiveContainer, Scatter, ScatterChart, Tooltip, XAxis, YAxis } from 'recharts';
import { Card, CardBody, CardDescription, CardHeader, CardTitle } from '../ui/Card';

const tooltipStyle = {
  borderRadius: '16px',
  border: '1px solid rgba(148, 163, 184, 0.18)',
  background: 'rgba(15, 23, 42, 0.95)',
  boxShadow: '0 20px 45px -20px rgba(15, 23, 42, 0.45)',
};

export const ScatterMenuChart = memo(function ScatterMenuChart({ data }) {
  return (
    <Card className="overflow-hidden">
      <CardHeader>
        <div>
          <CardTitle>Menu engineering quadrant</CardTitle>
          <CardDescription>Popularity vs margin to separate stars from underperformers.</CardDescription>
        </div>
      </CardHeader>
      <CardBody className="pt-4">
        <div className="h-80 w-full">
          <ResponsiveContainer width="99%" height="100%">
            <ScatterChart margin={{ top: 20, right: 10, bottom: 10, left: 0 }}>
              <CartesianGrid stroke="rgba(148, 163, 184, 0.13)" strokeDasharray="4 4" />
              <XAxis dataKey="x" type="number" domain={[30, 100]} tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} name="Popularity">
                <Label value="Popularity" offset={-2} position="insideBottom" fill="#94a3b8" />
              </XAxis>
              <YAxis dataKey="y" type="number" domain={[35, 100]} tick={{ fill: '#94a3b8', fontSize: 12 }} tickLine={false} axisLine={false} name="Margin">
                <Label value="Margin" angle={-90} position="insideLeft" fill="#94a3b8" />
              </YAxis>
              <ReferenceLine x={65} stroke="rgba(148, 163, 184, 0.35)" strokeDasharray="5 5" />
              <ReferenceLine y={65} stroke="rgba(148, 163, 184, 0.35)" strokeDasharray="5 5" />
              <Tooltip contentStyle={tooltipStyle} formatter={(value, name) => [value, name === 'x' ? 'Popularity' : 'Margin']} />
              
              <Scatter data={data} fill="#22d3ee" shape="circle" isAnimationActive={false} />
            </ScatterChart>
          </ResponsiveContainer>
        </div>
      </CardBody>
    </Card>
  );
});