import { handleResponse, handleError  } from "./apiUtils";

const usersUrl = "https://band-mate-app.herokuapp.com/users"

const createUserUrl = "https://band-mate-app.herokuapp.com/createUser"

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