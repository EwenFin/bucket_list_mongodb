var bucketList = []
var countries;


var app = function(){
  
  var center = {lat: 30.953, lng: -3.2}
  var containerDiv = document.querySelector("#main-map");
  var mainMap = new MapWrapper(containerDiv, center, 2);

  var url = 'https://restcountries.eu//rest/v2';
  var dartButton = document.querySelector('#dart')
  // var deleteButton = document.querySelector("#delete")
  
  
  makeRequest(url, requestComplete);

  dartButton.onclick = function(){
    var country = (countries[Math.floor(Math.random() * 250) + 1])
    var jsonString = JSON.stringify(country);
    bucketList.push(country)
    console.log(bucketList)

    makePostRequest("http://localhost:3000/countries", function(){
    }, jsonString);
  
    console.log(country.name);
    mainMap.addMarker({lat: country.latlng[0], lng: country.latlng[1]});
    var pTag = document.createElement('p')
    var detailsElement = document.querySelector("#details")
    pTag.innerText = "Name: " + country.name + "\nCapital: " + country.capital + "\nLanguage: " +country.languages[0].name
    detailsElement.appendChild(pTag)

  
  }
}

// deleteButton.onclick = function(){

// }

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

// var makeDeleteRequest = function(url, callback){
//   var request = new XMLHttpRequest();
//   request.open("DELETE", url);
//   request.setRequestHeader("Content-Type", "application/json")
//   request.onload = callback;
//   request.send()
// }

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  countries = JSON.parse(jsonString);
  
}


window.onload = app;
