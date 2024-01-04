import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics/Statistics';
import IncomeExpenses from './pages/IncomeExpenses';
import Settings from './pages/Settings';
import Goals from './pages/Goals/Goals';
import LogIn from './pages/LogIn';
import SignUp from './pages/SignUp/SignUp';
import Landing from './components/ui/Landing';
import Dashboard from './components/ui/Dashboard/Dashboard';

import './styles/common.scss';

function App() {
  return (
    <>
      {/* Landing pag */}
      <Routes>
        <Route path={'/'} element={<Landing />} />
        <Route path={'/home'} element={<Landing />} />
      </Routes>
      {/* Login */}
      <div>
        <Routes>
          <Route path={'/log-in'} element={<LogIn />} />
        </Routes>
      </div>
      {/* Sign Up */}
      <div>
        <Routes>
          <Route path={'/sign-up'} element={<SignUp />} />
        </Routes>
      </div>
      {/* dashboard */}
      <div>
        <Routes>
          <Route path={'/dashboard'} element={<Dashboard />}>
            <Route path={'/dashboard'} element={<Home />} />
            <Route
              path={'/dashboard/incomes-and-expenses'}
              element={<IncomeExpenses />}
            />
            <Route path={'/dashboard/statistics'} element={<Statistics />} />
            <Route path={'/dashboard/goals'} element={<Goals />} />
            <Route path={'/dashboard/settings'} element={<Settings />} />
          </Route>
        </Routes>
      </div>
    </>
  );
}

export default App;
