import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Typography, TextField, MenuItem, Button, Paper } from '@material-ui/core';

const useStyles = makeStyles({
  paper: {
    margin: "40px auto 40px auto",
    padding: 50,
    maxWidth: 400,
  },
  title: {
    marginBottom: 8,
    textAlign: "center"
  },
  textField: {
    display: "block",
    margin: "20px auto auto auto",
    width: "100px",
    textAlign: "center"
  },
  button: {
    margin: "auto 20px auto 20px",
    width: "100px"
  },
  select: {
    display: "flex",
    margin: "auto auto 10px auto",
    width: "150px"
  }
});

const AddGenrePage = (props) => {
  
  const classes = useStyles();
  
  let history = useHistory();

  const [genre, setGenre] = useState({ genre_id: "11"});
  const [error, setError] = useState("");
  const [response, setResponse] = useState("")
  const [added, setAdded] = useState(false)

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setGenre((previousGenre) => ({
      ...previousGenre,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setAdded(true)
    setResponse(false)

    props
      .createGenre(genre)
      .then(response => setResponse(response.genre))
      .then(() => setGenre({ genre_id: "11"}))
      .then(() => setAdded(false))
      .catch((error) => setError(error.message));
      
  }
  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h5">
        What genres do you typically play?
      </Typography>
      <form onSubmit={handleFormSubmit}>

        <TextField
              required
              select
              name="genre_id"
              label="Genre"
              value={genre.genre_id}
              helperText="Select a Genre"
              className={classes.select}
              onChange={handleInputChanges}
              >
              { props.genres.map((g) => (
                <MenuItem key={g.id} value={g.id}>
                  {g.name}
                </MenuItem>
              ))}
        </TextField>

        <div className="response">{response}</div>
        <div className="error">{error}</div>


        <div style={
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
          }
        }>
          <Button
            required
            className={classes.button}
            variant="contained"
            color="primary"
            type="submit"
          >
              {added && "Adding"} {!added && "Add" }
          </Button>
          
          <Button 
            variant="contained" 
            className={classes.button} 
            color="secondary"
            component={Link} to={"/users"}
            >
            Done
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default AddGenrePage;
