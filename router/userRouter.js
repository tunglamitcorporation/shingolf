const router = require('express').Router();
const userCtrl = require('../controllers/userCtrl.js');
const auth = require('../middleware/auth.js');
const authAdmin = require('../middleware/authAdmin');
const multer = require('multer');
const path = require('path');

// const storage = multer.diskStorage({
//     destination: (req, file, callback) => {
//      // const link = req.header("Link");
//       const { link1, link2, name } = req.params;

//     //  callback(null, `./image/${link}`);
//       callback(null, `./image/${link1}/${link2}`);

//     },
//     filename: (req, file, callback) => {
//     const { link1, link2, name } = req.params;
//      //onst guestId = req.header("");
//     // const name = req.header("Name");
//      const fileName = `${name}.png`;
//      callback(null, fileName);
//     },
// });

// const upload = multer({
//     storage: storage,
//     limits: { fileSize: 1 * 1024 * 1024 }, // 1 Mb
//     fileFilter: (req, file, callback) => {
//         const acceptableExtensions = ['png', 'jpg', 'jpeg', 'jpg']
//         if (!(acceptableExtensions.some(extension => 
//             path.extname(file.originalname).toLowerCase() === `.${extension}`)
//         )) {
//             return callback(new Error(`Extension not allowed, accepted extensions are ${acceptableExtensions.join(',')}`))
//         }
//         callback(null, true)
//     }
//  });

const storage = multer.diskStorage({
  destination: (req, file, cb) => {

         // const link = req.header("Link");
      const { link1, link2, name } = req.params;

    //  callback(null, `./image/${link}`);
      cb(null, `./image/${link1}/${link2}`);

    //cb(null, 'uploads/');
  },
  filename: (req, file, cb) => {
    cb(null, `${Date.now()}-${file.originalname}`);
  }
});

const upload = multer({ storage });

router.post('/register', userCtrl.register)

router.post('/login', userCtrl.login);

router.post('/update_picture/:link1/:link2/:name', upload.single('image'),  (req, res) => {
  try {
    if (!req.file) {
      return res.status(400).send('Không có ảnh được tải lên. 23');
    }
  
    return res.status(200).json({ imageUrl: `/img/passport/${req.file.filename}` });

  } catch (err) {
      console.log("err.message", err.message);
      return res.status(500).json({msg: err.message})    
  }
});
  
  //userCtrl.updatePicture);
//upload.single('image'), 

module.exports = router;
