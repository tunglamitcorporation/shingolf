const mongoose = require('mongoose');
//const { MongoClient, ServerApiVersion } = require('mongodb');

require('dotenv').config();
const {
    MONGODB_URL,
    MONGODB_URL_AZ_WEB_BRANCH,
    MONGODB_URL_AZ_WEB_MEMBER,   
    MONGODB_URL_AZ_WEB_CONTENT
} = process.env;

const confirmMongoose = {
    // useCreateIndex: true,
    // useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true,
};

mongoose.connect(MONGODB_URL, confirmMongoose, err => {
    if (err) throw err
    //return console.log("Error: ", err);
    console.log("Connect to mongodb")
});

mongoose.branch = mongoose.createConnection(MONGODB_URL_AZ_WEB_BRANCH, confirmMongoose);
mongoose.member = mongoose.createConnection(MONGODB_URL_AZ_WEB_MEMBER, confirmMongoose);
mongoose.content = mongoose.createConnection(MONGODB_URL_AZ_WEB_CONTENT, confirmMongoose);

module.exports = mongoose;