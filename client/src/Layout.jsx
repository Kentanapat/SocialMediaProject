import React from 'react';
import App from './App';
import { Outlet } from 'react-router-dom';
import Sidemenu from './components/sidemenu/Sidemenu';
import Post from './components/post/Post';
import { Navigate } from 'react-router-dom';
import FeedPost from './components/feedpost/FeedPost';

const Layout = () => {
  return (
    <>
        <Sidemenu/>
        {/* <Navigate to="/login" /> */}
        <Post/>
        <FeedPost/>
        <Outlet/>
    </>
  )
}

export default Layout;