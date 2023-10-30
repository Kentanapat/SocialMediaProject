import React, { useState } from 'react';
import "./PostBox.css";
import {RxAvatar} from "react-icons/rx";
import { Button } from "@mui/material";

function PostBox() {
  const [postContent, setPostContent] = useState('');

  const handlePost = () => {
    if (postContent) {
      fetch('http://localhost:3001/api/posts')
        .then((response) => {
          if (response.status === 200) {
            console.log('Post successful');
            setPostContent(''); // Reset the input field
          } else {
            console.error('Error posting');
          }
        })
        .catch((error) => {
          console.error('Error:', error);
        });
    }
  };

  return(
    <div className="postbox">
    <div className="post__input">
      <RxAvatar src="https://i.pinimg.com/originals/06/a0/c7/06a0c713d1cff992404ca31b39dd5b50.jpg" />
      <input
        className="postbox_w"
        placeholder="How are you feeling?"
        type="text"
        value={postContent}
        onChange={(e) => setPostContent(e.target.value)}
      />
    </div>
    <Button className="postbox_btn" onClick={handlePost}>
      Post
    </Button>
  </div>
  )

 }
 export default PostBox;