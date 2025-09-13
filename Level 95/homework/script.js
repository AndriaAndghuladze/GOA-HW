//1
console.log("ლომიიიიი")

const API_KEY = "your_api_key_here"
const cityName = "lomi"
const API = `https://api.openweathermap.org/data/2.5/weather?q=${cityName}&appid=${API_KEY}`

const myWeatherAsyncFunc = async () => {
  try {
    const response = await fetch(API)
    const data = await response.json()
    console.log("ქალაქი: " + data.name)
    console.log("ტემპერატურა: " + (data.main.temp - 273.15).toFixed(1) + " °C")
  } catch (error) {
    console.log("შეცდომა: " + error)
  } finally {
    console.log("დავამთავრე დათოვ")
  }
}

myWeatherAsyncFunc()


//2
const form = document.getElementById('nameForm')
    const input = document.getElementById('nameInput')

    form.addEventListener('submit', (e) => {
      e.preventDefault()
      console.log(input.value)
    })