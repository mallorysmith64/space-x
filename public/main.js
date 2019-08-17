//make space-x background image

const makeUrl = spaceX => {
  const API_URL =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

  fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => {
      // save for img fetch
      return response.json()
    })
    .then(launchInfo => {
      console.log(launchInfo)
      const parent = document.querySelector('ul')
      parent.textContent = ' '
      launchInfo.forEach(launch => {
        let launchDetails = document.createElement('li')
        launchDetails.textContent = launch.details
        parent.appendChild(launchDetails)
        let launchDate = document.createElement('li')
        launchDate.textContent = launch.launch_site
        parent.appendChild(launchDate)
      })
    })
}
const main = () => {
  makeUrl()
}

document.addEventListener('DOMContentLoaded', main)
