import { getWeed, getComments, addComment } from '../api'
export const ADD_TO_CART = 'ADD_TO_CART'
export const REMOVE_FROM_CART = 'REMOVE_FROM_CART'
export const UPDATE_QUANTITY = 'UPDATE_QUANTITY'
export const REQ_WEED = 'REQ_WEED'
export const REC_WEED = 'REC_WEED'
export const REQ_COMMENT = 'REQ_COMMENT'
export const REC_COMMENT = 'REC_COMMENT'

export const addToCart = (id, name) => {
  return {
    type: ADD_TO_CART,
    id,
    name
  }
}

export const removeFromCart = (id, name) => {
  return {
    type: REMOVE_FROM_CART,
    id,
    name
  }
}

export const updateQuantity = (id, quantity) => {
  return {
    type: UPDATE_QUANTITY,
    id,
    quantity
  }
}

export function getCommentsToState (id) {
  return (dispatch) => dispatch(getComments(id))
}

export function getWeedToState (id) {
  return (dispatch) => dispatch(getWeed(id))
}

export function addCommentToState (id, comment) {
  return (dispatch) => dispatch(addComment(id, comment))
}
