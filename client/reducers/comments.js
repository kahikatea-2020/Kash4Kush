import { REC_COMMENT } from '../actions/index'

const initialCommentsState = []

const commentsReducer = (oldState = initialCommentsState, action) => {
  switch (action.type) {
    case REC_COMMENT:
      return action.comments

    default:
      return oldState
  }
}

export default commentsReducer
