import React ,{useState}from 'react'
import "./PageSetting.css";
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
import {ImProfile} from 'react-icons/im';
import {IoInvertModeSharp ,IoCaretBackOutline} from 'react-icons/io5';
import {MdRemoveModerator} from 'react-icons/md';
import {RxAvatar} from 'react-icons/rx';
import { Link } from 'react-router-dom';

function PageSetting() {
    const[search, setSerch] = useState("")
  return (
    <div className="sideset">
    <GiRoyalLove className="sidebar__loveIcon"/>
    <Link to="/" className='linkhome'>
    <SidebarOption  Icon={FaHome} text="Home"/>
    </Link>
    <Link to="/search" className='linksearch'>
    < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
    </Link>
    <Link to="/noti" className='linknoti'>
    <SidebarOption Icon={MdNotifications} text="Notification" /> 
    </Link>
    <Link to="/fav" className='linkfav'>
    < SidebarOption Icon={FaBookmark} text="Bookmark"/>
    </Link>
    <Link to="/profile" className='linkpro'>
    < SidebarOption Icon={CgProfile} text="Profile"/>
    </Link>
    <Link to="/setting" className='linkset'>
    < SidebarOption Icon={IoIosSettings} text="Setting"/>
    </Link>

    <div className="search_set">
           <BsSearchHeart className="search_icon"/>
            <input placeholder="Search..." value={search} 
            onChange={(e) => setSerch(e.target.value)}/>
            
        </div> 

    <div className="set_bar">
     <IoIosSettings className="setlogo"/>
     <div className="text">Setting</div>
     <ImProfile className="pro-logo"/>
     <p1 className="text_icon">Profile Setting</p1>
     <IoInvertModeSharp className="mode-logo"/>
     <p1 className="text_icon1">Mode Setting</p1>
     <MdRemoveModerator className="sec-logo"/>
     <p1 className="text_icon2">Private Setting</p1>
     <MdNotificationsActive className="no-logo"/>
     <p1 className="text_icon3">Notification Setting</p1>

     <IoCaretBackOutline className="back-logo"/>
    </div>
    

    </div>
  )
}

export default PageSetting;