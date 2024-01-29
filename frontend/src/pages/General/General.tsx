import { FC } from 'react';
import { Input, Form } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';
import MoneyStreamList from '../../components/common/MoneyStreamList';

import './General.scss';

const General: FC = () => {
  const { incomesValue, expensesValue, balanceValue, user } = useAppContext();

  let hiUserText =
    user.name && user.lastName
      ? '👋 Hi , ' + user.name + ' ' + user.lastName + '!'
      : '👋 Hi , ' + user.email + '!';

  return (
    <DefaultLayout
      title="general page"
      subtitle="Here you can see general information"
    >
      <div className="home">
        <h2 className="dashboard-title" style={{ textAlign: 'left' }}>
          {hiUserText}
        </h2>
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
        <MoneyStreamList />
      </div>
    </DefaultLayout>
  );
};

export default General;
