import { FC } from 'react';
import { Input, Form, Flex } from 'antd';
import { useBreakpoints } from '../../../../../hooks/useBreakpoints';

import './News.scss';

const News: FC = () => {
  const { isMobile } = useBreakpoints();

  return (
    <section className="news">
      <h2 className="news__title section__title">Newsletter</h2>
      <p className="news__subtitle section__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
        aliquam arcu lacus.
      </p>
      <Form>
        <Form.Item>
          <Flex
            justify="center"
            align="center"
            style={{
              marginTop: 24,
              flexDirection: isMobile ? 'column' : 'row',
            }}
          >
            <Input
              style={{
                width: isMobile ? '90%' : 300,
                height: 36,
                borderTopRightRadius: 0,
                borderBottomRightRadius: 0,
              }}
            />
            <button
              style={{
                width: isMobile ? '100%' : '',
                marginTop: isMobile ? '24px' : '',
                borderTopLeftRadius: 0,
                borderBottomLeftRadius: 0,
              }}
              className="btn"
            >
              Subscribe
            </button>
          </Flex>
        </Form.Item>
      </Form>
    </section>
  );
};

export default News;
