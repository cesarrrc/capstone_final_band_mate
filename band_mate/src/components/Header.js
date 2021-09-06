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
          marginBottom:"40px",
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
            <MenuItem component={Link} to={"/"} onClick={handleClose}>Home</MenuItem>
            <MenuItem component={Link} to={"/posts"} onClick={handleClose}>View Posts</MenuItem>
            <MenuItem component={Link} to={"/users"} onClick={handleClose}>View Users</MenuItem>
            <MenuItem component={Link} to={"/add-post"} onClick={handleClose}>Add a Post</MenuItem>
            <MenuItem component={Link} to={"/add-user"} onClick={handleClose}>Register</MenuItem>
            <MenuItem component={Link} to={"/add-user"} onClick={handleClose}>Register</MenuItem>
            <MenuItem component={Link} to={"/about-us"} onClick={handleClose}>Register</MenuItem>
            <MenuItem component={Link} to={"/contact-us"} onClick={handleClose}>Register</MenuItem>
            <MenuItem component={Link} to={"/login"} onClick={handleClose}>Login</MenuItem>
            <MenuItem component={Link} to={"/logout"} onClick={handleClose}>Login</MenuItem>


          </Menu>

          <Typography variant="h6" 
            style={{
              margin: "auto",
            }}
          >
              MyBandMate
          </Typography>
        </div>

        <div>
          <img src={logo} alt="Italian Trulli" 
            style={{
              maxWidth: "100px",
              margin:"10px auto auto auto",
              display:"flex",
              justifyContent:"center"
            }} 
          />
        </div>

          {!loggedIn && 
            <div           
              style={{
                display:"flex",
                height:"80px",
                width: "auto",
                flexDirection:"column",
                alignItems:"flex-end",
                margin:"0 auto 0 auto",
                padding:"0"
              }}
            >
              <Button color="inherit" component={Link} to={"/login"}>Login</Button>
              <Button color="inherit" component={Link} to={"/add-user"}>Register</Button>
            
            </div>
          }
          
          {loggedIn && 
            <div
              style={{
                display:"flex",
                height:"80px",
                justifyContent:"flex-end",
              }}
            >
              <Button color="inherit" component={Link} to={"/login"} 
               onClick={() => {
                  localStorage.clear()
                  history.push('/login')
                  window.location.reload(false)
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
