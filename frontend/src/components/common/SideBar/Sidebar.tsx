import { FC } from 'react';
import Logo from '../Logo/Logo';

import './Sidebar.scss';

const Sidebar: FC = () => {
  return (
    <div className="sidebar">
      <Logo />
      <nav className="sidebar__nav">
        <ul className="sidebar__list">
          <li className="sidebar__list-item">
            <a className="sidebar__list-item--link" href="#">
              Общий Обзор
            </a>
          </li>
          <li className="sidebar__list-item">
            <a href="#" className="sidebar__list-item--link">
              Доходы и Расходы
            </a>
          </li>
          <li className="sidebar__list-item">
            <a href="#" className="sidebar__list-item--link">
              Статистика
            </a>
          </li>
          <li className="sidebar__list-item">
            <a href="#" className="sidebar__list-item--link">
              Цели и Бюджетирование
            </a>
          </li>
          <li className="sidebar__list-item">
            <a href="#" className="sidebar__list-item--link">
              Настройки и Профиль
            </a>
          </li>
          <li className="sidebar__list-item">
            <a href="#" className="sidebar__list-item--link">
              Выйти
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Sidebar;
