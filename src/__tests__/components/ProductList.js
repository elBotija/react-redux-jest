import React from 'react'
import { render, mount, configure } from 'enzyme'
import ConectedProductList from '../../components/ProductList'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

import configureStore from 'redux-mock-store';
const mockStore = configureStore()

it('Renders no products when store is empty',()=>{
  const store = mockStore({products: []})
  const wrapper = render(<ConectedProductList store={store}/>)
  expect(wrapper.find('.thumbnail').length).toBe(0)
})

it('Renders products',()=>{
  const store = mockStore({
    products: [{ "id": 1, "name": "Hipster Ultimate", "price": 299, "image": "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" }]
  })
  const wrapper = render(<ConectedProductList store={store}/>)
  expect(wrapper.find('.thumbnail').length).toBe(1)
})

it('adds a product to the shopping cart',()=>{
  const store = mockStore({
    products: [{ "id": 1, "name": "Hipster Ultimate", "price": 299, "image": "https://s3.amazonaws.com/makeitreal/projects/e-commerce/camiseta-1.jpg" }]
  })
  const wrapper = mount(<ConectedProductList store={store}/>)
  wrapper.find('#product-1 button').simulate('click')

  const actions = store.getActions()
  expect(actions.length).toBe(1)
  expect(actions[0].type).toBe("ADD_TO_CART")
  expect(actions[0].product).not.toBeNull()
})