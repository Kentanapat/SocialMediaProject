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

function PageFav(){
    const [search,setSerch] = useState("")
 return(
    <div className="side_barfav">

    <GiRoyalLove className="sidebar__loveIcon"/>
    <SidebarOption  Icon={FaHome} text="Home"/>
    < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
    <SidebarOption Icon={MdNotifications} text="Notification" /> 
    < SidebarOption Icon={FaBookmark} text="Bookmark"/>
    < SidebarOption Icon={CgProfile} text="Profile"/>
    < SidebarOption Icon={IoIosSettings} text="Setting"/>
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