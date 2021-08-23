import * as ActionTypes from "../actions/actionTypes";
import * as usersApi from "../../api/usersApi"

export function loadUsers() {
  return function (dispatch) {
    return usersApi
      .getUsers()
      .then((usersFromApi) => dispatch(loadUsersSuccess(usersFromApi)))
      .catch((error) => console.log(error));
  };
}

export function loadUsersSuccess(users) {
  return {
    type: ActionTypes.LOAD_USERS_SUCCESS,
    users,
  }
}

export function createUser(user) {
  return function (dispatch) {
    return usersApi
      .createUser(user)
      .then((newUser) => dispatch(createUserSuccess(newUser)))
      .catch((error) => console.log(error))
  }
}

export function createUserSuccess(user) {
  return {
    type: ActionTypes.CREATE_USER,
    user
  }
}