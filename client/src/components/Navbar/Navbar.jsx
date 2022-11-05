import React, { useContext } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import GifContext from '../../context/GifProvider';



const Navbar = () => {
  const navigate = useNavigate();
  const { setApiCategory, } = useContext(GifContext);
  

  const setHomePage = (catValue) => {
    navigate('/home')
    setApiCategory(catValue)
    

  }



  return (
    <>
    <nav className="gp-6 border-b-2 p-4">
    
    <section className="flex items-center justify-between">
      
      <article className="pt-2">
        <img src="../../../public/img/78787.png" className="h-12" alt="" />
      </article>
      <article className='flex gap-4'>        
        <button className="hover:text-indigo-400 hover:scale-105" value="trending" onClick={(e) => setHomePage(e.target.value)}>Trending</button>
        <button className="hover:text-indigo-400 hover:scale-105" value="categories" onClick={(e) => setHomePage(e.target.value)}>Categories</button>
        <button className="hover:text-indigo-400 hover:scale-105" value="myGifs" onClick={(e) => setHomePage(e.target.value)}>My GIFs</button>
        <button className="hover:text-indigo-400 hover:scale-105" value="allGifs" onClick={(e) => setHomePage(e.target.value)}>All GIFs</button>
      </article>
      <article>
      <Link to='/home'><h1 className="text-5xl font-bold" >GifTown</h1></Link>
      </article>
      <article className="hidden space-x-6 md:flex">
        <Link to="login"  className="hover:text-indigo-400 hover:scale-105">Login</Link>
        <button type="button" className="hover:text-indigo-400 hover:scale-105">Logout</button>
        <Link to="upload" className="hover:text-indigo-400 hover:scale-105">upload GIFs</Link>
      </article>
      
      <Link href="upload" className="hidden p-3 px-6 pt-2 text-white bg-brightRed rounded-full baseline hover:bg-brightRedLight md:block">Upload A GIF</Link>

      <button id="menu-btn" className="block hamburger md:hidden focus:outline-none">
        <span className="hamburger-top"></span>
        <span className="hamburger-middle"></span>
        <span className="hamburger-bottom"></span>
      </button>
    </section>

    
      <section className="md:hidden">
        <article id="menu" className="absolute flex-col items-center self-end hidden py-8 mt-10 space-y-6 font-bold bg-white  left-6 right-6 drop-shadow-md sm:w-auto sm:self-center">
          <Link to="login">Login</Link>
          <Link to="gifs">GIFs</Link>
          <Link to="upload">Load GIFs</Link>
       
      </article>
    </section>
  </nav>

    </>
  )
}

export default Navbar