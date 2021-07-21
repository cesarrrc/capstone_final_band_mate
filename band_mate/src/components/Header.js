import { Link } from "react-router-dom";
import { makeStyles } from '@material-ui/core/styles';
import AppBar from '@material-ui/core/AppBar';
import Toolbar from '@material-ui/core/Toolbar';
import Typography from '@material-ui/core/Typography';
import Button from '@material-ui/core/Button';
import IconButton from '@material-ui/core/IconButton';
import MenuIcon from '@material-ui/icons/Menu';

const useStyles = makeStyles((theme) => ({
  root: {
    flexGrow: 1,
  },
  menuButton: {
    marginRight: theme.spacing(2),
  },
  title: {
    flexGrow: 1,
  },
}));

function Header() {
  const classes = useStyles();

  return (

          <AppBar position="static" color="#e0e0e0">
            <Toolbar>
              
              <IconButton edge="start" className={classes.menuButton} color="inherit" aria-label="menu">
                <MenuIcon />
              </IconButton>
              
              <Typography variant="h6" className={classes.title}>
                BandMate
              </Typography>
              <Button color="inherit" component={Link} to={"/"}>Home</Button>
              <Button color="inherit" component={Link} to={"/posts"}>View all Posts</Button>
              <Button color="inherit" component={Link} to={"/login"}>Login</Button>
            </Toolbar>
          </AppBar>
         
  );
}

export default Header;
