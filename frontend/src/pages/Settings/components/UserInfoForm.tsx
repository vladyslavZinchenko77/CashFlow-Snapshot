import { FC, useState } from 'react';
import { Form, Input } from 'antd';
import { useAppContext } from '../../../context/AppContext';

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

const UserInfoForm: FC = () => {
  const [isEditInfo, setIsEditInfo] = useState<boolean>(false);
  const { user, updateUserValue } = useAppContext();

  const saveUserInfo = (values: any) => {
    updateUserValue({
      ...user,
      name: values.firstName,
      lastName: values.lastName,
      phoneNumber: values.phoneNumber,
      country: values.country,
    });
  };

  return (
    <>
      <h2 className="dashboard-title">User info</h2>
      <Form
        layout="vertical"
        name="basic"
        labelCol={{ span: 24 }}
        wrapperCol={{ span: 24 }}
        style={{ width: 300, marginTop: 24 }}
        initialValues={{ remember: true }}
        onFinish={saveUserInfo}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="First Name" name="firstName">
          <Input
            defaultValue={user.name}
            value={user.name}
            disabled={!isEditInfo}
          />
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
              type="button"
              onClick={(values) => {
                saveUserInfo(values);
                setIsEditInfo(false);
              }}
            >
              Save
            </button>
          ) : (
            <button
              className="btn"
              type="button"
              onClick={() => setIsEditInfo(true)}
            >
              Edit
            </button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default UserInfoForm;
