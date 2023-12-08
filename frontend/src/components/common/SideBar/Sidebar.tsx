import { FC } from 'react';
import { Link } from 'react-router-dom';
import Logo from '../Logo/Logo';

import './Sidebar.scss';

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <Link className="sidebar__list-item--link" to={'/'}>
              Общий Обзор
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link
              to={'/incomes-and-expenses'}
              className="sidebar__list-item--link"
            >
              Доходы и Расходы
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={'/statistics'} className="sidebar__list-item--link">
              Статистика
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={'/goals'} className="sidebar__list-item--link">
              Цели и Бюджетирование
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={'/settings'} className="sidebar__list-item--link">
              Настройки и Профиль
            </Link>
          </li>
          <li className="sidebar__list-item">
            <Link to={'/login'} className="sidebar__list-item--link">
              Выйти
            </Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
