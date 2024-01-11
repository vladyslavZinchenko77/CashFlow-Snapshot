import { FC, useEffect, useState } from 'react';
import { Spin, Flex, Empty } from 'antd';
import DefaultLayout from '../../components/common/DefaultLayout';

const Settings: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 1000);
    return () => clearTimeout(timeout);
  }, []);
  return (
    <>
      <DefaultLayout
        title="Goals and budget"
        subtitle="Here you can make settigs your ptofile"
      >
        <div></div>
      </DefaultLayout>
      {isLoading ? (
        <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
      ) : (
        <Flex justify="center">
          <Spin size="large" />
        </Flex>
      )}
    </>
  );
};

export default Settings;
