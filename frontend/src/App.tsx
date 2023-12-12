import { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics/Statistics';
import IncomeExpenses from './pages/IncomeExpenses';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import Goals from './pages/Goals/Goals';
import Sidebar from './components/common/SideBar/Sidebar';
import Landing from './components/ui/Landing';

import './styles/common.scss';

function App() {
  const [isLogin, setIsLogin] = useState(true);

  return (
    <>
      <Routes>
        <Route path={'/'} element={<Landing />} />
      </Routes>
      {!isLogin && (
        <div>
          <Routes>
            <Route path={'/login'} element={<LogIn />} />
          </Routes>
        </div>
      )}
      {isLogin && (
        <div>
          <Sidebar />
          <div>
            <Routes>
              <Route path={'/dashboard'} element={<Home />} />
              <Route
                path={'/incomes-and-expenses'}
                element={<IncomeExpenses />}
              />
              <Route path={'/statistics'} element={<Statistics />} />
              <Route path={'/goals'} element={<Goals />} />
              <Route path={'/settings'} element={<Settings />} />
            </Routes>
          </div>
        </div>
      )}
    </>
  );
}

export default App;
