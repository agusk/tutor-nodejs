// $ npm install sequelize
// $ npm install mysql

var Sequelize = require('sequelize');
var sequelize = new Sequelize('mydatabase', 'nodejs', 'nodejs', {
    host: "localhost",
    port: 3306,
    dialect: 'mysql'
});

////Create Item Table Structure
//var Item = sequelize.define('Item', {
//    id: Sequelize.STRING,
//    name:Sequelize.STRING,
//    description: Sequelize.STRING,
//    qty: Sequelize.INTEGER
//});
//
////Applying Item Table to database
//sequelize.sync({force:true}).complete(function (err) {
//    if(err){
//        console.log('An error occur while creating table');
//    }else{
//        console.log('Item table created successfully');
//
//        var item1 = Item.build({
//            id: 1,
//            name:'Laptop',
//            description: 'Acer 2340TL',
//            qty: 23
//        });
////Inserting Data into database
//        item1.save().complete(function (err) {
//            if (err) {
//                console.log('Error in Inserting Record');
//                console.log(err);
//            } else {
//                console.log('Data successfully inserted');
//            }
//        });
//
//    }
//});




// define model <--> table
var Student = sequelize.define('Student', {
    name: Sequelize.STRING,
    email: Sequelize.STRING,
    created: Sequelize.DATE
});

//Reading All Data
Student.findAll({}).complete(function (err,data) {
    console.log(data);
});

////Applying Item Table to database
sequelize.sync({force:false}).complete(function (err) {
    if(err){
        console.log('An error occur while creating table');
    }else{
        console.log('Item table created successfully');

        // insert 5 data
        for(var i=1;i<5;i++){
            var item = Student.build({
                name:"student" + String(i),
                email:"student" + String(i) + "@email.com",
                created: new Date()
            });

            item.save().complete(function (err) {
                if (err) {
                    console.log('Error in Inserting Record');
                    console.log(err);
                } else {
                    console.log('Data successfully inserted');
                }
            });


        }



    }
});

