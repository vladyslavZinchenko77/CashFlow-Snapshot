import {
  FC,
  createContext,
  useContext,
  useState,
  ReactNode,
  useEffect,
} from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValues {
  incomesValue: number;
  expensesValue: number;
  balanceValue: number;
  user: User;
  updateIncomesValue: (value: number) => void;
  updateExpensesValue: (value: number) => void;
  updateBalanceValue: (value: number) => void;
  updateUserValue: (value: User) => void;
}

interface User {
  email: string;
  password: string;
  name: string;
  lastName: string;
  phoneNumber: number;
  country: string;
}

const AppContext = createContext<AppContextValues | undefined>(undefined);

export const useAppContext = (): AppContextValues => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: FC<AppContextProps> = ({ children }) => {
  const [incomesValue, setIncomesValue] = useState<number>(() => {
    const storedValue = localStorage.getItem('incomesValue');
    return storedValue ? parseFloat(storedValue) : 0;
  });

  const [expensesValue, setExpensesValue] = useState<number>(() => {
    const storedValue = localStorage.getItem('expensesValue');
    return storedValue ? parseFloat(storedValue) : 0;
  });

  const [balanceValue, setBalanceValue] = useState<number>(() => {
    const storedValue = localStorage.getItem('balanceValue');
    return storedValue ? parseFloat(storedValue) : 0;
  });

  //  USER

  const [user, setUser] = useState<User>(() => {
    const storedUser = localStorage.getItem('userValue');
    return storedUser
      ? JSON.parse(storedUser)
      : { email: '', password: '', name: '', lastName: '' };
  });

  //  UPDATED FUNCTIONS
  const updateIncomesValue = (value: number) => {
    setIncomesValue(value);
    localStorage.setItem('incomesValue', value.toString());
  };

  const updateExpensesValue = (value: number) => {
    setExpensesValue(value);
    localStorage.setItem('expensesValue', value.toString());
  };

  const updateBalanceValue = (value: number) => {
    setBalanceValue(value);
    localStorage.setItem('balanceValue', value.toString());
  };
  const updateUserValue = (value: User) => {
    setUser(value);
    localStorage.setItem('userValue', value.toString());
  };
  const contextValues: AppContextValues = {
    incomesValue,
    expensesValue,
    balanceValue,
    user,
    updateIncomesValue,
    updateExpensesValue,
    updateBalanceValue,
    updateUserValue,
  };

  useEffect(() => {
    localStorage.setItem('user', JSON.stringify(user));
    localStorage.setItem('incomesValue', incomesValue.toString());
    localStorage.setItem('expensesValue', expensesValue.toString());
    localStorage.setItem('balanceValue', balanceValue.toString());
  }, [incomesValue, expensesValue, balanceValue]);

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
