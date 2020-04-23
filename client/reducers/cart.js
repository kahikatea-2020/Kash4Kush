import { ADD_TO_CART, REMOVE_FROM_CART, UPDATE_QUANTITY } from '../actions/index'

const initialCartState = []

const cartReducer = (oldState = initialCartState, action) => {
  switch (action.type) {
    case ADD_TO_CART:
      return [...oldState, { id: action.id, name: action.name, quantity: 1 }]
    case REMOVE_FROM_CART:
      return oldState.filter(weed => weed.id !== action.id)
    case UPDATE_QUANTITY:
      return oldState.map(weed => {
        if (weed.id === action.id) {
          weed.quantity = action.quantity
        }
        return weed
      })

    default:
      return oldState
  }
}

export default cartReducer
