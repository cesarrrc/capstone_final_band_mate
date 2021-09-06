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
    margin: "auto auto 30px auto",
    width: "150px"
  }
});

const AddGenrePage = (props) => {
  
  const classes = useStyles();
  
  let history = useHistory();

  const [genre, setGenre] = useState({ genre_id: "1"});
  const [error, setError] = useState("");
  const [response, setResponse] = useState("")
  const [added, setAdded] = useState("")

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setGenre((previousGenre) => ({
      ...previousGenre,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    props
      .createGenre(genre)
      .then(response => setResponse(response.genre))
      .then(setGenre({ genre_id: "1"}))
      .catch((error) => setError(error.message));
  }
  return (
    <Paper className={classes.paper}>
      {console.log(added)}
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
            variant="outlined"
            color="primary"
            type="submit"
          >
              Add
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
      <div style={{margin:"auto", display:"flex", justifyContent:"center"}}>{response}</div>
    </Paper>
  );
}

export default AddGenrePage;
