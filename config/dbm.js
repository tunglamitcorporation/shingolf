const mongoose = require('mongoose');
//const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const {
    MONGODB_URL,
    MONGODB_URL_PRODUCT,
    MONGODB_URL_USERS,

} = process.env;

const confirmMongoose = {
    // useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

//mongoose.set('useFindAndModify', false);

mongoose.connect(MONGODB_URL, confirmMongoose, err => {
    if (err) throw err
    //return console.log("Error: ", err);
    console.log("Connect to mongodb")
});

mongoose.product = mongoose.createConnection(MONGODB_URL_PRODUCT, confirmMongoose);

mongoose.users = mongoose.createConnection(MONGODB_URL_USERS, confirmMongoose);

module.exports = mongoose;