import React from 'react'
import { Outlet } from 'react-router-dom'
import Navbar from '../Navbar/index'

const Layout = () => {
  return (
    <>
      <Navbar />
      <section>
        <Outlet />
      </section>
    </>
  )
}

export default Layout