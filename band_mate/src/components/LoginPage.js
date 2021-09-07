import React from 'react';
import { Link } from "react-router-dom";
import { useHistory } from "react-router-dom";
import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Card from "@material-ui/core/Card";
import CardContent from "@material-ui/core/CardContent";
import Button from "@material-ui/core/Button";
import Typography from "@material-ui/core/Typography";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles({
  root: {
    margin: "40px auto 40px auto",
    width: "375px",
    textAlign: "center"
  },
  title: {
    marginBottom: 16,
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    marginRight: 20,
  },
});

const LoginPage = (props) => {
  const classes = useStyles();
  let history = useHistory();
  
  const [loggedIn, setLoggedIn] = useState({ loggedIn: null })
  const [user, setUser] = useState({ user_name: "", password: "" });
  const [error, setError] = useState("");
  const [signingIn, setSigningIn] = useState(false);

  function handleInputChanges(e) {
    const { name, value } = e.target;

    setUser((previoususer) => ({
      ...previoususer,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setSigningIn(true)
    console.log("button clicked", {signingIn})
    props
      .loginUser(user)
      .then(() => history.push("/dashboard"))
      .then(setLoggedIn(true))
      .catch((error) => setError(error.message));
  }

  return (
    <div>
      <Card className={classes.root} style={{maxWidth: "300px"}}> 
        <CardContent>
          <p style={{fontSize:"20px"}}>
            Login
          </p>
          <div>{error}</div>
          <form onSubmit={handleFormSubmit}>
            <TextField
              required
              className={classes.textField}
              fullWidth
              name="user_name"
              label="UserName"
              variant="outlined"
              value={user.user_name}
              onChange={handleInputChanges}
            />
            <TextField
              required
              className={classes.textField}
              fullWidth
              name="password"
              label="Password"
              type="password"
              variant="outlined"
              value={user.password}
              onChange={handleInputChanges}
            />
            <div>
              <Button
                fullWidth
                type="submit"
                className={classes.button}
                variant="contained"
                style={{
                  backgroundColor:"#b9f6ca"
                }}
                
              >
                {signingIn && "Logging In"}
                {!signingIn && "Login"}
              </Button>
            </div>
          </form>
        </CardContent>
        <div>
          <p> Need an Account? 
            <Button style={{
                      marginLeft:"8px"
                    }} 
                component={Link} to={"/add-user"} variant="contained" color="primary">
              Sign up now!
            </Button>
          </p>
        </div>
      </Card>
    </div>
  );
}

export default LoginPage;
