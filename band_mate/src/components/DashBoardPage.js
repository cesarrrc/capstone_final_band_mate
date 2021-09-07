import React from 'react';
import { Link } from "react-router-dom";
import '../App.css';
import Paper from '@material-ui/core/Paper';
import Button from "@material-ui/core/Button";
import ForumIcon from '@material-ui/icons/Forum';
import PeopleIcon from '@material-ui/icons/People';
import PersonIcon from '@material-ui/icons/Person';



const DashBoardPage = () => {
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
          <Button variant="contained" component={Link} to="/" style={{backgroundColor:"#b9f6ca", display:"flex", width:"80%", margin:"10px auto 20px auto", justifyContent:"center" }}>Delete Account</Button>
        </Paper>


      </div>
    </div>
  );
}

export default DashBoardPage;
