
//this is just write weather in console

let request = require('request');
const argv = require('yargs').argv;


let apiKey = '8265600676b7cb69fb2988259e765079';
let city = argv.c || 'bielefeld';
let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}`

request(url, function (err, response, body) {
  if(err){
    console.log('error:', error);
  } 
  else {
    //console.log('body:', body);
    let weather = JSON.parse(body);
    let message = `It's ${weather.main.temp} degrees in celsius
               ${weather.name}!`;
console.log(message);
  }
})