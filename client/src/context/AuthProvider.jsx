import React, { useState, createContext } from 'react';
import { useEffect } from 'react';


const AuthContext = createContext('');


export const AuthProvider = ({ children }) => {
  const [ isLogged, setIsLogged ] = useState(null);

 
  useEffect(() =>{
    persistUser()
  }, [isLogged])
  

  const persistUser = () => {
    const user = localStorage.getItem('user')
    user && setIsLogged(user);
  }


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