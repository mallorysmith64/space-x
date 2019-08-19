let info = []
let currentIndex = 0
let launches = []
// let photos = []

const spaceUrl = spaceX => {
  const API_URL =
    'https://sdg-astro-api.herokuapp.com/api/SpaceX/launches/upcoming'

  fetch(API_URL, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => {
      return response.json()
    })
    .then(launchInfo => {
      console.log(launchInfo)

      launches = launchInfo.map(launch => {
        return launch
      })
      // target current index in array.
      let currentLaunch = launches[currentIndex]
      GenerateMission(currentLaunch)
    })
}

const photoUrl = nasa => {
  const PHOTO_URL = 'https://sdg-astro-api.herokuapp.com/api/Nasa/apod'
  fetch(PHOTO_URL, {
    headers: {
      'Content-Type': 'application/json; charset=utf-8'
    }
  })
    .then(response => {
      return response.json()
    })
    .then(photoResponse => {
      console.log(photoResponse.hdUrl)

      // document.querySelector('.explore-image').src = photoResponse.hdUrl
      document.querySelector('.explore-image').style.backgroundImage = `url(${
        photoResponse.hdUrl
      })`
    })
}

const GenerateMission = launch => {
  if (currentIndex > 0) {
  }
  const parent = document.querySelector('.card-background')
  document.querySelector('.mission-name').textContent = launch.mission_name //mission name

  document.querySelector('.mission-details').textContent = //mission description
    launch.details || 'No description available.'

  document.querySelector('.launch-location').textContent = //mission location
    launch.launch_site.site_name_long

  //make countdown timer
  const timer = setInterval(function() {
    //set current date
    let today = new Date()
    //set end date or launch date
    let timeLaunch = new Date(launch.launch_date_utc)
    //find time between start and end dates
    let findDate = timeLaunch.getTime() - today.getTime()
    //change to total seconds
    let timeDifference = findDate / 1e3
    //covert to days, hours, minutes,seconds
    let totalSeconds = Math.abs(timeDifference)

    if (timeDifference < 0) {
      clearInterval(timer)
      document.querySelector('.countdown').textContent = 'Launch!'
    } else {
      const time = {
        days: 0,
        hours: 0,
        minutes: 0,
        seconds: 0
      }
      // convert time seconds to be displayed on card
      time.days = Math.floor(totalSeconds / (60 * 60 * 24))
      totalSeconds = totalSeconds - time.days * 24 * 60 * 60
      time.hours = Math.floor(totalSeconds / (60 * 60))
      totalSeconds = totalSeconds - time.hours * 60 * 60
      time.minutes = Math.floor(totalSeconds / 60)
      totalSeconds = totalSeconds - time.minutes * 60
      time.seconds = Math.floor(totalSeconds)
      document.querySelector('.countdown').textContent =
        time.days +
        ' days, ' +
        time.hours +
        ' hours, ' +
        time.minutes +
        ' minutes, ' +
        time.seconds +
        ' seconds'
    }
  }, 5000)
}

// previous launch info
const previousBtn = () => {
  if (currentIndex > 0) {
    currentIndex--
    let currentLaunch = launches[currentIndex]
    GenerateMission(currentLaunch) //gets the next launch details
  }
}

const nextBtn = () => {
  currentIndex++
  let currentLaunch = launches[currentIndex]
  GenerateMission(currentLaunch) //gets the next launch details
}

const main = () => {
  spaceUrl()
  photoUrl()
}

//todo
document.querySelector('.left-arrow').addEventListener('click', previousBtn)
document.querySelector('.right-arrow').addEventListener('click', nextBtn)
document.addEventListener('DOMContentLoaded', main)
