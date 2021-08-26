// Init Weather Object
const weather = new Weather(33312);
weather.getWeather()
  .then(results => {
    console.log(results);
  })
  .catch(err => {
    console.log(err);
  })