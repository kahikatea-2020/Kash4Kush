import { REC_COMMENTS } from '../actions/index'

const initialCommentsState = []

const commentsReducer = (oldState = initialCommentsState, action) => {
  switch (action.type) {
    case REC_COMMENTS:
      return action.comments

    default:
      return oldState
  }
}

export default commentsReducer
