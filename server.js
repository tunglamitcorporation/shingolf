require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
module.exports = exports = mongoose;

const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
//var cron = require('node-cron');
const app = express();
//const axios = require('axios');
const route = require('./router/index')
var bodyParser = require('body-parser');

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20,
    parameterLimit: 50000,
    type: 'application/x-www-form-urlencoded'
})

app.use(jsonParser);
app.use(urlencodedParser);

app.use(express.json());
app.use(cors());
app.use(cookieParser());
app.use(fileUpload({ useTempFiles: true }));

//Router init
route(app)

// Serve static assets in production
//if (process.env.NODE_ENV === 'production') {
// Set static folder
//  console.log("Change static folder")
//  app.use(express.static('client/build'));
//  app.get('*', (request, response) => {
//      response.sendFile(path.resolve(__dirname, 'client', 'build', 'index.html'));
//  });
//

app.get('*', function (req, res) {
    res.sendFile(__dirname + "/client/build/index.html");
});

//app.use(express.static(path.join(__dirname, '/filereport/')));
app.use("/static", express.static('./client/build/static/'));

// note 123
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});