import { FC } from 'react';
import DefaultLayout from '../../components/common/DefaultLayout';

import './IncomeExpenses.scss';

const IncomeExpenses: FC = () => {
  return (
    <div>
      <DefaultLayout title="Income and Expenses">
        Money increase and decrease
      </DefaultLayout>
    </div>
  );
};

export default IncomeExpenses;
