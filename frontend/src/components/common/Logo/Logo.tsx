import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

interface LogoProps {
  color?: string;
}

const Logo: FC<LogoProps> = ({ color }) => {
  return (
    <div className="logo__wrap">
      <Link className="logo" style={{ color }} to={'/'}>
        CashFlow-Snapshot
      </Link>
    </div>
  );
};

export default Logo;
