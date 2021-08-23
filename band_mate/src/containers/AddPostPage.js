import { connect } from "react-redux";
import AddPostPage from "../components/AddPostPage";
import { createPost } from "../redux/actions/postAction";
import genres from "../consts/genre";

function mapStateToProp(state) {
  return {
    genres
  };
}

const dispatchStateToProps = {
  createPost
};

export default connect(mapStateToProp, dispatchStateToProps)(AddPostPage)