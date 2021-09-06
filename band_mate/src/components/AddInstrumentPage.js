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

  const [instrument, setInstrument] = useState({ instrument_id: ""});


  function handleInputChanges(event) {
    const { name, value } = event.target;

    setInstrument((previousInstrument) => ({
      ...previousInstrument,
      [name]: value,
    }));
  }

  function handleFormSubmit(e) {
    e.preventDefault();

    props
      .createInstrument(instrument)
      .then(() => history.push("/add-instrument"))
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
            component={Link} to={"/add-genre"}
            >
            Add Genres
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default AddInstrumentPage;
