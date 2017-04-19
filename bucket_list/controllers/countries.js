var express = require('express');
var countryRouter = express.Router();
var CountryQuery = require('../db/countryQuery')
var countryQuery = new CountryQuery();

countryRouter.post('/', function(req, res){
  console.log(req.body)
  var newCountry = req.body
  console.log(newCountry)
  

  countryQuery.add(newCountry, function(results){
    res.json(results)
    console.log(results)
  })
});


module.exports = countryRouter;
