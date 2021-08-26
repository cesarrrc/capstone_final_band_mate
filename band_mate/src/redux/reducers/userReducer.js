import * as ActionTypes from "../actions/actionTypes";

export default function userReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.LOAD_USERS_SUCCESS:
      return action.users;
    case ActionTypes.LOGIN_USER_SUCCESS:
      console.log(action.user)
      return state

    case ActionTypes.CREATE_USER:
      return [...state, action.user]
    default:
      return state;
  }
} 