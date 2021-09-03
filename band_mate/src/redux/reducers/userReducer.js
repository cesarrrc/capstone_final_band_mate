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
   
      case ActionTypes.CREATE_INSTRUMENT:
      return state

      case ActionTypes.CREATE_GENRE:
        return state
  
    default:
      return state;
  }
} 