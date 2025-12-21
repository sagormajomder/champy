import { useQuery } from '@tanstack/react-query';
import { useAuth } from '../../../contexts/AuthContext';
import { useAxiosSecure } from '../../../hooks/useAxiosSecure';

import { useEffect, useState } from 'react';
import {
  Cell,
  Label,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
} from 'recharts';

export default function WinningChart() {
  const { user } = useAuth();
  const axiosSecure = useAxiosSecure();

  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    if (typeof window === 'undefined') return;
    const mq = window.matchMedia('(max-width: 640px)');

    const handleChange = e => setIsMobile(e.matches);
    handleChange(mq); // set initial
    mq.addEventListener('change', handleChange);

    return () => mq.removeEventListener('change', handleChange);
  }, []);

  const { data = [] } = useQuery({
    queryKey: ['contest-winning-stats', user?.email],
    queryFn: async () => {
      const res = await axiosSecure.get(
        `/participates/contest/winning/stats/${user?.email}`
      );

      return res.data;
    },
  });

  // console.log(data);

  const participate = data[0]?.totalContestParticipate ?? 0;
  const won = data[0]?.totalContestWon ?? 0;

  const chartData = [
    { name: 'Won', value: won },
    { name: 'Lost', value: Math.max(0, participate - won) },
  ];

  const COLORS = ['#3b82f6', '#94a3b8'];

  const chartHeight = isMobile ? 260 : 420;
  const innerRadius = isMobile ? 70 : 120;
  const outerRadius = isMobile ? 100 : 160;
  const winRate = participate > 0 ? ((won / participate) * 100).toFixed(0) : 0;

  return (
    <section className='basis-1/2 space-y-5 md:basis-[50%]'>
      <div style={{ width: '100%', height: chartHeight, textAlign: 'center' }}>
        <h3>Win Rate: {winRate}%</h3>
        <ResponsiveContainer>
          <PieChart>
            <Pie
              data={chartData}
              cx='50%'
              cy='50%'
              innerRadius={innerRadius}
              outerRadius={outerRadius}
              paddingAngle={5}
              dataKey='value'>
              {chartData.map((entry, index) => (
                <Cell
                  key={`cell-${index}`}
                  fill={COLORS[index % COLORS.length]}
                />
              ))}
              <Label
                value={`Participated: ${participate}`}
                position='center'
                fill='#0f172a'
                style={{ fontSize: isMobile ? 12 : 14, fontWeight: 600 }}
              />
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      </div>
    </section>
  );
}
