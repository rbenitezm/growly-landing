import React, { createContext, useState } from 'react';

export const GlobalContext = createContext();

export const GlobalProvider = ({ children }) => {
  const [email, setEmail] = useState('');

  return (
    <GlobalContext.Provider value={{ email, setEmail }}>
      {children}
    </GlobalContext.Provider>
  );
};