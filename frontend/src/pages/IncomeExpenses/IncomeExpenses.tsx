import { FC, useState } from 'react';
import { Form, Input, Flex, Select } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';

import './IncomeExpenses.scss';

const IncomeExpenses: FC = () => {
  const {
    incomesValue,
    expensesValue,
    updateExpensesValue,
    updateIncomesValue,
  } = useAppContext();
  const [addIncomes, setAddIncomes] = useState<boolean>(false);
  const [addExpenses, setAddExpenses] = useState<boolean>(false);
  const [amountRavenue, setAmountRavenue] = useState<
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

  const addIncomesHandle = () => {
    const numericAmountRavenue =
      typeof amountRavenue === 'string'
        ? parseFloat(amountRavenue)
        : typeof amountRavenue === 'number'
        ? amountRavenue
        : 0; // По умолчанию установим 0, если amountRavenue не является строкой или числом
    if (!isNaN(numericAmountRavenue)) {
      // Проверка на NaN
      let newAmountRevenue = numericAmountRavenue + incomesValue;
      updateIncomesValue(newAmountRevenue);
    }
    setAddIncomes(false);
  };

  const addExpensesHandle = () => {
    const numericAmountExpenses =
      typeof amountExpenses === 'string'
        ? parseFloat(amountExpenses)
        : typeof amountRavenue === 'number'
        ? amountRavenue
        : 0; // По умолчанию установим 0, если amountRavenue не является строкой или числом
    if (!isNaN(numericAmountExpenses)) {
      // Проверка на NaN
      let newAmountExpenses = numericAmountExpenses + expensesValue;
      updateExpensesValue(newAmountExpenses);
    }
    setAddExpenses(false);
  };

  return (
    <div>
      <DefaultLayout
        title="Income and Expenses"
        subtitle="Money increase and decrease"
      >
        <div>
          <Form>
            <Form.Item label={'Доходи'}>
              <Input name="ravenue" readOnly value={incomesValue} />
            </Form.Item>
            <Form.Item label={'Росходи'}>
              <Input name="ravenue" readOnly value={expensesValue} />
            </Form.Item>
            {addIncomes && (
              <Form.Item>
                <h2>Incomes</h2>
                <Form.Item label={'Type of incomes'} style={{ marginTop: 24 }}>
                  <Select
                    defaultValue={typeofIncomes}
                    onChange={(value) => {
                      setTypeofIncomes(value);
                    }}
                  >
                    <Select.Option value="Заробітня плата">
                      Заробітня плата
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
                <Flex>
                  <Input
                    onChange={(e) => {
                      setAmountRavenue(e.target.value);
                    }}
                  />
                  <button
                    className="btn"
                    onClick={() => {
                      addIncomesHandle();
                    }}
                  >
                    add income
                  </button>
                </Flex>
              </Form.Item>
            )}
            {addExpenses && (
              <Form.Item>
                <h2>Expenses</h2>
                <Form.Item label={'Type of expenses'} style={{ marginTop: 24 }}>
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
                <Flex>
                  <Input
                    onChange={(e) => {
                      setAmountExpenses(e.target.value);
                    }}
                  />
                  <button className="btn" onClick={() => addExpensesHandle()}>
                    add expenses
                  </button>
                </Flex>
              </Form.Item>
            )}
            <button
              className="btn"
              type="button"
              onClick={() => {
                setAddIncomes(true);
              }}
            >
              Додати доходи
            </button>
            <button
              className="btn"
              type="button"
              onClick={() => {
                setAddExpenses(true);
              }}
            >
              Додати витрати
            </button>
          </Form>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default IncomeExpenses;
