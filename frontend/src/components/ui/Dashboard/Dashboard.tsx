// import { FC } from 'react';
// import { Route, Routes } from 'react-router-dom';
// import Sidebar from '../../components/common/SideBar/Sidebar';
// import IncomeExpenses from '../IncomeExpenses';
// import Statistics from 'antd/es/statistic/Statistic';
// import Goals from '../Goals/Goals';
// import Settings from '../Settings';
// import Home from '../Home';

// const Dashboard: FC = () => {
//   return (
//     <div>
//       {/* dashboard */}
//       <div>
//         <Sidebar />
//         <div>
//           <Routes>
{
  /* <Route path={'/dashboard'} element={<Home />} />
<Route
  path={'/dashboard/incomes-and-expenses'}
  element={<IncomeExpenses />}
/>
<Route path={'/dashboard/statistics'} element={<Statistics />} />
<Route path={'/dashboard/goals'} element={<Goals />} />
<Route path={'/dashboard/settings'} element={<Settings />} /> */
}
//           </Routes>
//         </div>
//       </div>
//     </div>
//   );
// };

// export default Dashboard;

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
