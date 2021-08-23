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

function AddPostPage(props) {
  const classes = useStyles();
  let history = useHistory();
  const [post, setPost] = useState({ user_id: "", instrument_id: "", genre_id: "", post_type: "", post_title: "", post_detail: "" });

  function handleInputChanges(event) {
    const { name, value } = event.target;

    setPost((previousPost) => ({
      ...previousPost,
      [name]: value,
    }));
  }

  function handleFormSubmit(event) {
    event.preventDefault(); //prevent from page to reload

    props.createPost(post).then(() => history.push("/posts"));
  }

  return (
    <Paper className={classes.paper} elevation={3}>
      <Typography className={classes.title} variant="h5">
        Add a new post
      </Typography>
      <form onSubmit={handleFormSubmit}>
        <TextField
          required
          className={classes.textField}
          fullWidth
          name="user_id"
          label="User ID"
          variant="outlined"
          value={post.user_id}
          onChange={handleInputChanges}
        />
        <TextField
          required
          className={classes.textField}
          fullWidth
          name="instrument_id"
          label="Instrument ID"
          variant="outlined"
          value={post.instrument_id}
          onChange={handleInputChanges}
        />
        {/* <TextField
          className={classes.textField}
          fullWidth
          name="genre_id"
          label="Genre"
          variant="outlined"
          value={post.genre_id}
          onChange={handleInputChanges}
        /> */}

        <TextField
          required
          select
          name="genre_id"
          label="Genre"
          value={post.genre_id}
          helperText="Please select your Genre"
          onChange={handleInputChanges}
        >
          { props.genres.map((genre) => (
            <MenuItem key={genre.id} value={genre.id}>
              {genre.name}
            </MenuItem>
          ))}
        </TextField>

        <TextField
          required
          className={classes.textField}
          fullWidth
          name="post_type"
          label="Post Type"
          variant="outlined"
          value={post.post_type}
          onChange={handleInputChanges}
        />
        <TextField
          required
          className={classes.textField}
          fullWidth
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
          name="post_detail"
          label="Post Detail"
          variant="outlined"
          value={post.post_detail}
          onChange={handleInputChanges}
        />
        <div>
          <Button
            required
            className={classes.button}
            variant="outlined"
            color="primary"
            type="submit"
          >
            Add
          </Button>
          <Button variant="outlined" component={Link} to={"/posts"}>
            Cancel
          </Button>
        </div>
      </form>
    </Paper>
  );
}

export default AddPostPage;