import React, { useState, createContext, useContext } from 'react';
import AuthContext from './AuthProvider';


const ApiContext = createContext('');


export const ApiProvider = ({ children }) => {
  const { isLogged } = useContext(AuthContext);
    
  const saveGif = async (gifObj) => {
    const { token } = isLogged;
    const options = {
      method: "POST",
      headers: {      
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
      body: JSON.stringify(gifObj),
    } 
    try {
      const res = await fetch('http://localhost:4000/memes', options)
      console.log(res)
      const data = await res.json();
      console.log(data);
    } catch( error) {
      console.log(error)
    }
  }

  
      
  const getMemesByUser = async () => {
    const { token, _id } = isLogged;
    const options = {
      method: "GET",
      headers: {      
        "Content-Type": "application/json",
        "Authorization": `Bearer ${token}`,
      },
    } 
    try {
      const res = await fetch(`http://localhost:4000/user-memes/${_id}`, options)
      const data = await res.json();
      return data;
    } catch( error) {
      console.log(error)
    }
  }







  return (
    <ApiContext.Provider value={{ saveGif, getMemesByUser }} >
      {children}
    </ApiContext.Provider>
  )
}


export default ApiContext;