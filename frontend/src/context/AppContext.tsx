import React, { createContext, useContext, useState, ReactNode } from 'react';

interface AppContextProps {
  children: ReactNode;
}

interface AppContextValues {
  incomesValue: number;
  expensesValue: number;
  balanceValue: number;
  updateIncomesValue: (value: number) => void;
  updateExpensesValue: (value: number) => void;
  updateBalanceValue: (value: number) => void;
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
  const [incomesValue, setIncomesValue] = useState<number>(0);
  const [expensesValue, setExpensesValue] = useState<number>(0);
  const [balanceValue, setBalanceValue] = useState<number>(0);

  const updateIncomesValue = (value: number) => {
    setIncomesValue(value);
  };

  const updateExpensesValue = (value: number) => {
    setExpensesValue(value);
  };
  const updateBalanceValue = (value: number) => {
    setBalanceValue(value);
  };

  const contextValues: AppContextValues = {
    incomesValue,
    expensesValue,
    balanceValue,
    updateIncomesValue,
    updateExpensesValue,
    updateBalanceValue,
  };

  return (
    <AppContext.Provider value={contextValues}>{children}</AppContext.Provider>
  );
};
