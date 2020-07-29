import axios from 'axios'

// const loadProducts = () => {
//   return dispatch => {
//     return axios.get('http://localhost:4000/products')
//       .then(response => {
//         dispatch({
//           type: "REPLACE_PRODUCTS",
//           products: response.data
//         })
//       })
//   }
// }


const postForm = (data) => {
  return axios.get(`https://script.google.com/macros/s/AKfycbwQlUsfM6aNLmJwyOV1OYpWIe0Qwi2rzR-g42BRIFGMH9eBpbM/exec?nombre=${data.nombre}&mail=${data.mail}&telefono=${data.telefono}&consulta=${data.consulta}`)
}

const loadProducts = () => {
  return dispatch => {
    return axios.get('https://spreadsheets.google.com/feeds/list/1XmJZ0aTJIWQeHKO3nFPF2F5i_suW29Y1y07bG286Y6I/1/public/full?alt=json')
      .then(response => {
        console.log(response.data.feed.entry)
        let data = [];
        response.data.feed.entry.forEach(elem => {
          let obj = {
            id: elem.gsx$id.$t,
            name: elem.gsx$name.$t,
            description: elem.gsx$description.$t,
            price: Number(elem.gsx$price.$t),
            image: elem.gsx$image.$t,
          }
          data.push(obj)
        });
        dispatch({
          type: "REPLACE_PRODUCTS",
          products: data
        })
      })
  }
}

const addToCart = product => {
  return {
    type: "ADD_TO_CART",
    product
  }
}

const removeFromCart = product => {
  return {
    type: "REMOVE_FROM_CART",
    product
  }
}

export { addToCart, removeFromCart, loadProducts, postForm }