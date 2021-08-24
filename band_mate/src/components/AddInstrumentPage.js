import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import { Link, useHistory } from "react-router-dom";
import { Typography, TextField, MenuItem, Button, Paper } from '@material-ui/core';
import instruments from "../consts/instruments";

const useStyles = makeStyles({
  paper: {
    margin: "40px auto 40px auto",
    padding: 50,
    width: 650,
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

const AddInstrumentPage = (props) => {
  
  const classes = useStyles();
  
  let history = useHistory();

  const [instrument, setInstrument] = useState({ user_id: "", instrument_id: ""});


  function handleInputChanges(event) {
    const { name, value } = event.target;

    setInstrument((previousPost) => ({
      ...previousPost,
      [name]: value,
    }));
  }


  return (
    <Paper className={classes.paper}>
      <Typography className={classes.title} variant="h5">
        What instrument do you play?
      </Typography>
     
      <TextField
      required
          className={classes.textField}
          name="user_id"
          label="User ID"
          variant="outlined"
          onChange={handleInputChanges}
          />

      <TextField
            required
            select
            name="instrument_id"
            label="Instrument"
            helperText="Select an Instrument"
            className={classes.select}
            onChange={handleInputChanges}
            >
            { instruments.map((instrument) => (
              <MenuItem key={instrument.id} value={instrument.id}>
                {instrument.name}
              </MenuItem>
            ))}
          </TextField>

          <div style={
          {
            display: "flex",
            flexDirection: "row",
            justifyContent: "center"
            }}>

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
            component={Link} to={"/posts"}
            >
            Cancel
          </Button>
        </div>

    </Paper>
  );
}

export default AddInstrumentPage;
