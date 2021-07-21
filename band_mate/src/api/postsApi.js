import { handleResponse, handleError  } from "./apiUtils";

const postsUrl = "https://band-mate-app.herokuapp.com/posts"

export function getPosts() {
  return fetch(postsUrl)
    .then(handleResponse)
    .catch(handleError);
}
