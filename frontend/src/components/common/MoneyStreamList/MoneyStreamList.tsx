import { FC } from 'react';
import { useAppContext } from '../../../context/AppContext';

import {
  ArrowDownOutlined,
  ArrowUpOutlined,
  ShoppingCartOutlined,
  CreditCardOutlined,
  HomeOutlined,
  PercentageOutlined,
  CarOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const MoneyStreamList: FC = () => {
  const { incomes, expenses } = useAppContext();

  let moneyStream = [...incomes, ...expenses];

  moneyStream.sort(
    (a, b) => new Date(b.date).getTime() - new Date(a.date).getTime()
  );

  return (
    <div>
      MoneyStreamList
      {moneyStream.map((item, index) => {
        let icon;
        if (item.type === 'Продукти') {
          icon = (
            <ShoppingCartOutlined
              style={{ color: 'green', margin: '0 8px 0 8px' }}
            />
          );
        } else if (item.type === 'Комунальні платежі') {
          icon = (
            <HomeOutlined style={{ color: 'red', margin: '0 8px 0 8px' }} />
          );
        } else if (item.type === 'Заправка автомобіля') {
          icon = (
            <CarOutlined style={{ color: 'red', margin: '0 8px 0 8px' }} />
          );
        } else if (item.type === 'Здача нерухомості') {
          icon = (
            <HomeOutlined style={{ color: 'green', margin: '0 8px 0 8px' }} />
          );
        } else if (item.type === 'Заробітня плата') {
          icon = (
            <CreditCardOutlined
              style={{ color: 'green', margin: '0 8px 0 8px' }}
            />
          );
        } else if (item.type === 'Відсотки по депозиту') {
          icon = (
            <PercentageOutlined
              style={{ color: 'green', margin: '0 8px 0 8px' }}
            />
          );
        } else {
          icon = (
            <DollarOutlined
              style={{
                color: item.title === 'incomes' ? 'green' : 'red',
                margin: '0 8px 0 8px',
              }}
            />
          );
        }
        return (
          <ul style={{ marginTop: 24, listStyle: 'none' }} key={index}>
            <li>
              {item.title === 'incomes' ? (
                <ArrowDownOutlined style={{ color: 'green' }} />
              ) : (
                <ArrowUpOutlined style={{ color: 'red' }} />
              )}
              {icon}
              {item.title === 'incomes' ? '+' : '-'}
              {item.amount} {'₴'} {''}
              {item.type}, <strong>Date:</strong> {item.date.toString()}
            </li>
          </ul>
        );
      })}
    </div>
  );
};

export default MoneyStreamList;
