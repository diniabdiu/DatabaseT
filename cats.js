 var mongoose = require('mongoose');
 mongoose.connect('mongodb://localhost:27017/cat_app');
//  mongoose.connect('mongodb://localhost/27017');

 var catSchema = new mongoose.Schema({
    name: String,
    age: Number,
    temperament: String
 });
 var Cat = mongoose.model('cats', catSchema);
//  var Cat = mongoose.model('cats', catSchema);


//  var george =  new Cat({
//      name: 'George',
//      age: 11,
//      temperament: 'Grouchy'
//  });
//  george.save(function(err, cat) {
//     if(err) {
//         console.log('SOMETHING WENT WRONG!');
//     } else {
//         console.log('WE JUST SAVED A CAT TO THE DB:');
//         console.log(cat);
//     }
//  });
// Adding a newcat to the DB
// Cat.create({
//     name: 'Snow White',
//     age: 15,
//     temperament: 'Bland'
// }, function(err, cat) {
//     if(err) {
//         console.log(err);
//     } else {
//         console.log(cat);
//     }
// });


// Retrieve all cats from the DB and console.log each one
Cat.find({}, function(err, cats) {
    if(err) {
        console.log('OH NO, ERROR!');
        console.log(err);
    } else {
        console.log('All the cats...');
        console.log(cats);
    }
});


// Async/Await example
// async function findCats() {
//     try {
//         const cats = await Cat.find({});
//         const dogs = await dogs.find({cats});
//         console.log(cats, );
//     } catch(err) {
//         console.error(err);
//     }
// }
// findCats();

// Cat.find({ _id: "5caf2aff1d56f119e89d2ef6" }).deleteOne().exec();
// Cat.find();

// Cat.find({ _id: '5caf48575ede360c208eaab5' }, function(err, cats) {
//     if(err) {
//         console.log('err');
//     }else {
//         console.log('all t cats');
//         console.log(cats)
//     }
// }).deleteOne().exec();
// Cat.find({ _id: '5caf4d5aa4ec0c2a10272afe'}, function(err, cats) {
//     if(err) {
//         console.log('errrr');
//         console.log(err);
//     } else {
//         console.log('miki updated to dini');
//         console.log(cats);
//     }
// }).update({
//     name: 'Dini',
//     age: 23,
//     temperament: 'G'
// }).exec();
// Cat.find();
// Cat.create({ 
//     name: 'Miki',
//     age: 3,
//     temperament: 'B'
// });
// Cat.find();