var express = require('express');
var router = express.Router();

let UserController = require("../Controller/User")


/* GET users listing. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'User' });
});


//SIGN UP
router.post('/signup', UserController.UserSignup);


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
