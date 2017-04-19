var bucketList = []

var app = function(){
  var url = 'https://restcountries.eu//rest/v2';
  // var button = document.querySelector('button')
  
  
    makeRequest(url, requestComplete);



}

var makeRequest = function(url, callback){
  var request = new XMLHttpRequest();
  request.open("GET", url);
  request.onload = callback;
  request.send()
}

var requestComplete = function(){
  if(this.status != 200) return;
  var jsonString = this.responseText;
  var countries = JSON.parse(jsonString);
  console.log(countries)
  // random number to get 
  bucketList.push(countries[Math.floor(Math.random() * 250) + 1])
  bucketList.push(countries[Math.floor(Math.random() * 250) + 1])
  bucketList.push(countries[Math.floor(Math.random() * 250) + 1])
  bucketList.push(countries[Math.floor(Math.random() * 250) + 1])
  bucketList.push(countries[Math.floor(Math.random() * 250) + 1])
  console.log(bucketList);
}


window.onload = app;
