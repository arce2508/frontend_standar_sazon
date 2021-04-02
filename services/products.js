import { URL_BASE } from './config'

// Traer Productos
function productRequest () {
  const URL = `${URL_BASE}products`
  const options = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json'

    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export {
  productRequest
}
