import { useState } from "react";
import { Link } from "react-router-dom";
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';
import Menu from '@material-ui/core/Menu';
import MenuItem from '@material-ui/core/MenuItem';
import { useHistory } from "react-router";
import logo from '../images/logo.png'
import '../App.css';


function Header(props) {
  const history = useHistory()
  const [anchorEl, setAnchorEl] = useState(null);

  let loggedIn = localStorage.getItem("loggedIn")

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <div>
      <div 
        style={{
          backgroundColor:"#F3EFE0", 
          width:"auto", 
          height:"80px",
          display:"grid",
          gridTemplateColumns:"1fr 1fr 1fr",
          margin:"auto",
        }}>

        <div
          style={{
            display: "flex",
            height:"80px",
            maxWidth:"210px"
          }}
        >
          <IconButton 
            aria-controls="simple-menu" 
            aria-haspopup="true" 
            onClick={handleClick} 
            color="inherit" 
            aria-label="menu"
            style={{
              
            }}
            >
              <MenuIcon style={{fontSize:"35px"}} />
          </IconButton>
          <Menu
            id="simple-menu"
            anchorEl={anchorEl}
            keepMounted
            open={Boolean(anchorEl)}
            onClose={handleClose}
          >

          {loggedIn && 
            <div>
              <MenuItem component={Link} to={"/Dashboard"} onClick={handleClose}>Dashboard</MenuItem>
              <MenuItem component={Link} to={"/posts"} onClick={handleClose}>View Posts</MenuItem>
              <MenuItem component={Link} to={"/users"} onClick={handleClose}>View Users</MenuItem>
              <MenuItem component={Link} to={"/add-post"} onClick={handleClose}>Add a Post</MenuItem>
              <MenuItem component={Link} to={"/my-profile"} onClick={handleClose}>View my Profile</MenuItem>
              <MenuItem component={Link} to={"/my-posts"} onClick={handleClose}>View My Posts</MenuItem>
              <MenuItem component={Link} to={"/my-replies"} onClick={handleClose}>View my Replies</MenuItem>
              <MenuItem component={Link} to={"/about"} onClick={handleClose}>About Us</MenuItem>
              <MenuItem component={Link} to={"/contact"}  onClick={handleClose}>Contact Us</MenuItem>
              <MenuItem component={Link} to={"/logout"} style={{backgroundColor:"#F97068"}} onClick={handleClose}>Logout</MenuItem>

            </div>
          }

          {!loggedIn && 
            <div>
              <MenuItem component={Link} to={"/"} onClick={handleClose}>Home</MenuItem>
              <MenuItem component={Link} to={"/login"} onClick={handleClose}>Login</MenuItem>
              <MenuItem component={Link} to={"/add-user"} onClick={handleClose}>Register</MenuItem>
              <MenuItem component={Link} to={"/posts"} onClick={handleClose}>View Posts</MenuItem>
            </div>
          }
          
          </Menu>

          <p className="headerTitle">
              MyBand
          </p>
        </div>

        <div component={Link} to={"/"}>
          <Link to={"/"} >

            <img src={logo}  alt="Italian Trulli" 
              style={{
                maxWidth: "100px",
                margin:"auto",
                display:"flex",
                justifyContent:"center"
              }} 
              />
            </Link>
        </div>

          {!loggedIn && 
            <div >
              <div className="loginButtoncontainer">
                <Button color="inherit" component={Link} to={"/login"}>Login</Button>
                <Button color="inherit" component={Link} to={"/add-user"}>Register</Button>
              </div>
            
            </div>
          }
          
          {loggedIn && 
            <div
              style={{
                display:"flex",
                height:"80px",
                justifyContent:"flex-end",
                padding: "0"
              }}
            >
              <Button stlye={{padding:"0"}} color="inherit" component={Link} to={"/"} 
               onClick={() => {
                  localStorage.clear()
                }}
              >
                Logout
              </Button>
             </div>

          }
      </div>  

   </div>
  );
}

export default Header;
