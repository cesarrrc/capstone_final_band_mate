import { connect } from "react-redux";
import MyPostsPage from "../components/MyPostsPage";
import { loadPosts } from "../redux/actions/postAction"



function mapStateToProps(state) {

  return {
    posts: state.posts
  } 
}

const dispatchStateToProps = {
  loadPosts
}

export default connect(mapStateToProps, dispatchStateToProps)(MyPostsPage)