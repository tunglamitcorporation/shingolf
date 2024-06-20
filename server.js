require('dotenv').config();
const express = require('express');
const mongoose = require('mongoose');
module.exports = exports = mongoose;
const fs = require('fs');
const cheerio = require('cheerio');
const route = require('./router/index')

const cors = require('cors');
const cookieParser = require('cookie-parser');
const fileUpload = require('express-fileupload');
const path = require('path');
//var cron = require('node-cron');
const app = express();
//const axios = require('axios');
var bodyParser = require('body-parser');

const multer = require('multer');

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({
    extended: true,
    limit: 1024 * 1024 * 20,
    parameterLimit: 50000,
    type: 'application/x-www-form-urlencoded'
})


// Cấu hình Multer để tải ảnh lên
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
        const link = req.header("Link");
   

      callback(null, `./image/${link}`);
    },
    filename: (req, file, callback) => {
     //onst guestId = req.header("");
     const name = req.header("Name");
     const fileName = `${name}.png`;
     callback(null, fileName);
    },
});


const upload = multer({
    storage: storage,
    limits: { fileSize: 1 * 1024 * 1024 }, // 1 Mb
    fileFilter: (req, file, callback) => {
        const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
        if (!(acceptableExtensions.some(extension => 
            path.extname(file.originalname).toLowerCase() === `.${extension}`)
        )) {
            return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
        }
        callback(null, true)
    }
  });

//   app.post('/upload/:id', upload.single('image'), (req, res) => {
//     if (!req.file) {
//       return res.status(400).send('Không có ảnh được tải lên.');
//     }
  
//     return res.status(200).json({ imageUrl: `/img/passport/${req.file.filename}` });
//   });
  
  app.post('/upload/:link1/:link2/:name', upload.single('image'), (req, res) => {
    console.log("req.params",  req.params)
    const { link1, link2, name } = req.params;
    try {
      if (!req.file) {
        return res.status(400).send('Không có ảnh được tải lên.');
      }
    
      return res.status(200).json({ imageUrl: `/image/${link1}/${link2}/${name}.png` });
    } catch (error) {
      console.log("error upload passport", error.message)
      return res.status(500).json({ msg: error.message });
    }
  });

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

// use cors check yen rate
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
    if(req.url === '/hotel-hn/'){
        title = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://azumayavietnam/hotel-hn/'
        next = 'http://azumayavietnam/hotel-hn'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Hanoi"
        ogTitle = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://azumayavietnam/hotel-hn/'
        ogImage = 'https://azumayavietnam.com/image/areaimage/hanoi1.png'
        xCard = "summary"
        xTitle = 'Hotel HN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Ha noi Branch of Azumaya Hotel Vietnam. We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'

    }else if(req.url === '/hotel-hcm/'){
        title = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://azumayavietnam/hotel-hcm/',
        next = 'http://azumayavietnam/hotel-hcm/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Ho Chi Minh"
        ogTitle = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://azumayavietnam/hotel-hcm/'
        ogImage = 'https://azumayavietnam.com/image/areaimage/hochiminh1.png'
        xCard = "summary"
        xTitle = 'Hotel HCM - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
    }
    else if(req.url === '/hotel-dn/'){
        title = 'Hotel DN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Ho Chi Minh Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://azumayavietnam/hotel-dn/',
        next = 'http://azumayavietnam/hotel-dn/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Da Nang"
        ogTitle = 'Hotel DN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Da Nang Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://azumayavietnam/hotel-dn/'
        ogImage = 'https://azumayavietnam.com/image/areaimage/danang1.png'
        xCard = "summary"
        xTitle = 'Hotel DN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Da Nang Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
    }
    else if(req.url === '/hotel-hp/'){
        title = 'Hotel HP - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Information on the Hai Phong Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        canonical = 'http://azumayavietnam/hotel-hp/',
        next = 'http://azumayavietnam/hotel-hp/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel 東屋 Hai Phong"
        ogTitle = 'Hotel HP - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Information on the Hai Phong Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
        ogUrl = 'http://azumayavietnam/hotel-hp/'
        ogImage = 'https://azumayavietnam.com/image/areaimage/haiphong1.png'
        xCard = "summary"
        xTitle = 'Hotel HP - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Information on the Hai Phong Branch of Azumaya Hotel Vietnam.We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No tips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease.'
    }
    else if(req.url === '/hai-ba-trung-detail/room/'){
        title = 'Hai Ba Trung Detail - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town of Hai Ba Trung area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/hai-ba-trung-detail/room/',
        next = 'http://azumayavietnam/hai-ba-trung-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Hotel Hai Ba Trung 東屋 Ha Noi"
        ogTitle = 'Hai Ba Trung Detail - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town of Hai Ba Trung area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/hai-ba-trung-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/hbt1os.jpg'
        xCard = "summary"
        xTitle = 'Hai Ba Trung Detail - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town of Hai Ba Trung area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/kim-ma-2-detail/room/'){
        title = 'Kim Ma 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town of Hai Ba Trung area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/kim-ma-2-detail/room/',
        next = 'http://azumayavietnam/kim-ma-2-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Kim Ma 2 東屋 Ha Noi"
        ogTitle = 'Kim Ma 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town of Hai Ba Trung area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/kim-ma-2-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/kmos.jpg'
        xCard = "summary"
        xTitle = 'Kim Ma 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/kim-ma-3-detail/room/'){
        title = 'Kim Ma 3 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/kim-ma-3-detail/room/',
        next = 'http://azumayavietnam/kim-ma-3-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Kim Ma 3 東屋 Ha Noi"
        ogTitle = 'Kim Ma 3 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/kim-ma-3-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/km3os.jpg'
        xCard = "summary"
        xTitle = 'Kim Ma 3 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/linh-lang-detail/room/'){
        title = 'Linh Lang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/linh-lang-detail/room/',
        next = 'http://azumayavietnam/linh-lang-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Kim Ma 2 東屋 Ha Noi"
        ogTitle = 'Linh Lang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/linh-lang-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/llos.png'
        xCard = "summary"
        xTitle = 'Linh Lang - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town Ba Dinh area and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/le-thanh-ton-detail/room/'){
        title = 'Le Thanh Ton - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/le-thanh-ton-detail/room/',
        next = 'http://azumayavietnam/le-thanh-ton-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Le Thanh Ton 東屋 Ho Chi Minh"
        ogTitle = 'Le Thanh Ton - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/le-thanh-ton-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/lttos.jpg'
        xCard = "summary"
        xTitle = 'Le Thanh Ton - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/thai-van-lung-1-detail/room/'){
        title = 'Thai Van Lung 1 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/thai-van-lung-1-detail/room/',
        next = 'http://azumayavietnam/thai-van-lung-1-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Thai Van Lung 1 東屋 Ho Chi Minh"
        ogTitle = 'Thai Van Lung 1 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/thai-van-lung-1-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/tvl1os.png'
        xCard = "summary"
        xTitle = 'Thai Van Lung 1 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/thai-van-lung-2-detail/room/'){
        title = 'Thai Van Lung 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/thai-van-lung-2-detail/room/',
        next = 'http://azumayavietnam/thai-van-lung-2-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Thai Van Lung 2 東屋 Ho Chi Minh"
        ogTitle = 'Thai Van Lung 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/thai-van-lung-2-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/tvl2os.jpg'
        xCard = "summary"
        xTitle = 'Thai Van Lung 2 - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/annex-detail/room/'){
        title = 'Azumaya Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        canonical = 'http://azumayavietnam/annex-detail/room/',
        next = 'http://azumayavietnam/annex-detail/room/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Azumaya Annex 東屋 Ho Chi Minh"
        ogTitle = 'Azumaya Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
        ogUrl = 'http://azumayavietnam/annex-detail/room/'
        ogImage = 'https://azumayavietnam.com/image/branchimage/annexos.jpg'
        xCard = "summary"
        xTitle = 'Azumaya Annex - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We are located in the Japanese town, in the center of Ho Chi Minh city and there are many Japanese restaurant, Karaoke Lounge, Bar. Since it is accessible and convenient to go anyplace, it is very popular area for many Japanese business travelers and Japanese workers.'
    }
    else if(req.url === '/news/'){
        title = 'News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Explore the world of Azumaya Hotel through the latest news and unique articles about travel, cuisine, and outstanding experiences at top destinations. Share captivating stories about lifestyle, local culture, and the amazing things awaiting you at Azumaya Hotel.'
        canonical = 'http://azumayavietnam/news/',
        next = 'http://azumayavietnam/news/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya News 東屋"
        ogTitle = 'News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Explore the world of Azumaya Hotel through the latest news and unique articles about travel, cuisine, and outstanding experiences at top destinations. Share captivating stories about lifestyle, local culture, and the amazing things awaiting you at Azumaya Hotel.'
        ogUrl = 'http://azumayavietnam/news/'
        ogImage = 'https://azumayavietnam.com/image/areaheader/oshp.jpg'
        xCard = "summary"
        xTitle = 'News - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Explore the world of Azumaya Hotel through the latest news and unique articles about travel, cuisine, and outstanding experiences at top destinations. Share captivating stories about lifestyle, local culture, and the amazing things awaiting you at Azumaya Hotel.'
    }
    else if(req.url === '/service/'){
        title = 'Service - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'It is a detailed page of the services offered by Azumaya Including breakfast, massage and open-air bath'
        canonical = 'http://azumayavietnam/service/',
        next = 'http://azumayavietnam/service/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Service 東屋"
        ogTitle = 'Service - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'It is a detailed page of the services offered by Azumaya Including breakfast, massage and open-air bath'
        ogUrl = 'http://azumayavietnam/service/'
        ogImage = 'https://azumayavietnam.com/image/service/rtbr-ja.jpg'
        xCard = "summary"
        xTitle = 'Service - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'It is a detailed page of the services offered by Azumaya Including breakfast, massage and open-air bath'
    }
    else if(req.url === '/feature/'){
        title = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya.'
        canonical = 'http://azumayavietnam/feature/',
        next = 'http://azumayavietnam/feature/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Feature 東屋"
        ogTitle = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya.'
        ogUrl = 'http://azumayavietnam/feature/'
        ogImage = 'https://azumayavietnam.com/image/feature/m3weovuhk4pgmsh2xgud.jpg'
        xCard = "summary"
        xTitle = 'Feature - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'We offer Japanese hospitality at prices starting from $35 per night, which is cheaper than the market price. No chips required, the reception desk can speak Japanese, the payment currency can be yen/dollar, and the shape of the outlet is the same as Japan, so people who come from Vietnam to a foreign country, Vietnam, can feel at ease. We would like to introduce you to the greatest charm of Azumaya.'
    }
    else if(req.url === '/reservation/'){
        title = 'Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'The Azumaya Hotel welcomes business travelers with comfortable accommodations and modern amenities tailored to their needs. Enjoy a relaxing stay with our spacious rooms, complimentary Wi-Fi, and convenient location near major business districts. Book your reservation today for a seamless travel experience.'
        canonical = 'http://azumayavietnam/reservation/',
        next = 'http://azumayavietnam/reservation/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Reservation 東屋"
        ogTitle = 'Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'The Azumaya Hotel welcomes business travelers with comfortable accommodations and modern amenities tailored to their needs. Enjoy a relaxing stay with our spacious rooms, complimentary Wi-Fi, and convenient location near major business districts. Book your reservation today for a seamless travel experience.'
        ogUrl = 'http://azumayavietnam/reservation/'
        ogImage = 'https://azumayavietnam.com/image/reservation/rsvt-bg.jpg'
        xCard = "summary"
        xTitle = 'Reservation - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'The Azumaya Hotel welcomes business travelers with comfortable accommodations and modern amenities tailored to their needs. Enjoy a relaxing stay with our spacious rooms, complimentary Wi-Fi, and convenient location near major business districts. Book your reservation today for a seamless travel experience.'
    }
    else if(req.url === '/contract/'){
        title = 'Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.'
        canonical = 'http://azumayavietnam/contract/',
        next = 'http://azumayavietnam/contract/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Contract 東屋"
        ogTitle = 'Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.'
        ogUrl = 'http://azumayavietnam/contract/'
        ogImage = 'https://azumayavietnam.com/image/reservation/bg-contract.jpg'
        xCard = "summary"
        xTitle = 'Contract - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Azumaya Hotel accepts a corporate contract for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.'
    }
    else if(req.url === '/q&a/'){
        title = 'Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Azumaya Hotel accepts a corporate Q&A for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.'
        canonical = 'http://azumayavietnam/q&a/',
        next = 'http://azumayavietnam/q&a/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Q&A 東屋"
        ogTitle = 'Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Azumaya Hotel accepts a corporate Q&A for staying at a special price for companies that frequently make business trips to Southeast Asia. Please consider this opportunity.'
        ogUrl = 'http://azumayavietnam/q&a/'
        ogImage = 'https://azumayavietnam.com/image/lobby/LBLTT.JPG'
        xCard = "summary"
        xTitle = 'Q&A - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'This is the hotel overview page. We will solve short questions from the FAQ section. Please feel free to contact us for any other questions.'
    }
    else if(req.url === '/breakfast/'){
        title = 'Breakfast - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = 'Start your day right with breakfast at Azumaya Hotel. Fresh, delicious, and satisfying – the perfect way to begin your stay'
        canonical = 'http://azumayavietnam/breakfast/',
        next = 'http://azumayavietnam/breakfast/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Breakfast 東屋"
        ogTitle = 'Breakfast - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Start your day right with breakfast at Azumaya Hotel. Fresh, delicious, and satisfying – the perfect way to begin your stay'
        ogUrl = 'http://azumayavietnam/breakfast/'
        ogImage = 'https://azumayavietnam.com/image/breakfast/BRFLTT.jpg'
        xCard = "summary"
        xTitle = 'Breakfast - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = 'Start your day right with breakfast at Azumaya Hotel. Fresh, delicious, and satisfying – the perfect way to begin your stay'
    }
    else if(req.url === '/rotenburo/'){
        title = 'Rotenburo - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = "Experience relaxation at Azumaya Hotel's open-air bath. Enjoy the soothing waters and scenic views for a serene getaway."
        canonical = 'http://azumayavietnam/rotenburo/',
        next = 'http://azumayavietnam/rotenburo/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Rotenburo 東屋"
        ogTitle = 'Rotenburo - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = "Experience relaxation at Azumaya Hotel's open-air bath. Enjoy the soothing waters and scenic views for a serene getaway."
        ogUrl = 'http://azumayavietnam/rotenburo/'
        ogImage = 'https://azumayavietnam.com/image/rtbt/rtbrdn3.jpg'
        xCard = "summary"
        xTitle = 'Rotenburo - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = "Experience relaxation at Azumaya Hotel's open-air bath. Enjoy the soothing waters and scenic views for a serene getaway."
    }
    else if(req.url === '/massage/'){
        title = 'Massage - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        description = "Relax with a massage at Azumaya Hotel. Our expert therapists will leave you feeling refreshed and revitalized."
        canonical = 'http://azumayavietnam/massage/',
        next = 'http://azumayavietnam/massage/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Azumaya Massage 東屋"
        ogTitle = 'Massage - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = "Relax with a massage at Azumaya Hotel. Our expert therapists will leave you feeling refreshed and revitalized."
        ogUrl = 'http://azumayavietnam/massage/'
        ogImage = 'https://azumayavietnam.com/image/massage/massage-title.png'
        xCard = "summary"
        xTitle = 'Massage - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        xDescription = "Relax with a massage at Azumaya Hotel. Our expert therapists will leave you feeling refreshed and revitalized."
    } 

const filePath = path.resolve(__dirname, "client/build", "index.html")
let htmlContent = fs.readFileSync(filePath, "utf8")

const $ = cheerio.load(htmlContent);
// Replace meta tags with new values
$('title').text(title);
$('meta[name="description"]').attr('content', description);
$('link[rel="canonical"]').attr('href', canonical);
$('link[rel="next"]').attr('href', next);
$('meta[property="og:locale"]').attr('content', ogLocale);
$('meta[property="og:site_name"]').attr('content', ogSiteName);
$('meta[property="og:type"]').attr('content', ogType);
$('meta[property="og:title"]').attr('content', ogTitle);
$('meta[property="og:description"]').attr('content', ogDescription);
$('meta[property="og:url"]').attr('content', ogUrl)
$('meta[property="og:image"]').attr('content', ogImage);
$('meta[property="og:image:alt"]').attr('content', ogTitle);
$('meta[name="twitter:card"]').attr('content', xCard);
$('meta[name="twitter:title"]').attr('content', xTitle);
$('meta[name="twitter:description"]').attr('content', xDescription);
$('meta[name="keywords"]').attr('content', keywords);

// Get modified HTML
const modifiedHtml = $.html();

// Send the modified HTML as response
res.send(modifiedHtml);
})

// note 123
const PORT = process.env.PORT || 5100;
app.listen(PORT, () => {
    console.log('Server running on port', PORT);
});










