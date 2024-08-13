let express = require('express');
let router = express.Router();
let User = require('../model/user');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('index', { title: 'User API' });
});


//SIGN UP
router.post('/user/signup', async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)
    let userCreate = await User.create(req.body)

    res.status(200).json({
      status: "Success",
      message: "User Create SuccessFully!",
      data: userCreate

    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

});



