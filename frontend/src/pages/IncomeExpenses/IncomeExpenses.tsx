import { FC, useState } from 'react';
import { Form, Input, Flex } from 'antd';
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
  const [addRavenue, setAddRavenue] = useState<boolean>(false);
  const [addExpenses, setAddExpenses] = useState<boolean>(false);
  const [amountRavenue, setAmountRavenue] = useState<
    number | undefined | string
  >();
  const [amountExpenses, setAmountExpenses] = useState<
    number | undefined | string
  >();

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
    setAddRavenue(false);
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
      let newAmountExpenses = numericAmountExpenses + incomesValue;
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
            {addRavenue && (
              <Form.Item>
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
                    add ravenue
                  </button>
                </Flex>
              </Form.Item>
            )}
            {addExpenses && (
              <Form.Item>
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
                setAddRavenue(true);
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
              Додати росходи
            </button>
          </Form>
        </div>
      </DefaultLayout>
    </div>
  );
};

export default IncomeExpenses;
