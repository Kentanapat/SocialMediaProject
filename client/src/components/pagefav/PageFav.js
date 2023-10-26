import React, {useState}from "react";
import './PageFav.css';
import SidebarOption from './SidebarOption';
import {BsSearchHeart} from 'react-icons/bs';
import {FaHome} from 'react-icons/fa';
import {FaBookmark ,FaFacebookMessenger} from 'react-icons/fa';
import {BsSearchHeartFill} from 'react-icons/bs'
import {MdNotifications,MdNotificationsActive} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {IoIosSettings} from 'react-icons/io';
import{GiRoyalLove} from 'react-icons/gi';
import { Icon } from '@mui/material';
import { Link } from "react-router-dom";

function PageFav(){
    const [search,setSerch] = useState("")
 return(
    <div className="side_barfav">

    <GiRoyalLove className="sidebar__loveIcon"/>
     <Link to="/" className="linkhome">
       <SidebarOption  active Icon={FaHome} text="Home"/>
       </Link>
       <Link to="/search" className='linksearch'>
        < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
        </Link>
        <Link to="/noti" className='linknoti'>
        < SidebarOption Icon={MdNotifications} text="Notifications"/>
        </Link>
      < SidebarOption Icon={FaBookmark} text="Bookmark"/>
      <Link to="/profile" className='linkpro'>
        < SidebarOption Icon={CgProfile} text="Profile"/>
        </Link>
        <Link to="/setting" className='linkset'>
        < SidebarOption Icon={IoIosSettings} text="Setting" />
         </Link>
   <div className="search_fav">
   <BsSearchHeart className="search_favicon"/>
            <input placeholder="BookMark.." value={search} 
            onChange={(e) => setSerch(e.target.value)}/>
   </div>
   <FaBookmark className="book_icon"/>
   <div className="text_book">BookMark</div>
    </div>
 );

}
export default PageFav;