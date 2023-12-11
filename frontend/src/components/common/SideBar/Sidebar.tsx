import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import {
  HomeOutlined,
  DollarOutlined,
  LineChartOutlined,
  CreditCardOutlined,
  SettingOutlined,
  LoginOutlined,
} from '@ant-design/icons';
import Logo from '../Logo/Logo';

import './Sidebar.scss';

const Sidebar: FC = () => {
  const [activeTab, setActiveTab] = useState(1);

  return (
    <div className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li
            className={
              activeTab === 1
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <Link
              className="sidebar__list-item--link"
              to={'/'}
              onClick={() => setActiveTab(1)}
            >
              <HomeOutlined style={{ marginRight: 10 }} />
              Загальна Інформація
            </Link>
          </li>
          <li
            className={
              activeTab === 2
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <Link
              to={'/incomes-and-expenses'}
              className="sidebar__list-item--link"
              onClick={() => setActiveTab(2)}
            >
              <DollarOutlined style={{ marginRight: 10 }} />
              Доходи та Витрати
            </Link>
          </li>
          <li
            className={
              activeTab === 3
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <Link
              to={'/statistics'}
              className="sidebar__list-item--link"
              onClick={() => setActiveTab(3)}
            >
              <LineChartOutlined style={{ marginRight: 10 }} />
              Статистика
            </Link>
          </li>
          <li
            className={
              activeTab === 4
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
            onClick={() => setActiveTab(4)}
          >
            <Link to={'/goals'} className="sidebar__list-item--link">
              <CreditCardOutlined style={{ marginRight: 10 }} />
              Цілі та Бюджетування
            </Link>
          </li>
          <li
            className={
              activeTab === 5
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <Link
              to={'/settings'}
              className="sidebar__list-item--link"
              onClick={() => setActiveTab(5)}
            >
              <SettingOutlined style={{ marginRight: 10 }} />
              Налаштування
            </Link>
          </li>
          <li
            className={
              activeTab === 6
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <Link to={'/login'} className="sidebar__list-item--link">
              <LoginOutlined style={{ marginRight: 10 }} />
              Вийти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
