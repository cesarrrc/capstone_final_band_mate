
import { connect } from "react-redux";
import LoginPage from "../components/LoginPage";
import { loginUser } from "../redux/actions/userAction";

function mapStateToProps(state) {
  return {
    user: state.user
  } 
}


const dispatchStateToProps = {
  loginUser,
};

export default connect(mapStateToProps, dispatchStateToProps)(LoginPage);