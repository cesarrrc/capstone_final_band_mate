import { handleResponse, handleError, storeTokenOnLocalStorage  } from "./apiUtils";

const usersUrl = "https://band-mate-app.herokuapp.com/users"

const createUserUrl = "https://band-mate-app.herokuapp.com/createUser";

const LoginUserUrl = "https://band-mate-app.herokuapp.com/login";

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

export function getUsers() {
  return fetch(usersUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function createUser(user) {
  return fetch(createUserUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(handleResponse)
  .catch(handleError)
}