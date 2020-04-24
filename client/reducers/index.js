import { combineReducers } from 'redux'

import cart from './cart'
import waiting from './waiting'
import comments from './comments'
import strain from './strain'

export default combineReducers({
  cart,
  waiting,
  comments,
  strain
})
