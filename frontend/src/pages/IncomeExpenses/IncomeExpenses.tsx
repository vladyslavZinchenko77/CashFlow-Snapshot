import { FC, useState, useEffect } from 'react';
import { Form, Input, Flex, Select, Spin, Row, Col } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';
import { CreditCardOutlined } from '@ant-design/icons';
import IncomesList from './components/IncomesList';
import ExpensesList from './components/ExpensesList';
import './IncomeExpenses.scss';

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
  const [addIncomes, setAddIncomes] = useState<boolean>(false);
  const [addExpenses, setAddExpenses] = useState<boolean>(false);
  const [amountIncomes, setAmountIncomes] = useState<
    number | undefined | string
  >();
  const [amountExpenses, setAmountExpenses] = useState<
    number | undefined | string
  >();
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
    const numericAmountIncomes =
      typeof amountIncomes === 'string'
        ? parseFloat(amountIncomes)
        : typeof amountIncomes === 'number'
        ? amountIncomes
        : 0; // По умолчанию установим 0, если amountRavenue не является строкой или числом
    if (!isNaN(numericAmountIncomes)) {
      // Проверка на NaN
      let newAmountRevenue = numericAmountIncomes + incomesValue;
      let newAmountBalance = balanceValue + numericAmountIncomes;
      updateIncomesValue(newAmountRevenue);
      updateBalanceValue(newAmountBalance);
      updateIncomes({
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
    }
    setAddIncomes(false);
  };

  const addExpensesHandle = () => {
    const numericAmountExpenses =
      typeof amountExpenses === 'string'
        ? parseFloat(amountExpenses)
        : typeof amountExpenses === 'number'
        ? amountExpenses
        : 0; // По умолчанию установим 0, если amountRavenue не является строкой или числом
    if (!isNaN(numericAmountExpenses)) {
      // Проверка на NaN
      let newAmountExpenses = numericAmountExpenses + expensesValue;
      let newAmountBalance = balanceValue - numericAmountExpenses;
      updateExpensesValue(newAmountExpenses);
      updateBalanceValue(newAmountBalance);
      updateExpenses({
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
    }
    setAddExpenses(false);
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
                    <Select.Option value="Заробітня плата">
                      <CreditCardOutlined /> Заробітня плата
                    </Select.Option>
                    <Select.Option value="Здача нерухомості">
                      Здача нерухомості
                    </Select.Option>
                    <Select.Option value="Відсотки по депозиту">
                      Відсотки по депозиту
                    </Select.Option>
                    <Select.Option value="Інше">Інше</Select.Option>
                  </Select>
                </Form.Item>

                <Input
                  defaultValue={0}
                  className="dashboard__input"
                  onChange={(e) => {
                    setAmountIncomes(e.target.value);
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
                      <Select.Option value="Продукти">Продукти</Select.Option>
                      <Select.Option value="Комунальні платежі">
                        Комунальні платежі
                      </Select.Option>
                      <Select.Option value="Заправка автомобіля">
                        Заправка автомобіля
                      </Select.Option>
                      <Select.Option value="Інше">Інше</Select.Option>
                    </Select>
                  </Form.Item>

                  <Input
                    defaultValue={0}
                    className="dashboard__input"
                    onChange={(e) => {
                      setAmountExpenses(e.target.value);
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
          <IncomesList />
          <ExpensesList />
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
