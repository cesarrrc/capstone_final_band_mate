import * as ActionTypes from "../actions/actionTypes";
import * as usersApi from "../../api/usersApi"

export function loginUser(user) {
  return function (dispatch) {
    return usersApi
      .login(user)
      .then((newUser) => dispatch(loginUserSuccess(newUser)))
      // .catch((error) => error);
  };
}

export function loginUserSuccess(user) {
  return {
    type: ActionTypes.LOGIN_USER_SUCCESS,
    user
  };
}

export function loadUsers() {
  return function (dispatch) {
    return usersApi
      .getUsers()
      .then((usersFromApi) => dispatch(loadUsersSuccess(usersFromApi)))
      .catch((error) => {console.log(error)});
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

export function createInstrument(instrument) {
  return function (dispatch) {
    return usersApi
      .addInstrument(instrument)
      .then((newInstrument) => dispatch(createInstrumentSuccess(newInstrument)))
      .catch((error) => console.log(error))
  }
}

export function createInstrumentSuccess(instrument) {
  return {
    type: ActionTypes.CREATE_INSTRUMENT,
    instrument
  }
}

export function createGenre(genre) {
  return function (dispatch) {
    return usersApi
      .addGenre(genre)
      .then((newGenre) => dispatch(createGenreSuccess(newGenre)))
      .catch((error) => console.log(error))
  }
}

export function createGenreSuccess(genre) {
  return {
    type: ActionTypes.CREATE_GENRE,
    genre
  }
}