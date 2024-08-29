var express = require('express');
var router = express.Router();

let UserController = require("../Controller/User")

const multer  = require('multer')

const storage = multer.diskStorage({
  destination: function (req, file, cb) {
    cb(null, './public/images')
  },
  filename: function (req, file, cb) {
    const uniqueSuffix = Date.now() + '-' + Math.round(Math.random() * 1E9)
    cb(null, file.fieldname + '-' + uniqueSuffix + file.originalname)
  }
})

const upload = multer({ storage : storage})

/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'User' });
});


//SIGN UP
// router.post('/signup', upload.single("profileImage") ,UserController.UserSignup);         //Multer single
// router.post('/signup', upload.array("profileImage",10) ,UserController.UserSignup);       //Multer Array

router.post('/signup', upload.fields([
  { name: 'profileImage', maxCount: 1 },
  { name: 'post', maxCount: 8 }
]) ,UserController.UserSignup);          //Multer Feilds


//LOG IN
router.post('/login', UserController.UserLogin);


//ALL DATA FIND
router.get('/find', UserController.FindData);


//FIND ONE
router.get('/findid/:id', UserController.FindId);


//DELETE DATA
router.delete('/delete/:id', UserController.UserDelete);


//UPDATE DATA
router.patch('/update/:id', UserController.UserUpdate);


module.exports = router;
