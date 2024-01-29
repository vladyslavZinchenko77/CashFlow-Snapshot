import { FC } from 'react';
import { useAppContext } from '../../../context/AppContext';
import {
  ArrowDownOutlined,
  CreditCardOutlined,
  HomeOutlined,
  PercentageOutlined,
  DollarOutlined,
} from '@ant-design/icons';

const IncomesList: FC = () => {
  const { incomes } = useAppContext();

  return (
    <div>
      {incomes &&
        incomes.map((item, index) => {
          let icon;
          if (item.type === 'Здача нерухомості') {
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
                style={{ color: 'green', margin: '0 8px 0 8px' }}
              />
            );
          }
          return (
            <ul style={{ marginTop: 24, listStyle: 'none' }} key={index}>
              <li>
                <ArrowDownOutlined style={{ color: 'green' }} />
                {icon}
                {'+'}
                {item.amount} {'uah'} {''}
                {item.type}, <strong>Date:</strong> {item.date.toString()}
              </li>
            </ul>
          );
        })}
    </div>
  );
};

export default IncomesList;
