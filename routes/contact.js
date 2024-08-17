let express = require('express');
let router = express.Router();

let ContactController = require("../Controller/Contact")

/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Contact' });
});

//CREATE DATA
router.post('/create', ContactController.ContactCreate);


//ALL DATA FIND
router.get('/find', ContactController.FindData);


// //FIND ONE
router.get('/findid/:id', ContactController.FindId);


//DELETE DATA
router.delete('/delete/:id', ContactController.ContactDelete);


//UPDATE DATA
router.patch('/update/:id', ContactController.ContactUpdate);


module.exports = router;