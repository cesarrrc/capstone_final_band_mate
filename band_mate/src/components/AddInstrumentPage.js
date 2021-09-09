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
    width: "auto"
  },
  select: {
    display: "flex",
    margin: "auto auto 30px auto",
    width: "150px"
  }
});

const AddInstrumentPage = (props) => {
  
  const classes = useStyles();
  
  let history = useHistory();
  const [error, setError] = useState("");
  const [response, setResponse] = useState("")
  const [added, setAdded] = useState(false)
  const [instrument, setInstrument] = useState({ instrument_id: "1"});


  function handleInputChanges(event) {
    const { name, value } = event.target;

    setInstrument((previousInstrument) => ({
      ...previousInstrument,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();
    setAdded(true)
    setResponse(false)

    props
      .createInstrument(instrument)
      .then(response => setResponse(response.instrument))
      .then(() => setInstrument({ genre_id: "1"}))
      .then(() => setAdded(false))
      .then(() => history.push("/add-instrument"))
      .catch((error) => setError(error.message));
  }

  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h5">
        What instrument do you play?
      </Typography>
      <form onSubmit={handleFormSubmit}>

        <TextField
              required
              select
              name="instrument_id"
              label="Instrument"
              value={instrument.instrument_id}
              helperText="Select an Instrument"
              className={classes.select}
              onChange={handleInputChanges}
              >
              { props.instruments.map((i) => (
                <MenuItem key={i.id} value={i.id}>
                  {i.name}
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
            component={Link} to={"/add-genre"}
            >
            Go to Genres
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default AddInstrumentPage;
