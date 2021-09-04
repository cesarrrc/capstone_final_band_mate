import * as Actiontypes from './actionTypes'
import * as replyApi from '../../api/replyApi'

export function createReply(reply) {
  return function (dispatch) {
    return replyApi
      .addReply(reply)
      .then((newReply) => dispatch(createReplySuccess(newReply)))
      .catch((error) => console.log(error))
  }
}

export function createReplySuccess(reply) {
  return {
    type: Actiontypes.CREATE_REPLY,
    reply
  }
}