var MongoClient = require('mongodb').MongoClient;

var CountryQuery = function(){
  this.url = "mongodb://localhost:27017/bucket_list";
}

CountryQuery.prototype = {
  add: function(countryToAdd, onQueryFinished){
    MongoClient.connect(this.url, function(err, db){
      if(db){
        var collection = db.collection("bucketList");
        collection.insert(countryToAdd);
        collection.find().toArray(function(err, docs){
          onQueryFinished(docs);
        })
      }
    })
  },
  
  
}

module.exports = CountryQuery