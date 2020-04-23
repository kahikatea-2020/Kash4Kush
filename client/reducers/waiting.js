import {
  REQ_WEED,
  REC_WEED,
  REQ_COMMENT,
  REC_COMMENT
} from '../actions'

const waiting = (state = false, action) => {
  switch (action.type) {
    case REQ_WEED:
      return true

    case REC_WEED:
      return false

    case REQ_COMMENT:
      return true

    case REC_COMMENT:
      return false

    default:
      return state
  }
}

export default waiting
