import React, { createContext, useCallback } from 'react';

interface AuthData{
  name: string;
  signIn(): void;
}

const AuthContext = createContext<AuthData>({} as AuthData);
const AuthProvider: React.FC = ({children}) => {

  const signIn = useCallback(() => {
    console.log('anal')
  },[])

  return (
    <AuthContext.Provider  value={{name: 'Joseph martins', signIn}}>
      {children}
    </AuthContext.Provider>
  )
}

export {AuthContext, AuthProvider};