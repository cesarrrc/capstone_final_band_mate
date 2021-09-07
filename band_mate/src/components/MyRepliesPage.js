import React from 'react';
import { useEffect, useState } from 'react';
import { handleResponse, handleError, getHeaders  } from "../api/apiUtils";
import PostsCard from './PostCard';

const MyRepliesPage = (props) => {

  let [myReplies, setMyReplies] = useState(null)

  useEffect(() => {
    console.log('use effect ran')
    fetch('https://band-mate-app.herokuapp.com/myreplies', {
      method: "GET",
      headers: getHeaders(),
    })
      .then(res => {
        return res.json()
      })
      .then(data => {
        setMyReplies(data)
      })
  }, [])

  useEffect(() => {
    props.loadPosts();   
  }, [props.location]);

  return (
    <div>
      <div style={{marginTop:"40px"}}>
        <div className="myPostsTitle">
          My Replies:
        </div>
      </div>
      {myReplies && 
        myReplies.map(reply => 
          props.posts.filter(post => post.post_id == reply.post_id).map(post => <div> 
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
            </div>)
          
        )
        }
     
    </div>
  );
}

export default MyRepliesPage;

// <PostsCard 
//   key={props.posts.post_id}
//   user_id={props.posts.user_id}
//   post_id={props.posts.posts_id}
//   user_name={props.posts.user_name}
//   post_type={props.posts.post_type}
//   instrument={props.posts.instrument}
//   genre={props.posts.genre}
//   post_title={props.posts.post_title}
//   post_detail={props.posts.post_detail}
//   created_on={props.posts.created_on}          
// />