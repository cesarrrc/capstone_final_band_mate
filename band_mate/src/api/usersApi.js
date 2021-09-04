import { handleResponse, handleError, storeTokenOnLocalStorage, getHeaders  } from "./apiUtils";

const url = "https://band-mate-app.herokuapp.com"

export function login(user) {
  return fetch(`${url}/login`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(handleResponse)
  .then(storeTokenOnLocalStorage)
  .catch(handleError)
}

export function createUser(user) {
  return fetch(`${url}/createUser`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(user)
  })
  .then(handleResponse)
  .then(storeTokenOnLocalStorage)
  .catch(handleError)
}

export function addInstrument(instrument) {
  return fetch(`${url}/addInstrument`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(instrument)
  })
  .then(handleResponse)
  .catch(handleError)
}

export function addGenre(genre) {
  return fetch(`${url}/addGenre`, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(genre)
  })
  .then(handleResponse)
  .catch(handleError)
}

export function getUsers() {
  return fetch(`${url}/users`, {
    headers: getHeaders()
  })
    .then(handleResponse)
    .catch(handleError);
}