const { MongoClient, ObjectID } = require('mongodb');
const url = "mongodb://localhost:27017/";

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').insertMany([{
//         name: 'Amir'
//     }, {
//         name: 'Ali'
//     }],(err,result)=>{
//         if(err) throw err;
//         console.log(result.ops);
//     });
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').findOne({}, (err, result) => {
//         if (err) throw err;
//         console.log(result.name);
//     });
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').find({ _id: ObjectID('5a955f403628ee1074e86c66') }).toArray().then((result) => {
//         console.log(JSON.stringify(result, undefined, 2));
//     }, (err) => {
//         throw err;
//     })
//     db.close();
// });


// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').deleteOne({ _id: ObjectID('5a955f403628ee1074e86c66') }).then((result) => {
//         console.log(JSON.stringify(result, undefined, 2));
//     }, (err) => {
//         throw err;
//     })
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').deleteMany({ name: 'Ali' }).then((result) => {
//         console.log(JSON.stringify(result, undefined, 2));
//     }, (err) => {
//         throw err;
//     })
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     const dbo = db.db('Todo')
//     dbo.collection('Tasks').drop().then((result) => {
//         console.log(JSON.stringify(result, undefined, 2));
//     }, (err) => {
//         throw err;
//     })
//     db.close();
// });

// MongoClient.connect(url, (err, db) => {
//   if (err) throw err;
//   var dbo = db.db("Todo");
//   //Create a collection name "customers":
//   dbo.createCollection("customer", (err, res) => {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });

// MongoClient.connect(url,(err,db)=>{
//     if(err) throw err;
//     var dbo = db.db('Todo');
//     dbo.dropDatabase('Todo',(err, res)=>{
//         if(err){
//             throw err;
//             console.log('Unable To Drop Database');
//         }
//         console.log('Database has been dropped');
//         db.close();
//     });
// });

// MongoClient.connect(url, (err, db) => {
//     if (err) throw err;
//     let dbo = db.db('Todo');
//     dbo.collection('Tasks').update({ _id: new ObjectID('5a960a2531551d31d8784bfa') }, {
//         $set: {
//             name: 'Sadiq Ali'
//         }
//     }).then((res) => {
//         if (res.result.n == 0) {
//             console.log('No Match Found');
//         }
//         console.log(`Updated Successfully  ${res.result}`);
//     }, (err) => {
//         throw err;
//         console.log('Unable To Update The Database');
//     });
//     db.close();
// })