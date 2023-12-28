import { FC } from 'react';
import { Input, Form, Flex } from 'antd';

import './News.scss';

const News: FC = () => {
  return (
    <section className="news">
      <h2 className="news__title section__title">Newsletter</h2>
      <p className="news__subtitle section__subtitle">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Eget ac quis
        aliquam arcu lacus.
      </p>
      <Form>
        <Form.Item>
          <Flex justify="center" style={{ marginTop: 24 }}>
            <Input style={{ width: 300 }} />
            <button className="btn">Subscribe</button>
          </Flex>
        </Form.Item>
      </Form>
    </section>
  );
};

export default News;
