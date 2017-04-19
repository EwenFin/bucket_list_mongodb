var bucketList = []
var countries;
// var express = require('express');
// var countryRouter = express.Router();
// var CountryQuery = require('../db/countryQuery')
// var countryQuery = new CountryQuery();

var app = function(){
  var url = 'https://restcountries.eu//rest/v2';
  var button = document.querySelector('button')
  
  
  makeRequest(url, requestComplete);

  button.onclick = function(){
    var country = (countries[Math.floor(Math.random() * 250) + 1])
    var jsonString = JSON.stringify(country);
    bucketList.push(country)
    console.log(bucketList)

    makePostRequest("http://localhost:3000/countries", function(){
      console.log(' frontend: post request attempted')
    }, jsonString);
  }
}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send()
}

var makePostRequest = function(url, callback, payload){
  // post XMLHTTP reauest
  var request = new XMLHttpRequest();
  request.open("POST", url);
  request.setRequestHeader("Content-Type", "application/json");
  request.onload = callback;
  request.send(payload);
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  console.log(countries)  
}


window.onload = app;
