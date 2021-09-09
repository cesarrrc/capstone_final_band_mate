import React, { useState } from 'react';
import { Link, useHistory } from "react-router-dom";
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';
import Dialog from '@material-ui/core/Dialog';
import DialogActions from '@material-ui/core/DialogActions';
import DialogContent from '@material-ui/core/DialogContent';
import DialogContentText from '@material-ui/core/DialogContentText';
import { getHeaders, handleResponse } from '../api/apiUtils';

const DashBoardPage = () => {
  const [open, setOpen] = useState(false);
  const [error, setError] = useState("");
  let id = localStorage.getItem("id")
  const history = useHistory()
  
  const handleClickOpen = () => {
    setOpen(true);
  };

  const handleClose = () => {
    setOpen(false);
  };
  const handleDelete = (e) => {
    e.preventDefault()
    console.log(id)
    
    fetch(`https://band-mate-app.herokuapp.com/user/${id}`, {
      method: "DELETE",
      headers: getHeaders(),
    })
    .then(handleResponse => {console.log(handleResponse)})
    .then(() => history.push('/'))
    .catch((error) => setError(error))
  }

  return (
    <div>
      <div className="dashContainer">
        <Paper>
          <div className="dashItem">
            <ForumIcon style={{ fontSize: 100 }}/>
          </div>

          <Button variant="contained" component={Link} to="/posts" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> View Posts</Button>
          <Button variant="contained" component={Link} to="/add-post" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> Write Post</Button>
          <Button variant="contained" component={Link} to="/my-posts" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> View My Posts</Button>
          <Button variant="contained" component={Link} to="/my-replies" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> View My Replies</Button>

        </Paper>

        <Paper>
          <div className="dashItem">
            <PeopleIcon style={{ fontSize: 100 }}/>
          </div>
          <Button variant="contained" component={Link} to="/users" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> View Other Musicians</Button>
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> Find by area</Button>
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> Find by Instrument</Button>
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}> Find by Genre</Button>
        </Paper>
        
        <Paper>
          <div className="dashItem">
            <PersonIcon style={{ fontSize: 100 }}/>
          </div>
          <Button variant="contained" component={Link} to="/users" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}>View My Profile</Button>
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}>Edit My Profile</Button>
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}
            onClick={() => {
              localStorage.clear()
            }}
          >Logout</Button>
          <Button variant="contained" onClick={handleClickOpen} style={{backgroundColor:"#F97068", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}>Delete Account</Button>
        </Paper>
        
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
                  <Button onClick={handleDelete} color="primary" autoFocus>
                    Sure
                  </Button>
                </DialogActions>
              </Dialog>

      </div>
    </div>
  );
}

export default DashBoardPage;
