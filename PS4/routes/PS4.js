var express = require("express");
var redis = require("redis");
var fetch = require("node-fetch");
require("dotenv").config();
var router = express.Router();
const redisClient = redis.createClient(6379);

const API_KEY = process.env.API_KEY;
const API_ENDPOINT = process.env.API_ENDPOINT;

async function getWeather(req, res, next) {
  try {
    console.log("Querying Weather API");
    const cityName = req.body.inputCity;
    const response = await fetch(
      `${API_ENDPOINT}?q=${cityName}&appid=${API_KEY}`
    );
    const data = await response.json();
    const temp = data.main.temp;

    redisClient.set(cityName, temp, "EX", 15);
    res.status(200);
    res.send({ temp: kToF(parseFloat(temp)), cached: "false" });
  } catch (err) {
    console.error(err);
    res.status(500);
  }
}
function cache(req, res, next) {
  const cityName = req.body.inputCity;

  redisClient.get(cityName, (err, data) => {
    if (err) throw err;
    if (data !== null) {
      res.send({ temp: kToF(parseFloat(data)), cached: "true" });
    } else {
      next();
    }
  });
}

function kToF(kelvin){
  return (kelvin * 1.8 -459.67).toFixed(1);
}
/* render temperature page for a city or display error */
router.post("/", cache, getWeather);

module.exports = router;
