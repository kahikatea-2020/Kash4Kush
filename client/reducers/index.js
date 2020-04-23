import { combineReducers } from 'redux'

import cart from './cart'
import waiting from './waiting'
import comments from './comments'

export default combineReducers({
  cart,
  waiting,
  comments
})
