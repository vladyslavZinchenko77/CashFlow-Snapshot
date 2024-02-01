import { FC, useState, useEffect } from 'react';
import { Spin, Flex } from 'antd';
import DefaultLayout from '../../components/common/DefaultLayout';
import { useAppContext } from '../../context/AppContext';

import ChartPie from '../../components/common/Chart/ChartPie';

import './Statistics.scss';

const Statistics: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  const { incomes, expenses } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const expenseAmounts = expenses.map((expense) => Number(expense.amount));
  const totalExpenses = expenseAmounts.reduce((acc, item) => {
    return acc + item;
  }, 0);
  const incomesAmounts = incomes.map((income) => Number(income.amount));
  const totalIncomes = incomesAmounts.reduce((acc, income) => {
    return acc + income;
  }, 0);

  return (
    <DefaultLayout title="Statistics">
      {isLoading ? (
        <ChartPie expenses={totalExpenses} incomes={totalIncomes} />
      ) : (
        <Flex justify="center">
          <Spin size="large" />
        </Flex>
      )}
    </DefaultLayout>
  );
};

export default Statistics;
