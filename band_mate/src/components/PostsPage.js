import React from 'react';
import { useEffect } from "react";
import '../App.css';
import PostsCard from './PostCard';
import iconSquare from '../images/iconSquare.png';
import logo from '../logo.svg';

import AddPostPage from '../containers/AddPostPage'

function PostsPage(props) {
  
  useEffect(() => {
      props.loadPosts();   
  }, [props.location]);

  if (props.length <= 0) {
    return <div style={{margin: "auto", display: "flex", flexDirection:"column"}}>
      <img src={logo} className="App-logo" alt="logo" />
      <h1 style={{margin: "auto"}}>loading...</h1>
    </div>
  }

  return(
    <div>
      <AddPostPage />

      {props.posts.map((post) => {
        return (
          <PostsCard 
            key={post.post_id}
            user_id={post.user_id}
            post_id={post.post_id}
            user_name={post.user_name}
            post_type={post.post_type}
            instrument={post.instrument}
            genre={post.genre}
            post_title={post.post_title}
            post_detail={post.post_detail}
            created_on={post.created_on}
         />
        )
      })}
    </div>
  )
}

export default PostsPage;
