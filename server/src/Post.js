import React, { useState } from 'react';
import  PropTypes from 'prop-types';

function Post({id, title , deletePost, likes ,comment}){
return(
    <div className="Post">
        <button className="Post-d" onClick={() => deletePost(id)}>X</button>
        <div className="Post-title">{title}</div>
        <p className="like">Likes: {likes}</p>
        <p className="com">Comment:</p>
        <button className="likeclick" onClick={likes}>Like</button>
        <button className="comclick" onClick={comment}>Comment</button>
        
        {/* <img className="Post-img" src={`https://source.unplash.com/random?sig=${id}`}
        /> */}
    </div>
)
}
Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost:PropTypes.func.isRequired,
    likes: PropTypes.func.isRequired,
    comment: PropTypes.func.isRequired
};
export default Post;
