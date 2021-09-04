import { handleResponse, handleError, getHeaders  } from "./apiUtils";

const url = "https://band-mate-app.herokuapp.com"
const local = "localhost:3001"

export function addReply(reply) {
  return fetch(`${url}/replies`, {
    method: "POST",
    headers: getHeaders(),
    body: JSON.stringify(reply)
  })
  .then(handleResponse)
  .catch(handleError)
}