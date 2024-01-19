import { FC, useEffect, useState } from 'react';
import { Spin, Flex, Form, Input } from 'antd';
import { useAppContext } from '../../context/AppContext';
import DefaultLayout from '../../components/common/DefaultLayout';

const Settings: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  const [isEditSettings, setEditSettings] = useState<boolean>(false);
  const [isEditInfo, setEditInfo] = useState<boolean>(false);
  const { user, updateUserValue } = useAppContext();

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  const onFinish = (values: any) => {
    console.log('Success:', values);
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

  return (
    <>
      <DefaultLayout
        title="Goals and budget"
        subtitle="Here you can make settigs your ptofile"
      >
        {isLoading ? (
          <div>
            <Form layout="vertical">
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
                <Input defaultValue={user.email} disabled={!isEditSettings} />
              </Form.Item>
              <Form.Item<FieldType>
                label="Password"
                name="password"
                rules={[
                  { required: true, message: 'Please input your password!' },
                ]}
              >
                <Input.Password
                  disabled={!isEditSettings}
                  defaultValue={user.password}
                  value={user.password}
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

              {isEditSettings ? (
                <button
                  className="btn"
                  type="submit"
                  onClick={() => setEditSettings(false)}
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
            </Form>
            <h2 className="dashboard-title">User info</h2>
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
              <Form.Item<FieldType> label="First Name" name="firstName">
                <Input defaultValue={user.name} disabled={!isEditInfo} />
              </Form.Item>

              <Form.Item<FieldType> label="Last Name" name="lastName">
                <Input defaultValue={user.lastName} disabled={!isEditInfo} />
              </Form.Item>

              <Form.Item<FieldType> label="Phone Number" name="phoneNumber">
                <Input defaultValue={user.phoneNumber} disabled={!isEditInfo} />
              </Form.Item>

              <Form.Item<FieldType> label="Birthdate" name="birthdate">
                <Input type="date" disabled={!isEditInfo} />
              </Form.Item>

              <Form.Item<FieldType> label="Country" name="country">
                <Input defaultValue={user.country} disabled={!isEditInfo} />
              </Form.Item>

              <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
                {isEditInfo ? (
                  <button
                    className="btn"
                    type="submit"
                    onClick={() => setEditInfo(false)}
                  >
                    Save
                  </button>
                ) : (
                  <button
                    className="btn"
                    type="button"
                    onClick={() => setEditInfo(true)}
                  >
                    Edit
                  </button>
                )}
              </Form.Item>
            </Form>
          </div>
        ) : (
          <Flex justify="center">
            <Spin size="large" />
          </Flex>
        )}
      </DefaultLayout>
    </>
  );
};

export default Settings;
