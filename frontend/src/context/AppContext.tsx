import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValues {
  incomesValue: number;
  expensesValue: number;
  updateRevenuesValue: (value: number) => void;
  updateExpensesValue: (value: number) => void;
}

const AppContext = createContext<AppContextValues | undefined>(undefined);

export const useAppContext = (): AppContextValues => {
  const context = useContext(AppContext);
  if (!context) {
    throw new Error('useAppContext must be used within an AppProvider');
  }
  return context;
};

export const AppProvider: React.FC<AppContextProps> = ({ children }) => {
  const [incomesValue, setRevenuesValue] = useState<number>(40000);
  const [expensesValue, setExpensesValue] = useState<number>(27000);

  const updateRevenuesValue = (value: number) => {
    setRevenuesValue(value);
  };

  const updateExpensesValue = (value: number) => {
    setExpensesValue(value);
  };

  const contextValues: AppContextValues = {
    incomesValue,
    expensesValue,
    updateRevenuesValue,
    updateExpensesValue,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
