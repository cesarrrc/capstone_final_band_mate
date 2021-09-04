import React from 'react';
import { useEffect, useState } from "react";

const RepliesCard = (props) => {

  const {id} = props;
  const [replies, setReplies] = useState(null)

  useEffect(() => {
    console.log('use effect ran')
    fetch('https://band-mate-app.herokuapp.com/userReplies')
      .then(res => {
        return res.json()
      })
      .then(data => {
        setReplies(data)
      })
  }, [])
  console.log(replies)
  return (
    <div>
      {replies && 
      replies.filter((reply) => reply.post_id === props.id)
      .map(reply => 
        <div>
          <h1>{reply.user_name}</h1>
          <h2>{reply.reply_title}</h2>
          <p>{reply.reply_detail}</p>
        </div>
      )}
    </div>
  );
};


export default RepliesCard;

