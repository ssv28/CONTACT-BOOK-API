let express = require('express');
let router = express.Router();

let AdminController = require("../Controller/Admin")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Admin' });
});


//SIGN UP
router.post('/signup', AdminController.AdminSignup);


//LOG IN
router.post('/login', AdminController.AdminLogin);


//ALL DATA FIND
router.get('/find', AdminController.FindData);


//FIND ONE
router.get('/findid/:id', AdminController.FindId);


//DELETE DATA
router.delete('/delete/:id', AdminController.AdminDelete);


//UPDATE DATA
router.patch('/update/:id', AdminController.AdminUpdate);



module.exports = router;
