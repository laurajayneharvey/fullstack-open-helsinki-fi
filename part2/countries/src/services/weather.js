import axios from 'axios'

const apiKey = import.meta.env.VITE_OPENWEATHERMAP_APIKEY
const baseUrl = `https://api.openweathermap.org/data/2.5/weather?units=metric&appid=${apiKey}`
const iconUrl = 'https://openweathermap.org/img/wn/{icon}@2x.png'

const getByCityName = (cityName, countryCode) => {
  const request = axios.get(`${baseUrl}&q=${cityName},${countryCode}`)
  return request.then(response => {
    let weather = response.data;
    weather.icon = iconUrl.replace('{icon}', weather.weather[0].icon)
    return weather
  })
}

export default { getByCityName }