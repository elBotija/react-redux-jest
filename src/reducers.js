const initialState = {
  cart: [], products:[] 
}


export const products = (state=initialState.products, action) => {

  if(action.type === "REPLACE_PRODUCTS") {
    return action.products
  }

  return state
}

export const cart = (state=initialState.cart, action) => {

  if(action.type === "ADD_TO_CART") {
    return state.concat(action.product)
  }

  if(action.type === "REMOVE_FROM_CART") {
    return state.filter(p => p.id !== action.product.id)
  }

  return state
}