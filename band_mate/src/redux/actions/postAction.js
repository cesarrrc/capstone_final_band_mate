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

export function createPost(post) {
  return function (dispatch) {
    return postsApi
      .createPost(post)
      .then((newPost) => dispatch(createPostSuccess(newPost)))
      .catch((error) => console.log(error))
  }
}

export function createPostSuccess(post) {
  return {
    type: ActionTypes.CREATE_POST,
    post
  }
}