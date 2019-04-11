 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost/27017');

 var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
 });
 var Cat = mongooe.mode('Cat', catSchema);
 
 
 //adding a newcat to the DB

 //retrieve all cats from the DB and console.log each one
