import { FC } from 'react';
import { Link } from 'react-router-dom';
import './Logo.scss';

const Logo: FC = () => {
  return (
    <div className="logo__wrap">
      <Link className="logo" to={'/'}>
        CashFlow-Snapshot
      </Link>
    </div>
  );
};

export default Logo;
