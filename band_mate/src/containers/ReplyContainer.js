import { connect } from "react-redux";
import PostsPage from "../components/PostsPage"
import {createReply} from '../redux/actions/replyAction'

function mapStateToProps(state) {

  return {
    reply: state.reply
  } 
}

const dispatchStateToProps = {
  createReply
}

export default connect(mapStateToProps, dispatchStateToProps)(PostsPage)