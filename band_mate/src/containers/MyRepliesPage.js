import { connect } from "react-redux";
import MyRepliesPage from "../components/MyRepliesPage";
import { loadPosts } from "../redux/actions/postAction"



function mapStateToProps(state) {

  return {
    posts: state.posts
  } 
}

const dispatchStateToProps = {
  loadPosts
}

export default connect(mapStateToProps, dispatchStateToProps)(MyRepliesPage)