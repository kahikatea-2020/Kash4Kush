import { REC_WEED } from '../actions/index'

const initialWeedState = []

const weedReducer = (oldState = initialWeedState, action) => {
  switch (action.type) {
    case REC_WEED:
      return [...oldState, { [action.id]: action.strain }]

    default:
      return oldState
  }
}

export default weedReducer
