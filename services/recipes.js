import { URL_BASE } from './config'

function createRecipe(token, objectRecipes) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'POST',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`

    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function recipeRequest(token) {
  const URL = `${URL_BASE}recipes`
  const options = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`

    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}
function recipeRequestByID(id, token) {
  const URL = `${URL_BASE}recipes/${id}`
  const options = {
    method: 'GET',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`

    },
    mode: 'cors'
  }
  return fetch(URL, options)
}

function recipeUpdate(id, objectRecipes, token) {
  const URL = `${URL_BASE}recipes/${id}`
  const options = {
    method: 'PATCH',
    body: JSON.stringify(objectRecipes),
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

function deleteRecipe(id, token) {
  const URL = `${URL_BASE}recipes/${id}`
  const options = {
    method: 'DELETE',
    headers: {
      'content-Type': 'application/json',
      Authorization: `Bearer ${token}`
    },
    mode: 'cors'
  }
  return window.fetch(URL, options)
}

export {
  createRecipe,
  recipeRequest,
  recipeUpdate,
  deleteRecipe,
  recipeRequestByID
}
