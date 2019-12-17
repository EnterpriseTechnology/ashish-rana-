var express = require('express');
var app = express();
var MongoClient = require('mongodb').MongoClient;
var url = "mongodb+srv://<c0748367@mylambton.ca>:<Ash@2000>@cluster0-uh4yn.gcp.mongodb.net/test?retryWrites=true&w=majority";
var str = "";

app.route('/student').get(function(req, res)

    {
        MongoClient.connect(url, function(err, db) {
            var cursor = db.collection('students').find();
            //noinspection JSDeprecatedSymbols
            cursor.each(function(err, item) {

                if (item != null) {
                    str = str + "    student id  " + item.studentid + "</br>";
                }
            });
            res.send(str);
            db.close();
        });
    });

var server = app.listen(3000, function() {}); 
