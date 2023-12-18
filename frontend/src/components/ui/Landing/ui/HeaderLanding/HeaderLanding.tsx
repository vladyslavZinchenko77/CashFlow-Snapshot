import { FC } from 'react';
import { Link } from 'react-router-dom';
import { Space } from 'antd';
import { useNavigate } from 'react-router-dom';

import Logo from '../../../../common/Logo';

import './HeaderLanding.scss';

const HeaderLanding: FC = () => {
  const navigate = useNavigate();

  const logIn = () => {
    let login = localStorage.getItem('login');

    if (login === 'test@gmail.com') {
      navigate('/dashboard');
    } else {
      navigate('/log-in');
    }
  };

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
            <a href="" onClick={logIn} className="link-btn">
              Log In
            </a>
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
