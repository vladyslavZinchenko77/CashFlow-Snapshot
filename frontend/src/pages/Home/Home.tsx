import { FC } from 'react';
import { Input, Form } from 'antd';
import DefaultLayout from '../../components/common/DefaultLayout';

import './Home.scss';

const Home: FC = () => {
  let revenuesValue: number = 30000;
  let expensesValue: number = 5000;
  let balanceValue: number = 27000;

  return (
    <DefaultLayout title="home page">
      <div className="home">
        <Form layout="horizontal" className="home__form">
          <Form.Item className="home__form-item" label="Доходи">
            <Input value={revenuesValue} />
          </Form.Item>
          <Form.Item className="home__form-item" label="Росходи">
            <Input value={expensesValue} />
          </Form.Item>
          <Form.Item className="home__form-item" label="Баланс">
            <Input value={balanceValue} />
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Home;
