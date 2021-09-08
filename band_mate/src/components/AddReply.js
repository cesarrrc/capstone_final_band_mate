import { useState } from "react";
import { TextField } from '@material-ui/core';
import Button from '@material-ui/core/Button';
import { Link, useHistory } from "react-router-dom";
import { handleResponse, handleError, getHeaders  } from "../api/apiUtils";


function AddReply(props) {
  let loggedIn = localStorage.getItem("loggedIn")
  let history = useHistory();
  const [reply, setReply] = useState({ post_id: props.post_id, reply_title: "title?", reply_detail: "" })
  const [error, setError] = useState("");

  const handleInputChange = (event) => {
    const { name, value } = event.target

    setReply((previousReply) => ({
      ...previousReply,
      [name]: value
    }));
  };
  
  function handleFormSubmit(event) {
    event.preventDefault()
    fetch("https://band-mate-app.herokuapp.com/replies", {
      method: "POST",
      headers: getHeaders(),
      body: JSON.stringify(reply)
    })
    .then(handleResponse)
    .then(reply => setReply({post_id: props.post_id, reply_title: "title?", reply_detail: ""}))
    .catch((error) => setError(error.message));
  }
  
  return (
    <div style={{display:"flex"}}>
      {loggedIn && 
      
      <form style={{margin:"auto"}} onSubmit={handleFormSubmit}>
        <TextField 
          style={{ width:"180px"}}
          multiline
          name="reply_detail"
          label="Add a comment..."
          value={reply.reply_detail}
          onChange={handleInputChange}
        />
        <Button type="submit" style={{marginTop:"10px"}} color="primary">Post</Button>
      </form>

      }

    </div>
  );
};


export default AddReply;
