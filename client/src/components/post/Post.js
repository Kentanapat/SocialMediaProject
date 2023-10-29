import React, { useEffect, useState } from "react";
import PostBox from "../postbox/Postbox";
import axios from "axios";
import "./Post.css"
import FeedPost from "../feedpost/FeedPost";

function Post(){
   const [posts,setPost] = useState([]) ;
    return(
       <div className="Post">
        <div className="Post__header">
            <h2>Home</h2>
            <p>Welcome!  {localStorage.getItem("email")}</p>
        </div>
       <PostBox />
       {posts.map(post =>(
       <FeedPost
       displayName={post.displayName}
       text={post.text} 
       avatar={post.avatar}
       image={post.image} />
     ))}


       </div>
    );

}
export default Post
// import React, { useState, useEffect } from 'react';
// import  PropTypes from 'prop-types';


// function Post({id, title , deletePost, likes ,comment}){
// return(
//     <div className="Post">
//         <button className="Post-d" onClick={() => deletePost(id)}>X</button>
//         <div className="Post-title">{title}</div>
//         <p className="like">Likes:0 {likes}</p>
//         <p className="com">Comment:0</p>
//         <button className="likeclick" onClick={likes}>Like</button>
//         <button className="comclick" onClick={comment}>Comment</button>
        
//         {<img className="Post-img" /> }
       
//     </div>
// )
// }
 
// Post.propTypes = {
//     id: PropTypes.number.isRequired,
//     title: PropTypes.string.isRequired,
//     deletePost:PropTypes.func.isRequired,
//     likes: PropTypes.func.isRequired,
//     comment: PropTypes.func.isRequired
// };
// export default Post;