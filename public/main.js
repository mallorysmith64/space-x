//make space-x background image

const makeUrl = spaceX => {
  const API_URL =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

  fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  }).then(response => {
    console.log()
    return response.json()
  })
}

const main = () => {
  makeUrl()
}

document.addEventListener('DOMContentLoaded', main)
