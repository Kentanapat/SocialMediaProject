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
        < SidebarOption Icon={BsSearchHeartFill} text="Search"/>
        < SidebarOption Icon={MdNotifications} text="Notifications"/>
        < SidebarOption Icon={FaFacebookMessenger} text="Messager"/>
        < SidebarOption Icon={FaBookmark} text="Bookmark"/>
        < SidebarOption Icon={CgProfile} text="Profile"/>
        < SidebarOption Icon={IoIosSettings} text="Setting"/>
         
       <Button className="sidebar__post" fullWidth>POST</Button>
        </div>
       
        
        );
}
export default Sidemenu;