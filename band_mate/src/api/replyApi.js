import { handleResponse, handleError, getHeaders  } from "./apiUtils";

const url = "https://band-mate-app.herokuapp.com"

export function addReply(reply) {
  return fetch(`${url}/replies`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(reply)
  })
  .then(handleResponse)
  .catch(handleError)
}