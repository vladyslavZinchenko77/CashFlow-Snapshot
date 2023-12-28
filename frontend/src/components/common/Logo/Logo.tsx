import { FC } from 'react';
import { Link } from 'react-router-dom';
import { useBreakpoints } from '../../../hooks/useBreakpoints';
import logoImg from '../../../assets/icons/logo.png';
import './Logo.scss';

interface LogoProps {
  color?: string;
}

const Logo: FC<LogoProps> = ({ color }) => {
  const { isMobile } = useBreakpoints();

  return (
    <div className="logo__wrap">
      <img style={{ width: 48, height: 'auto' }} src={logoImg} alt="logoImg" />
      {!isMobile && (
        <Link
          className="logo"
          style={{
            color,
            textDecoration: 'none',
            fontSize: 18,
            marginLeft: 8,
          }}
          to={'/'}
        >
          CashFlow
        </Link>
      )}
    </div>
  );
};

export default Logo;
