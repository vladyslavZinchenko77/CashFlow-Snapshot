import { FC } from 'react';
import DefaultLayout from '../../components/common/DefaultLayout';

import './IncomeExpenses.scss';

const IncomeExpenses: FC = () => {
  return (
    <div>
      <DefaultLayout
        title="Income and Expenses"
        subtitle="Money increase and decrease"
      >
        <div></div>
      </DefaultLayout>
    </div>
  );
};

export default IncomeExpenses;
