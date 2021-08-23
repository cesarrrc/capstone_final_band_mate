import * as ActionTypes from "../actions/actionTypes";

export default function postReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_POSTS_SUCCESS:
      return action.posts;
    case ActionTypes.CREATE_POST:
      return [...state, action.post]
    default:
      return state;
  }
} 