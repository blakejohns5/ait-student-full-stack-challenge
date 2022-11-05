import React, { useState, createContext } from 'react';


const AuthContext = createContext('');


export const AuthProvider = ({ children }) => {
  const [ isLogged, setIsLogged ] = useState(null);
 

  const logUserIn = (user) => {
   setIsLogged(user)
   localStorage.setItem('user', JSON.stringify(user))
  }

  const logUserOut = () => {
    setIsLogged(null);
    localStorage.removeItem('user');
  }


  return (
    <AuthContext.Provider value={{ isLogged, setIsLogged, logUserIn, logUserOut }} >
      {children}
    </AuthContext.Provider>
  )
}


export default AuthContext;