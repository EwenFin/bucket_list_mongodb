var bucketList = []
var countries;


var app = function(){
  
  var center = {lat: 55.953, lng: -3.2}
  var containerDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(containerDiv, center, 5);

  var url = 'https://restcountries.eu//rest/v2';
  var button = document.querySelector('button')
  
  
  makeRequest(url, requestComplete);

  button.onclick = function(){
    var country = (countries[Math.floor(Math.random() * 250) + 1])
    var jsonString = JSON.stringify(country);
    bucketList.push(country)
    console.log(bucketList)

    makePostRequest("http://localhost:3000/countries", function(){
    }, jsonString);
  
  console.log(country.name);
  mainMap.addMarker({lat: country.latlng[0], lng: country.latlng[1]});
  mainMap.center({lat: country.latlng[0], lng: country.latlng[1]})
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
  
}


window.onload = app;
