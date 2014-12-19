var database = require('./database');
var db = new database();

// insert data
db.save({
    name:"student1",
    email: "student1@email.com",
    phone: "0818383838"
},function(ret){
    console.log(ret);

});

// gett all data
db.getAll(function(err,docs){
    if(err)
        console.log(docs);
    else
        console.log(docs);
});