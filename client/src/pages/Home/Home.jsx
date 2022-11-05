import { useContext } from "react";
import { useState, useEffect } from "react";
import GifContext from "../../context/GifProvider";
import { useNavigate } from "react-router-dom";
import AuthContext from "../../context/AuthProvider";
import ApiContext from "../../context/ApiProvider";


const Home = () => {
  const { isLogged } = useContext(AuthContext);
  const { apiCategory, loadGifs } = useContext(GifContext)
  const { getMemesByUser } = useContext(ApiContext);
  const [ gifs, setGifs ] = useState()
  const [ searchString, setSearchString ] = useState('');

  useEffect(() => {
    if (!searchString) {
      getGifs()
    }    
  }, [searchString, apiCategory])


  const filterResults = (e) => {
    setSearchString(e.target.value)
    console.log(gifs)
    const results = gifs.filter(gif => {
      const lower = gif.title.toLowerCase()
      return lower.includes(searchString)
    })
    setGifs(results)
  }


  const getGifs = async () => {
    if (apiCategory === 'trending' || apiCategory === 'categories') {
      const gifArray = await loadGifs(apiCategory)
      gifArray && setGifs(gifArray.data) 
    } else if (apiCategory === 'myGifs' || apiCategory === 'allGifs')
      if (isLogged.token) {
        console.log(isLogged._id)
        const gifArray = await getMemesByUser(isLogged._id);
        gifArray && console.log(gifArray)
      }
      
   
  }





  return (
    <>
      <section>
        <input type="search" placeholder="Search" className='rounded my-8 w-1/2 h-12 p-4' onChange={(e) => filterResults(e)}  />
      </section>
      <section className="flex flex-wrap gap-3 justify-center">
        { gifs && gifs.map(gif =>
          apiCategory == 'trending' ? (
            <div className="bg-white" key={gif.id}>
              <img src={gif?.images?.original?.url} className="h-60 w-60" alt="" />
            </div>
          ) : (
            <div className="bg-white" key={gif.id}>
            <img src={gif?.gif?.images?.original?.url} className="h-60 w-60" alt="" />
            <div className="text-indigo-800">{gif?.name}</div>
            </div>
          )
        )
        }
        
      </section>
      
    </>
  );
};

export default Home;
