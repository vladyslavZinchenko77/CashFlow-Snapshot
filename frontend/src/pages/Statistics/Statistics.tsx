import { FC } from 'react';
import DefaultLayout from '../../components/common/DefaultLayout';
import SimpleChart from '../../components/common/Chart/Chart';

import './Statistics.scss';

const Statistics: FC = () => {
  const chartData1 = [10, 20, 30, 40, 50, 84, 22, 48, 58, 67, 35, 8];
  const chartData2 = [15, 25, 12, 54, 5, 68, 27, 67, 38, 46, 38, 58];
  const chartLabels = [
    'January',
    'February',
    'March',
    'April',
    'May',
    'June',
    'July',
    'August',
    'September',
    'October',
    'November',
    'December',
  ];

  return (
    <DefaultLayout title="Statistics">
      <SimpleChart data1={chartData1} data2={chartData2} labels={chartLabels} />
    </DefaultLayout>
  );
};

export default Statistics;
