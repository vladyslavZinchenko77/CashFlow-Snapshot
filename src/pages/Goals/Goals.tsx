import { FC, useEffect, useState } from 'react';
import { Spin, Flex, Empty } from 'antd';
import DefaultLayout from '../../components/common/DefaultLayout';

import './Goals.scss';

const Goals: FC = () => {
  const [isLoading, setIsloading] = useState<boolean>(false);
  useEffect(() => {
    const timeout = setTimeout(() => {
      setIsloading(true);
    }, 500);
    return () => clearTimeout(timeout);
  }, []);

  return (
    <>
      <DefaultLayout title="Goals and budget" subtitle="Some goals">
        {isLoading ? (
          <Empty image={Empty.PRESENTED_IMAGE_SIMPLE} />
        ) : (
          <Flex justify="center">
            <Spin size="large" />
          </Flex>
        )}
      </DefaultLayout>
    </>
  );
};

export default Goals;
