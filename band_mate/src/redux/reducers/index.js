import { combineReducers  } from "redux";

import posts from "./postReducer"
import post from "./postReducer"

import users from "./userReducer"
import user from "./userReducer"

export default combineReducers({ posts, post, users, user })