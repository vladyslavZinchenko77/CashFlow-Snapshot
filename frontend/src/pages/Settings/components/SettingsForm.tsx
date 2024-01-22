import { FC, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';

import { Form, Input } from 'antd';

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

const SettingsForm: FC = () => {
  const { user, updateUserValue } = useAppContext();
  const [email, setEmail] = useState(user.email);
  const [isEditSettings, setEditSettings] = useState<boolean>(false);

  const saveSettings = (values: any) => {
    updateUserValue({
      ...user,
      email: values.email,
      password:
        values.password === values.confirmPassword && '' ? values.password : '',
      name: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      country: values.country,
    });
    console.log(values);
  };

  return (
    <Form layout="vertical" onFinish={saveSettings}>
      <h2 className="dashboard-title">Profile settings</h2>
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
        <Input defaultValue={email} disabled={!isEditSettings} />
      </Form.Item>
      <Form.Item<FieldType>
        label="Password"
        name="password"
        rules={[{ required: true, message: 'Please input your password!' }]}
      >
        <Input.Password
          disabled={!isEditSettings}
          defaultValue={user.password}
        />
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
        <Input.Password
          disabled={!isEditSettings}
          defaultValue={user.password}
        />
      </Form.Item>
      <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
        {isEditSettings ? (
          <button
            className="btn"
            type="submit"
            onClick={(values) => {
              saveSettings(values), setEditSettings(false);
            }}
          >
            Save
          </button>
        ) : (
          <button
            className="btn"
            type="button"
            onClick={() => setEditSettings(true)}
          >
            Edit
          </button>
        )}
      </Form.Item>
    </Form>
  );
};

export default SettingsForm;
