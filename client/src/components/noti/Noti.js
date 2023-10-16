import React from "react";
import {MdNotifications} from 'react-icons/md';
import {AiFillHeart} from 'react-icons/ai';
import {BsFillChatHeartFill} from 'react-icons/bs';
import {BsHeartArrow} from 'react-icons/bs';
import SidebarOption from './SidebarOption';
import {FaHome} from 'react-icons/fa';
import {FaBookmark ,FaFacebookMessenger} from 'react-icons/fa';
import {BsSearchHeartFill} from 'react-icons/bs';
import {CgProfile} from 'react-icons/cg';
import {IoIosSettings} from 'react-icons/io';
import{GiRoyalLove} from 'react-icons/gi';
import './Noti.css';

function Noti(){
    return(
       <div className="box1">
        <MdNotifications className="notilogo"/>
        <div className="noti">Notifications</div>
        <div className="lineside"></div>
        <div className="midlay">
            <AiFillHeart className="lovereact"/>
         <p1 className="midlaytext">Chinjang like your post</p1>
         <div className="midlay1">
          <AiFillHeart className="lovereact"/>
         <p1 className="midlaytext1">Alice like your post</p1>
         </div>
         <div className="midlay2">
            <BsFillChatHeartFill className="commentreact"/>
         <p1 className="midlaytext2">Luna comment your post </p1>
          <BsHeartArrow className="reply"/>
         <p2 className="midlaytext3">reply ⠀⠀omg!! u r so beautiful gurllll</p2>
         </div>
        </div>
        <GiRoyalLove className="sidebar__loveIcon"/>

        < SidebarOption active Icon={FaHome} text="Home"/>
        < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
        <SidebarOption Icon={MdNotifications} text="Notification" />
        < SidebarOption Icon={FaBookmark} text="Bookmark"/>
        < SidebarOption Icon={CgProfile} text="Profile"/>
        < SidebarOption Icon={IoIosSettings} text="Setting"/>
         
       </div>
       
    )
}
export default Noti;

// function Box(prep){
//     return(
//         <div className="box">
//             {props.children}
//         </div>
//     )
// }
