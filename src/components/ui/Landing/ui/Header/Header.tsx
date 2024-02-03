import { FC, useState } from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { useNavigate } from 'react-router-dom';
import { useBreakpoints } from '../../../../../hooks/useBreakpoints';
import Logo from '../../../../common/Logo';

import './Header.scss';

const Header: FC = () => {
  const navigate = useNavigate();
  const [isActive, setIsActive] = useState(false);
  const { isMobile } = useBreakpoints();

  const logIn = () => {
    let login = localStorage.getItem('login');

    if (login === 'test@gmail.com') {
      navigate('/dashboard');
    } else {
      navigate('/log-in');
    }
  };

  const handleToggle = () => {
    setIsActive(!isActive);
  };

  return (
    <header className="header">
      <nav className="header__nav">
        <Logo color="black" />

        <ul className="header__list">
          <li className="header__list-item">
            <a className="header__list-item--link" href="">
              Home
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__list-item--link" href="">
              Features
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__list-item--link" href="">
              Pricing
            </a>
          </li>
          <li className="header__list-item">
            <a className="header__list-item--link" href="">
              Contact
            </a>
          </li>
          <Space className="header__list-item-btns" size={12}>
            <a href="" onClick={logIn} className="link-btn">
              Log In
            </a>
            <Link to={'/sign-up'} className="link-btn">
              Sign Up
            </Link>
          </Space>
          {isMobile && (
            <div
              className={`burger-menu-icon ${isActive ? 'active' : ''}`}
              onClick={handleToggle}
            >
              <div className="bar"></div>
              <div className="bar"></div>
              <div className="bar"></div>
            </div>
          )}
        </ul>
      </nav>
    </header>
  );
};

export default Header;
