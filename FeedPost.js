import React from 'react';
import "./FeedPost.css";
import { RxAvatar } from "react-icons/rx";
import {CiHeart} from "react-icons/ci";
import {BsChatDots} from "react-icons/bs"
import {FaBookmark, FaRegShareSquare} from "react-icons/fa"

function FeedPost({displayName ,text, image, avatar}) {
   return(
        <div className="feedpost">
       <div className="feed_avata">
        <RxAvatar src={avatar}/>
       </div>
    <div className="feed_body">
     <div className="feed_header">
        <div className="feed_text">
            <h3>
               {displayName}{" "}
            </h3>
        </div>
        <div className="feed_description">
            <p>{text}</p>
        </div>
     </div>
     <img src={image} alt=""/>
     <div className="feed_post_footer">
     <CiHeart fontSize="small"/>
     <BsChatDots fontSize="small"/>
     <FaRegShareSquare fontSize="small"/>
     <FaBookmark fontSize="small"/>
     </div>
    </div>
    </div>
   );
   }

export default FeedPost;