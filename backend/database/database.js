const MongoClient = require('mongodb').MongoClient;
const url = 'mongodb+srv://skmaurya:skmaurya@cluster0.hqmrxhw.mongodb.net/?retryWrites=true&w=majority';
client = new MongoClient(url,{useUnifiedTopology:true});
dbName = 'commet';
console.log('The db file is running');
module.exports = {
    client,
    dbName
}