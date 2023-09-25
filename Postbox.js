import React from 'react';
import "./PostBox.css";
import {RxAvatar} from "react-icons/rx";
import { Button } from "@mui/material";
function PostBox() {
  return(
    <div className="postbox">
      <from>
        <div className="post__input">
         <RxAvatar src=" https://i.pinimg.com/originals/06/a0/c7/06a0c713d1cff992404ca31b39dd5b50.jpg"/>
         <input className="postbox_w"placeholder="What's you feel today?" type="text"></input>
         </div>
         <input className="postbox_img" placeholder="Enter image URL" type="text"/>
       <Button className="postbox_btn">Post</Button>
     </from>      
    </div>
  )
  
 }
 export default PostBox;