import { handleResponse, handleError  } from "./apiUtils";

const postsUrl = "https://band-mate-app.herokuapp.com/posts"

export function getPosts() {
  return fetch(postsUrl)
    .then(handleResponse)
    .catch(handleError);
}

export function createPost(post) {
  return fetch(postsUrl, {
    method: "POST",
    headers: { "content-type": "application/json" },
    body: JSON.stringify(post)
  })
  .then(handleResponse)
  .catch(handleError)
}