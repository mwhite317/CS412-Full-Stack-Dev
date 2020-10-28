var express = require('express');
var fetch = require('node-fetch')
var router = express.Router();

function fetchWeatherInfo(cityName) {
  // string interpolation
  return fetch("http://api.openweathermap.org/data/2.5/weather?q=Dallas&appid=d98c29c61c6f4f4dcde9dbfc3fc7874e")
    .then(response => response.json())
// handle error case

}



/* GET ps3 page. */
router.get('/', function (req, res, next) {
  fetchWeatherInfo(".").then(weatherData => {
    console.log(weatherData);
    res.render('ps4', {title: 'PS4 Assignment, ', message: weatherData.main.temp});
  })
  //handle error case
});

/* POST page. */
router.post('/', function (req, res, next) {
  res.render('ps4', {message: req.body.message, size: req.body.message.length});
});
module.exports = router;
