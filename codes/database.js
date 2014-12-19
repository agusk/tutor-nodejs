var mongo = require('mongodb').MongoClient;
var ObjectID = require('mongodb').ObjectID;
var dbUrl = "mongodb://localhost:27017/kuliahonline";


var database = module.exports = function(){
    console.log('database was instanced');
};

// get all data
database.prototype.getAll = function(callback){
    mongo.connect(dbUrl, function(err, db) {
        if(!err) {
            db.collection('students',function(err,coll){
                coll.find().toArray(function(err, items) {
                    db.close();
                    callback(null,items);
                });
            });
        }else{
            db.close();
            callback(err,null);
        }
    });
};

// save
database.prototype.save = function(student,callback){
    mongo.connect(dbUrl, function(err, db) {
        if(!err) {
            db.collection('students',function(err,coll){
                if(student._id) {
                    // update contact
                    coll.update({_id:ObjectID(student._id)},
                        {$set:{name:student.name,email:student.email,phone:student.phone}},
                        function(err,numberUpdated){
                            db.close();
                            if(numberUpdated>0){
                                callback(1);
                            }else{
                                callback(-1,err);
                            }
                        });
                }else{
                    // insert new student
                    coll.insert(student,function(err){
                        db.close();
                        if(!err){
                            callback(1);
                        }else{
                            callback(-1,err);
                        }
                    });
                }
            });
        }else{
            callback(-1,err);
        }
    });
};