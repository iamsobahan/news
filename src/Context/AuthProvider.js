import { createContext } from 'react';
import useHomeData from '../Components/Hooks/useHomeData';

export const AuthContext = createContext(null);

const AuthProvider = ({ children }) => {
  const allContext = useHomeData();
  return (
    <AuthContext.Provider value={allContext}>{children}</AuthContext.Provider>
  );
};

export default AuthProvider;
