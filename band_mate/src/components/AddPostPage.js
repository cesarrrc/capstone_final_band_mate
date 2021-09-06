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
    margin: "auto auto auto auto",
    maxWidth: "400pt",
    margin: "20px auto 20px auto"
  },
  title: {
    textAlign: "center"
  },
  textField: {
    display: "block",
    marginBottom: 20,
  },
  button: {
    margin: "auto 20px auto 20px",
    width: "100px"
  },
});


function AddPostPage(props) {
  const classes = useStyles();
  let history = useHistory();
  
  const [post, setPost] = useState({ instrument_id: "1", genre_id: "1", post_type: "", post_title: "", post_detail: "" });

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setPost((previousPost) => ({
      ...previousPost,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault(); //prevent from page to reload

    props
      .createPost(post)
      .then(() => history.push("/posts"))
      .then(() => history.go(0));
  }

  return (
    <Paper className={classes.paper} >
      <div
        style= {{
          padding: "10px 10px 10px 10px",
          maxWidth: "400pt",
        }}
      >
        <Typography className={classes.title} variant="h5">
          Add a new post
        </Typography>
  
          <form onSubmit={handleFormSubmit}>

           <div style={{
                display: "flex",
                flexDirection: "row",
                justifyContent: "space-around",
                marginBottom: "20px",
              }}>
            
              <TextField
                required
                select
                name="instrument_id"
                label="Instrument"
                value={post.instrument_id}
                helperText="Select an Instrument"
                onChange={handleInputChanges}
              >
                {props.instruments.map((instrument) => (
                  <MenuItem key={instrument.id} value={instrument.id}>
                    {instrument.name}
                  </MenuItem>
                 ))}
              </TextField>
        

              <TextField
                required
                select
                name="genre_id"
                label="Genre"
                value={post.genre_id}
                helperText="Select a Genre"
                onChange={handleInputChanges}
              >
              {props.genres.map((genre) => (
                <MenuItem key={genre.id} value={genre.id}>
                  {genre.name}
                </MenuItem>
              ))}
            </TextField>

            <TextField
              required
              select
              name="post_type"
              label="Post-Type"
              value={post.post_type}
              helperText="Select a Category"
              onChange={handleInputChanges}
              >
              { props.postType.map((category) => (
                <MenuItem key={category.id} value={category.id}>
                  {category.name}
                </MenuItem>
              ))}
            </TextField>

          </div>
            
          <TextField
            fullWidth
            required
            className={classes.textField}
            name="post_title"
            label="Title"
            variant="outlined"
            value={post.post_title}
            onChange={handleInputChanges}
            />
          <TextField
            required
            className={classes.textField}
            fullWidth
            multiline
            rows={2}
            rowsMax={4}
            name="post_detail"
            label="Post Detail"
            variant="outlined"
            value={post.post_detail}
            onChange={handleInputChanges}
          />
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
        </form>
      </div>
    </Paper>
  );
}

export default AddPostPage;