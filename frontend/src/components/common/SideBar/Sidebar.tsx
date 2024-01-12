import { FC, useState } from 'react';
import { Link, NavLink, useNavigate } from 'react-router-dom';
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
  const navigate = useNavigate();

  const exit = () => {
    navigate('/log-in');
    localStorage.clear();
  };

  return (
    <div className="sidebar">
      <Logo color="#fff" />
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li
            className={
              activeTab === 1
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <NavLink
              className="sidebar__list-item--link"
              to={'/dashboard'}
              onClick={() => setActiveTab(1)}
            >
              <HomeOutlined style={{ marginRight: 10 }} />
              General
            </NavLink>
          </li>
          <li
            className={
              activeTab === 2
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <NavLink
              to={'/dashboard/incomes-and-expenses'}
              className="sidebar__list-item--link"
              onClick={() => setActiveTab(2)}
            >
              <DollarOutlined style={{ marginRight: 10 }} />
              Incomes & Expenses
            </NavLink>
          </li>
          <li
            className={
              activeTab === 3
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
          >
            <NavLink
              to={'/dashboard/statistics'}
              className="sidebar__list-item--link"
              onClick={() => setActiveTab(3)}
            >
              <LineChartOutlined style={{ marginRight: 10 }} />
              Статистика
            </NavLink>
          </li>
          <li
            className={
              activeTab === 4
                ? 'sidebar__list-item active'
                : 'sidebar__list-item'
            }
            onClick={() => setActiveTab(4)}
          >
            <Link to={'/dashboard/goals'} className="sidebar__list-item--link">
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
              to={'/dashboard/settings'}
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
            <a href="" onClick={exit} className="sidebar__list-item--link">
              <LoginOutlined style={{ marginRight: 10 }} />
              Вийти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
