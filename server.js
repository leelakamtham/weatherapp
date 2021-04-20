const express = require('express');
const bodyParser = require('body-parser');
const request = require('request');
const app = express();

const apiKey = '8265600676b7cb69fb2988259e765079';

app.use(express.static('public'));
app.use(bodyParser.urlencoded({ extended: true }));
app.set("view engine", "ejs");



app.get("/",(req,res) =>
{
  res.render("index", { weather: null, error: null });
});

app.post('/',  (req, res) => {

 console.log(req.body.city);
    let city = req.body.city;
    let url = `http://api.openweathermap.org/data/2.5/weather?q=${city}&units=metric&appid=${apiKey}` ;
    
    request(url, function (err, response, body) {
        if(err){
          res.render('index', {weather: null, error: 'Error, please try again'});
        } 
        else {
        let weather = JSON.parse(body)
         if(weather.main == undefined){
         res.render('index', {weather: null, error: 'Error, please try again'});
         }
          else {
          let weatherText = `It's ${weather.main.temp} degrees in ${weather.name}!`;
          res.render('index', {weather: weatherText, error: null});
          }
        }
      });  
  })



app.listen(3000,()=>
{
    console.log("listing on port 3000 ");
})



//bb28ad3ec10ed817905405638fecc781    apikey
// weatherkey ---8265600676b7cb69fb2988259e765079
//link:https://codeburst.io/build-a-weather-website-in-30
//-minutes-with-node-js-express-openweather-a317f904897b