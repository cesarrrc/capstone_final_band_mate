import { connect } from "react-redux";
import AddUserPage from "../components/AddUserPage";
import { createUser } from "../redux/actions/userAction";
import genres from "../consts/genre";
import instruments from "../consts/instruments";

function mapStateToProp(state) {
  return {
    genres,
    instruments
  };
}

const dispatchStateToProps = {
  createUser
}

export default connect(mapStateToProp, dispatchStateToProps)(AddUserPage)