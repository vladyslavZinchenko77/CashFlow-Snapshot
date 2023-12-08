import { Routes, Route } from 'react-router-dom';
import Home from './pages/Home';
import Statistics from './pages/Statistics/Statistics';
import IncomeExpenses from './pages/IncomeExpenses';
import Settings from './pages/Settings';
import LogIn from './pages/LogIn';
import Goals from './pages/Goals/Goals';

import './styles/common.scss';

function App() {
  return (
    <>
      <Routes>
        <Route path={'/'} element={<Home />} />
        <Route path={'/home'} element={<Home />} />
        <Route path={'/incomes-and-expenses'} element={<IncomeExpenses />} />
        <Route path={'/statistics'} element={<Statistics />} />
        <Route path={'/goals'} element={<Goals />} />
        <Route path={'/settings'} element={<Settings />} />
        <Route path={'/login'} element={<LogIn />} />
      </Routes>
    </>
  );
}

export default App;
