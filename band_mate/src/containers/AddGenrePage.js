import { connect } from "react-redux";
import AddGenrePage from "../components/AddGenrePage";
import { createGenre } from "../redux/actions/userAction";
import genres from "../consts/genre";

function mapStateToProp(state) {
  return {
    genres
  };
}

const dispatchStateToProps = {
  createGenre
};

export default connect(mapStateToProp, dispatchStateToProps)(AddGenrePage)