import React from 'react';
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
    width: 400,
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

  function handleInputChanges(e) {
    const { name, value } = e.target;

    setUser((previoususer) => ({
      ...previoususer,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    props
      .loginUser(user)
      .then(() => history.push("/posts"))
      .then(setLoggedIn(true))
      .catch((error) => setError(error.message));
  }

  return (
    <div>
      <Card className={classes.root} style={{maxWidth: "375px"}}> 
        <CardContent>
          <Typography className={classes.title} variant="h6">
            Sign in to MyBandMate
          </Typography>
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
                type="submit"
                className={classes.button}
                variant="contained"
                color="primary"
              >
                Sign in
              </Button>
              <Button variant="outlined" color="primary">
                Cancel
              </Button>
            </div>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}

export default LoginPage;
