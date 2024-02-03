import { FC } from 'react';
import { Outlet } from 'react-router-dom';
import Sidebar from '../../common/SideBar/Sidebar';

const Dashboard: FC = () => {
  return (
    <>
      <div style={{ display: 'flex' }}>
        <Sidebar />
        <div>
          <Outlet />
        </div>
      </div>
    </>
  );
};

export default Dashboard;
