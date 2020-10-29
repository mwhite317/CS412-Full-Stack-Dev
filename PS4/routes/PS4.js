var express = require('express');
var fetch = require('node-fetch');
require('dotenv').config()
var router = express.Router();

const API_KEY = process.env.API_KEY;
const API_ENDPOINT = process.env.API_ENDPOINT;
function fetchWeatherJson(cityName) {
  // returns a promise
  return fetch(`${API_ENDPOINT}?q=${cityName}&appid=${API_KEY}`)
    // return value in promise clause
    .then(response => response.json())
}



/* render temperature page for a city or display error */
router.post('/', function (req, res, next) {
  const cityName = req.body.inputCity;
  if (cityName === ""){
    res.render('error',{error:{status:404, stack: "please enter a valid city name"}})
  }
  fetchWeatherJson(cityName).then(weatherData => {
    console.log(weatherData);
    res.render('ps4', {title: `The temperature in ${cityName}:`, message: `${((weatherData.main.temp*1.8)-459.67).toFixed(1)}°F`});
  }).catch(error => {
    res.render('error', {error: {status: 500, stack: error.stack}});
  })
});


module.exports = router;
