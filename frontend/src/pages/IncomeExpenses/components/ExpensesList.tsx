import { FC } from 'react';
import { useAppContext } from '../../../context/AppContext';
import {
  ArrowUpOutlined,
  CarOutlined,
  ShoppingCartOutlined,
  HomeOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const ExpensesList: FC = () => {
  const { expenses } = useAppContext();

  return (
    <div>
      {expenses &&
        expenses.map((item, index) => {
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
          } else {
            icon = (
              <DollarOutlined style={{ color: 'red', margin: '0 8px 0 8px' }} />
            );
          }
          return (
            <ul style={{ marginTop: 24, listStyle: 'none' }} key={index}>
              <li>
                <ArrowUpOutlined style={{ color: 'red' }} />
                {icon}
                {'-'}
                {item.amount} {'uah'} {''}
                {item.type}, <strong>Date:</strong> {item.date.toString()}
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default ExpensesList;
