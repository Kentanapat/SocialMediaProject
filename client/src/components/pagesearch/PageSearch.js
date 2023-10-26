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
import { Link } from "react-router-dom";

function PageSearch(){
    const[search, setSerch] = useState("")
    return(
        <div className="side">
        <GiRoyalLove className="sidebar__loveIcon"/>
    <Link to="/" className="linkhome">
    <SidebarOption  active Icon={FaHome} text="Home"/>
    </Link>
    < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
    <Link to="/noti" className="linknoti">
    <SidebarOption Icon={MdNotifications} text="Notification" /> 
    </Link>
    <Link to="/fav" className="linkfav">
    < SidebarOption Icon={FaBookmark} text="Bookmark"/>
    </Link>
    <Link to="/profile" className="linkpro">
    < SidebarOption Icon={CgProfile} text="Profile"/>
    </Link>
    <Link to="/setting" className="linkset">
    < SidebarOption Icon={IoIosSettings} text="Setting"/>
    </Link>

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