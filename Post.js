import React from 'react';
import  PropTypes from 'prop-types';

function Post({id, title , deletePost}){
return(
    <div className="Post">
        <button className="Post-d" onClick={() => deletePost(id)}>X</button>
        <div className="Post-title">{title}</div>
        {/* <img className="Post-img" src={`https://source.unplash.com/random?sig=${id}`}
        /> */}
    </div>
)
}
Post.propTypes = {
    id: PropTypes.number.isRequired,
    title: PropTypes.string.isRequired,
    deletePost:PropTypes.func.isRequired
};
export default Post;