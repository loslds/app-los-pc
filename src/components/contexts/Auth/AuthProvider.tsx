import { useState } from 'react';
import { AuthContext } from "./AuthContext";

import { User } from '../../types/User';
import { useApi } from '../../rooks/useApi';

type AuthProviderType = {
 children: JSX.Element;
}
export const AuthProvider = ({ children}: AuthProviderType) => {
  
  const [user, setUser] = useState<User | null>(null);
  const api = useApi;

  const signin = async(email: string, password: string ) => {
    const data = await api(signin(email,password));
    if ( data.user && data.token) {
      setUser(data.user);
      return true;
    }
    return false;
  };

  const signout = () => {
    await api.logout();
    setUser(null);
    
  };

  return (
    <AuthContext.Provider value={ user, signin, signout}>
      { children }
    </AuthContext.Provider>
  )
};