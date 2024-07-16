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

app.use(cors());
// app.use(bodyParser.urlencoded({ extended: true }));
// app.use(bodyParser.json());

const multer = require('multer');

var jsonParser = bodyParser.json({ limit: 1024 * 1024 * 20, type: 'application/json' });
var urlencodedParser = bodyParser.urlencoded({
    extended: false,//true,
    limit: 1024 * 1024 * 20,
    parameterLimit: 50000,
    type: 'application/x-www-form-urlencoded'
})


// Cấu hình Multer để tải ảnh lên
const storage = multer.diskStorage({
    destination: (req, file, callback) => {
      const link = req.header("Link");
      const { link1, link2, name } = req.params;

    //  callback(null, `./image/${link}`);
      callback(null, `./image/${link1}/${link2}`);

    },
    filename: (req, file, callback) => {
    const { link1, link2, name } = req.params;
     //onst guestId = req.header("");
    // const name = req.header("Name");
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
  
app.post('/upload/:link1/:link2/:name', upload.single('image'), (req, res) => {
    console.log("req.params",  req.params)
    const { link1, link2, name } = req.params;
    try {
      if (!req.file) {
        return res.status(400).send('Không có ảnh được tải lên.');
      }
    
      return res.status(200).json({ imageUrl: `/image/${link1}/${link2}/${name}` });
    } catch (error) {
      console.log("error upload passport", error.message)
      return res.status(500).json({ msg: error.message });
    }
  });

  app.post('/upload-multiple/:link1/:link2/:name', upload.array('photos', 10), (req, res, next) => {
    console.log("vo here up multi")
 //   res.send('Files uploaded successfully!');
    return res.json({ msg:"Success upload multi"})
  });

// Route để xóa ảnh
app.delete('/delete-image/:name', (req, res) => {
    const name = req.params.name;
    console.log("name")

    const filePath = path.join(__dirname, "/image/product/image/"+name+".png");
  
    fs.unlink(filePath, (err) => {
      if (err) {
        console.error('Error when delele file:', err);
        return res.json({status: 0, msg:'Error when delele file'});
      }
      res.json({ status: 1, msg:"success delete file"});
    });
  });

app.use(jsonParser);
app.use(urlencodedParser);

app.use(express.json());

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
    const ogSiteName = "Shingolf"
    const ogLocale = "vi_VN"
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
    const policiesTitle = req.params.policiesTitle;
    if(req.url === '/product-list/'){
        title = 'Shingolf | Sản phẩm'
        description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        canonical = 'http://shingolf.vn/product-list/'
        next = 'http://shingolf.vn/product-list'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Shingolf golf order"
        ogTitle = 'Shingolf | Sản phẩm'
        ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        ogUrl = 'http://shingolf.vn/product-list/'
        ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
        xCard = "summary"
        xTitle = 'Shingolf | Sản phẩm'
        xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
    }
    else if(req.url === '/rate/'){
        title = 'Shingolf | Xếp hạng sản phẩm'
        description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        canonical = 'Shingolf | Xếp hạng sản phẩm',
        next = 'Shingolf | Xếp hạng sản phẩm'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Shingolf golf order rate"
        ogTitle = 'Hotel DN - 東屋ホテルベトナム｜ハノイホーチミンダナンのビジネスホテル'
        ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        ogUrl = 'Shingolf | Xếp hạng sản phẩm'
        ogImage = 'https://shingolf.vn/image/home/sale/sale1.pn'
        xCard = "summary"
        xTitle = 'Shingolf | Xếp hạng sản phẩm'
        xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
    }
    else if(req.url === '/check-order/'){
        title = 'Shingolf || Kiểm tra đơn hàng'
        description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        canonical = 'http://shingolf/check-order/',
        next = 'http://shingolf/check-order/'
        ogLocale
        ogSiteName 
        ogType = "website"
        keywords = "Shingolf golf order rate"
        ogTitle = 'Shingolf || Kiểm tra đơn hàng'
        ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
        ogUrl = 'http://shingolf.vn/check-order/'
        ogImage = 'https://azumayavietnam.com/image/areaimage/haiphong1.png'
        xCard = "summary"
        xTitle = 'Shingolf || Kiểm tra đơn hàng'
        xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
    }
    else if(req.url === '/product-list/newgolfclub'){
      title = 'Shingolf | Sản phẩm'
      description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
      canonical = 'http://shingolf.vn/product-list/'
      next = 'http://shingolf.vn/product-list'
      ogLocale
      ogSiteName 
      ogType = "website"
      keywords = "Shingolf golf order"
      ogTitle = 'Shingolf | Sản phẩm'
      ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
      ogUrl = 'http://shingolf.vn/product-list/'
      ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
      xCard = "summary"
      xTitle = 'Shingolf | Sản phẩm'
      xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  }
  else if(req.url === '/product-list/oldgolfclub'){
    title = 'Shingolf | Sản phẩm'
    description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
    canonical = 'http://shingolf.vn/product-list/'
    next = 'http://shingolf.vn/product-list'
    ogLocale
    ogSiteName 
    ogType = "website"
    keywords = "Shingolf golf order"
    ogTitle = 'Shingolf | Sản phẩm'
    ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
    ogUrl = 'http://shingolf.vn/product-list/'
    ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
    xCard = "summary"
    xTitle = 'Shingolf | Sản phẩm'
    xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/golfset'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/accessories'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/mengolfclothes'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/womengolfclothes'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/golfbag'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/golfshoes'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
}
else if(req.url === '/product-list/golftraining'){
  title = 'Shingolf | Sản phẩm'
  description = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  canonical = 'http://shingolf.vn/product-list/'
  next = 'http://shingolf.vn/product-list'
  ogLocale
  ogSiteName 
  ogType = "website"
  keywords = "Shingolf golf order"
  ogTitle = 'Shingolf | Sản phẩm'
  ogDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
  ogUrl = 'http://shingolf.vn/product-list/'
  ogImage = 'https://shingolf.vn/image/home/sale/sale1.png'
  xCard = "summary"
  xTitle = 'Shingolf | Sản phẩm'
  xDescription = 'Shingolf là đơn vị hàng đầu trong lĩnh vực order gậy golf từ Nhật Bản về Việt Nam. Với nhiều năm kinh nghiệm và sự am hiểu sâu sắc về thị trường golf, chúng tôi cam kết mang đến cho quý khách hàng những sản phẩm gậy golf chính hãng, chất lượng cao từ các thương hiệu nổi tiếng tại Nhật Bản.'
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










