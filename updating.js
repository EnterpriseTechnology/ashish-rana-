var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://<c0748367@mylambton.ca>:<Ash@2000>@cluster0-uh4yn.gcp.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology: true },function(err,db){
	if(err) throw err;
    var dbs = db.db("cestardatabase");
    // update query
    var upquery1 = {courseid : 1};
    var newquery1 = {$set : {courseid : 101}};
    var upquery2 = {teachername : "rachida"};
    var newquery3 = {$set : {major : "frontend"}};
    dbs.collections("courses").updateOne(upquery1,newquery1 ,function(err,res){
        if (err) throw err;
        if(res) console.log("1 course updated");
        dbs.collections("instructor").updateOne(upquery2,newquery3 ,function(err,res){
            if (err) throw err;
            if(res) console.log("1 teacher major updated");
        });
    });


    //delete query
    var delquery1 = {period : "night"}
    var delquery2 = {lastname : ""}
    dbs.collections("schedule").deleteone(delquery1 ,function(err,res){
        if (err) throw err;
        if (res) console.log(res);
        dbs.collections("students").deleteone(delquery2 ,function(err,res){
            if (err) throw err;
            if (res) console.log(res);
        
    
        });
    
    });

   
db.close();
    
});