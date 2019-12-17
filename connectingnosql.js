var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://<c0748367@mylambton.ca>:<Ash@2000>@cluster0-uh4yn.gcp.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url ,{useUnifiedTopology : true}, function (err ,db) {
console.log("connected");
db.close();
}); 
