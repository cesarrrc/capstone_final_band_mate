import * as ActionTypes from "../actions/actionTypes";

export default function replyReducer(state = [], action) {
  switch (action.type) {
    case ActionTypes.CREATE_REPLY:
      return [...state, action.reply];
    default:
      return state;
  }
}