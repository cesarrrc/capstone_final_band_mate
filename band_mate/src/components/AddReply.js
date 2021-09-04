import { useState } from "react";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import { addReply } from '../api/replyApi'

function AddReply(props) {
  let history = useHistory();
  const [reply, setReply] = useState({post_id: props.post_id, reply_title: "title?", reply_detail: ""})
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setReply((previousReply) => ({
      ...previousReply,
      [name]: value
    }));
  };
  
  function handleFormSubmit(event) {
    event.preventDefault();
    console.log('button clicked')
    addReply(reply)
      .catch((error) => setError(error.message));
  }
  
  return (
    <div style={{display:"flex"}}>
      <form style={{margin:"auto"}} onSubmit={handleFormSubmit}>
        <TextField 
          style={{ width:"280px"}}
          multiline
          name="reply_detail"
          label="Add a comment..."
          value={reply.reply_detail}
          onChange={handleInputChange}
        />
        <Button type="submit" style={{marginTop:"10px"}} color="primary">Post</Button>
      </form>

    </div>
  );
};


export default AddReply;
