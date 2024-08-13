let express = require('express');
let router = express.Router();
let User = require('../model/user');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('usercrud', { title: 'Express' });
});




