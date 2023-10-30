import React, { useEffect, useState } from "react";
import PostBox from "../postbox/Postbox";
import "./Post.css";
import FeedPost from "../feedpost/FeedPost";

function Post() {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    // Make a GET request to fetch posts from the server
    fetch('http://localhost:3001/api/posts')
      .then((response) => {
        // Check if the response status is 200 (OK)
        if (response.status === 200) {
          return response.json(); // Parse the JSON response
        } else {
          // Handle errors and return an empty array in case of an error
          console.error('Error fetching posts:', response.statusText);
          return [];
        }
      })
      .then((data) => {
        setPosts(data); // Update the state with the fetched posts
      })
      .catch((error) => {
        console.error('Error:', error);
      });
  }, []);

  return (
    <div className="Post">
      <div className="Post__header">
        <h2>Home</h2>
        <p>Welcome! {localStorage.getItem("email")}</p>
      </div>
      <PostBox />
      {posts.map((post) => (
        <FeedPost
          key={post._id} // Add a unique key to each FeedPost
          displayName={post.displayName}
          text={post.text}
          avatar={post.img} // Assuming 'img' contains the avatar URL
          image={post.img} // Assuming 'img' contains the post image URL
        />
      ))}
    </div>
  );
}

export default Post;
