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
  const { user, updateUserValue } = useAppContext();
  const [edit, setEdit] = useState<boolean>(false);
  const [name, setName] = useState<string>(user.name);
  const [lastName, setLastName] = useState<string>(user.lastName);
  const [phoneNumber, setPhoneNumber] = useState<number | string>(
    user.phoneNumber
  );
  const [country, setCountry] = useState<string>(user.country);

  const saveUserInfo = () => {
    updateUserValue({
      ...user,
      name: name,
      lastName: lastName,
      phoneNumber: phoneNumber,
      country: country,
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
        onFinish={saveUserInfo}
        autoComplete="off"
      >
        <Form.Item<FieldType> label="First Name" name="firstName">
          <Input
            defaultValue={user.name}
            disabled={!edit}
            onChange={(e) => {
              setName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Last Name" name="lastName">
          <Input
            defaultValue={user.lastName}
            disabled={!edit}
            onChange={(e) => {
              setLastName(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Phone Number" name="phoneNumber">
          <Input
            defaultValue={user.phoneNumber}
            disabled={!edit}
            onChange={(e) => {
              setPhoneNumber(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item<FieldType> label="Birthdate" name="birthdate">
          <Input type="date" disabled={!edit} />
        </Form.Item>

        <Form.Item<FieldType> label="Country" name="country">
          <Input
            defaultValue={user.country}
            disabled={!edit}
            onChange={(e) => {
              setCountry(e.target.value);
            }}
          />
        </Form.Item>

        <Form.Item wrapperCol={{ offset: 8, span: 16 }}>
          {edit ? (
            <button
              className="btn"
              type="button"
              onClick={() => {
                saveUserInfo();
                setEdit(false);
              }}
            >
              Save
            </button>
          ) : (
            <button className="btn" type="button" onClick={() => setEdit(true)}>
              Edit
            </button>
          )}
        </Form.Item>
      </Form>
    </>
  );
};

export default UserInfoForm;
