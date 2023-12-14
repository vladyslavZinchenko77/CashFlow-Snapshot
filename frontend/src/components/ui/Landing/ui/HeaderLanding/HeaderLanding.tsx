import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';

import Logo from '../../../../common/Logo';

import './HeaderLanding.scss';

const HeaderLanding: FC = () => {
  return (
    <header className="header">
      <nav className="header__nav">
        <Logo color="black" />

        <ul className="header__list">
          <li className="header__list-item">
            <a href="">Home</a>
          </li>
          <li className="header__list-item">
            <a href="">Features</a>
          </li>
          <li className="header__list-item">
            <a href="">Pricing</a>
          </li>
          <li className="header__list-item">
            <a href="">Contact</a>
          </li>
          <Space size={12}>
            <Link to={'/log-in'} className="link-btn">
              Log In
            </Link>
            <Link to={'/sign-up'} className="link-btn">
              Sign Up
            </Link>
          </Space>
        </ul>
      </nav>
    </header>
  );
};

export default HeaderLanding;
