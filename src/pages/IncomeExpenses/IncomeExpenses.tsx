import { FC, useState, useEffect } from 'react';
import { Form, Input, Flex, Select, Spin, Row, Col } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';

import MoneyStreamList from '../../components/common/MoneyStreamList';
import './IncomeExpenses.scss';

const incomesTypesselect = [
  'Заробітня плата',
  'Здача нерухомості',
  'Відсотки по депозиту',
  'Інше',
];
const expensesTypesselect = [
  'Продукти',
  'Комунальні платежі',
  'Заправка автомобіля',
  'Інше',
];

const IncomeExpenses: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const {
    incomesValue,
    expensesValue,
    balanceValue,
    updateIncomes,
    updateExpenses,
    updateExpensesValue,
    updateIncomesValue,
    updateBalanceValue,
  } = useAppContext();

  const [amountIncomes, setAmountIncomes] = useState<number>(0);
  const [amountExpenses, setAmountExpenses] = useState<number>(0);
  const [typeofIncomes, setTypeofIncomes] = useState<string | undefined>(
    'Заробітня плата'
  );
  const [typeofExpenses, setTypeofExpenses] = useState<string | undefined>(
    'Продукти'
  );

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const addIncomesHandle = () => {
    let newAmountRevenue = amountIncomes + incomesValue;
    let newAmountBalance = balanceValue + amountIncomes;
    updateIncomesValue(newAmountRevenue);
    updateBalanceValue(newAmountBalance);
    updateIncomes({
      title: 'incomes',
      amount: amountIncomes,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),

      type: typeofIncomes,
    });
  };

  const addExpensesHandle = () => {
    let newAmountExpenses = amountExpenses + expensesValue;
    let newAmountBalance = balanceValue - amountExpenses;
    updateExpensesValue(newAmountExpenses);
    updateBalanceValue(newAmountBalance);
    updateExpenses({
      title: 'expenses',
      amount: amountExpenses,
      date: new Date().toLocaleString('en-US', {
        year: 'numeric',
        month: '2-digit',
        day: '2-digit',
        hour: '2-digit',
        minute: '2-digit',
        second: '2-digit',
        hour12: false,
      }),

      type: typeofExpenses,
    });
  };

  return (
    <DefaultLayout
      title="Income and Expenses"
      subtitle="Money increase and decrease"
    >
      {isLoading ? (
        <div>
          <Form layout="vertical">
            <Row gutter={[16, 24]}>
              <Col>
                <h2>Incomes</h2>
                <Form.Item label={'Type of incomes'} style={{ marginTop: 8 }}>
                  <Select
                    defaultValue={typeofIncomes}
                    onChange={(value) => {
                      setTypeofIncomes(value);
                    }}
                  >
                    {incomesTypesselect.map((option, index) => {
                      return (
                        <Select.Option key={index} value={option}>
                          {option}
                        </Select.Option>
                      );
                    })}
                  </Select>
                </Form.Item>

                <Input
                  type="number"
                  step="0.01"
                  defaultValue={0}
                  className="dashboard__input"
                  onChange={(e) => {
                    setAmountIncomes(Number(e.target.value));
                  }}
                />

                <button
                  style={{ marginTop: 24 }}
                  className="btn"
                  onClick={() => {
                    addIncomesHandle();
                  }}
                >
                  add income
                </button>
              </Col>

              <Col>
                <Form.Item>
                  <h2>Expenses</h2>
                  <Form.Item
                    label={'Type of expenses'}
                    style={{ marginTop: 8 }}
                  >
                    <Select
                      defaultValue={typeofExpenses}
                      onChange={(value) => {
                        setTypeofExpenses(value);
                      }}
                    >
                      {expensesTypesselect.map((option, index) => {
                        return (
                          <Select.Option key={index} value={option}>
                            {option}
                          </Select.Option>
                        );
                      })}
                    </Select>
                  </Form.Item>

                  <Input
                    type="number"
                    step="0.01"
                    defaultValue={0}
                    className="dashboard__input"
                    onChange={(e) => {
                      setAmountExpenses(Number(e.target.value));
                    }}
                  />
                  <button
                    className="btn"
                    style={{ marginTop: 24 }}
                    onClick={() => addExpensesHandle()}
                  >
                    add expenses
                  </button>
                </Form.Item>
              </Col>
            </Row>
          </Form>
          <MoneyStreamList />
        </div>
      ) : (
        <Flex justify="center">
          <Spin size="large" />
        </Flex>
      )}
    </DefaultLayout>
  );
};

export default IncomeExpenses;
