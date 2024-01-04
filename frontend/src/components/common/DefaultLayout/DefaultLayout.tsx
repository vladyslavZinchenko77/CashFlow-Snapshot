import { FC } from 'react';
import './DefaultLayout.scss';

interface DefaultLayout {
  children: React.ReactNode;
  title: string;
  subtitle?: string;
}

const DefaultLayout: FC<DefaultLayout> = ({ children, title, subtitle }) => {
  return (
    <div className="default-layout">
      <div className="default-layout__content">
        <h2 className="default-layout__title">{title}</h2>
        <p className="default-layout__subtitle">{subtitle}</p>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
