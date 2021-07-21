import * as ActionTypes from "../actions/actionTypes";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_POSTS_SUCCESS:
      return action.posts;
    default:
      return state;
  }
} 