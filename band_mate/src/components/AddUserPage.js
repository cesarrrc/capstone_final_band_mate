import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import { Link, useHistory } from "react-router-dom";
import MenuItem from '@material-ui/core/MenuItem';

const useStyles = makeStyles({
  paper: {
    margin: "40px auto 40px auto",
    padding: 50,
    width: 650,
  },
  title: {
    marginBottom: 8,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

const AddUserPage = (props) => {
  const classes = useStyles();
  let history = useHistory();
  
  const [error, setError] = useState("");

  const[ user, setUser ] = useState({
    user_name: "",
    first_name: "",
    last_name: "",
    email: "",
    mobile_number: "",
    password: "",
    confirm_password: "",
    state: "",
    city: ""
  })

  function handleInputChanges(e) {
    const { name, value } = e.target;

    setUser((previousUser) => ({
      ...previousUser,
      [name]: value
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    props
      .createUser(user)
      .then(() => history.push("/add-instrument"))
      .catch((error) => setError(error))
  }

  return (
    <div>

        <Paper className={classes.paper} elevation={3}>
          <Typography className={classes.title} variant="h5">
            Add a new User
          </Typography>
          <form onSubmit={handleFormSubmit}>

            <TextField
              required
              className={classes.textField}
              fullWidth
              name="user_name"
              label="Create a UserName"
              variant="outlined"
              value={user.user_name}
              onChange={handleInputChanges}
            />

            <TextField
              required
              className={classes.textField}
              fullWidth
              name="first_name"
              label="First Name"
              variant="outlined"
              value={user.first_name}
              onChange={handleInputChanges}
            />

            <TextField
              required
              className={classes.textField}
              fullWidth
              name="last_name"
              label="Last Name"
              variant="outlined"
              value={user.last_name}
              onChange={handleInputChanges}
            />

              
              <TextField
              required
              className={classes.textField}
              fullWidth
              name="email"
              label="Email"
              variant="outlined"
              value={user.email}
              onChange={handleInputChanges}
            />
              
              <TextField
              required
              className={classes.textField}
              fullWidth
              type="tel"
              name="mobile_number"
              label="Phone Number"
              variant="outlined"
              value={user.mobile_number}
              onChange={handleInputChanges}
            />
              
            <TextField
              required
              className={classes.textField}
              fullWidth
              type="password"
              name="password"
              label="Create a Password"
              variant="outlined"
              value={user.password}
              onChange={handleInputChanges}
            />
              
            <TextField
              required
              className={classes.textField}
              fullWidth
              type="password"
              name="confirm_password"
              label="Confirm Password"
              variant="outlined"
              value={user.confirm_password}
              onChange={handleInputChanges}
            />
              
            <TextField
              required
              className={classes.textField}
              fullWidth
              name="state"
              label="State"
              variant="outlined"
              value={user.state}
              onChange={handleInputChanges}
            />

            <TextField
              required
              className={classes.textField}
              fullWidth
              name="city"
              label="City"
              variant="outlined"
              value={user.city}
              onChange={handleInputChanges}
            />
            
            <div>
              <Button 
                required
                className={classes.button}
                variant= "outlined"
                color="primary"
                type="submit"
              >
                Register
              </Button>
            
              <Button variant="outlined" component={Link} to={"/add-user"}>
                Cancel
              </Button>
            </div>
          </form>

        </Paper>
      
      
    </div>
  );
}

export default AddUserPage;