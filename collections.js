var MongoClient = require("mongodb").MongoClient;
var url = "mongodb+srv://<c0748367@mylambton.ca>:<Ash@2000>@cluster0-uh4yn.gcp.mongodb.net/test?retryWrites=true&w=majority";
MongoClient.connect(url,{useUnifiedTopology: true },function(err,db){
	if(err) throw err;
    var dbs = db.db("cestardatabase");
    
    // course collection done by angad (693331)
    // student collection done by janvi ben patel
    // teacher collection done by rohit sharma(710322) 
    // schedule collection done ashish rana (748367)


    var course = [
        {courseid : 1 , cousrename : 'bussiness'},
        {courseid : 2, cousrename : 'computer'},
        {courseid : 3,cousrename :'project management'},
        {courseid :4 ,cousrename : 'system analyst'} 
    ]
    var student = [
        {studentid : 1 , firstname : "ashish"  , lastname : "rana"},
        {studentid: 2 , firstname : "janvi ben" , lastname : "patel" },
        {studentid : 3 , firstname : "rohit" , lastname : "sharma"},
        {studentid : 4 , firstname : "angad" , lastname : ""}
    ]

    var teacher = [
        {teachername : "asrafi" , major : "cloud developer"},
        {teachername : "kamal", major : "backend developer"},
        {teachername : "rachida" , major : "c#"},
        {teachername : "peter" , major : "database analyst"},
        {teachername : "nadek" , major : "project management"}
    ]
     
    var timetable =
    [
        {period : "morning"},
        {period :"afternoor"},
        {period : "evening"},
        {period :"night"}
    ]


    dbs.collection("courses").insertMany(course , function(err,response){
		if (err) throw err;
	   console.log(" 4 courses enrolled into course collection")
		
    
    dbs.collection("students").insertMany(student , function(err,response){
		if (err) throw err;
	   console.log( " 4 students enrolled into student collection")
		
    
    dbs.collection("instructor").insertMany(teacher , function(err,response){
		if (err) throw err;
	   console.log( " 4 teacher enrolled into instructor collection")
		
    
    dbs.collection("schedule").insertMany(timetable , function(err,response){
		if (err) throw err;
	   console.log( " 4 period added")
		db.close();
    });
});
});
});  
});