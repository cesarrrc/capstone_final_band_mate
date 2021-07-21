import * as ActionTypes from "../actions/actionTypes";
import * as postsApi from "../../api/postsApi"

export function loadPosts() {
  return function (dispatch) {
    return postsApi
      .getPosts()
      .then((postsFromApi) => dispatch(loadPostsSuccess(postsFromApi)))
      .catch((error) => console.log(error));
  };
}

export function loadPostsSuccess(posts) {
  return {
    type: ActionTypes.LOAD_POSTS_SUCCESS,
    posts,
  }
}