import { FC } from 'react';
import { Input, Form } from 'antd';
import DefaultLayout from '../../components/common/DefaultLayout';

import './Home.scss';

const Home: FC = () => {
  let revenuesValue: number = 30000;
  let expensesValue: number = 5000;
  let balanceValue: number = 27000;

  return (
    <DefaultLayout
      title="home page"
      subtitle="Here you can see general information"
    >
      <div className="home">
        <Form layout="horizontal" className="home__form">
          <Form.Item className="home__form-item" label="Доходи">
            <Input readOnly value={revenuesValue} />
          </Form.Item>
          <Form.Item className="home__form-item" label="Росходи">
            <Input readOnly value={expensesValue} />
          </Form.Item>
          <Form.Item className="home__form-item" label="Баланс">
            <Input readOnly value={balanceValue} />
          </Form.Item>
        </Form>
      </div>
    </DefaultLayout>
  );
};

export default Home;
