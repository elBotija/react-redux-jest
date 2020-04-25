import { createStore, applyMiddleware, combineReducers } from 'redux'
import thunk from 'redux-thunk'

const initialState = {
  cart: [], products:[] 
}


const products = (state=initialState.products, action) => {

  if(action.type === "REPLACE_PRODUCTS") {
    return action.products
  }

  return state
}

const cart = (state=initialState.cart, action) => {

  if(action.type === "ADD_TO_CART") {
    return state.concat(action.product)
  }

  if(action.type === "REMOVE_FROM_CART") {
    return state.filter(p => p.id !== action.product.id)
  }

  return state
}

const logger = store => next => action => {
  let result = next(action)
  return result
}

export default createStore(combineReducers({cart, products}), applyMiddleware(logger, thunk))