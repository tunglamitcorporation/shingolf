require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
module.exports = exports = mongoose;
const fs = require('fs');
const cheerio = require('cheerio');

const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
//var cron = require('node-cron');
const app = express();
//const axios = require('axios');
const route = require('./router/index')
var bodyParser = require('body-parser');
const { head } = require('./router/contentRouter');
const { log } = require('console');

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

const URI = process.env.MONGODB_URL
mongoose.connect(URI, {
    useCreateIndex: true,
    useFindAndModify: false,
    useNewUrlParser: true,
    useUnifiedTopology: true
}, err => {
    if(err) throw err;
    console.log("Connected to mongodb...")
})


app.use(express.static(path.join(__dirname,"./client/build")))

// app.get('*', function (req, res) {
//     res.sendFile(path.join(__dirname, "/client/build","index.html"));
// });
app.get('*', function(req, res) {
    const ogSiteName = "東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル - Azumaya,ハノイとダナン、ホーチミンにあるこだわりの和朝食と露天風呂、ビジネスパーソン向けホテルの東屋ベトナムホテル"
    const ogLocale = "en_US"
    let 
    title, 
    description, 
    canonical, 
    next,
    ogTitle, 
    ogType, 
    ogDescription, 
    ogUrl,      
    ogImage, 
    xCard, 
    xTitle, 
    xDescription,
    keywords
    if(req.url === '/hotel-hn'){
        title = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://tunglam.site/hotel-hn/'
        next = 'http://tunglam.site/hotel-hn'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Hanoi"
        ogTitle = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://tunglam.site/hotel-hn/'
        ogImage = 'https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735800/AzumayaWeb/hanoi1_yrqgvy.png'
        xCard = "summary"
        xTitle = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'

    }else if(req.url === '/hotel-hcm'){
        title = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://tunglam.site/hotel-hcm/',
        next = 'http://tunglam.site/hotel-hcm'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Ho Chi Minh"
        ogTitle = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://tunglam.site/hotel-hcm/'
        ogImage = 'https://res.cloudinary.com/dtdfsaaei/image/upload/v1710735800/AzumayaWeb/hanoi1_yrqgvy.png'
        xCard = "summary"
        xTitle = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
    }

const filePath = path.resolve(__dirname, "client/build", "index.html")
let htmlContent = fs.readFileSync(filePath, "utf8")

const $ = cheerio.load(htmlContent);
// Replace meta tags with new values
$('title').text(title);
$('meta[name="description"]').attr('content', description);
$('link[rel="canonical"]').attr('href', canonical);
$('meta[property="og:locale"]').attr('content', ogLocale);
$('meta[property="og:site_name"]').attr('content', ogSiteName);
$('meta[property="og:type"]').attr('content', ogType);
$('meta[property="og:description"]').attr('content', ogDescription);
$('meta[property="og:url"]').attr('content', ogUrl);
$('meta[property="og:image"]').attr('content', ogImage);
$('meta[name="twitter:card"]').attr('content', xCard);
$('meta[name="twitter:title"]').attr('content', xTitle);
$('meta[name="twitter:description"]').attr('content', xDescription);
$('meta[name="keywords"]').attr('content', keywords);

// Get modified HTML
const modifiedHtml = $.html();

// Send the modified HTML as response
res.send(modifiedHtml);
})
// htmlContent = htmlContent.replace(/<link\s+rel="canonical".*\/>/, "")
// htmlContent = htmlContent.replace(
//     /<head>/,
//     `<head><link rel="canonical" href="${canonical}" data-rh ="true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<title>.*<\/title>/,
//     `<title>${title}</title>`
// )
// htmlContent = htmlContent.replace(
//     /<meta name="description".*\/>/,
//     `<meta name="description" content="${description}" data-rh = "true" data-react-helmet = "true" />` 
// )
// htmlContent = htmlContent.replace(
//     /<meta name="keywords".*\/>/,
//     `<meta name="keywords" content="${keywords}" data-rh = "true" data-react-helmet = "true" />` 
// )
// htmlContent = htmlContent.replace(
//     /<meta property="og:locale".*\/>/,
//     `<meta property="og:locale" content="${ogLocale}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta property="og:site_name".*\/>/,
//     `<meta property="og:site_name" content="${description}" data-rh="true" data-react-helmet="true" />`
// ) 
// console.log(htmlContent)
// htmlContent = htmlContent.replace(
//     /<meta property="og:type".*\/>/,
//     `<meta property="og:type" content="${ogType}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta property="og:title".*\/>/,
//     `<meta property="og:title" content="${ogTitle}" data-rh = "true" data-react-helmet = "true" />`
// )   
// htmlContent = htmlContent.replace(
//     /<meta property="og:description".*\/>/,
//     `<meta property="og:description" content="${ogDescription}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta property="og:url".*\/>/,
//     `<meta property="og:url" content="${ogUrl}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta property="og:image".*\/>/,
//     `<meta property="og:image" content="${ogImage}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta name="twitter:card".*\/>/,
//     `<meta name="twitter:card" content="${xCard}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta name="twitter:title".*\/>/,
//     `<meta name="twitter:title" content="${xTitle}" data-rh = "true" data-react-helmet = "true" />`
// )
// htmlContent = htmlContent.replace(
//     /<meta name="twitter:description".*\/>/,
//     `<meta name="twitter:description" content="${xDescription}" data-rh = "true" data-react-helmet = "true" />`
// )



// res.send(htmlContent)
// })
// app.use(express.static(path.join(__dirname, '/filereport/')));


//app.use(express.static(path.join(__dirname, '/filereport/')));
// app.use("/static", express.static('./client/build/static/'));

// note 123
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});










