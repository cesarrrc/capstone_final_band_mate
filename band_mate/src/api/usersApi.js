import { handleResponse, handleError, storeTokenOnLocalStorage, getHeaders  } from "./apiUtils";

const LoginUserUrl = "https://band-mate-app.herokuapp.com/login";

const createUserUrl = "https://band-mate-app.herokuapp.com/createUser";

const addUserInstrumentUrl = "https://band-mate-app.herokuapp.com/addInstrument";

const addUserGenreUrl = "https://band-mate-app.herokuapp.com/addGenre";

const usersUrl = "https://band-mate-app.herokuapp.com/users";

export function login(user) {
  return fetch(LoginUserUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(handleResponse)
  .then(storeTokenOnLocalStorage)
  .catch(handleError)
}

export function createUser(user) {
  return fetch(createUserUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(handleResponse)
  .then(storeTokenOnLocalStorage)
  .catch(handleError)
}

export function addInstrument(instrument) {
  return fetch(addUserInstrumentUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(instrument)
  })
  .then(handleResponse)
  .catch(handleError)
}

export function addGenre(genre) {
  return fetch(addUserGenreUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(genre)
  })
  .then(handleResponse)
  .catch(handleError)
}

export function getUsers() {
  return fetch(usersUrl, {
    headers: getHeaders()
  })
    .then(handleResponse)
    .catch(handleError);
}