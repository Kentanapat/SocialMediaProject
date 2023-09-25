import React from 'react'
import App from './App'
import { Outlet } from 'react-router-dom'
import Sidemenu from './Sidemenu'
import Post from './Post'

const Layout = () => {
  return (
    <>
        <Sidemenu/>
        <Post/>
        <Outlet/>
    </>
  )
}

export default Layout