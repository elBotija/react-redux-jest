import React from 'react'
import { shallow, configure } from 'enzyme'
import { ProductList } from '../../components/ProductList'
import Adapter from 'enzyme-adapter-react-16';
configure({ adapter: new Adapter() });

it('Renders no products when store is empty',()=>{
  const wrapper = shallow(<ProductList products={[]}/>)
  expect(wrapper.find('.thumbnail').length).toBe(0)
})