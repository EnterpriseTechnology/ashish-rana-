var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://<c0748367@mylambton.ca>:<Ash@2000>@cluster0-uh4yn.gcp.mongodb.net/test?retryWrites=true&w=majority";

MongoClient.connect(url ,{useUnifiedTopology : true}, function (err ,db) {
    var dbs = db.db("cestardatabase");

    // using cursors variable for find function
var cursor1 = dbs.collection("students").find();
//for every collections
cursor1.each(function (err,doc){
if (err) throw err;
//result will be shown in doc
console.log(doc);
});
//same for other collection

var cursor2 = dbs.collection("instructor").find();
cursor2.each(function (err,doc){
if (err) throw err;
console.log(doc);
});
var cursor3 = dbs.collection("schedule").find();
cursor3.each(function (err,doc){
if (err) throw err;
console.log(doc);
});
var cursor4 = dbs.collection("courses").find();
cursor4.each(function (err,doc){
if (err) throw err;
console.log(doc);
});





db.close();

});