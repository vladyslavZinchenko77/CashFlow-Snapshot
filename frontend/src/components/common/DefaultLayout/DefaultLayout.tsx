import { FC } from 'react';
import Sidebar from '../SideBar/Sidebar';
import './DefaultLayout.scss';

interface DefaultLayout {
  children: React.ReactNode;
  title: string;
}

const DefaultLayout: FC<DefaultLayout> = ({ children, title }) => {
  return (
    <div className="default-layout">
      <Sidebar />
      <div className="default-layout__content">
        <h2 className="default-layout__title">{title}</h2>
        {children}
      </div>
    </div>
  );
};

export default DefaultLayout;
