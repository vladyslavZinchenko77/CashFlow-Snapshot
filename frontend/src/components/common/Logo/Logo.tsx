import { FC } from 'react';
import './Logo.scss';

const Logo: FC = () => {
  return (
    <div className="logo__wrap">
      <a className="logo" href="#">
        CashFlow-Snapshot
      </a>
    </div>
  );
};

export default Logo;
