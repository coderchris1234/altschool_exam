import { createContext, useState, useEffect } from 'react';

export const UserContext = createContext({
  setCurrentUser: () => null,
  currentUser: null,
});

export const UserProvider = ({ children }) => {
  const [currentUser, setCurrentUser] = useState(null);
  const value = { currentUser, setCurrentUser };

  useEffect(() => {
    
  }, []);

  return <UserContext.Provider value={value}>{children}</UserContext.Provider>;
};
