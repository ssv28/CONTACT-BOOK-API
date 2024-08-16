let express = require('express');
let router = express.Router();
let Admin = require('../model/admin');
const bcrypt = require('bcrypt');


/* GET home page. */
router.get('/', function (req, res, next) {
  res.render('admin', { title: 'Express' });
});


//SIGN UP
router.post('/signup', async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)
    let userCreate = await Admin.create(req.body)


    res.status(200).json({
      status: "Success",
      message: "Admin Create SuccessFully!",
      data: userCreate

    })
  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

});


//LOG IN
router.post('/login', async function (req, res, next) {
  try {

    let userFind = await Admin.findOne({ email: req.body.email })
    if (!userFind) throw new Error("User Not Found!")
    let passwordCompare = await bcrypt.compare(req.body.password, userFind.password)
    if (!passwordCompare) throw new Error("Password Invalid!")


    res.status(200).json({
      status: "Success",
      message: "Admin Login SuccessFully!",
      data: userFind

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

});


//ALL DATA FIND
router.get('/find', async function (req, res, next) {
  try {

    let userFind = await Admin.find()

    res.status(200).json({
      status: "Success",
      message: "Admin Found SuccessFully!",
      data: userFind

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }

});


//FIND ONE
router.get('/findid/:id', async function (req, res, next) {
  try {

    let userFind = await Admin.findById(req.params.id)

    res.status(200).json({
      status: "Success",
      message: "Admin Find SuccessFully!",
      data: userFind

    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }
});


//DELETE DATA
router.delete('/delete/:id', async function (req, res, next) {
  try {

    await Admin.findByIdAndDelete(req.params.id)

    res.status(200).json({
      status: "Success",
      message: "Admin Delete SuccessFully!",
    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }
});


//UPDATE DATA
router.patch('/update/:id', async function (req, res, next) {
  try {

    req.body.password = await bcrypt.hash(req.body.password, 10)
    let userUpdate = await Admin.findByIdAndUpdate(req.params.id, req.body, { new: true })

    res.status(200).json({
      status: "Success",
      message: "Admin Update SuccessFully!",
      data: userUpdate
    })

  } catch (error) {
    res.status(400).json({
      status: "Fail",
      message: error.message
    })
  }
});



module.exports = router;
