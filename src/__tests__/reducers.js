import { products, cart } from '../reducers'

describe('products', () => {
  it('returns the inital state', () => {
    expect(products(undefined, {})).toEqual([])
  })

  it('recives products', () => {
    const productList = [
      { id: 1, name: "product 1", price: 100, image: ""}
    ]
    expect(
      products([], { type: "REPLACE_PRODUCTS", products: productList })
    ).toEqual(productList)
  })

  it('recives products', () => {
    const productList = [
      { id: 1, name: "product 1", price: 100, image: ""}
    ]
    expect(
      products([], { type: "REPLACE_PRODUCT", products: productList })
    ).not.toEqual(productList)
  })
})