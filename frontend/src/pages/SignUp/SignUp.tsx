import { FC } from 'react';
import { Button, Form, Input } from 'antd';
import { Link } from 'react-router-dom';
import { HomeOutlined } from '@ant-design/icons';
import moneyImg from '../../assets/img/money.svg';

import './SignUp.scss';

const onFinish = (values: any) => {
  console.log('Success:', values);
};

const onFinishFailed = (errorInfo: any) => {
  console.log('Failed:', errorInfo);
};

type FieldType = {
  password?: string;
  confirmPassword?: string;
  email?: string;
  firstName?: string;
  lastName?: string;
  phoneNumber?: string;
  birthdate?: string;
  country?: string;
};

const SignUp: FC = () => {
  return (
    <div className="sign-up">
      <Link to="/" className="sign-up__back-home">
        <HomeOutlined style={{ paddingRight: 8 }} /> Home
      </Link>
      <div className="sign-up__left">
        <h2 className="sign-up__left-title">Sign Up</h2>
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
            label="Email"
            name="email"
            rules={[
              {
                required: true,
                type: 'email',
                message: 'Please input a valid email!',
              },
            ]}
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
            label="Confirm Password"
            name="confirmPassword"
            dependencies={['password']}
            hasFeedback
            rules={[
              {
                required: true,
                message: 'Please confirm your password!',
              },
              ({ getFieldValue }) => ({
                validator(_, value) {
                  if (!value || getFieldValue('password') === value) {
                    return Promise.resolve();
                  }
                  return Promise.reject(
                    new Error('The two passwords do not match!')
                  );
                },
              }),
            ]}
          >
            <Input.Password />
          </Form.Item>

          <Form.Item<FieldType> label="First Name" name="firstName">
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Last Name" name="lastName">
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Phone Number" name="phoneNumber">
            <Input />
          </Form.Item>

          <Form.Item<FieldType> label="Birthdate" name="birthdate">
            <Input type="date" />
          </Form.Item>

          <Form.Item<FieldType> label="Country" name="country">
            <Input />
          </Form.Item>

          <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
            <Button type="primary" htmlType="submit">
              Submit
            </Button>
          </Form.Item>
        </Form>
      </div>
      <div className="sign-up__right">
        <img className="sign-up__right-img" src={moneyImg} alt="moneyImg" />
      </div>
    </div>
  );
};

export default SignUp;
