import { URL_BASE, URL_BASE_LOCAL } from './config'

// login
function login (objectCredentials) {
  const URL = `${URL_BASE}auth/login`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectCredentials),
    headers: {
      'Content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

// creación de cuenta//
function create (objectUser) {
  const URL = `${URL_BASE}users`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectUser),
    headers: {
      'content-Type': 'application/json'
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

// update//
function update (id, token, objectUser) {
  const URL = `${URL_BASE}user/${id}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectUser),
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

// Solicitud de usuario//
function userRequest (token) {
  console.log('token', token)
  const URL = `${URL_BASE}users`
  const options = {
    method: 'GET',
    headers: {
      'Content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

export {
  login,
  create,
  update,
  userRequest
}
