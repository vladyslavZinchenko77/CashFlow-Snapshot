import { FC, useEffect, useRef } from 'react';
import Chart, { ChartConfiguration } from 'chart.js/auto';

interface SimpleChartProps {
  data1: number[];
  data2: number[];
  labels: string[];
  width?: number;
  height?: number;
}

const SimpleChart: FC<SimpleChartProps> = ({ data1, data2, labels }) => {
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
          type: 'line',
          data: {
            labels,
            datasets: [
              {
                label: 'Incomes',
                data: data1,
                fill: false,
                borderColor: 'rgba(0, 255, 0, 1)',
                borderWidth: 2,
              },
              {
                label: 'Expenses',
                data: data2,
                fill: false,
                borderColor: 'rgba(255, 0, 0, 1)',
                borderWidth: 2,
              },
            ],
          },
        } as ChartConfiguration);
      }
    }

    return () => {
      if (chartInstance.current) {
        chartInstance.current.destroy();
      }
    };
  }, [data1, data2, labels]);

  return (
    <div style={{ width: '600px', margin: 'auto' }}>
      <canvas
        ref={chartRef}
        style={{ width: '100%', height: 'auto', maxHeight: 300 }}
      />
    </div>
  );
};

export default SimpleChart;
