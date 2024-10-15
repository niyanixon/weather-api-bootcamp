
document.querySelector('button').addEventListener('click', getWeather)

function getWeather(){
    const cityInput = document.querySelector('#city').value
    const countryInput = document.querySelector('#country').value
    const url = `https://api.openweathermap.org/data/2.5/weather?q=${cityInput},${countryInput}&appid=0acb61f74c6d3b1538a5f50d7ff1fb2f&units=imperial`

    fetch(url)
      .then(response => response.json())
      .then(data => {
         console.log(data)
        console.log(data.main.temp)

        document.querySelector('.temperature').innerText = `The weather is ${data.main.temp}°F in ${cityInput}`
      })
      .catch(error => {
        console.log(`error ${error}`)
      });

}
