import { connect } from "react-redux";
import UsersPage from "../components/UsersPage"
import { loadUsers } from "../redux/actions/userAction"

function mapStateToProps(state) {
  return {
    users: state.users
  } 
}

const dispatchStateToProps = {
  loadUsers
}

export default connect(mapStateToProps, dispatchStateToProps)(UsersPage)