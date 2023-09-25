import React , {useState} from "react";
import "./PageSearch.css";
import SidebarOption from './SidebarOption';
import {BsSearchHeart} from "react-icons/bs";
import {FaHome} from 'react-icons/fa';
import {FaBookmark ,FaFacebookMessenger} from 'react-icons/fa';
import {BsSearchHeartFill} from 'react-icons/bs'
import {MdNotifications} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {IoIosSettings} from 'react-icons/io';
import{GiRoyalLove} from 'react-icons/gi';

function PageSearch(){
    const[search, setSerch] = useState("")
    return(
        <div className="side">
        <GiRoyalLove className="sidebar__loveIcon"/>
        <SidebarOption  active Icon={FaHome} text="Home"/>
   < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
   <SidebarOption Icon={MdNotifications} text="Notification" /> 
   < SidebarOption Icon={FaBookmark} text="Bookmark"/>
   < SidebarOption Icon={CgProfile} text="Profile"/>
   < SidebarOption Icon={IoIosSettings} text="Setting"/>

        <div className="search_bar">
           <BsSearchHeart className="search_icon"/>
            <input placeholder="Search..." value={search} 
            onChange={(e) => setSerch(e.target.value)}/>
            <div className="R">SearchResults</div>
        </div> 
 </div>
    );
}
export default PageSearch;