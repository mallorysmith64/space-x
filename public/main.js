const SPACE_X = () => {
  const input = document.querySelector('input').value
  const url = 'https://api.openweathermap.org/data/2.5/'
  const key = '2823a9a190fd597e6803d812db33835c'
  const location = `${url}weather?q=${input}&appid=${key}`
  fetch(location)
    .then(response => {
      console.log(response)
      return response.json()
    })
    .then(city => {
      console.log(city)
      document.querySelector(".").textContent = 
      document.querySelector('.').textContent = 
      document.querySelector('.').textContent = 
      document.querySelector('.').textContent = 
    })
}
//todo: add geolocation
navigator.geolocation.getCurrentPosition(function(position) {
  console.log(position.coords.latitude, position.coords.longitude)
})

document.querySelector('button').addEventListener('click', getWeather)
