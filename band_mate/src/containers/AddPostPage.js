import { connect } from "react-redux";
import AddPostPage from "../components/AddPostPage";
import { createPost } from "../redux/actions/postAction";
import genres from "../consts/genre";
import instruments from "../consts/instruments";
import postType from "../consts/postType"

function mapStateToProp(state) {
  return {
    genres,
    instruments,
    postType
  };
}

const dispatchStateToProps = {
  createPost
};

export default connect(mapStateToProp, dispatchStateToProps)(AddPostPage)