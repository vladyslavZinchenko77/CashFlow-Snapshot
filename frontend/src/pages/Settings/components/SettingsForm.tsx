import { FC, useState } from 'react';
import { useAppContext } from '../../../context/AppContext';
import { Form, Input, Flex } from 'antd';

const SettingsForm: FC = () => {
  const { user, updateUserValue } = useAppContext();
  const [email, setEmail] = useState<string>(user.email);
  const [password, setPassword] = useState<string>(user.password);
  const [confirmPassword, setConfirmPassword] = useState<string>(user.password);
  const [edit, setEdit] = useState<boolean>(false);

  const onSubmittForm = () => {
    updateUserValue({
      ...user,
      email: email,
      password: password,
    });
  };

  return (
    <>
      <h2 className="dashboard-title">Profile settings</h2>
      <Form layout="vertical" onFinish={onSubmittForm}>
        <Form.Item label={'Email:'}>
          <Input
            disabled={!edit}
            defaultValue={user.email}
            type="email"
            name="email"
            onChange={(e) => {
              setEmail(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label={'Password'}>
          <Input
            disabled={!edit}
            defaultValue={user.password}
            type="password"
            name="password"
            onChange={(e) => {
              setPassword(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item label={'Confirm password'}>
          <Input
            disabled={!edit}
            defaultValue={user.password}
            type="password"
            name="confirmPassword"
            onChange={(e) => {
              setConfirmPassword(e.target.value);
            }}
          />
        </Form.Item>
        <Form.Item>
          <Flex justify="center">
            {edit ? (
              <button
                className="btn"
                type="button"
                onClick={() => {
                  onSubmittForm();
                  setEdit(false);
                }}
              >
                Save
              </button>
            ) : (
              <button
                className="btn"
                type="button"
                onClick={() => setEdit(true)}
              >
                Edit
              </button>
            )}
          </Flex>
        </Form.Item>
      </Form>
    </>
  );
};

export default SettingsForm;
