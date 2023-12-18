import { FC, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { Button, Checkbox, Form, Input } from 'antd';
import moneyImg from '../../assets/img/money.svg';

import './LogIn.scss';

type FieldType = {
  username?: string;
  password?: string;
  remember?: string;
};

const LogIn: FC = () => {
  const navigate = useNavigate();
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [remember, setRemember] = useState(false);

  const onFinish = (values: any) => {
    console.log('Success:', values);

    if (
      values.username === 'test@gmail.com' &&
      values.password === '10vivelo'
    ) {
      navigate('/dashboard');
    }
    if (
      values.remember === true &&
      values.username === 'test@gmail.com' &&
      values.password === '10vivelo'
    ) {
      localStorage.setItem('login', values.username);
    }
  };

  const onFinishFailed = (errorInfo: any) => {
    console.log('Failed:', errorInfo);
  };

  return (
    <div className="log-in">
      <div className="log-in__left">
        <h2 className="log-in__left-title">Log In</h2>
        <Form
          layout="vertical"
          name="basic"
          labelCol={{ span: 24 }}
          wrapperCol={{ span: 24 }}
          style={{ width: 300, marginTop: 24 }}
          initialValues={{ remember: true }}
          onFinish={onFinish}
          onFinishFailed={onFinishFailed}
          autoComplete="off"
        >
          <Form.Item<FieldType>
            label="Username"
            name="username"
            rules={[{ required: true, message: 'Please input your username!' }]}
          >
            <Input />
          </Form.Item>

          <Form.Item<FieldType>
            label="Password"
            name="password"
            rules={[{ required: true, message: 'Please input your password!' }]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType>
            name="remember"
            valuePropName="checked"
            wrapperCol={{ offset: 0, span: 16 }}
          >
            <Checkbox>Remember me</Checkbox>
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="log-in__right">
        <img className="log-in__right-img" src={moneyImg} alt="moneyImg" />
      </div>
    </div>
  );
};

export default LogIn;
