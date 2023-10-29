import React , {useState} from 'react';
import "./FeedPost.css";
import { RxAvatar } from "react-icons/rx";
import {CiHeart} from "react-icons/ci";
import {BsChatDots} from "react-icons/bs";
import {FaBookmark, FaRegShareSquare} from "react-icons/fa";

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
     <CiHeart className='like' fontSize="small"/>
     <BsChatDots className='comment' fontSize="small"/>
     <FaRegShareSquare className='sh' fontSize="small"/>
     <FaBookmark className='fav' fontSize="small"/>
     </div>
    </div>
    </div>
   );
   }

export default FeedPost;