import React from 'react';
import PostsCard from './PostCard';
import PostsPage from './PostsPage';
import { useEffect } from "react";
import '../App.css';


const MyPostsPage = (props) => {
  let id = localStorage.getItem("id")

  useEffect(() => {
    props.loadPosts();   
  }, [props.location]);
  
  
  return (
    <div>
      <div style={{marginTop:"40px"}}>
        <div className="myPostsTitle">
          My Posts:
        </div>
        {props.posts.filter(post => post.user_id == id)
        .map (post => 
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
          created_on={post.created_on}/>
          )}
          
        </div>
    </div>
  );
}

export default MyPostsPage;
