import { connect } from "react-redux";
import AddUserPage from "../components/AddUserPage";
import { createUser } from "../redux/actions/userAction";

const dispatchStateToProps = {
  createUser
}

export default connect(null, dispatchStateToProps)(AddUserPage)