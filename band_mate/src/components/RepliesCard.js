import React from 'react';
import { useEffect, useState } from "react";
import { useHistory } from 'react-router-dom'
import DeleteIcon from '@material-ui/icons/Delete';
import EditIcon from '@material-ui/icons/Edit';
import IconButton from '@material-ui/core/IconButton';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import Button from '@material-ui/core/Button';
import { getHeaders, handleResponse } from '../api/apiUtils';

const RepliesCard = (props) => {
  let userId = localStorage.getItem("id")
  const history = useHistory()
  const [error, setError] = useState("");
  const {post_id} = props;
  const [thisId, setThisId] = useState("")
  const [open, setOpen] = useState(false);
  const [replies, setReplies] = useState(null)
  const [adding, setAdding] = useState(false);

  const handleClickOpen = (replyId) => {
    
    setOpen(true);
    console.log(replyId)
    setThisId(replyId)
  };

  const handleClose = () => {
    setOpen(false);
  };

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

  const handleDelete = (replyId) => {
    console.log(thisId)
    fetch(`https://band-mate-app.herokuapp.com/replies/${thisId}`, {
      method: "DELETE",
      headers: getHeaders(),
    })
    .then(handleResponse => {console.log(handleResponse)})
    .then(() => history.go(0))
    .catch((error) => setError(error))
  }

  return (
    <div>
      {replies && 
      replies.filter((reply) => reply.post_id === props.post_id)
      .map(r => 
        
        <div key={r.reply_id}>
          
            <h1>{r.user_name}</h1>
            <p>{r.reply_detail}</p>
        
          {userId == r.user_id &&

            <div>
            
              <IconButton fontSize="small" aria-label="edit">
                <EditIcon />
              </IconButton>
                
              <IconButton fontSize="small" onClick={() => handleClickOpen(r.reply_id)} aria-label="delete">
                <DeleteIcon />
              </IconButton>

              <Dialog
                open={open}
                onClose={handleClose}
                aria-labelledby="alert-dialog-title"
                aria-describedby="alert-dialog-description"
                >
              <DialogContent>
                <DialogContentText id="alert-dialog-description">
                  Are you sure you want to delete?
                </DialogContentText>
              </DialogContent>
              <DialogActions>
                <Button onClick={handleClose} color="primary">
                  Cancel
                </Button>
                <Button onClick={() => handleDelete(r.reply_id)} color="primary" autoFocus>
                  Sure
                </Button>
              </DialogActions>
            </Dialog>
            
            </div>
          }
          </div>
      )}
    </div>
  );
};


export default RepliesCard;

