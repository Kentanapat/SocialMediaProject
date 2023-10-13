import React, { useState, useEffect } from 'react';
import './ProfilePage.css';
import rose from "./rose.jpeg"
import {BiArrowBack} from 'react-icons/bi';
import backgroud from "./homepage.jpg";
// import myfont from './COMIC.TFF';

// const ProfilePage = () => {
//  const [user, setUser] = useState({});

//  useEffect(() => {
//     fetchUserData();
//  }, []);

//  const fetchUserData = async () => {
//     const response = await fetch('/api/user');
//     const data = await response.json();
//     setUser(data);
//  };
function ProfilePage(){
 return (

  <div className="rbox">
    <BiArrowBack className='back'></BiArrowBack>
    <pf className="bg-Profile"></pf>
    {/* <img src={bgGIF} className='bg-Profile'/> */}
    <div className="profile-page">
      <img src={rose} className="avatar"/>
       <h1 className="name">Park Chae-young</h1>
        <button className="botton">edit profile</button>
         <p className="bio">Bio Bijai</p>
          <div className="body">
           <div className='follow'>10 following   1000 follower
           <e className="profile-background">
           </e>
           {/* <div className="lbox">
           </div> */}
          </div>
      </div>
    </div>
    <div className='lbox'></div>
  </div>
 );
};

export default ProfilePage;
