const mongodb = require('mongodb');
const url = "mongodb://localhost:27017/AccountsDB";

MongoClient.connect(url);

module.exports = {
    mongodb
};