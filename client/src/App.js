import React,{ useState } from 'react';
import './App.css';

import Navbar from './Navbar';
import Input from './Input';
import Post from './Post';
import Sidemenu from './Sidemenu';


let id =1;

function App(){
  const[posts,setPosts] = useState([]);
  const[likes,setLikes] = useState([]);

  function addPost(title){
    const newPost = {id,title};
    setPosts([newPost,...posts]);
    id += 1;
  }

  function deletePost(id){
    const updatedPosts = posts.filter((post) => post.id != id);
    setPosts(updatedPosts);
  }
   function addLikes(likes){
    const handleLike = () =>{
      setLikes(likes+1);
    }
   }

  return (
  <div className="App">
    <Navbar/>
    <Input addPost={addPost} />
    {posts.map((post)=> <Post key={post.id} id={post.id} title={post.title}
    deletePost={deletePost}  addLikes={addLikes}/>)}
    <Sidemenu/>
  </div>);
}
export default App;
