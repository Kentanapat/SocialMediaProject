import React from 'react'
import App from './App'
import { Outlet } from 'react-router-dom'
import Sidemenu from './components/sidemenu/Sidemenu'
import Post from './components/post/Post'

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