var MongoClient = require('mongodb').MongoClient;
const consts = require('./consts');

const client = new MongoClient(consts.dbURI,{ useNewUrlParser: true ,useUnifiedTopology:true});
const db = client.db('defaultDB');
db.collection('users').countDocuments();

// MongoClient.connect(consts.dbURI, function(err, db) {
//   if (err) throw err;
//   var dbo = db.db("defaultDB");
//   dbo.createCollection("customers", function(err, res) {
//     if (err) throw err;
//     console.log("Collection created!");
//     db.close();
//   });
// });