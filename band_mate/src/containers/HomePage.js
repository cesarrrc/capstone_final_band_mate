import { connect } from "react-redux";
import Home from "../components/Home";
import { loginUser } from "../redux/actions/userAction";

function mapStateToProps(state) {
  return {
    user: state.user
  } 
}


const dispatchStateToProps = {
  loginUser
};

export default connect(mapStateToProps, dispatchStateToProps)(Home);