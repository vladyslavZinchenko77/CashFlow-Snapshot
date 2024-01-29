import { FC } from 'react';
// import IncomesList from '../IncomesList';
// import ExpensesList from '../ExpensesList';
import { useAppContext } from '../../../context/AppContext';

const MoneyStreamList: FC = () => {
  const { incomes, expenses } = useAppContext();

  let moneyStream = [...incomes, ...expenses];

  console.log(moneyStream);

  return (
    <div>
      MoneyStreamList
      <div></div>
    </div>
  );
};

export default MoneyStreamList;
