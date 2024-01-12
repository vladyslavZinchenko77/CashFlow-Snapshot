import { FC } from 'react';
import { Input, Form } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';

import './General.scss';

const General: FC = () => {
  const { incomesValue, expensesValue } = useAppContext();

  let balanceValue: number = 27000;

  return (
    <DefaultLayout
      title="general page"
      subtitle="Here you can see general information"
    >
      <div className="home">
        <Form layout="horizontal" className="home__form">
          <Form.Item className="home__form-item" label="Incomes">
            <Input className="dashboard__input" readOnly value={incomesValue} />
          </Form.Item>
          <Form.Item className="home__form-item" label="Expenses">
            <Input
              className="dashboard__input"
              readOnly
              value={expensesValue}
            />
          </Form.Item>
          <Form.Item className="home__form-item" label="Balance">
            <Input className="dashboard__input" readOnly value={balanceValue} />
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default General;
