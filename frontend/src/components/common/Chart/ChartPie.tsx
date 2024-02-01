import { FC, useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface SimpleChartProps {
  incomes: number;
  expenses: number;
}

const ChartPie: FC<SimpleChartProps> = ({ incomes, expenses }) => {
  const chartRef = useRef<HTMLCanvasElement | null>(null);
  const chartInstance = useRef<Chart | null>(null);

  useEffect(() => {
    if (chartRef.current) {
      const ctx = chartRef.current.getContext('2d');
      if (ctx) {
        if (chartInstance.current) {
          chartInstance.current.destroy();
        }

        chartInstance.current = new Chart(ctx, {
          type: 'pie',
          data: {
            datasets: [
              {
                data: [incomes, expenses],
                backgroundColor: [
                  'rgba(0, 255, 0, 0.5)',
                  'rgba(255, 0, 0, 0.5)',
                ],
              },
            ],
            labels: ['Incomes', 'Expenses'],
          },
        } as ChartConfiguration);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [incomes, expenses]);

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <canvas
        ref={chartRef}
        style={{ width: '100%', height: 'auto', maxHeight: 300 }}
      />
    </div>
  );
};

export default ChartPie;
