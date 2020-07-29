import { addToCart, loadProducts } from '../actionCreators'
import configureStore from 'redux-mock-store'
import thunk from 'redux-thunk'

const middlewares = [thunk]
const mockStore = configureStore()

it('adds to cart', () => {
  const store = mockStore({ cart: [] })

  const product = { id: 1, name: "product 1", price: 100, image: "" }
  store.dispatch(addToCart(product))

  const actions = store.getActions()

  expect(actions.length).toBe(1)
  expect(actions[0].type).toBe("ADD_TO_CART")
  expect(actions[0].product).not.toBeNull()
  expect(actions[0].product.id).toBe(1)

})

