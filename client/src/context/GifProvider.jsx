import React, { useState, createContext } from 'react';


const GifContext = createContext('');


export const GifProvider = ({ children }) => {
  const [ apiCategory, setApiCategory ] = useState(null);
 


  const getGifsFromAPI = async (url) => {
    try {
      const res = await fetch(url)
      const data = await res.json();
      console.log(data)
      return data;
    } catch( error) {
      console.log(error)
    }
  }

  
  const loadGifs = async (type) => {
    let url;
    switch (type) {
      case 'trending':
        url = `${import.meta.env.VITE_GIFS_TRENDING}?api_key=${import.meta.env.VITE_API_KEY}&limit=40&rating=pg-13`;
        console.log(url)
        break;
      case 'categories':
        url = `${import.meta.env.VITE_GIFS_CATEGORIES}?api_key=${import.meta.env.VITE_API_KEY}&limit=40&rating=pg-13`
        console.log(url)
        break;
      default:
        return;
    }
    const apiGifs = await getGifsFromAPI(url)
    return apiGifs;
  }


  return (
    <GifContext.Provider value={{ apiCategory, setApiCategory, getGifsFromAPI, loadGifs }} >
      {children}
    </GifContext.Provider>
  )
}


export default GifContext;