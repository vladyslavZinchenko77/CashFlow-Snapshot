import { FC, useEffect, useState } from 'react';
import { Spin, Flex } from 'antd';
import UserInfoForm from './components/UserInfoForm';

import SettingsForm from './components/SettingsForm';
import DefaultLayout from '../../components/common/DefaultLayout';

const Settings: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);

  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <DefaultLayout
        title="Goals and budget"
        subtitle="Here you can make settigs your ptofile"
      >
        {isLoading ? (
          <div>
            <SettingsForm />
            <UserInfoForm />
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
