import React from 'react';
import './Sidemenu.css'
import SidebarOption from './SidebarOption';
import {FaHome} from 'react-icons/fa';
import {FaBookmark ,FaFacebookMessenger} from 'react-icons/fa';
import {BsSearchHeartFill} from 'react-icons/bs'
import {MdNotifications} from 'react-icons/md';
import {CgProfile} from 'react-icons/cg';
import {IoIosSettings} from 'react-icons/io';
import{GiRoyalLove} from 'react-icons/gi';
import { Button } from '@mui/material';
import { Link } from 'react-router-dom';


// const Route = () => (
//     <Router>
//       <div>
//         <ul>
//           <li>
//             <Link to="/">Home</Link>
//           </li>
//           <li>
//             <Link to="/about">About</Link>
//           </li>
//           <li>
//             <Link to="/topics">Topics</Link>
//           </li>
//         </ul>
  
//         <hr />
  
//         <Route exact path="/" component={Home} />
//         <Route path="/about" component={About} />
//         <Route path="/topics" component={Topics} />
//       </div>
//     </Router>
//   );

function Sidemenu(){
    return (

        <div className="sidebar">
        <GiRoyalLove className="sidebar__loveIcon"/>
        
       
        < SidebarOption active Icon={FaHome} text="Home"/>
        
        <Link to="/search" className='linksearch'>
        < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
        </Link>
        
        <Link to="/noti" className='linknoti'>
        < SidebarOption Icon={MdNotifications} text="Notifications"/>
        </Link>
        <Link to="/message" className='linkmessage'>
        < SidebarOption Icon={FaFacebookMessenger} text="Messager"/>
        </Link>
        <Link to="/fav" className='linkfav'>
        < SidebarOption Icon={FaBookmark} text="Bookmark"/>
        </Link>
        <Link to="/profile" className='linkpro'>
        < SidebarOption Icon={CgProfile} text="Profile"/>
        </Link>
        <Link to="/setting" className='linkset'>
        < SidebarOption Icon={IoIosSettings} text="Setting" />
         </Link>
        </div>
       
        
        );
}
export default Sidemenu;